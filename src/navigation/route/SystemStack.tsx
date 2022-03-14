import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductScreen from '../../screens/ProductScreen/ProductScreen';
import navigationConfigs from '../config/options';

const Stack = createNativeStackNavigator();

const SystemStack = () => (
  <Stack.Navigator screenOptions={navigationConfigs}>
    <Stack.Screen name={'PRODUCT'} component={ProductScreen} />
  </Stack.Navigator>
);

export default SystemStack;
