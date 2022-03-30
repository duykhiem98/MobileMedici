/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import FogotPassword from 'screens/authen/FogotPassword';
import Login from 'screens/authen/Login';
import navigationConfigs from '../config/options';
import { AUTHENTICATE_ROUTE } from '../config/routes';
import Register from './../../screens/authen/Register';

const MainStack = createStackNavigator();

const AuthStack = () => (
    <MainStack.Navigator screenOptions={navigationConfigs}>
        <MainStack.Screen name={AUTHENTICATE_ROUTE.LOGIN} component={Login} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.REGISTER} component={Register} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.FOGOT_PASSWORD} component={FogotPassword} />
    </MainStack.Navigator>
);

export default AuthStack;
