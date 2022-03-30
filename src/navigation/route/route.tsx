/* eslint-disable prettier/prettier */
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StyledTabBar from 'navigation/component/StyledTabBar';
import { ACCOUNT_ROUTE, APP_ROUTE, TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Host } from 'react-native-portalize';
import { useAppSelector } from 'redux-store/hooksrd';
import { useInitApp } from 'utilities/initApp';
import { IC_ACCOUNT, IC_CONTRACT, IC_PRODUCT, IC_SYSTEM } from '../../assets/icons';
import navigationConfigs from '../config/options';
import AccountStack from './AccountStack';
import AuthStack from './AuthStack';
import ContractStack from './ContractStack';
import HomeStack from './HomeStack';
import ProductStack from './ProductStack';
import SystemStack from './SystemStack';

const MainTab = createBottomTabNavigator();

const MainTabContainer = () => {
    const { t } = useTranslation();
    const ArrayTabs = [
        {
            name: TAB_NAVIGATION_ROOT.CONTRACT_ROUTE.ROOT,
            title: 'Hợp đồng',
            component: ContractStack,
            icon: IC_CONTRACT,
        },
        {
            name: TAB_NAVIGATION_ROOT.PRODUCT_ROUTE.ROOT,
            title: 'Sản phẩm',
            component: ProductStack,
            icon: IC_PRODUCT,
        },
        {
            name: TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT,
            component: HomeStack,
            // icon: LOGO,
        },
        {
            name: TAB_NAVIGATION_ROOT.SYSTEM_ROUTE.ROOT,
            title: 'Hệ thống',
            component: SystemStack,
            icon: IC_SYSTEM,
        },
        {
            name: TAB_NAVIGATION_ROOT.ACCOUNT_ROUTE.ROOT,
            title: 'Tài khoản',
            component: AccountStack,
            icon: IC_ACCOUNT,
        },
    ];
    return (
        <MainTab.Navigator
            screenOptions={navigationConfigs}
            tabBar={(props: BottomTabBarProps) => <StyledTabBar {...props} />}
        >
            {ArrayTabs.map((item, index) => (
                <MainTab.Screen
                    key={`${index}`}
                    options={({ navigation }) => {
                        const { routes } = navigation.getState();
                        const { state } = routes[index];
                        if (state) {
                            if (state.index !== 0) {
                                return {
                                    title: item.title,
                                    icon: item.icon,
                                    tabBarVisible: false,
                                };
                            }
                        }
                        return {
                            title: item.title,
                            icon: item.icon,
                            tabBarVisible: true,
                        };
                    }}
                    {...item}
                />
            ))}
        </MainTab.Navigator>
    );
};
const Stack = createNativeStackNavigator();
const Route = () => (
    <Host>
        <Stack.Navigator screenOptions={navigationConfigs}>
            <Stack.Screen name={APP_ROUTE.MAIN_TAB} component={MainTabContainer} />
        </Stack.Navigator>
    </Host>
);

const Navigation: React.FunctionComponent = () => {
    const token = useAppSelector((state) => state.user.token);
    const { loading } = useInitApp();
    // useEffect(() => {
    //     const noti = notificationListener();
    //     return noti;
    // }, []);
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    } else {
        if (token) {
            return <Route />;
        }
        return <AuthStack />;
    }
};
const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Navigation;
