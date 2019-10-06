import React from 'react';
import styled from '@theme/styled';
import {prop} from 'styled-tools';
import {ITheme} from '@theme/theme-type';
import {useTheme} from 'emotion-theming';

const Text = props => {
  const theme: ITheme = useTheme();
  return (
    <StyledText
      {...props}
      color={props.color || 'black'}
      size={props.size || theme.font.sizes.normal}
      family={theme.font.family}>
      {props.children}
    </StyledText>
  );
};

const StyledText = styled.Text`
  font-family: ${prop('family')};
  font-size: ${prop('size')};
  color: ${prop('color')};
`;

export {Text};
