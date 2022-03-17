import { View, Text, FlatList } from 'react-native';
import React, { useMemo, useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import Header from 'components/common/Header';
import { useNavigation } from '@react-navigation/native';
import { Themes } from 'assets/themes';
import { Icon_Agent, Icon_Back } from 'assets';
import RevenueView from 'components/common/RevenueView';
import ItemAgent from './components/ItemAgent';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
const data = [
    {
        code: 'MC6829',
        position: 'Giám đốc vùng RD',
        status: 'Hoạt động',
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC68292',
        position: 'Giám đốc vùng RD',
        status: 'Dừng',
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC682954',
        position: 'Giám đốc vùng RD',
        status: 'Hoạt động',
        name: 'khuat Van 9',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC68292',
        position: 'Giám đốc vùng RD',
        status: 'Dừng',
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC6829123',
        position: 'Giám đốc vùng RD',
        status: 'Hoạt động',
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC68292',
        position: 'Giám đốc vùng RD',
        status: 'Dừng',
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC68294231',
        position: 'Giám đốc vùng RD',
        status: 'Hoạt động',
        name: 'khuat Van 0',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC6829123',
        position: 'Giám đốc vùng RD',
        status: 'Hoạt động',
        name: 'khuat Van 5',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC68292',
        position: 'Giám đốc vùng RD',
        status: 'Dừng',
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC6829224',
        name: 'khuat Van o',
        position: 'Giám đốc vùng RD',
        status: 'Hoạt động',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC6829111',
        name: 'khuat Van 6',
        position: 'Giám đốc vùng RD',
        status: 'Hoạt động',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC68292',
        position: 'Giám đốc vùng RD',
        status: 'Dừng',
        name: 'khuat Van A',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
    {
        code: 'MC6829451',
        name: 'khuat Van 4',
        position: 'Giám đốc vùng RD',
        status: 'Hoạt động',
        avatar: 'https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg',
    },
];
const DownlineAgent = () => {
    const navigation = useNavigation();
    const back = () => {
        navigation.goBack();
    };
    const [textSearch, setTextSearch] = useState<string>('');
    const onChangeSearch = (value: string) => {
        setTextSearch(value);
    };
    const filterData = useMemo(() => {
        return data.filter((_data) => _data.name.toUpperCase().includes(textSearch.toUpperCase()));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, textSearch]);
    const renderItem = ({ item }: any) => (
        <ItemAgent
            code={item.code}
            name={item.name}
            position={item.position}
            avatar={item.avatar}
            status={item.status}
        />
    );
    return (
        <View style={styles.container}>
            <Header
                onPressIconLeft={back}
                left={<Icon_Back />}
                customStyle={styles.headerContainer}
                title={'label.systemManagement'}
                titleStyle={styles.titleStyle}
                right={<Icon_Agent />}
                onPressIconRight={() => navigation.navigate(TAB_NAVIGATION_ROOT.SYSTEM_ROUTE.ADD_AGENT)}
            />
            <RevenueView
                search
                txtPlacehoder={'Tên sản phẩm, mã sản phẩm'}
                customStyle={styles.topStyle}
                onChangeSearch={onChangeSearch}
                setText={setTextSearch}
            />
            <FlatList
                data={filterData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                // ListHeaderComponent={<View style={{ height: 70 }} />}
            />
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    headerContainer: {
        backgroundColor: Themes.Light.COLORS.resolutionBlue,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Themes.Light.COLORS.white,
    },
    topStyle: {
        height: '70@vs',
    },
});
export default DownlineAgent;
