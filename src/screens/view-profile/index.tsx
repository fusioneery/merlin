import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View, ScrollView, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {useStore} from 'effector-react';
import {useTheme} from 'emotion-theming';
import {ifProp} from 'styled-tools';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme, Colors} from '@theme/theme-type';
import {Toolbar} from '@features/navigation/toolbar';

import {Text} from '@ui/atoms/text';
import {Selector} from '@features/modal/selector';
import {getShadowStyle} from '@lib/shadow-style';
import {newProfileRootStore} from '@features/profiles/model';
import Details from '@assets/icons/details.svg';
import {MainScrollableView} from '@ui/atoms/main-scrollable-view';
import {AnalysisCard} from '@features/profiles/organisms/analysis-card';
import {
  showModalSelector,
  modalSelectorStore,
  setPositionModalSelector,
  hideModalSelector,
} from '@features/navigation/model';
import {useSafeArea} from 'react-native-safe-area-view';

interface Props {
  navigation: any;
}

export interface IAnalysis {
  id: number;
  name: string;
  description: string;
  color: 'primary' | 'secondary';
}

const ANALYSISES: Array<IAnalysis> = [
  {
    id: 1,
    name: 'Профориентация',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    color: 'primary',
  },
  {
    id: 2,
    name: 'Сравнение двух',
    description:
      'Выберете себе пару, а мы проведем сравнительный анализ и определим, подходит ли вам партнёр',
    color: 'primary',
  },
  {
    id: 3,
    name: 'Характер',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    color: 'secondary',
  },
];

const breakName = (name, surname) => {
  return [name, surname].reduce((acc, n) => acc + `\n${n}`);
};

const SETTINGS = [
  {value: 'Редактировать', label: 'Редактировать'},
  {value: 'Поделиться', label: 'Поделиться'},
];

const DeviceWidth = Math.round(Dimensions.get('window').width);
const DeviceHeight = Math.round(Dimensions.get('window').height);

export const ViewProfileScreen: React.FC<Props> = ({navigation}) => {
  const theme: ITheme = useTheme();
  const {top} = useSafeArea();
  const {photos, name, surname, category} = useStore(newProfileRootStore);
  const {modalSelectorCoordinates, modalSelectorIsVisible} = useStore(modalSelectorStore);
  const detailsRef: any = useRef(null);
  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.measureInWindow((x, y, width, height, pageX, pageY) => {
        let Y = (pageY || y) - top - 35 - height;
        let X = pageX || x;
        if (Y < 0) Y = 10;
        if (X < 0) X = 5;
        if (X + 200 > DeviceWidth) X = DeviceWidth - 200;
        if (Y + 200 > DeviceHeight) Y = DeviceHeight - 200;
        //@ts-ignore
        setPositionModalSelector({x: X, y: Y});
        console.log(x, y);
      });
    }
  }, [detailsRef.current]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Selector
        onChange={val => {
          if (val.value === 'Редактировать') navigation.navigate('AddProfile');
        }}
        onDelete={() => console.log('deleted')}
        isVisible={modalSelectorIsVisible}
        coords={modalSelectorCoordinates}
        options={SETTINGS}
      />
      <Toolbar
        noShadow
        onBack={() => {
          navigation.goBack();
        }}
        title="">
        <TouchableWithoutFeedback onPress={() => showModalSelector()}>
          <View ref={detailsRef}>
            <Details {...theme.icons.sizes} fill={theme.colors.dark} />
          </View>
        </TouchableWithoutFeedback>
      </Toolbar>
      <MainScrollableView verticalPadding="20px">
        <ProfileInfo>
          <Name size="big" weight={theme.font.weights.bold}>
            {breakName(name, surname)}
          </Name>
          <ImageGroup>
            <Profile source={{uri: photos.profile}} />
            <Sideview source={{uri: photos.sideview}} second />
          </ImageGroup>
        </ProfileInfo>
        <Analysises>
          {ANALYSISES.map(analysis => (
            <AnalysisCard key={analysis.id} analysis={analysis} />
          ))}
        </Analysises>
      </MainScrollableView>
    </View>
  );
};

const ProfileInfo = styled.View`
  display: flex;
  flex-direction: row;
`;
const Name = styled(Text)``;

const ImageGroup = styled.View`
  flex: 1;
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Profile = styled.Image`
  width: ${defaultTheme.avatars.sizes.profile.width};
  height: ${defaultTheme.avatars.sizes.profile.height};
  border-radius: ${defaultTheme.avatars.borderRadius.profile};
  z-index: 1;
`;

const leftOffset = Number(defaultTheme.avatars.sizes.profile.width.substr(0, 2)) / 2 + 'px';

const Sideview = styled(Profile)`
  z-index: 2;
  position: absolute;
  left: ${leftOffset};
`;

const Analysises = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;
