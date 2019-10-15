import React, {ReactNode} from 'react';
import {useTheme} from 'emotion-theming';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {Text} from '@ui/atoms/text';
import {getShadowStyle} from '@lib/shadow-style';
import Arrow from 'assets/icons/arrow.svg';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

interface IToolbarProps {
  title: string;
  children: ReactNode;
  onBack?(): void;
  noShadow?: boolean;
}

export const Toolbar: React.FC<IToolbarProps> = ({title, children, onBack, noShadow}) => {
  const theme: ITheme = useTheme();
  return (
    <Container style={noShadow ? {} : getShadowStyle(theme.shadow.light)}>
      {onBack && (
        <TouchableWithoutFeedback onPress={onBack}>
          <Arrow {...theme.icons.sizes} fill={theme.colors.dark} />
        </TouchableWithoutFeedback>
      )}
      <Text weight={theme.font.weights.bold}>{title}</Text>
      {children}
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
