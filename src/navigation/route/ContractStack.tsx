import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ContractScreen from '../../screens/ContractScreen/ContractScreen';
import navigationConfigs from '../config/options';

const Stack = createNativeStackNavigator();

const ContractStack = () => (
    <Stack.Navigator screenOptions={navigationConfigs}>
        <Stack.Screen name={'CONTRACT'} component={ContractScreen} />
    </Stack.Navigator>
);

export default ContractStack;
