import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import routes from './src/navigation/route/route';
import 'utilities/i18next';
const App = () => {
    return (
        <View style={styles.container}>
            <routes />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default App;
