import { useNavigation } from '@react-navigation/native';
import { Icon_Eye, Icon_EyeOff, Icon_Vi } from 'assets';
import { Themes } from 'assets/themes';
import Header from 'components/common/Header';
import RevenueView from 'components/common/RevenueView';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
import { navigate } from 'navigation/NavigationService';
import React, { useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScaledSheet } from 'react-native-size-matters';
import SystemManagerComponent from './components/SystemManagerComponent';

const SystemScreen = () => {
    const navigation = useNavigation();
    const [isShow, setIsShow] = useState(true);

    return (
        <View style={styles.container}>
            <Header
                customStyle={styles.headerContainer}
                title={'label.systemManagement'}
                titleStyle={styles.titleStyle}
            />
            <RevenueView
                setShow={setIsShow}
                isShowIcon={isShow}
                money={'100000000'}
                label={'Doanh thu tổng'}
                iconRightHide={<Icon_EyeOff />}
                iconRight={<Icon_Eye />}
                title1={'Nhân thọ'}
                lifeMoney={'23000000'}
                nonLifeMoney={'2313123123'}
                title2={'Phi nhân thọ'}
                customStyle={styles.topStyle}
            />
            <KeyboardAwareScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <View style={{ height: 40 }} />
                <View style={styles.paddingStyle}>
                    <SystemManagerComponent
                        isShowIcon={isShow}
                        twoItem
                        disabled={true}
                        iconLeft={<Icon_Vi />}
                        moneyLeft={'2000000'}
                        txtLeft={'Doanh thu Cá nhân'}
                        iconRight={<Icon_Vi />}
                        moneyRight={'213213123'}
                        txtRight={'Doanh thu hệ thống'}
                    />
                </View>
                <View style={styles.paddingStyle}>
                    <SystemManagerComponent
                        onPress={() => navigation.navigate(TAB_NAVIGATION_ROOT.SYSTEM_ROUTE.PERSONAL_REVENUE)}
                        isShowIcon={isShow}
                        iconLeft={<Icon_Vi />}
                        moneyLeft={'2000000'}
                        txtLeft={'Doanh thu Cá nhân'}
                    />
                </View>
                <View style={styles.paddingStyle}>
                    <SystemManagerComponent
                        isShowIcon={isShow}
                        iconLeft={<Icon_Vi />}
                        moneyLeft={'2000000'}
                        txtLeft={'Doanh thu Cá nhân'}
                    />
                </View>
                <View style={styles.paddingStyle}>
                    <SystemManagerComponent
                        isShowIcon={isShow}
                        iconLeft={<Icon_Vi />}
                        moneyLeft={'2000000'}
                        txtLeft={'Doanh thu Cá nhân'}
                    />
                </View>
                <View style={styles.paddingStyle}>
                    <SystemManagerComponent
                        isShowIcon={isShow}
                        iconLeft={<Icon_Vi />}
                        moneyLeft={'2000000'}
                        txtLeft={'Doanh thu Cá nhân'}
                    />
                </View>
            </KeyboardAwareScrollView>
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
    paddingStyle: {
        paddingVertical: 6,
        paddingHorizontal: 20,
    },
    topStyle: {
        height: '190@vs',
    },
});
export default SystemScreen;
