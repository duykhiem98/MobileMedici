import { Themes } from 'assets/themes';
import StyledText from 'components/common/StyledText';
import StylesTxtMoney from 'components/common/StylesTxtMoney';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { stringMoneyToNumber } from 'utilities/helpers';
interface Props {
    iconRight?: any;
    iconLeft?: any;
    txtRight?: string;
    txtLeft?: string;
    moneyRight?: string;
    moneyLeft?: string;
    twoItem?: any;
    onPress?(): void;
    disabled?: boolean;
    isShowIcon?: boolean;
}
const SystemManagerComponent = (props: Props) => {
    const {
        iconRight,
        disabled,
        iconLeft,
        txtLeft,
        txtRight,
        moneyLeft,
        moneyRight,
        twoItem,
        isShowIcon,
        onPress = () => {},
    } = props;
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.container, { alignItems: twoItem && 'center', flexDirection: twoItem ? 'row' : 'column' }]}
        >
            <View style={styles.viewLeft}>
                <View style={styles.topView}>
                    {iconLeft}
                    <StyledText numberOfLines={twoItem ? 2 : 1} i18nText={txtLeft} customStyle={styles.txtLeftStyle} />
                </View>
                <View style={styles.moneyView}>
                    <StyledText i18nText={'label.vnd'} customStyle={styles.vndStyle} />
                    {isShowIcon ? (
                        <StylesTxtMoney money={parseInt(moneyLeft || '0')} styleTxt={styles.moneyStyle} />
                    ) : (
                        <StyledText
                            originText={stringMoneyToNumber(moneyLeft || '0')}
                            customStyle={styles.moneyStyle}
                        />
                    )}
                </View>
            </View>
            {twoItem ? (
                <View style={styles.viewLeft}>
                    <View style={styles.topView}>
                        {iconRight}
                        <StyledText
                            numberOfLines={twoItem ? 2 : 1}
                            i18nText={txtRight}
                            customStyle={styles.txtLeftStyle}
                        />
                    </View>
                    <View style={styles.moneyView}>
                        <StyledText i18nText={'label.vnd'} customStyle={styles.vndStyle} />
                        {isShowIcon ? (
                            <StylesTxtMoney money={parseInt(moneyRight)} styleTxt={styles.moneyStyle} />
                        ) : (
                            <StyledText originText={stringMoneyToNumber(moneyLeft)} customStyle={styles.moneyStyle} />
                        )}
                    </View>
                </View>
            ) : null}
        </TouchableOpacity>
    );
};
const styles = ScaledSheet.create({
    container: {
        paddingVertical: '12@vs',
        paddingLeft: '13@s',
        borderRadius: 15,
        // borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: Themes.Light.COLORS.white,
    },
    viewLeft: {
        flex: 1,
    },
    topView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: '5@vs',
    },
    txtLeftStyle: {
        fontSize: '15@ms',
        color: Themes.Light.COLORS.resolutionBlue,
        fontWeight: 'bold',
        paddingLeft: '8@s',
        paddingRight: '40@s',
    },
    vndStyle: {
        fontSize: '12@ms',
        paddingTop: '4@vs',
        paddingRight: '8@s',
        color: Themes.Light.COLORS.resolutionBlue,
    },
    moneyView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    moneyStyle: {
        fontSize: '18@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.color_ffd344,
    },
});
export default SystemManagerComponent;
