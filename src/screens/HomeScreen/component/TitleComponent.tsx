import { View, Text, StyleProp, TextStyle, ViewStyle, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import StyledText from 'components/common/StyledText';
import { Themes } from 'assets/themes';
interface Props {
    customStyle?: StyleProp<ViewStyle>;
    titleLeft?: string;
    titleLeftStyle?: StyleProp<TextStyle>;
    titleRight?: string;
    titleRightStyle?: StyleProp<TextStyle>;
}

const TitleComponent = (props: Props) => {
    const { customStyle, titleRightStyle, titleRight, titleLeft, titleLeftStyle } = props;
    return (
        <View style={[styles.container, customStyle]}>
            <StyledText originText={titleLeft} customStyle={[styles.titleLeft, titleLeftStyle]} />
            {titleRight && (
                <TouchableOpacity>
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
