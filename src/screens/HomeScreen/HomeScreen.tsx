import { IconError } from 'assets';
import StyledText from 'components/common/StyledText';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>helo</Text>
            <IconError />
            <StyledText i18nText={'bottomTab.account'} customStyle={styles.textStyle} />
            <StyledText i18nText={'bottomTab.consumerLoans'} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        color: 'black',
    },
});
export default HomeScreen;
