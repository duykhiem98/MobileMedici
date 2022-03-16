import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends ViewProps {
    center?: boolean;
    verticalCenter?: boolean;
    flexible?: boolean;
    row?: boolean;
    customStyle?: StyleProp<ViewStyle>;
    safeView?: boolean;
}
const StyledView = (props: Props) => {
    const { center, verticalCenter, flexible, customStyle, row, safeView } = props;
    if (safeView) {
        return (
            <SafeAreaView
                style={[
                    center && styles.center,
                    verticalCenter && styles.verticalCenter,
                    row && styles.row,
                    flexible && styles.flex1,
                    customStyle,
                ]}
                {...props}
            >
                {props.children}
            </SafeAreaView>
        );
    } else
        return (
            <View
                style={[
                    center && styles.center,
                    verticalCenter && styles.verticalCenter,
                    row && styles.row,
                    flexible && styles.flex1,
                    customStyle,
                ]}
                {...props}
            >
                {props.children}
            </View>
        );
};

export default StyledView;

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
    },
    verticalCenter: {
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
});
