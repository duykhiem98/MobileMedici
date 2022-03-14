import * as React from 'react';
import {memo} from 'react';
import {Image, ImageProps} from 'react-native';

export const BgTabBarIcon = memo(function BgTabBar(props: ImageProps) {
  return (
    <>
      <Image style={{width: 375, height: 70}} {...props} />
      <Image
        style={{width: 375, height: 70, position: 'absolute', zIndex: -1}}
        {...props}
      />
    </>
  );
});
