/* eslint-disable prettier/prettier */
import { Themes } from 'assets/themes';
import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScaledSheet } from 'react-native-size-matters';
import { useDebouncedCallback } from 'use-debounce';
import staticData from 'utilities/staticData';

import StyledText from './StyledText';
import StyledView from './StyledView';

interface Props {
    title: string;
    customStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    onPress(): void;
    onLongPress?(): void;
    disable?: boolean;
    close?: boolean;
    location?: boolean;
}

const StyledButton: React.FunctionComponent<Props> = (props: Props) => {
    const {
        onPress = () => {},
        customStyle,
        onLongPress,
        disable,
        title,
        titleStyle,
        close = false,
        location = false,
    } = props;
    const debouncedHandle = useDebouncedCallback(() => {
        onPress();
    }, 300);
    return (
        <TouchableOpacity onPress={debouncedHandle} onLongPress={onLongPress} disabled={disable}>
            {location ? (
                <StyledView
                    customStyle={[
                        styles.container,
                        //{backgroundColor: disable ? Themes.COLORS.textSecondary : Themes.COLORS.primary},
                        customStyle,
                    ]}
                >
                    <StyledText i18nText={title} customStyle={[styles.title, titleStyle]} />
                </StyledView>
            ) : (
                <LinearGradient
                    style={[
                        styles.container,
                        //{backgroundColor: disable ? Themes.COLORS.textSecondary : Themes.COLORS.primary},
                        customStyle,
                    ]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    colors={close === true ? staticData.buttonCloseModal : staticData.gradientColorHeader}
                >
                    <StyledText i18nText={title} customStyle={[styles.title, titleStyle]} />
                </LinearGradient>
            )}
        </TouchableOpacity>
    );
};

const styles = ScaledSheet.create({
    container: {
        paddingVertical: '10@vs',
        marginVertical: '5@vs',

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    title: {
        color: Themes.Light.COLORS.white,
        fontSize: '14@ms',
    },
});

export default StyledButton;
