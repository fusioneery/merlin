import React from 'react';
import {useTheme} from 'emotion-theming';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {Text} from '@lib/wrappers/Text';
import {getShadowStyle} from '@lib/shadow-style';
import Info from 'assets/icons/info.svg';
import Arrow from 'assets/icons/arrow.svg';

interface IToolbarProps {
  title: string;
}

export const Toolbar: React.FC<IToolbarProps> = ({title}) => {
  const theme: ITheme = useTheme();
  return (
    <Container style={getShadowStyle(theme.shadow.light)}>
      <Arrow {...theme.icons.sizes} fill={theme.colors.dark} />
      <Text weight={theme.font.weights.bold}>{title}</Text>
      <Info {...theme.icons.sizes} fill={theme.colors.dark} />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 64px;
  background: white;
  padding: 0 ${defaultTheme.padding.default};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 6;
`;
