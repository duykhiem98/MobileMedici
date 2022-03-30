/* eslint-disable prettier/prettier */
import { Themes } from 'assets/themes';
import StyledText from 'components/common/StyledText';
import React from 'react';
import { Image, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
interface Props {
    code?: string;
    name?: string;
    status?: string;
    position?: string;
    avatar?: any;
}
const ItemAgent = (props: Props) => {
    const { name, code, status, position, avatar } = props;
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image source={{ uri: avatar }} style={styles.icon} />
            </View>
            <View style={styles.center}>
                <StyledText originText={code} customStyle={styles.codeStyle} />
                <StyledText originText={name} customStyle={styles.nameStyle} />
                <StyledText originText={position} customStyle={styles.codeStyle} />
            </View>
            <View style={styles.right}>
                {status === 'Hoạt động' ? (
                    <StyledText originText={status} customStyle={styles.statusActive} />
                ) : (
                    <StyledText originText={status} customStyle={styles.statusNonActive} />
                )}
            </View>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: '16@s',
        paddingHorizontal: '16@s',
        paddingVertical: '8@vs',
        shadowColor: '#000',
        marginVertical: '4@vs',
        borderRadius: '15@vs',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    right: {
        width: 70,
        alignItems: 'flex-end',
    },
    center: {
        flex: 8,
        justifyContent: 'space-around',
    },
    left: {
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    codeStyle: {
        fontSize: '16@ms',
        color: Themes.Light.COLORS.color_414141,
    },
    nameStyle: {
        fontSize: '16@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.resolutionBlue,
    },
    statusActive: {
        fontWeight: '600',
        fontSize: '12@ms',
        color: Themes.Light.COLORS.color_1CAE6D,
    },
    statusNonActive: {
        fontWeight: '600',
        fontSize: '12@ms',
        color: Themes.Light.COLORS.color_898E93,
    },
});
export default ItemAgent;
