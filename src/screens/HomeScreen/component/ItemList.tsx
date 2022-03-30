import React from 'react';
import { Image, ImageStyle, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

interface Props {
    image?: any;
    customStyle?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<ImageStyle>;

    onPress?(): void;
}

const ItemList = (props: Props) => {
    const { image, onPress, customStyle, iconStyle } = props;
    return (
        <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
            <Image source={image} style={[styles.icon, iconStyle]} />
        </TouchableOpacity>
    );
};
const styles = ScaledSheet.create({
    container: {
        paddingLeft: '12@s',
    },
    icon: {
        height: '110@vs',
        width: '137@s',
        borderRadius: '10@vs',
    },
});
export default ItemList;
