import React, {ReactChild, MutableRefObject} from 'react';
import styled from '@theme/styled';
import {prop} from 'styled-tools';
import {ITheme} from '@theme/theme-type';
import {useTheme} from 'emotion-theming';

interface ITextProps {
  color?: string;
  size?: string;
  lineHeight?: string;
  children: ReactChild;
  onPress?(e: any): void;
  weight?: string | number;
}

const Text = React.forwardRef((props: ITextProps, ref) => {
  const theme: ITheme = useTheme();
  const {
    color = 'black',
    size = theme.font.sizes.normal,
    children,
    weight = theme.font.weights.normal,
    lineHeight = theme.font.lineHeight,
  } = props;
  return (
    <StyledText ref={ref} {...props} color={color} size={size} weight={weight} family={theme.font.family}>
      {children}
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
