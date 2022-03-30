import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import VideoList from './component/VideoList';

const VideoScreen = ({ route }) => {
    console.log(route.params.video);
    return (
        <View style={styles.container}>
            <VideoList video={route.params.video} />
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default VideoScreen;
