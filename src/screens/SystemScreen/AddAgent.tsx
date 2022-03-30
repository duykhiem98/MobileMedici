import { View } from 'react-native';
import React, { useRef } from 'react';
import Header from 'components/common/Header';
import { useNavigation } from '@react-navigation/native';
import { Icon_Back, Icon_Vi } from 'assets';
import { ScaledSheet } from 'react-native-size-matters';
import { Themes } from 'assets/themes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm } from 'react-hook-form';
import StyledTextInput from 'components/common/StyledTextInput';
import dayjs from 'dayjs';
import StyledDateTimePicker from 'components/modal/StyledDateTimePicker';

const AddAgent = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors, isDirty },
        setFocus,
        setValue,
        clearErrors,
    } = useForm({
        // resolver: yupResolver(informationFormStep1),
        reValidateMode: 'onChange',
        mode: 'onChange',
        // defaultValues: {
        //     ...staticData.defaultValueForm,
        //     customer_name: route.params?.name,
        //     identity_card: route.params?.id,
        //     issue_place: route.params?.issue_place,
        //     ...product,
        // },
    });
    const pickerRef = useRef<any>(null);
    const shortDate = 'DD/MM/YYYY';
    const dateFormat = { shortDate };
    const showModal = (field: string) => {
        pickerRef.current.setKey(field);
        pickerRef.current.showModal();
    };

    const onSelectedDate = (value: any) => {
        const date = dayjs(value).format(dateFormat.shortDate);
        setValue('issue_date', date);
    };

    const back = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Header
                onPressIconLeft={back}
                left={<Icon_Back />}
                customStyle={styles.headerContainer}
                title={'label.systemManagement'}
                titleStyle={styles.titleStyle}
            />
            <StyledDateTimePicker
                ref={pickerRef}
                dateSelected={new Date()}
                onSelected={(value: string, key: string) => onSelectedDate(value, key)}
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 16 }}>
                <StyledTextInput
                    isDisableRight={false}
                    require
                    name="name"
                    label="Họ và Tên"
                    // errorMessage={errors?.issue_date?.message}
                    control={control}
                    customPlaceHolder={'Họ và Tên'}
                    customLabel={styles.labelTextInput}
                    customStyle={styles.customStyleTextInput}
                    inputContainerStyle={styles.inputContainerStyle}
                />
                <StyledTextInput
                    isDisableRight={false}
                    require
                    isEditable
                    name="issue_date"
                    label="labels.identifyDate"
                    // errorMessage={errors?.issue_date?.message}
                    control={control}
                    customPlaceHolder={'placeholder.identifyDate'}
                    customLabel={styles.labelTextInput}
                    customStyle={styles.customStyleTextInput}
                    inputContainerStyle={styles.inputContainerStyle}
                    iconRight={<Icon_Vi />}
                    rightOnPress={() => showModal('issue_date')}
                />
            </KeyboardAwareScrollView>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: Themes.Light.COLORS.resolutionBlue,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Themes.Light.COLORS.white,
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
    },
});
export default AddAgent;
