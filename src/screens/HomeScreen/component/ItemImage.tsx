/* eslint-disable prettier/prettier */
import { View, Text, Image, Platform, PermissionsAndroid, TouchableOpacity, CameraRoll } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { Icon_Down } from 'assets';
import StyledText from 'components/common/StyledText';
import { Themes } from 'assets/themes';
import RNFetchBlob from 'rn-fetch-blob';
interface Props {
    image?: any;
}
const ItemImage = (props: Props) => {
    const { image } = props;
    const checkPermission = async () => {
        // Function to check the platform
        // If iOS then start downloading
        // If Android then ask for permission

        if (Platform.OS === 'ios') {
            downloadImage();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message: 'App needs access to your storage to download Photos',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // Once user grant the permission start downloading
                    console.log('Storage Permission Granted.');
                    downloadImage();
                } else {
                    // If permission denied then show alert
                    alert('Storage Permission Not Granted');
                }
            } catch (err) {
                // To handle permission related exception
                console.log('errr', err);
            }
        }
    };
    const downloadImage = () => {
        // Main function to download the image

        // To add the time suffix in filename
        let newImgUri = image.lastIndexOf('/');
        let imageName = image.substring(newImgUri);
        // Get config and fs from RNFetchBlob
        // config: To pass the downloading related options
        // fs: Directory path where we want our image to download
        let dirs = RNFetchBlob.fs.dirs;
        let path = Platform.OS === 'ios' ? dirs['MainBundleDir'] + imageName : dirs.PictureDir + imageName;
        if (Platform.OS === 'android') {
            RNFetchBlob.config({
                fileCache: true,
                appendExt: 'png',
                indicator: true,
                IOSBackgroundTask: true,
                path: path,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    path: path,
                    description: 'image',
                },
            })
                .fetch('GET', image)
                .then((res) => {
                    console.log(res, 'end downloaded');
                    alert('dag tai');
                });
        } else {
            CameraRoll.saveToCameraRoll(image);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.viewBot} onPress={checkPermission}>
                <Icon_Down />
                <StyledText originText={'Download'} style={styles.titleStyle} />
            </TouchableOpacity>
        </View>
    );
};
const styles = ScaledSheet.create({
    container: {
        width: '137@s',
        height: '150@vs',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '12@s',
    },
    image: {
        width: '137@s',
        height: '110@vs',
        resizeMode: 'cover',
        borderRadius: '10@vs',
    },
    viewBot: {
        marginTop: '10@vs',
        borderRadius: '10@vs',
        paddingVertical: '6@vs',
        flexDirection: 'row',
        backgroundColor: '#EEF7FF',
        width: '137@s',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle: {
        fontSize: '12@ms',
        fontWeight: 'bold',
        color: Themes.Light.COLORS.resolutionBlue,
    },
});
export default ItemImage;
