type Gradient = [string, string];
export type Shadow = {
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
export interface ITheme {
  borderRadius: {
    normal: string;
    card: string;
  };

  font: {
    sizes: {
      big: string;
      normal: string;
      small: string;
    };
    family: string;
    weights: {
      normal: number;
      bold: string;
    };
    lineHeight: string;
  };
  colors: {
    primary: string;
    secondary: string;
    error: string;
    neutral: string;
    dark: string;
    light: string;
  };
  cards: {
    borderRadius: string;
    shadow: Shadow;
    iconSizes: Sizes;
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
  gradients: {
    primary: Gradient;
    secondary: Gradient;
    neutral: Gradient;
  };
  shadow: {
    light: Shadow;
    heavy: Shadow;
  };
  padding: {
    default: string;
  };
  icons: {
    sizes: Sizes;
  };
}
