/* eslint-disable prettier/prettier */
import { Themes } from 'assets/themes';
import StyledText from 'components/common/StyledText';
import React from 'react';
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
interface Props {
    customStyle?: StyleProp<ViewStyle>;
    titleLeft?: string;
    titleLeftStyle?: StyleProp<TextStyle>;
    titleRight?: string;
    titleRightStyle?: StyleProp<TextStyle>;
    onPress?(): void;
}

const TitleComponent = (props: Props) => {
    const { customStyle, titleRightStyle, titleRight, titleLeft, titleLeftStyle, onPress = () => {} } = props;
    return (
        <View style={[styles.container, customStyle]}>
            <StyledText originText={titleLeft} customStyle={[styles.titleLeft, titleLeftStyle]} />
            {titleRight && (
                <TouchableOpacity onPress={onPress}>
                    <StyledText originText={titleRight} customStyle={[styles.titleRight, titleRightStyle]} />
                </TouchableOpacity>
            )}
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        paddingHorizontal: '20@s',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleLeft: {
        fontSize: '16@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.resolutionBlue,
    },
    titleRight: {
        fontSize: '16@ms',
        fontWeight: '600',
        color: Themes.Light.COLORS.color_ffd344,
    },
});
export default TitleComponent;
