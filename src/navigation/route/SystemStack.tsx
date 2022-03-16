import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PersonalRevenue from 'screens/SystemScreen/ PersonalRevenue';
import SystemScreen from 'screens/SystemScreen/SystemScreen';
import navigationConfigs from '../config/options';

const Stack = createNativeStackNavigator();

const SystemStack = () => (
    <Stack.Navigator screenOptions={navigationConfigs}>
        <Stack.Screen name={'SYSTEM'} component={SystemScreen} />
        <Stack.Screen name={'PERSONAL_REVENUE'} component={PersonalRevenue} />
    </Stack.Navigator>
);

export default SystemStack;
