import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { IC_HOME } from '../../assets/icons';
import { CustomTabBar, TabBarIcon } from '../component/customTabBar';
import navigationConfigs from '../config/options';
import AccountStack from './AccountStack';
import ContractStack from './ContractStack';
import HomeStack from './HomeStack';
import ProductStack from './ProductStack';
import SystemStack from './SystemStack';

const TabBarStack = createBottomTabNavigator();
const TabBarStackComponent = memo(function TabBarStackComponent() {
    return (
        <TabBarStack.Navigator
            screenOptions={navigationConfigs}
            tabBar={(props) => <CustomTabBar {...props} />}
            initialRouteName={'TRANGTRU'}
        >
            <TabBarStack.Screen
                name={'HOPDONG'}
                options={{
                    title: 'Hợp đồng',
                    tabBarIcon: ({ focused }) => <TabBarIcon isFocused={focused} icon={IC_HOME} />,
                }}
                component={ContractStack}
            />
            <TabBarStack.Screen
                name={'SANPHAM'}
                options={{
                    title: 'Sản phẩm',
                    tabBarIcon: ({ focused }) => <TabBarIcon isFocused={focused} icon={IC_HOME} />,
                }}
                component={ProductStack}
            />
            <TabBarStack.Screen name={'TRANGTRU'} component={HomeStack} />
            <TabBarStack.Screen
                name={'HETHONG'}
                options={{
                    title: 'Hệ thống',
                    tabBarIcon: ({ focused }) => <TabBarIcon isFocused={focused} icon={IC_HOME} />,
                }}
                component={SystemStack}
            />
            <TabBarStack.Screen
                name={'TAIKHOAN'}
                options={{
                    title: 'Tài khoản',
                    tabBarIcon: ({ focused }) => <TabBarIcon isFocused={focused} icon={IC_HOME} />,
                }}
                component={AccountStack}
            />
        </TabBarStack.Navigator>
    );
});

const Stack = createNativeStackNavigator();
const routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={navigationConfigs}>
                <Stack.Screen name="TabBarStackComponent" component={TabBarStackComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default routes;
