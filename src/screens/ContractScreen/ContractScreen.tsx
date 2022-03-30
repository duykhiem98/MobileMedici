/* eslint-disable prettier/prettier */
import { Bg_Image } from 'assets/icons';
import { Themes } from 'assets/themes';
import StyledText from 'components/common/StyledText';
import React, { useRef, useState } from 'react';
import { Animated, ScrollView, TouchableOpacity, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ScaledSheet } from 'react-native-size-matters';
import ItemAgent from 'screens/SystemScreen/components/ItemAgent';
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
const HEADER_MAX_HEIGHT = 240; // max header height
const HEADER_MIN_HEIGHT = 74; // min header height
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT; // header scrolling value
const heightHeader = HEADER_MIN_HEIGHT;

const ContractScreen = () => {
    const scrollRef = useRef(null);
    const [commentMeasure, setCommentMeasure] = useState(0);

    const [spLienQuan, setSPLienQuan] = useState(0);

    let fakedata = [];
    for (let i = 0; i < 50; i++) {
        const _index = Math.floor(Math.random() * data.length);
        fakedata.push({
            ...data[_index],
            id: i.toString(),
        });
    }

    const scrollY = useRef(new Animated.Value(0)).current;

    const headerTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });
    const imageTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 100],
        extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0.9],
        extrapolate: 'clamp',
    });
    const titleTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, -8],
        extrapolate: 'clamp',
    });
    const opacityViewTab = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - getStatusBarHeight(), HEADER_MAX_HEIGHT],
        outputRange: [0, 0, 1],
    });

    const transformViewTab = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT],
        outputRange: [-heightHeader, heightHeader],
        extrapolate: 'clamp',
    });
    const scrollToComment = () => {
        console.log('sroll to comment', commentMeasure);
        scrollRef &&
            scrollRef.current.scrollTo({
                y: commentMeasure - heightHeader - 72 + 12 + 10,
                animated: true,
            });
    };
    const scrollToSPLienQuan = () => {
        console.log('sroll to sp', spLienQuan);
        scrollRef &&
            scrollRef.current.scrollTo({
                y: spLienQuan - heightHeader - 72 + 12 + 10,
                animated: true,
            });
    };
    const scrollToTop = () => {
        console.log('scroll to top');
        scrollRef &&
            scrollRef.current.scrollTo({
                y: 0,
            });
    };

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                ref={scrollRef}
                contentContainerStyle={{ paddingTop: 32 }}
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: true,
                })}
            >
                <View>
                    {fakedata.map((item, index) => {
                        return (
                            <ItemAgent
                                key={index}
                                code={item.code}
                                name={item.name}
                                position={item.position}
                                avatar={item.avatar}
                                status={item.status}
                            />
                        );
                    })}
                </View>
                <View onLayout={(e) => setCommentMeasure(e.nativeEvent.layout.y)}>
                    <View
                        style={{ height: 900, backgroundColor: 'red' }}
                        // onLayout={(e) => setCommentMeasure(e.nativeEvent.layout.y)}
                    >
                        <StyledText originText={'sadasdasdas'} />
                    </View>
                </View>
                <View onLayout={(e) => setSPLienQuan(e.nativeEvent.layout.y)}>
                    <View style={{ height: 900, backgroundColor: 'blue' }}>
                        <StyledText originText={'sadsadas'} />
                    </View>
                </View>
            </Animated.ScrollView>
            <Animated.View
                style={[
                    styles.header,
                    {
                        transform: [{ translateY: headerTranslateY }],
                    },
                ]}
            >
                <Animated.Image
                    style={[
                        styles.headerBackground,
                        {
                            opacity: imageOpacity,
                            transform: [{ translateY: imageTranslateY }],
                        },
                    ]}
                    source={Bg_Image}
                />
            </Animated.View>
            <Animated.View
                style={[
                    styles.topBar,
                    {
                        transform: [{ scale: titleScale }, { translateY: titleTranslateY }],
                    },
                ]}
            >
                <StyledText originText={'Menu'} customStyle={styles.title} />
            </Animated.View>
            <Animated.View
                style={[styles.tabView, { transform: [{ translateY: transformViewTab }], opacity: opacityViewTab }]}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                >
                    {['Thông tin', 'Nhận xét', 'SP liên quan'].map((tab) => {
                        return (
                            <TouchableOpacity
                                key={tab}
                                style={styles.bntTab}
                                onPress={() => {
                                    if (tab === 'Thông tin') {
                                        scrollToTop();
                                    } else if (tab === 'Nhận xét') {
                                        scrollToComment();
                                    } else if (tab === 'SP liên quan') {
                                        scrollToSPLienQuan();
                                    }
                                }}
                            >
                                <StyledText originText={tab} />
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </Animated.View>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_MIN_HEIGHT,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#62d1bc',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: HEADER_MAX_HEIGHT,

        resizeMode: 'cover',
    },
    title: {
        fontSize: '18@vs',
        color: Themes.Light.COLORS.white,
        fontWeight: 'bold',
    },
    tabView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        backgroundColor: Themes.Light.COLORS.white,
    },
    bntTab: {
        backgroundColor: '#62d1bc',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
export default ContractScreen;
