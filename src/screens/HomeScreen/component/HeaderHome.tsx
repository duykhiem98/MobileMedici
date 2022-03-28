import { Icon_Search } from 'assets';
import { Themes } from 'assets/themes';
import StyledInput from 'components/common/StyledInput';
import StyledText from 'components/common/StyledText';
import React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Metrics from 'utilities/metrics';
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
const HeaderHome = (props: Props) => {
    const {
        label,
        labelStyle,
        title2,
        titleStyle,
        customStyle,
        txtPlacehoder,
        search,
        setText = '',
        onChangeSearch = () => {},
    } = props;

    return (
        <View style={styles.container}>
            <View style={[styles.RevenueStyle, customStyle]}>
                <View style={styles.TextStyle}>
                    <View>
                        <StyledText originText={label} customStyle={[styles.label, labelStyle]} />
                        <StyledText originText={title2} customStyle={[styles.titleStyle, titleStyle]} />
                    </View>
                </View>
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
            </View>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        zIndex: 1,
    },
    search: {
        zIndex: 2,
        marginTop: '50@vs',
        backgroundColor: '#F5F5F5',
        height: '50@vs',
        paddingHorizontal: '15@s',
        borderRadius: '15@vs',
        marginHorizontal: '15@s',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
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
    TextStyle: {
        paddingLeft: '20@s',
        paddingTop: '40@vs',
    },
    label: {
        fontSize: '13@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.color_ffd344,
        lineHeight: '20@vs',
    },
    titleStyle: {
        fontSize: '13@ms',
        color: Themes.Light.COLORS.white,
    },
});
export default HeaderHome;
