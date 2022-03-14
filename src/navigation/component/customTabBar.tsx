import React, {memo, useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  InteractionManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {BgTabBarIcon} from './bgTabBar';
import {IC_BGTABBAR, IC_HOME_CYCAL, IC_IMGTAB} from '../../assets/icons';
export interface TabBarIconProps {
  icon: ImageSourcePropType;
  isFocused: boolean;
}

const halfPartBtnAdd = 32;

export const TabBarIcon = memo(function TabBarIcon({
  icon,
  isFocused,
}: TabBarIconProps) {
  return (
    <Image
      source={icon}
      style={{width: 32, height: 32, tintColor: isFocused ? 'red' : 'blue'}}
    />
  );
});

const widthFull = Dimensions.get('window').width / 2;
export const CustomTabBar = memo(function CustomTabBar(
  props: BottomTabBarProps,
) {
  const {state, descriptors, navigation} = props;
  return (
    <View>
      <View style={styles.containerAbsolute}>
        <View style={styles.bgAbsolute}>
          <View>
            <Image
              style={{
                height: 70,
                width: widthFull,
              }}
              resizeMode={'stretch'}
              source={IC_BGTABBAR}
            />
          </View>
          <View>
            <BgTabBarIcon source={IC_IMGTAB} />
          </View>
          <View>
            <Image
              style={{height: 70, width: widthFull}}
              resizeMode={'stretch'}
              source={IC_BGTABBAR}
            />
          </View>
        </View>

        <View style={styles.contentContainer}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];

            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const onPress = useCallback(() => {
              InteractionManager.runAfterInteractions(() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              });
              // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [route, isFocused, index]);

            if (index === 2) {
              return (
                <View
                  style={styles.viewIconAdd}
                  key={'tab-' + index.toString()}>
                  <View>
                    <TouchableOpacity
                      style={styles.buttonAdd}
                      activeOpacity={0.9}
                      onPress={onPress}>
                      <Image
                        style={{width: 64, height: 64}}
                        source={IC_HOME_CYCAL}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }

            return (
              <TouchableOpacity
                key={'tab-' + index.toString()}
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={styles.bottomBarIcon}>
                {options &&
                  options.tabBarIcon &&
                  options.tabBarIcon({focused: isFocused, color: '', size: 0})}
                <Text numberOfLines={1}>{label || ''}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  containerAbsolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: halfPartBtnAdd + 56 + getBottomSpace(),
  },
  modalStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 0,
    marginLeft: 16,
    marginRight: 16,
    width: 200,
    maxWidth: 400,
    marginBottom: 120 + getBottomSpace(),
  },
  bgAbsolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    marginTop: halfPartBtnAdd,
    height: 56 + getBottomSpace(),
    paddingBottom: getBottomSpace(),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    paddingTop: halfPartBtnAdd,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewIconAdd: {
    flex: 1,
    height: 72,
    marginBottom: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBarIcon: {
    marginTop: 6,
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusHorizontal: {
    position: 'absolute',
    zIndex: 1,
    width: 3,
    height: 20,
    borderRadius: 2,
  },
  plusVertical: {
    position: 'absolute',
    zIndex: 1,
    width: 20,
    height: 3,
    borderRadius: 2,
  },
});
