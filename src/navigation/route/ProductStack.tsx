import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SystemScreen from '../../screens/SystemScreen/SystemScreen';
import navigationConfigs from '../config/options';

const Stack = createNativeStackNavigator();

const ProductStack = () => (
  <Stack.Navigator screenOptions={navigationConfigs}>
    <Stack.Screen name={'SYSTEM'} component={SystemScreen} />
  </Stack.Navigator>
);

export default ProductStack;
