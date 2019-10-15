import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View, Alert} from 'react-native';
import {useStore} from 'effector-react';
import {useTheme} from 'emotion-theming';
import {ifProp} from 'styled-tools';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {Toolbar} from '@features/navigation/toolbar';
import {UIButton} from '@ui/atoms/button';
import {Text} from '@ui/atoms/text';
import {Selector} from '@features/modal/selector';

import {getShadowStyle} from '@lib/shadow-style';
import {PhotoCard} from '@features/profiles/organisms/photo-card';
import {takeNewProfilePhoto, newProfileRootStore, changeCategory, changeName} from '@features/profiles/model';
import Info from 'assets/icons/info.svg';
import {MainScrollableView} from '@ui/atoms/main-scrollable-view';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  setPositionModalSelector,
  modalSelectorCoordinates,
  modalSelectorStore,
  showModalSelector,
  hideModalSelector,
} from '@features/navigation/model';
import {useSafeArea} from 'react-native-safe-area-view';

interface IAddProfileScreenProps {}

const CATS = [
  {
    value: 'designers',
    label: 'Дизайнеры',
  },
  {
    value: 'hr',
    label: 'HR',
  },
  {
    value: 'programmers',
    label: 'Программисты',
  },
];

export const AddProfileScreen = ({navigation}) => {
  const theme: ITheme = useTheme();
  const {photos, name, category} = useStore(newProfileRootStore);
  const {top} = useSafeArea();
  const {modalSelectorCoordinates, modalSelectorIsVisible} = useStore(modalSelectorStore);
  const labelStyleParams = {size: theme.font.sizes.small, color: theme.colors.neutral};
  const categoryValRef: any = useRef(null);
  const goToProfile = () => {
    let errors: Array<string> = [];
    if (name.length === 0) errors.push('Введите, пожалуйста, имя пациента.');
    if (!photos.profile || !photos.sideview) errors.push('Добавьте два фото пациента.');
    if (errors.length === 0) {
      navigation.navigate('ViewProfile');
    } else {
      Alert.alert('Невозможно добавить пациента', errors.join(' \n'), [{text: 'OK', onPress: () => {}}], {
        cancelable: false,
      });
    }
  };
  useEffect(() => {
    if (categoryValRef.current) {
      categoryValRef.current.measureInWindow((x, y, width, height, pageX, pageY) => {
        //@ts-ignore
        setPositionModalSelector({x: pageX || x, y: (pageY || y) - top - 35 - height});
      });
    }
  }, [categoryValRef.current]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Toolbar
        onBack={() => {
          console.log('go back');
        }}
        title="Новая анкета">
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('AddProfileHintModal');
          }}>
          <Info {...theme.icons.sizes} fill={theme.colors.dark} />
        </TouchableWithoutFeedback>
      </Toolbar>
      <MainScrollableView>
        <InputGroup>
          <Field>
            <Text {...labelStyleParams}>ФИО</Text>
            <Input onChangeText={text => changeName(text)} value={name} />
          </Field>
          <Field>
            <Text {...labelStyleParams}>Категория</Text>
            <CategoryValue onPress={showModalSelector} ref={categoryValRef} weight={theme.font.weights.bold}>
              {category.label}
            </CategoryValue>
          </Field>
        </InputGroup>
        <PhotoCard
          photo={photos.profile}
          onLoad={() => {
            takeNewProfilePhoto('profile');
          }}
          type="profile"
        />
        <PhotoCard
          photo={photos.sideview}
          onLoad={() => {
            takeNewProfilePhoto('sideview');
          }}
          type="sideview"
        />
        <ButtonContainer>
          <UIButton
            onPress={() => {
              goToProfile();
            }}
            color="primary"
            title="Сохранить"
          />
        </ButtonContainer>
        <Selector
          onChange={val => {
            changeCategory(val);
          }}
          isVisible={modalSelectorIsVisible}
          coords={modalSelectorCoordinates}
          options={CATS}
        />
      </MainScrollableView>
    </View>
  );
};

const InputGroup = styled.View`
  margin-bottom: 30px;
`;
const Field = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  &:not(:first-of-type) {
    margin-top: 20px;
  }
`;
const Input = styled.TextInput`
  flex: 1;
  margin-left: 32px;
  font-size: ${defaultTheme.font.sizes.normal};
  padding-bottom: 5px;
  top: 7px;
  border-bottom-color: #d8d9e2;
  border-bottom-width: 1px;
`;

const CategoryValue = styled(Text)`
  margin-left: 18px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
