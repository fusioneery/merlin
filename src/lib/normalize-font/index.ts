import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

export const normalize = (size: number): string => {
  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) + 'px';
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2 + 'px';
  }
};
