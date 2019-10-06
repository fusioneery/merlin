import {ITheme} from './theme-type';

const defaultTheme: ITheme = {
  borderRadius: '10px',
  font: {
    sizes: {
      big: '24px',
      normal: '18px',
      small: '14px',
    },
    family: 'Circe',
    weights: {
      normal: 400,
      bold: 600,
    },
  },
  colors: {
    primary: '#5574F9',
    secondary: '#F39031',
    neutral: '#a8aec1',
  },
  buttons: {
    sizes: {
      normal: {
        height: '42px',
      },
      big: {
        height: '50px',
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
    color: '#586bae',
    offset: {
      width: 0,
      height: 4,
    },
    radius: 10,
    opacity: 0.25,
  },
};

export {defaultTheme};
