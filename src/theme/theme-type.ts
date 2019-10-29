type Gradient = [string, string];
export type IShadow = {
  color: string;
  offset: {
    width: number;
    height: number;
  };
  radius: number;
  opacity: number;
};

type Sizes = {
  height: string;
  width: string;
};

export type TextSizes = 'big' | 'bigger' | 'normal' | 'smallier' | 'small';

export type Colors =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'dark'
  | 'light'
  | 'error'
  | 'lightNeutral'
  | 'darkNeutral';
export interface ITheme {
  borderRadius: {
    normal: string;
    card: string;
    analysisCard: string;
    option: string;
  };

  font: {
    sizes: {
      big: string;
      bigger: string;
      normal: string;
      smallier: string;
      small: string;
    };
    family: string;
    weights: {
      normal: number;
      bold: string;
    };
    lineHeight: {
      big: string;
      bigger: string;
      normal: string;
      smallier: string;
      small: string;
    };
  };
  colors: {
    primary: string;
    secondary: string;
    lightNeutral: string;
    darkNeutral: string;
    error: string;
    neutral: string;
    dark: string;
    light: string;
  };
  cards: {
    borderRadius: string;
    shadow: IShadow;
    iconSizes: Sizes;
    width: string;
    height: string;
    overlayGradient: [string, string, string, string, string];
  };
  buttons: {
    sizes: {
      normal: {
        height: string;
      };
      big: {
        height: string;
      };
    };
    borderRadius: string;
  };
  avatars: {
    borderRadius: {
      profile: string;
    };
    sizes: {
      profile: Sizes;
    };
  };
  gradients: {
    primary: Gradient;
    secondary: Gradient;
    neutral: Gradient;
  };
  shadow: {
    light: IShadow;
    heavy: IShadow;
  };
  padding: {
    default: string;
  };
  icons: {
    sizes: {
      small: Sizes;
      medium: Sizes;
      big: Sizes;
    };
  };
}
