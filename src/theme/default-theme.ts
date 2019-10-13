import {ITheme} from './theme-type';
import {normalize} from '@lib/normalize-font';

const defaultTheme: ITheme = {
  borderRadius: {
    normal: '10px',
    card: '33px',
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
      width: '137px',
      height: '157px',
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
      width: '24px',
      height: '24px',
    },
  },
};

export {defaultTheme};
