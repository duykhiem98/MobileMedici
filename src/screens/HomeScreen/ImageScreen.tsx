/* eslint-disable prettier/prettier */
import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import ItemImage from './component/ItemImage';
import Header from 'components/common/Header';
import { useNavigation } from '@react-navigation/native';
import { Themes } from 'assets/themes';
import { Icon_Back } from 'assets';
import StyledText from 'components/common/StyledText';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const data = [
    {
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van 9',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van 0',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van 5',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van o',

        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van 6',

        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        name: 'khuat Van 4',

        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
];
const ImageScreen = () => {
    const navigation = useNavigation();
    const back = () => {
        navigation.goBack();
    };
    const renderItem = ({ item }: any) => <ItemImage image={item.avatar} />;
    return (
        <View style={styles.container}>
            <Header
                onPressIconLeft={back}
                left={<Icon_Back />}
                customStyle={styles.headerContainer}
                title={'label.image'}
                titleStyle={styles.titleStyle}
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.businessStyles}>
                    <StyledText originText={'Kinh doanh bảo hiểm'} customStyle={styles.contentStyles} />
                    <FlatList
                        horizontal={true}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                </View>
                <View style={styles.businessStyles}>
                    <StyledText originText={'Bảo hiểm tai nạn cá nhân'} customStyle={styles.contentStyles} />
                    <FlatList
                        horizontal={true}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                </View>
                <View style={styles.businessStyles}>
                    <StyledText originText={'Bảo hiểm tai nạn cá nhân'} customStyle={styles.contentStyles} />
                    <FlatList
                        horizontal={true}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: Themes.Light.COLORS.resolutionBlue,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Themes.Light.COLORS.white,
    },
    contentStyles: {
        color: Themes.Light.COLORS.resolutionBlue,
        fontSize: '16@ms',
        fontWeight: 'bold',
        paddingBottom: '12@vs',
    },
    businessStyles: {
        paddingTop: '24@vs',
        paddingLeft: '16@s',
    },
});
export default ImageScreen;
