import React from 'react';
import { Image, ImageProps } from 'react-native';
import { scale } from 'react-native-size-matters';

interface Props extends ImageProps {
    customStyle?: any;
    size?: number;
    color?: string;
}
const StyledIcon = (props: Props) => {
    const { customStyle, size = 25, color } = props;
    return <Image style={[customStyle, { width: scale(size), height: scale(size), tintColor: color }]} {...props} />;
};

export default StyledIcon;
