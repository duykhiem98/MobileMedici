import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import navigationConfigs from '../config/options';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={navigationConfigs}>
    <Stack.Screen name={'HOME'} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeStack;
