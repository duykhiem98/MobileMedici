import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import Header from 'components/common/Header';
import { Themes } from 'assets/themes';
import RevenueView from 'components/common/RevenueView';
import { Icon_Back } from 'assets';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ItemRevanue from './components/ItemRevanue';
const data = [
    {
        product_Code: 'SE20',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE20',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE20',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE20',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE20',
        time: '15h30',
        date: '12/10/2022',
        revenue: '100000000',
    },
    {
        product_Code: 'SE20',
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
    const renderItem = ({ item }) => (
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
                title1={'Nhân thọ'}
                lifeMoney={'23000000'}
                nonLifeMoney={'2313123123'}
                title2={'Phi nhân thọ'}
                customStyle={styles.topStyle}
            />
            <View style={{ height: 60 }} />

            <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
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
