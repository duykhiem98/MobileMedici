import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AccountScreen from '../../screens/AccountScreen/AccountScreen';
import navigationConfigs from '../config/options';

const Stack = createNativeStackNavigator();

const AccountStack = () => (
    <Stack.Navigator screenOptions={navigationConfigs}>
        <Stack.Screen name={'ACCOUNT'} component={AccountScreen} />
    </Stack.Navigator>
);

export default AccountStack;
