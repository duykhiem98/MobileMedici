/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    blacklist: [],
    whitelist: [],
    key: 'cva_evnfc',
    version: 1,
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export let persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
