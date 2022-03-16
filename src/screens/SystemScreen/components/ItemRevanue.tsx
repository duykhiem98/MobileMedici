import { View, Text } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { Themes } from 'assets/themes';
import StyledText from 'components/common/StyledText';
import StylesTxtMoney from 'components/common/StylesTxtMoney';
interface Props {
    title?: string;
    code?: string;
    time?: string;
    date: string;
    revenue?: string;
}
const ItemRevanue = (props: Props) => {
    const { title, code, time, date, revenue } = props;
    return (
        <View style={styles.container}>
            <StyledText originText={'Tên sản phẩm bảo hiểm'} customStyle={styles.titleStyle} />
            <View style={styles.botStyle}>
                <StyledText originText={'Mã SP : '} customStyle={styles.left} />
                <StyledText originText={code} customStyle={styles.right} />
            </View>
            <View style={styles.botStyle}>
                <StyledText originText={'Giờ : '} customStyle={styles.left} />
                <StyledText originText={time} customStyle={styles.right} />
            </View>
            <View style={styles.botStyle}>
                <StyledText originText={'Ngày : '} customStyle={styles.left} />
                <StyledText originText={date} customStyle={styles.right} />
            </View>
            <View style={styles.botStyle}>
                <StyledText originText={'Doanh thu : '} customStyle={styles.left} />
                <StylesTxtMoney money={parseInt(revenue)} styleTxt={styles.money} />
            </View>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        borderRadius: '15@s',
        backgroundColor: Themes.Light.COLORS.white,
        justifyContent: 'space-between',
        shadowColor: '#000',

        marginHorizontal: 16,
        marginVertical: 8,
        padding: 16,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    titleStyle: {
        color: Themes.Light.COLORS.primary,
        fontSize: '20@ms',
        fontWeight: 'bold',
    },
    botStyle: {
        flexDirection: 'row',
    },
    left: {
        fontSize: '16@ms',
        color: Themes.Light.COLORS.black,
    },
    right: {
        fontSize: '16@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.black,
    },
    money: {
        fontSize: '16@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.resolutionBlue,
    },
});
export default ItemRevanue;
