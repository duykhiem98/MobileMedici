import { Themes } from 'assets/themes';
import { goBack } from 'navigation/NavigationService';
import React from 'react';
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Metrics from 'utilities/metrics';
import StyledText from './StyledText';
import StyledView from './StyledView';

interface Props {
    title?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
    titleStyle?: StyleProp<TextStyle>;
    customStyle?: StyleProp<ViewStyle>;
    canGoBack?: boolean;
    onPressIconRight?(): void;
    onPressIconLeft?(): void;
}
const Header = (props: Props) => {
    const { title, left, right, customStyle, canGoBack = true, titleStyle, onPressIconRight, onPressIconLeft } = props;
    const back = () => {
        if (!canGoBack) return;
        goBack();
    };
    return (
        <StyledView row center verticalCenter customStyle={[styles.container, customStyle]}>
            <TouchableOpacity onPress={onPressIconLeft} style={styles.left}>
                {left}
            </TouchableOpacity>
            <StyledView center verticalCenter customStyle={{ flex: 8 }}>
                <StyledText i18nText={title} customStyle={titleStyle} />
            </StyledView>
            <TouchableOpacity onPress={onPressIconRight} style={styles.right}>
                {right}
            </TouchableOpacity>
        </StyledView>
    );
};

export default Header;

const styles = ScaledSheet.create({
    left: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: Themes.Light.COLORS.white,
        paddingTop: Metrics.safeTopPadding,
        paddingBottom: '15@vs',
        width: Metrics.screenWidth,
        shadowColor: Themes.Light.COLORS.textPrimary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,

        elevation: 4,
    },
});
