import {Shadow} from '@theme/theme-type';

export const getShadowStyle = (styles: Shadow) => ({
  shadowOffset: styles.offset,
  shadowRadius: styles.radius,
  shadowOpacity: styles.opacity,
  shadowColor: styles.color,
});
