/* eslint-disable prettier/prettier */
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppDispatch } from 'redux-store/hooksrd';
import { userInfoActions } from 'redux-store/slices/userSlice';
import { TouchableOpacity } from 'react-native';
import { auth } from '@react-native-firebase/auth';

const AccountScreen = () => {
    const dispatch = useAppDispatch();
    const signOut = () => {
        dispatch(userInfoActions.logOut());
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={signOut}>
                <Text style={{ color: 'red' }}>helo</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default AccountScreen;
