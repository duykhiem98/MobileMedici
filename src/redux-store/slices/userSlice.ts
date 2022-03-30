/* eslint-disable prettier/prettier */
import { AnyAction, CaseReducer, createSlice, PayloadAction, Action } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { CommonStatus } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
export function generatePersistConfig(key: string, whitelist: string[]) {
    return {
        key,
        whitelist,
        version: 1,
        debug: __DEV__,
        storage: AsyncStorage,
        stateReconciler: autoMergeLevel2,
    };
}
export interface IUser {
    birthday?: string;
    email?: string;
    idNumber?: string;
    name?: string;
    phone?: string;
    avatar?: string;
    gender?: any;
    issue_date?: any;
    issue_place?: any;
    address?: any;
}

interface IUserInfoState {
    token?: string;
    refreshToken?: string;
    user?: IUser;
    status: CommonStatus;
    error?: any;
}

type Reducer<A extends Action<any> = AnyAction> = CaseReducer<IUserInfoState, A>;

const initialState: IUserInfoState = {
    status: CommonStatus.IDLE,
};
const getUserInfoRequest: Reducer<PayloadAction<string>> = (state) => {
    state.status = CommonStatus.LOADING;
    console.log('sssas', state);
    delete state.error;
};
const updateAvatar: Reducer<PayloadAction<IUser>> = (state, { payload }) => {
    state.user = { ...state.user, avatar: payload.avatar };
};
const getUserInfoSuccess: Reducer<PayloadAction<IUser>> = (state, { payload }) => {
    state.status = CommonStatus.SUCCESS;
    state.user = { ...state.user, ...payload };
    console.log(state.user);
};
const getUserInfoFailed: Reducer<PayloadAction<any>> = (state, { payload }) => {
    state.status = CommonStatus.ERROR;
    state.error = payload;
};

const updateToken: Reducer<PayloadAction<Pick<IUserInfoState, 'token' | 'refreshToken'>>> = (state, { payload }) => {
    state.token = payload.token;
    console.log('sssas', state);
    state.refreshToken = payload.refreshToken;
};

const logOut: Reducer = (state) => {
    delete state.token;
    delete state.refreshToken;
    delete state.user;
    delete state.error;
    state.status = CommonStatus.IDLE;
};

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        getUserInfoRequest,
        getUserInfoSuccess,
        getUserInfoFailed,
        updateToken,
        logOut,
        updateAvatar,
    },
});

const persistConfig = generatePersistConfig('userInfo', ['token', 'refreshToken', 'user']);

export const userInfoActions = userInfoSlice.actions;
export default persistReducer<IUserInfoState>(persistConfig, userInfoSlice.reducer);
