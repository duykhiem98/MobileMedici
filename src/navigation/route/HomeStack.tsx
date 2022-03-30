import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ImageScreen from 'screens/HomeScreen/ImageScreen';
import VideoScreen from 'screens/HomeScreen/VideoScreen';
import ViScreen from 'screens/HomeScreen/ViScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import navigationConfigs from '../config/options';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator screenOptions={navigationConfigs}>
        <Stack.Screen name={'HOME'} component={HomeScreen} />
        <Stack.Screen name={'VIDE0_ROUTE'} component={VideoScreen} />
        <Stack.Screen name={'IMAGE_ROUTE'} component={ImageScreen} />
        <Stack.Screen name={'VIDE0_LIST'} component={ViScreen} />
    </Stack.Navigator>
);

export default HomeStack;
