import { Themes } from 'assets/themes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import StyledView from './StyledView';
interface Props extends TextInputProps {
    iconLeft?: any;
    iconRight?: any;
    customPlaceHolder?: string;
    customStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<TextStyle>;
    onChangeInput(value: string): void;
}
const StyledInput = (props: Props) => {
    const { onChangeInput, iconLeft, iconRight, customStyle, inputContainerStyle, customPlaceHolder, value } = props;
    const { t } = useTranslation();

    return (
        <StyledView row center customStyle={customStyle}>
            {iconLeft}
            <TextInput
                onChangeText={onChangeInput}
                placeholder={customPlaceHolder}
                style={inputContainerStyle}
                placeholderTextColor={Themes.Light.COLORS.textSecondary}
            />
            {iconRight}
        </StyledView>
    );
};

export default StyledInput;

const styles = StyleSheet.create({});
