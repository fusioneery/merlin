import React, {ReactChild, MutableRefObject} from 'react';
import styled from '@theme/styled';
import {prop} from 'styled-tools';
import {ITheme, TextSizes} from '@theme/theme-type';
import {useTheme} from 'emotion-theming';

interface ITextProps {
  color?: string;
  size?: TextSizes;
  lineHeight?: string;
  children: string;
  onPress?(e: any): void;
  weight?: string | number;
  isUpperCase?: boolean;
}

const Text = React.forwardRef((props: ITextProps, ref) => {
  const theme: ITheme = useTheme();
  const {
    color = 'black',
    size = 'normal',
    children,
    weight = theme.font.weights.normal,
    isUpperCase = false,
  } = props;
  if (!theme.font.lineHeight[size]) {
    console.warn('size: ', size);
  }
  return (
    <StyledText
      lineHeight={theme.font.lineHeight[size]}
      ref={ref}
      {...props}
      color={color}
      size={theme.font.sizes[size]}
      weight={weight}
      family={theme.font.family}>
      {isUpperCase ? children.toUpperCase() : children}
    </StyledText>
  );
});

const StyledText = styled.Text`
  font-family: ${prop('family')};
  font-size: ${prop('size')};
  font-weight: ${prop('weight')};
  line-height: ${prop('lineHeight')};
  color: ${prop('color')};
`;

export {Text};
