import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StyledTabBar from 'navigation/component/StyledTabBar';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IC_ACCOUNT, IC_CONTRACT, IC_PRODUCT, IC_SYSTEM, LOGO } from '../../assets/icons';
import navigationConfigs from '../config/options';
import AccountStack from './AccountStack';
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
const routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={navigationConfigs}>
                <Stack.Screen name="TabBarStackComponent" component={MainTabContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default routes;
