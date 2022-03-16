import { LOGO } from 'assets/icons';
import { Themes } from 'assets/themes';
import StyledIcon from 'components/common/StyledIcon';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { isIos } from 'utilities/helpers';
import Metrics from 'utilities/metrics';

const StyledTabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={route.key}
                        style={styles.tabButton}
                    >
                        {index === 2 ? (
                            <View style={styles.viewIconAdd} key={'tab-' + index.toString()}>
                                <View>
                                    <StyledIcon source={LOGO} customStyle={[styles.tabIcon]} size={47} />
                                </View>
                            </View>
                        ) : (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View>
                                    <StyledIcon
                                        color={
                                            isFocused ? Themes.Light.COLORS.primary : Themes.Light.COLORS.color_9B9A9A
                                        }
                                        source={options?.icon}
                                        customStyle={[styles.tabIcon]}
                                        size={20}
                                    />
                                </View>
                                <Text
                                    style={[
                                        styles.tabLabel,
                                        {
                                            color: isFocused
                                                ? Themes.Light.COLORS.primary
                                                : Themes.Light.COLORS.color_9B9A9A,
                                        },
                                    ]}
                                >
                                    {options?.title || ''}
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    txtBadge: {
        fontSize: 10,
    },
    badge: {
        backgroundColor: 'red',
        position: 'absolute',
        width: 12,
        height: 12,
        top: -2,
        right: -2,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewIconAdd: {
        flex: 1,
        height: 72,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabContainer: {
        flexDirection: 'row',
        height: 78,
        paddingBottom: isIos ? Metrics.safeBottomPadding : 0,
        borderTopColor: '#DEE2E6',
        backgroundColor: Themes.Light.COLORS.white,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
    },
    buttonAdd: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabButton: {
        marginHorizontal: 5,
        paddingTop: 9,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    tabIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    tabLabel: {
        fontSize: 10,
        color: '#000',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 3,
        fontWeight: '600',
    },
});

export default StyledTabBar;
