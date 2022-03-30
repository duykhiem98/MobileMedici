/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { Baner_login, IC_FB, IC_GOOGLE } from 'assets/icons';
import { Themes } from 'assets/themes';
import StyledButton from 'components/common/StyledButton';
import StyledText from 'components/common/StyledText';
import StyledTextInput from 'components/common/StyledTextInput';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import { LoginManager, Profile } from 'react-native-fbsdk-next';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScaledSheet } from 'react-native-size-matters';
import { useAppDispatch } from 'redux-store/hooksrd';
import { userInfoActions } from '../../redux-store/slices/userSlice';
import { Bg_Image } from './../../assets/icons/index';
import { navigate } from 'navigation/NavigationService';
import { registrationValidation } from 'utilities/validates';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const { width } = Dimensions.get('window');
const AvatarSize = 164;
const LeftAvatar = (width - AvatarSize) / 2;
const HeaderBgHeight = 250;
const height = HeaderBgHeight + AvatarSize * (1 / 2);

const Login = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        reValidateMode: 'onSubmit',
        mode: 'onSubmit',
        // resolver: yupResolver(registrationValidation),r
        defaultValues: { email: 'duukhiem297@gmail.com', password: 'hanoi@123' },
    });
    const passwordRef = useRef<any>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '223296896242-hh6d8nmu53235b5mcui5cmn6tdq4hrv7.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            accountName: '', // [Android] specifies an account name on the device that should be used
            //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
            googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
        });
    });
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            dispatch(userInfoActions.updateToken({ token: userInfo?.idToken }));
        } catch (error: any) {
            console.log({ error });
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    const Fblogin = async () => {
        try {
            const response = await LoginManager.logInWithPermissions(['public_profile']);
            if (response.isCancelled) {
                console.log('1');
            } else {
                console.log(response);
                console.log('Login success with permissions: ' + response.grantedPermissions.toString());
                dispatch(userInfoActions.updateToken({ token: '23131243425435345' }));
                const currentProfile = await Profile.getCurrentProfile();
                console.log('profile', currentProfile);
                if (currentProfile) {
                    console.log(
                        'The current logged user is: ' +
                            currentProfile.name +
                            '. His profile id is: ' +
                            currentProfile.userID,
                    );
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    const navigation = useNavigation();
    const login = async (data: any) => {
        console.log('data=====', data);
        try {
            const response = await auth().signInWithEmailAndPassword(data.email, data.password);
            console.log(response);
            if (response) {
                dispatch(userInfoActions.updateToken({ token: response?.user.uid }));
            }
        } catch (e: any) {
            if (e.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            } else if (e.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            } else {
                console.log(e);
            }
        }
    };
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <View style={styles.top}>
                    <View style={styles.imageView}>
                        <Image source={Baner_login} style={styles.imageStyle} />
                    </View>
                    <View style={styles.cicleStyle}>
                        <View style={styles.avatarImageView}>
                            <Image style={styles.avatarImage} source={Bg_Image} />
                        </View>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={{ height: 50, alignItems: 'center' }}>
                        <StyledText i18nText={'title.login'} style={styles.loginStyle} />
                    </View>
                    <StyledTextInput
                        // label="label.phoneNumber"
                        name="email"
                        control={control}
                        customPlaceHolder={'placeHolder.phoneNumber'}
                        customLabel={styles.labelTextInput}
                        customStyle={styles.customStyleTextInput}
                        inputContainerStyle={styles.inputContainerStyle}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        // errorMessage={errors?.phoneNumber?.message}
                    />
                    <StyledTextInput
                        // label="label.password"
                        isPassword
                        name="password"
                        ref={passwordRef}
                        control={control}
                        customPlaceHolder={'placeHolder.password'}
                        customLabel={styles.labelTextInput}
                        customStyle={styles.customStyleTextInput}
                        inputContainerStyle={styles.inputContainerStyle}
                        onSubmitEditing={() => passwordRef.current.blur()}
                        // iconRight={<IconHidePassword />}
                        // iconRightHide={<IconSeePassword />}
                        // errorMessage={errors?.password?.message}
                    />
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            style={styles.bntRegister}
                            onPress={() => {
                                navigate(TAB_NAVIGATION_ROOT.AUTHENTICATE_ROUTE.REGISTER);
                            }}
                        >
                            <StyledText i18nText={'button.register'} style={styles.register} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.centerStyle}
                        onPress={() => navigate(TAB_NAVIGATION_ROOT.AUTHENTICATE_ROUTE.FOGOT_PASSWORD)}
                    >
                        <StyledText i18nText={'label.fogotPassword'} style={styles.fogotPassword} />
                    </TouchableOpacity>
                    <StyledButton
                        location
                        title={'button.txtLogin'}
                        titleStyle={styles.buttonSubmitTitle}
                        onPress={handleSubmit(login)}
                        customStyle={styles.buttonSubmit}
                    />
                    <View style={styles.loginOther}>
                        <View style={{ width: 100, height: 1, backgroundColor: '#DBDDE0', marginTop: 16 }} />
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <StyledText originText="Hoặc đăng nhập bằng" style={{ fontSize: 16, color: '#52575C' }} />
                        </View>
                        <View style={{ width: 100, height: 1, backgroundColor: '#DBDDE0', marginTop: 16 }} />
                    </View>
                    <View style={styles.bntView}>
                        <TouchableOpacity onPress={signIn}>
                            <Image source={IC_GOOGLE} style={styles.icon} />
                            {/* <Icon_Vantay /> */}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Fblogin}>
                            <Image source={IC_FB} style={styles.icon} />
                            {/* <Icon_Face /> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED',
    },
    buttonSubmitTitle: {
        fontWeight: '700',
        fontSize: '16@ms',
    },
    buttonSubmit: {
        height: '50@vs',

        borderRadius: '10@vs',
        backgroundColor: Themes.Light.COLORS.resolutionBlue,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    top: {
        flex: 4,
    },
    imageView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: HeaderBgHeight,
        zIndex: -1,
    },
    imageStyle: {
        height: HeaderBgHeight,
        width: width,
        borderBottomLeftRadius: '40@vs',
        borderBottomRightRadius: '40@vs',
    },
    cicleStyle: {
        // position: 'absolute',
        left: LeftAvatar,
        top: HeaderBgHeight - AvatarSize / 2,
        width: AvatarSize,
        height: AvatarSize,

        borderRadius: AvatarSize / 2,
    },
    avatarImageView: {
        backgroundColor: '#B2D7FF',
        width: AvatarSize,
        height: AvatarSize,
        borderRadius: AvatarSize / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarImage: {
        // position: 'absolute',
        width: AvatarSize - 8,
        height: AvatarSize - 8,
        borderRadius: (AvatarSize - 8) / 2,
    },
    bottom: {
        marginTop: '150@vs',
        paddingHorizontal: '20@s',

        // justifyContent: 'center',
    },
    loginStyle: {
        fontSize: '16@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.resolutionBlue,
    },
    labelTextInput: {
        fontSize: '15@ms',
    },
    customStyleTextInput: {
        fontSize: '14@ms',
        width: '100%',
        color: Themes.Light.COLORS.black,
    },
    inputContainerStyle: {
        borderColor: Themes.Light.COLORS.color_FFD9D9,
        alignItems: 'center',
        backgroundColor: Themes.Light.COLORS.white,
    },
    centerStyle: {
        alignItems: 'center',
    },
    bntRegister: {
        alignItems: 'flex-end',

        width: 120,
    },
    register: {
        fontSize: '12@ms',
        color: Themes.Light.COLORS.color_D62121,
    },
    fogotPassword: {
        fontSize: '16@ms',
        paddingVertical: '16@vs',
        color: Themes.Light.COLORS.black,
    },
    loginOther: {
        paddingVertical: '16@vs',
        flexDirection: 'row',
    },
    bntView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 130,
        paddingBottom: 20,
    },
    icon: {
        width: 36,
        height: 36,
    },
});
export default Login;
