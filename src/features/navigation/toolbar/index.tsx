import React, {ReactNode} from 'react';
import {useTheme} from 'emotion-theming';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {Text} from '@ui/atoms/text';
import {BoxShadow} from 'react-native-shadow';
import {getShadowStyle} from '@lib/shadow-style';
import Arrow from 'assets/icons/arrow.svg';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import {prop} from 'styled-tools';
import {Shadow} from '@ui/atoms/shadow';
import {normalize} from '@lib/normalize-font';

interface IToolbarProps {
  title: string;
  children: ReactNode;
  onBack?(): void;
  noShadow?: boolean;
}

export const Toolbar: React.FC<IToolbarProps> = ({title, children, onBack, noShadow}) => {
  const theme: ITheme = useTheme();
  return (
    //@ts-ignore
    <Shadow shadow={noShadow ? {} : theme.shadow.light}>
      <Container width={Dimensions.get('window').width}>
        {onBack && (
          <TouchableWithoutFeedback onPress={onBack}>
            <Arrow {...theme.icons.sizes} fill={theme.colors.dark} />
          </TouchableWithoutFeedback>
        )}
        <Text size="bigger" weight={theme.font.weights.bold}>
          {title}
        </Text>
        {children}
      </Container>
    </Shadow>
  );
};

const Container = styled.View`
  width: ${prop('width')}px;
  height: 64px;
  background: white;
  padding: 0 ${defaultTheme.padding.default};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  align-items: center;
  z-index: 12;
`;
