import {IShadow} from '@theme/theme-type';

export const getShadowStyle = (styles: IShadow) => ({
  shadowOffset: styles.offset,
  shadowRadius: styles.radius,
  shadowOpacity: styles.opacity,
  shadowColor: styles.color,
  elevation: styles.elevation,
});

export const getBoxShadowSettings = (width: number, height: number, shadow: IShadow | {}, radius: number) => {
  if (Object.keys(shadow).length === 0) {
    return {
      width: width,
      height: height,
      color: '#000000',
      border: 0,
      radius: radius || 0,
      opacity: 0.0001,
      x: 0,
      y: 0,
    };
  }
  return {
    width: width,
    height: height,
    color: shadow.color || 'black',
    border: shadow.radius || 10,
    radius: radius || 0,
    opacity: shadow.opacity || 0.25,
    x: shadow.offset.width || 0,
    y: shadow.offset.height || 0,
  };
};
