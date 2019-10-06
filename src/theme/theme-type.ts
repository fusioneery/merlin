export interface ITheme {
  borderRadius: string;

  font: {
    sizes: {
      big: string;
      normal: string;
      small: string;
    };
    family: string;
    weights: {
      normal: number;
      bold: number;
    };
  };
  colors: {
    primary: string;
    secondary: string;
    neutral: string;
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
    primary: [string, string];
    secondary: [string, string];
    neutral: [string, string];
  };
  shadow: {
    color: string;
    offset: {
      width: number;
      height: number;
    };
    radius: number;
    opacity: number;
  };
}
