import React from 'react';
import { Image, StyleSheet, View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';
import NumberFormat from 'react-number-format';
import { isIos } from 'utilities/helpers';
import StyledText from './StyledText';
interface Props {
    money: number;
    styleTxt?: StyleProp<TextStyle>;
    icon: any;
    customStyle?: StyleProp<ViewStyle>;
}
const TxtMoney = (props: Props) => {
    const { money, styleTxt, icon, customStyle } = props;
    return (
        <View style={[styles.main, customStyle]}>
            {isIos ? (
                <>
                    <NumberFormat
                        thousandsGroupStyle="thousand"
                        value={money}
                        prefix=""
                        decimalSeparator="."
                        displayType="text"
                        type="text"
                        thousandSeparator={true}
                        allowNegative={true}
                        renderText={(value) => <StyledText originText={value} customStyle={styleTxt} />}
                    />
                    <Image source={icon} style={styles.icon} />
                </>
            ) : (
                <Text>
                    <NumberFormat
                        thousandsGroupStyle="thousand"
                        value={money}
                        prefix=""
                        decimalSeparator="."
                        displayType="text"
                        type="text"
                        thousandSeparator={true}
                        allowNegative={true}
                        renderText={(value) => <StyledText originText={value} customStyle={styleTxt} />}
                    />{' '}
                    <Image source={icon} style={styles.icon} />
                </Text>
            )}
        </View>
    );
};

export default TxtMoney;

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    icon: {
        marginLeft: 4,
    },
});
