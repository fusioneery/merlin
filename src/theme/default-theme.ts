import {ITheme} from './theme-type';
import {normalize} from '@lib/normalize-font';

const defaultTheme: ITheme = {
  borderRadius: {
    normal: '10px',
    card: '33px',
    analysisCard: '20px',
  },
  font: {
    sizes: {
      big: normalize(24),
      normal: normalize(18),
      small: normalize(14),
    },
    family: 'Circe',
    weights: {
      normal: 400,
      bold: 'bold',
    },
    lineHeight: normalize(27),
  },
  colors: {
    primary: '#5574F9',
    secondary: '#F39031',
    neutral: '#a8aec1',
    error: '#FF3A3A',
    dark: 'black',
    light: 'white',
  },
  cards: {
    borderRadius: '33px',
    shadow: {
      color: '#586bae',
      offset: {
        width: 0,
        height: 11,
      },
      radius: 27,
      opacity: 0.25,
    },
    iconSizes: {
      width: normalize(117),
      height: normalize(137),
    },
    width: normalize(300),
    height: normalize(345),
    overlayGradient: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.63)', 'rgba(0,0,0,1)'],
  },
  avatars: {
    borderRadius: {
      profile: normalize(50 / 2),
    },
    sizes: {
      profile: {
        width: normalize(50),
        height: normalize(50),
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
      color: '#586bae',
      offset: {
        width: 0,
        height: 1,
      },
      radius: 24,
      opacity: 0.05,
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
    },
  },
};

export {defaultTheme};
