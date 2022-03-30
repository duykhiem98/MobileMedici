/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'utilities/i18next';
import Navigation from './src/navigation/route/Route';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/NavigationService';
import { store, persistor } from './src/redux-store/store';
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <NavigationContainer ref={navigationRef}>
                    <Navigation />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
