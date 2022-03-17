import { IconError } from 'assets';
import { Themes } from 'assets/themes';
import React, { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
    ColorValue,
    Pressable,
    ReturnKeyTypeOptions,
    StyleProp,
    TextInput,
    TextInputProps,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { currencyFormat } from 'utilities/helpers';
import StyledText from './StyledText';
import StyledView from './StyledView';

interface Props extends TextInputProps {
    ref?: any;
    label: string;
    require?: boolean;
    iconLeft?: any;
    iconRight?: any;
    iconRightHide?: any;
    isDark?: boolean;
    isPassword?: boolean;
    isEditable?: boolean;
    unit?: any;
    customPlaceHolder?: string;
    customUnderlineColor?: ColorValue;
    customReturnKeyType?: ReturnKeyTypeOptions;
    customLabel?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    customStyle?: StyleProp<TextStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    rightOnPress?(): void;
    onSearch?(value: string): void;
    isDisableRight?: boolean;
    customContainer?: StyleProp<ViewStyle>;
    moneyFormat?: boolean;

    control: any;
    name?: string;
    errorMessage?: string;
}
const StyledTextInput = (props: Props, ref: any) => {
    const {
        name,
        unit,
        control,
        isEditable = false,
        isDisableRight,
        label,
        errorMessage,
        require,
        iconLeft,
        iconRight,
        inputContainerStyle,
        customLabel,
        isPassword,
        iconRightHide,
        moneyFormat,
        rightOnPress,
        onSearch = () => {},
    } = props;
    const { field } = useController({
        control,
        defaultValue: '',
        name: name || '',
    });
    useEffect(() => {
        setValue(field.value);
    }, [field.value]);
    const [isFocused, setIsFocused] = useState(false);
    const [isPass, setIsPass] = useState(isPassword);
    const { t } = useTranslation();

    const [value, setValue] = useState(field.value);
    const rightButtonOnPress = () => {
        rightOnPress ? rightOnPress() : setIsPass(!isPass);
    };
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const onChangeText = (value: string) => {
        if (value && moneyFormat) {
            const valueFormat = currencyFormat(Number(value.replace(/,/g, '')));
            setValue(valueFormat);
            field.onChange(valueFormat);
            return;
        }
        setValue(value);
        field.onChange(value);
        onSearch(value);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    return (
        <StyledView style={[{ flex: 1 }, props.customContainer]}>
            <StyledView row center customStyle={styles.labelContainer}>
                <StyledText i18nText={label} customStyle={[styles.label, customLabel]} />
                {require && <StyledText originText={'*'} customStyle={styles.requireText} />}
            </StyledView>
            <Pressable
                disabled={isDisableRight}
                onPress={rightOnPress}
                style={{ flexDirection: 'row', alignItems: 'center' }}
            >
                <View
                    style={[
                        styles.inputContainer,
                        inputContainerStyle,
                        !!errorMessage && { borderColor: Themes.Light.COLORS.color_D92424 },
                    ]}
                >
                    {iconLeft}
                    <TextInput
                        pointerEvents={!isEditable ? undefined : 'none'}
                        value={value}
                        editable={!isEditable}
                        onChangeText={onChangeText}
                        ref={ref || field.ref}
                        secureTextEntry={isPass}
                        onFocus={onFocus}
                        onBlur={() => setIsFocused(false)}
                        placeholder={props.customPlaceHolder ? t(props.customPlaceHolder) : ''}
                        placeholderTextColor={Themes.Light.COLORS.textSecondary}
                        underlineColorAndroid={props.customUnderlineColor || 'transparent'}
                        autoCorrect={false}
                        returnKeyType={props.customReturnKeyType || 'next'}
                        blurOnSubmit={!!props.customReturnKeyType}
                        style={[
                            styles.textInput,
                            props.customStyle,
                            isFocused && errorMessage ? { borderColor: Themes.Light.COLORS.borderInputError } : {},
                        ]}
                        {...props}
                    />
                    {iconRight ? (
                        <TouchableOpacity
                            onPress={rightButtonOnPress}
                            disabled={isDisableRight}
                            style={styles.padding10}
                        >
                            {isPass ? iconRightHide : iconRight}
                        </TouchableOpacity>
                    ) : (
                        errorMessage && (
                            <StyledView customStyle={styles.padding10}>
                                <IconError />
                            </StyledView>
                        )
                    )}
                </View>
                {unit}
            </Pressable>
            <StyledText originText={errorMessage} customStyle={styles.errorMessage} />
        </StyledView>
    );
};

export default React.forwardRef(StyledTextInput);

const styles = ScaledSheet.create({
    padding10: {
        padding: '10@ms',
    },
    label: {
        color: Themes.Light.COLORS.textSecondary,
    },
    labelContainer: {
        paddingVertical: '5@vs',
    },
    errorMessage: {
        color: Themes.Light.COLORS.color_D92424,
        fontSize: '12@ms',
        // marginTop: '3@vs',
    },
    requireText: {
        color: Themes.Light.COLORS.primary,
        paddingLeft: '1@s',
        fontSize: '18@ms',
    },
    textInput: {
        fontSize: '14@ms',
        paddingHorizontal: '5@s',
        paddingVertical: '8@vs',
        flex: 1,
    },
    inputContainer: {
        height: '60@vs',
        width: '100%',
        paddingVertical: '8@vs',
        paddingHorizontal: '5@s',
        borderColor: Themes.Light.COLORS.color_C1C1C1,
        borderWidth: 1.5,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
});
