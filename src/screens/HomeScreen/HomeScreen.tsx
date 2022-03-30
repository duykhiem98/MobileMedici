import { BANNER, Videosssss } from 'assets/icons';
import { Themes } from 'assets/themes';
import React, { useMemo, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Metrics from 'utilities/metrics';
import HeaderHome from './component/HeaderHome';
import ItemList from './component/ItemList';
import TitleComponent from './component/TitleComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { TAB_NAVIGATION_ROOT } from '../../navigation/config/routes';

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
const Videos = [
    {
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
        Videourl: Videosssss,
    },
    {
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
        Videourl: Videosssss,
    },
    {
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
        Videourl: Videosssss,
    },
];
const HomeScreen = () => {
    const [textSearch, setTextSearch] = useState<string>('');
    const onChangeSearch = (value: string) => {
        setTextSearch(value);
    };
    const navigation = useNavigation();
    const filterData = useMemo(() => {
        return data.filter((_data) => _data.name.toUpperCase().includes(textSearch.toUpperCase()));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, textSearch]);
    const renderItem = ({ item }: any) => <ItemList image={{ uri: item.avatar }} />;
    const renderItemVideo = ({ item }: any) => (
        <ItemList
            image={{ uri: item.avatar }}
            iconStyle={styles.videoStyle}
            customStyle={{ paddingBottom: 20 }}
            onPress={() => {
                navigation.navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.VIDE0_ROUTE, { video: item.Videourl });
            }}
        />
    );

    return (
        <View style={styles.container}>
            <HeaderHome
                search
                txtPlacehoder={'Tên sản phẩm, mã sản phẩm'}
                customStyle={styles.topStyle}
                onChangeSearch={onChangeSearch}
                setText={setTextSearch}
                label={'Chúc team đã hoàn thành'}
                title2={'Xuất xắc KPI Tháng'}
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bannerViewStyle}>
                    <Image source={BANNER} style={styles.bannerStyle} />
                </View>
                <TitleComponent
                    titleLeft={'Ảnh'}
                    titleRight={'Xem thêm'}
                    customStyle={styles.titleContainer}
                    onPress={() => {
                        navigation.navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.IMAGE_ROUTE);
                    }}
                />
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                />
                <TitleComponent
                    titleLeft={'Video'}
                    titleRight={'Xem thêm'}
                    customStyle={styles.titleContainer}
                    onPress={() => {
                        navigation.navigate(TAB_NAVIGATION_ROOT.HOME_ROUTE.VIDE0_LIST);
                    }}
                />
                <FlatList
                    data={Videos}
                    renderItem={renderItemVideo}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                />
            </KeyboardAwareScrollView>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        color: 'black',
    },
    topStyle: {
        height: '150@vs',
    },
    headerContainer: {
        backgroundColor: Themes.Light.COLORS.resolutionBlue,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Themes.Light.COLORS.white,
    },
    titleContainer: {
        marginVertical: '20@vs',
    },
    bannerViewStyle: {
        marginTop: '40@vs',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '20@s',
    },
    bannerStyle: {
        height: '172@vs',
        borderRadius: '10@vs',
        width: Metrics.screenWidth - 40,
    },
    videoStyle: {
        height: '110@vs',
        width: '200@s',
    },
});
export default HomeScreen;
