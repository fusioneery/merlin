import React, {ReactChild} from 'react';
import styled from '@theme/styled';
import {prop} from 'styled-tools';
import {ITheme} from '@theme/theme-type';
import {useTheme} from 'emotion-theming';

interface ITextProps {
  color?: string;
  size?: string;
  children: ReactChild;
  weight?: string | number;
}

const Text = (props: ITextProps) => {
  const theme: ITheme = useTheme();
  const {
    color = 'black',
    size = theme.font.sizes.normal,
    children,
    weight = theme.font.weights.normal,
  } = props;
  return (
    <StyledText {...props} color={color} size={size} weight={weight} family={theme.font.family}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text`
  font-family: ${prop('family')};
  font-size: ${prop('size')};
  font-weight: ${prop('weight')};
  color: ${prop('color')};
`;

export {Text};
