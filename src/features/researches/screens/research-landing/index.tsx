import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View, ScrollView, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {useStore} from 'effector-react';
import {useTheme} from 'emotion-theming';
import {ifProp, theme} from 'styled-tools';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme, Colors} from '@theme/theme-type';
import {Toolbar} from '@features/navigation/toolbar';

import {Text} from '@ui/atoms/text';
import {Selector} from '@features/modal/selector';
import {getShadowStyle} from '@lib/shadow-style';
import {MainScrollableView} from '@ui/atoms/main-scrollable-view';
import {ResearchHeader} from '@ui/molecules/research-header';

import Taylor from '@assets/images/taylor-swift.jpg';
import Depp from '@assets/images/john-depp.jpg';
import {PeopleCard} from '@features/people/molecules/card';
import {List} from '@ui/molecules/list';
import {UIButton} from '@ui/atoms/button';

interface IResearch {
  name: string;
  description: string;
  examples: any[];
  features: any[];
  price: number;
}

interface IResearchLandingPageProps {
  navigation: any;
  research: IResearch;
}

const RESEARCH: IResearch = {
  name: 'Исследование характера',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  features: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  ],
  examples: [
    {
      name: 'Тейлор Свифт',
      img: Taylor,
    },
    {
      name: 'Джонни Депп',
      img: Depp,
    },
    {
      name: 'Тейлор Свифт',
      img: Taylor,
    },
    {
      name: 'Джонни Депп',
      img: Depp,
    },
  ],
  price: 10000,
};

export const ResearchLandingPage: React.FC<IResearchLandingPageProps> = ({
  navigation,
  research: {name, description, examples, features, price} = RESEARCH,
}) => {
  const theme: ITheme = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Toolbar
        noShadow
        onBack={() => {
          navigation.goBack();
        }}
        title=""
      />
      <MainScrollableView noHorizontalPadding verticalPadding="20px">
        <Padding>
          <ResearchHeader color="secondary" name={name} iconSize="big" textSize="bigger" />
          <Description>{description}</Description>
          <Heading weight={theme.font.weights.bold}>Примеры исследований</Heading>
        </Padding>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {examples.map((example, idx) => {
            return (
              <PeopleCard first={idx === 0} last={idx === examples.length - 1} key={idx} example={example} />
            );
          })}
        </ScrollView>
        <Padding>
          <Heading verticalMargin weight={theme.font.weights.bold}>
            Особенности
          </Heading>
          <StyledList marginBetweenItems="20px" color="secondary" items={features} />
          <StyledButton size="big" color="secondary" title={`Купить за ${price}₽`} />
        </Padding>
      </MainScrollableView>
    </View>
  );
};

const Description = styled(Text)`
  margin-top: 25px;
  margin-bottom: 10px;
`;

const Heading = styled(Text)`
  margin-top: 15px;
  ${ifProp('verticalMargin', 'margin: 20px 0;')}
`;

const Padding = styled.View`
  padding: 0 ${defaultTheme.padding.default};
`;

const StyledList = styled(List)``;

const StyledButton = styled(UIButton)`
  margin-top: 35px;
  margin-bottom: 60px;
  flex: 0;
`;
