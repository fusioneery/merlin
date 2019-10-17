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
export interface ITheme {
  borderRadius: {
    normal: string;
    card: string;
    analysisCard: string;
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
    };
  };
}
