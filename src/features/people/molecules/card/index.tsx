import React from 'react';
import {useTheme} from 'emotion-theming';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {Text} from '@ui/atoms/text';
import {ifProp} from 'styled-tools';
import {normalize} from '@lib/normalize-font';
import LinearGradient from 'react-native-linear-gradient';

interface IPeopleCardProps {
  example: {
    name: string;
    img: any;
  };
  first: boolean;
  last: boolean;
}

export const PeopleCard: React.FC<IPeopleCardProps> = ({example: {name, img}, first, last}) => {
  const theme: ITheme = useTheme();
  return (
    <Card imageStyle={{borderRadius: 10}} source={img} first={first} last={last}>
      <LinearGradientContainer
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        colors={theme.cards.overlayGradient}>
        <Text color={theme.colors.light} size="small" weight="bold">
          {name}
        </Text>
      </LinearGradientContainer>
    </Card>
  );
};

const Card = styled.ImageBackground`
  width: ${normalize(150)};
  height: ${normalize(200)};
  margin: 15px 8px;
  margin-left: ${ifProp('first', defaultTheme.padding.default)};
  margin-right: ${ifProp('first', defaultTheme.padding.default)};
`;

const LinearGradientContainer = styled(LinearGradient)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 10px;
  border-radius: ${defaultTheme.borderRadius.normal};
`;
