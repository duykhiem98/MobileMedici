import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, Text, StyleProp, TextStyle } from 'react-native';
import NumberFormat from 'react-number-format';
import { isIos } from 'utilities/helpers';
import StyledText from './StyledText';
interface Props {
    money: number;
    styleTxt?: StyleProp<TextStyle>;
    styleTxtUnit?: StyleProp<TextStyle>;
}
const StylesTxtMoney = (props: Props) => {
    const { money, styleTxt, styleTxtUnit } = props;
    const { t } = useTranslation();
    return (
        <View style={styles.main}>
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
                </Text>
            )}
        </View>
    );
};

export default StylesTxtMoney;

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    icon: {
        marginLeft: 4,
        marginBottom: 8,
    },
});
