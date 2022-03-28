import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
interface Props {
    image?: any;
}
const ItemList = (props: Props) => {
    const { image } = props;
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={image} style={styles.icon} />
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
