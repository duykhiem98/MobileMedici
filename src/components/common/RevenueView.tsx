import { Icon_Search } from 'assets';
import { Themes } from 'assets/themes';
import React from 'react';
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { stringMoneyToNumber } from 'utilities/helpers';
import Metrics from 'utilities/metrics';
import StyledInput from './StyledInput';
import StyledText from './StyledText';
import StylesTxtMoney from './StylesTxtMoney';
const WIDTH = Metrics.screenWidth / 2 - 28;
interface Props {
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    customStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    rightOnPress?(): void;
    money?: string;
    lifeMoney?: string;
    nonLifeMoney?: string;
    title1?: string;
    title2?: string;
    isShowIcon?: boolean;
    iconRight?: any;
    iconRightHide?: any;
    require?: boolean;
    search?: boolean;
    txtPlacehoder?: string;
    setShow?(value: boolean): void;
    setText?(value: string): void;
    onChangeSearch?(value: string): void;
}
const RevenueView = (props: Props) => {
    const {
        label,
        lifeMoney = '0',
        nonLifeMoney = '0',
        customStyle,
        money = '0',
        title1,
        txtPlacehoder,
        title2,
        labelStyle,
        isShowIcon,
        iconRightHide,
        iconRight,
        search,
        setText = '',
        onChangeSearch = () => {},
        setShow = () => {},
    } = props;

    const onPress = () => {
        setShow(!isShowIcon);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.RevenueStyle, customStyle]}>
                {search && (
                    <StyledInput
                        value={setText}
                        iconLeft={<Icon_Search />}
                        onChangeInput={onChangeSearch}
                        customPlaceHolder={txtPlacehoder}
                        customStyle={styles.search}
                        inputContainerStyle={styles.input}
                    />
                )}
                {label && (
                    <View style={styles.totalRevenueStyle}>
                        <View style={styles.totalView}>
                            <StyledText i18nText={label} customStyle={[styles.label, labelStyle]} />

                            {iconRight ? (
                                <TouchableOpacity style={styles.buttonEye} onPress={onPress}>
                                    {isShowIcon ? iconRight : iconRightHide}
                                </TouchableOpacity>
                            ) : null}
                        </View>
                        <View style={styles.styleVnd}>
                            <StyledText i18nText={'label.vnd'} style={styles.vnd} />
                            {isShowIcon ? (
                                <StylesTxtMoney money={parseInt(money)} styleTxt={styles.txtTop} />
                            ) : (
                                <StyledText originText={stringMoneyToNumber(money)} customStyle={styles.txtTop} />
                            )}
                        </View>
                    </View>
                )}
                {title1 && (
                    <View style={styles.bottomView}>
                        <View style={styles.bottomViewItem}>
                            <View style={styles.viewLife}>
                                <StyledText i18nText={title1} customStyle={styles.txt1Style} />
                                <StyledText i18nText={'label.vnd'} style={styles.txt1vnd} />

                                <StylesTxtMoney money={parseInt(lifeMoney)} styleTxt={styles.lifeMoney} />
                            </View>
                        </View>
                        <View style={styles.bottomViewItem}>
                            <View style={styles.viewLife}>
                                <StyledText i18nText={title2} customStyle={styles.txt1Style} />
                                <StyledText i18nText={'label.vnd'} style={styles.txt1vnd} />

                                <StylesTxtMoney money={parseInt(nonLifeMoney)} styleTxt={styles.lifeMoney} />
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        zIndex: 1,
    },
    search: {
        backgroundColor: '#F5F5F5',
        height: '50@vs',
        paddingHorizontal: '15@s',
        borderRadius: '15@vs',
        marginHorizontal: '15@s',
        marginBottom: '31@vs',
    },
    input: {
        color: Themes.Light.COLORS.black,
        marginLeft: '10@s',
        // padding: 0,
        flex: 1,
    },
    RevenueStyle: {
        zIndex: 2,

        backgroundColor: Themes.Light.COLORS.resolutionBlue,
        borderBottomLeftRadius: '30@vs',
        borderBottomRightRadius: '30@vs',
    },
    totalRevenueStyle: {
        marginHorizontal: '20@s',
        marginTop: '22@vs',
        backgroundColor: Themes.Light.COLORS.color_ffd344,
        height: '100@vs',
        borderRadius: '20@s',
    },
    bottomView: {
        paddingTop: '11@vs',
        flexDirection: 'row',
        paddingHorizontal: '20@s',
        justifyContent: 'space-between',
    },
    bottomViewItem: {
        width: WIDTH,
        height: '90@vs',
        borderWidth: 2,
        backgroundColor: Themes.Light.COLORS.white,
        borderRadius: '15@vs',
        borderColor: Themes.Light.COLORS.color_C4DBF1,
        justifyContent: 'space-around',
    },
    label: {
        fontSize: '12@ms',
        fontWeight: 'bold',
    },
    totalView: {
        flexDirection: 'row',
        paddingTop: '18@vs',
        paddingHorizontal: '16@s',
    },
    buttonEye: {
        paddingLeft: 5,
    },
    styleVnd: {
        flexDirection: 'row',
        paddingTop: '4@vs',
        paddingHorizontal: '16@s',
    },
    vnd: {
        fontWeight: 'bold',
        fontSize: '14@ms',
        paddingTop: '15@vs',
        color: Themes.Light.COLORS.resolutionBlue,
    },
    txtTop: {
        fontSize: '30@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.resolutionBlue,
    },
    txt1Style: {
        fontSize: '12@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.black,
    },
    txt1vnd: {
        fontSize: '22@ms',
        color: Themes.Light.COLORS.resolutionBlue,
    },
    lifeMoney: {
        fontSize: '16@ms',
        color: Themes.Light.COLORS.resolutionBlue,
        fontWeight: 'bold',
    },
    viewLife: {
        paddingLeft: '13@s',
    },
    requireText: {
        color: Themes.Light.COLORS.resolutionBlue,
        paddingLeft: '1@s',
        fontSize: '18@ms',
    },
    topStyle: {
        height: '131@vs',
    },
});
export default RevenueView;
