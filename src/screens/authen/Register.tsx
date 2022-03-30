/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import { Icon_Back } from 'assets';
import { Themes } from 'assets/themes';
import Header from 'components/common/Header';
import StyledButton from 'components/common/StyledButton';
import StyledTextInput from 'components/common/StyledTextInput';
import { navigate } from 'navigation/NavigationService';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Dimensions, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScaledSheet } from 'react-native-size-matters';
import { useAppDispatch } from './../../redux-store/hooksrd';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
import { goBack } from 'navigation/NavigationService';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationValidation } from 'utilities/validates';

const { width } = Dimensions.get('window');
const AvatarSize = 164;
const LeftAvatar = (width - AvatarSize) / 2;
const HeaderBgHeight = 250;
const height = HeaderBgHeight + AvatarSize * (1 / 2);

const Register = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        reValidateMode: 'onSubmit',
        mode: 'onSubmit',
        resolver: yupResolver(registrationValidation),
        defaultValues: { email: 'duukhiem297@gmail.com', password: 'hanoi@123' },
    });
    const passwordRef = useRef<any>(null);
    const dispatch = useAppDispatch();
    const createUser = async (data: any) => {
        try {
            const response = await auth().createUserWithEmailAndPassword(data.email, data.password);
            if (response) {
                console.log('first=========', response);
                navigate(TAB_NAVIGATION_ROOT.AUTHENTICATE_ROUTE.LOGIN);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Header
                onPressIconLeft={() => goBack()}
                left={<Icon_Back />}
                customStyle={styles.headerContainer}
                title={'label.systemManagement'}
                titleStyle={styles.titleStyle}
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <View style={styles.top}>
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
                        errorMessage={errors?.password?.message}
                    />
                </View>
                <View style={styles.bottomStyle}>
                    <StyledButton
                        location
                        title={'button.register'}
                        titleStyle={styles.buttonSubmitTitle}
                        onPress={handleSubmit(createUser)}
                        customStyle={styles.buttonSubmit}
                    />
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
    headerContainer: {
        backgroundColor: Themes.Light.COLORS.resolutionBlue,
    },
    top: {
        paddingTop: '22@vs',
        paddingHorizontal: '16@s',
    },
    bottomStyle: {
        paddingTop: '150@vs',
        paddingHorizontal: '16@s',
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Themes.Light.COLORS.white,
    },
    buttonSubmitTitle: {
        fontWeight: '700',
        fontSize: '16@ms',
    },
    buttonSubmit: {
        height: '50@vs',
        paddingHorizontal: '16@s',
        borderRadius: '10@vs',
        backgroundColor: Themes.Light.COLORS.resolutionBlue,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
export default Register;
