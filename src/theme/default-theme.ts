import {ITheme} from './theme-type';
import {normalize} from '@lib/normalize-font';
import {Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';

const defaultTheme: ITheme = {
  borderRadius: {
    normal: '10px',
    card: '33px',
    analysisCard: '20px',
    option: '20px',
  },
  font: {
    sizes: {
      big: normalize(24),
      bigger: normalize(20),
      normal: normalize(18),
      smallier: normalize(16),
      small: normalize(14),
    },
    family: 'Circe',
    weights: {
      normal: 400,
      bold: 'bold',
    },
    lineHeight: {
      big: normalize(36),
      bigger: normalize(30),
      normal: normalize(27),
      smallier: normalize(24),
      small: normalize(21),
    },
  },
  colors: {
    primary: '#5574F9',
    secondary: '#F39031',
    lightNeutral: '#D8D9E2',
    darkNeutral: '#6D6F79',
    neutral: '#a8aec1',
    error: '#FF3A3A',
    dark: 'black',
    light: 'white',
  },
  cards: {
    borderRadius: '33px',
    shadow: {
      color: '#7f89ad',
      offset: {
        width: 0,
        height: 4,
      },
      radius: 85,
      opacity: isAndroid ? 0.12 : 0.09,
    },
    iconSizes: {
      width: normalize(117),
      height: normalize(137),
    },
    width: normalize(300),
    height: normalize(345),
    overlayGradient: [
      'rgba(0,0,0,0)',
      'rgba(0,0,0,0)',
      'rgba(0,0,0,0)',
      'rgba(0,0,0,0.264)',
      'rgba(0,0,0,0.536)',
    ],
  },
  avatars: {
    borderRadius: {
      profile: normalize(64 / 2),
    },
    sizes: {
      profile: {
        width: normalize(64),
        height: normalize(64),
      },
    },
  },
  buttons: {
    sizes: {
      normal: {
        height: normalize(42),
      },
      big: {
        height: normalize(50),
      },
    },
    borderRadius: '65px',
  },
  gradients: {
    primary: ['#5956ff', '#5a98f4'],
    secondary: ['#ff7a1a', '#ffa800'],
    neutral: ['#a8aec1', '#a8aec1'],
  },
  shadow: {
    light: {
      color: '#5e738c',
      offset: {
        width: 0,
        height: 2,
      },
      radius: 20,
      opacity: isAndroid ? 0.08 : 0.025,
    },
    heavy: {
      color: '#586bae',
      offset: {
        width: 0,
        height: 4,
      },
      radius: 10,
      opacity: 0.25,
    },
  },
  padding: {
    default: '24px',
  },
  icons: {
    sizes: {
      small: {
        width: '24px',
        height: '24px',
      },
      medium: {
        width: '53px',
        height: '53px',
      },
      big: {
        width: '76px',
        height: '76px',
      },
    },
  },
};

export {defaultTheme};
