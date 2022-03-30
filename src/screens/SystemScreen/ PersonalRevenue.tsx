/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import { Icon_Back } from 'assets';
import { Themes } from 'assets/themes';
import Header from 'components/common/Header';
import RevenueView from 'components/common/RevenueView';
import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import ItemRevanue from './components/ItemRevanue';
const data = [
    {
        product_Code: 'SE2',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE220',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE203',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE204',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE202',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE2002',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
];
const PersonalRevenue = () => {
    const navigation = useNavigation();
    const back = () => {
        navigation.goBack();
    };
    const [textSearch, setTextSearch] = useState<string>('');
    const onChangeSearch = (value: string) => {
        setTextSearch(value);
    };
    const filterData = useMemo(() => {
        return data.filter((_data) => _data.product_Code.toUpperCase().includes(textSearch.toUpperCase()));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, textSearch]);
    const renderItem = ({ item }: any) => (
        <ItemRevanue code={item.product_Code} time={item.time} date={item.date} revenue={item.revenue} />
    );
    return (
        <View style={styles.container}>
            <Header
                onPressIconLeft={back}
                left={<Icon_Back />}
                customStyle={styles.headerContainer}
                title={'label.systemManagement'}
                titleStyle={styles.titleStyle}
            />
            <RevenueView
                search
                txtPlacehoder={'Tên sản phẩm, mã sản phẩm'}
                title1={'Nhân thọ'}
                lifeMoney={'23000000'}
                nonLifeMoney={'2313123123'}
                title2={'Phi nhân thọ'}
                customStyle={styles.topStyle}
                onChangeSearch={onChangeSearch}
                setText={setTextSearch}
            />

            <FlatList
                data={filterData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={<View style={{ height: 70 }} />}
            />
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    topStyle: {
        height: '131@vs',
    },
    headerContainer: {
        backgroundColor: Themes.Light.COLORS.resolutionBlue,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Themes.Light.COLORS.white,
    },
});
export default PersonalRevenue;
