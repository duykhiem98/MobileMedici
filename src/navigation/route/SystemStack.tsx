import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DownlineAgent from 'screens/SystemScreen/ DownlineAgent';
import PersonalRevenue from 'screens/SystemScreen/ PersonalRevenue';
import AddAgent from 'screens/SystemScreen/AddAgent';
import SystemRevenue from 'screens/SystemScreen/SystemRevenue';
import SystemScreen from 'screens/SystemScreen/SystemScreen';
import navigationConfigs from '../config/options';

const Stack = createNativeStackNavigator();

const SystemStack = () => (
    <Stack.Navigator screenOptions={navigationConfigs}>
        <Stack.Screen name={'SYSTEM'} component={SystemScreen} />
        <Stack.Screen name={'PERSONAL_REVENUE'} component={PersonalRevenue} />
        <Stack.Screen name={'SYSTEM_REVENUE'} component={SystemRevenue} />
        <Stack.Screen name={'DOWNLINE_AGENT'} component={DownlineAgent} />
        <Stack.Screen name={'ADD_AGENT'} component={AddAgent} />
    </Stack.Navigator>
);

export default SystemStack;
