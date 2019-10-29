import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View, Alert, TouchableWithoutFeedback} from 'react-native';
import {useStore} from 'effector-react';
import {useTheme} from 'emotion-theming';
import {ifProp, prop, ifNotProp} from 'styled-tools';
import DialogInput from 'react-native-dialog-input';
import {useSafeArea} from 'react-native-safe-area-view';

import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {Toolbar} from '@features/navigation/toolbar';
import {UIButton} from '@ui/atoms/button';
import {Text} from '@ui/atoms/text';
import {Selector} from '@features/modal/selector';
import {getShadowStyle} from '@lib/shadow-style';
import {PhotoCard} from '@features/profiles/organisms/photo-card';
import {
  takeNewProfilePhoto,
  newProfileRootStore,
  changeCategory,
  changeName,
  changeSurname,
} from '@features/profiles/model';
import Info from 'assets/icons/info.svg';
import {MainScrollableView} from '@ui/atoms/main-scrollable-view';
import {
  setPositionModalSelector,
  modalSelectorCoordinates,
  modalSelectorStore,
  showModalSelector,
  hideModalSelector,
} from '@features/navigation/model';
import {
  optionsStore,
  refillOptions,
  chooseOption,
  addOption,
  openAddOptionDialog,
  closeAddOptionDialog,
  addOptionDialog,
} from '@features/modal/model';
import {HorizontalSelector} from '@ui/molecules/horizontal-selector';

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
  const {photos, name, surname, category} = useStore(newProfileRootStore);
  const {top} = useSafeArea();
  const {modalSelectorCoordinates, modalSelectorIsVisible} = useStore(modalSelectorStore);
  const opts: any[] = useStore(optionsStore);
  const isDialogVisible = useStore(addOptionDialog);
  const labelStyleParams = {
    size: 'small',
    color: theme.colors.neutral,
    isUpperCase: true,
    weight: theme.font.weights.bold,
  };
  const inputParams = {
    placeholderTextColor: theme.colors.lightNeutral,
    placeholder: 'Введите текст',
  };
  const categoryValRef: any = useRef(null);
  const goToProfile = () => {
    let errors: Array<string> = [];
    if (name.length === 0) errors.push('Введите, пожалуйста, имя пациента.');
    if (surname.length === 0) errors.push('Введите, пожалуйста, фамилию пациента.');
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

  useEffect(() => {
    refillOptions(CATS);
  }, []);

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
      <MainScrollableView noHorizontalPadding>
        <InputGroup>
          <Field>
            <Text {...labelStyleParams}>Фамилия</Text>
            <Input {...inputParams} onChangeText={text => changeSurname(text)} value={surname} />
          </Field>
          <Field>
            <Text {...labelStyleParams}>Имя</Text>
            <Input {...inputParams} onChangeText={text => changeName(text)} value={name} />
          </Field>
          <Field noHorizontalPadding>
            <CategoryLabel {...labelStyleParams}>Категория</CategoryLabel>
            <StyledHorizontalSelector
              onSelect={val => {
                changeCategory(val);
                chooseOption(val);
              }}
              //@ts-ignore
              onAdd={openAddOptionDialog}
              activeOption={category}
              options={opts}
            />
            {/* <CategoryValue onPress={showModalSelector} ref={categoryValRef} weight={theme.font.weights.bold}>
              {category.label}
            </CategoryValue> */}
          </Field>
        </InputGroup>
        <Padding>
          <PhotoCard
            idx={12}
            photo={photos.profile}
            onLoad={() => {
              takeNewProfilePhoto('profile');
            }}
            type="profile"
          />
          <PhotoCard
            idx={11}
            photo={photos.sideview}
            onLoad={() => {
              takeNewProfilePhoto('sideview');
            }}
            type="sideview"
          />
          <ButtonContainer>
            <Button
              onPress={() => {
                goToProfile();
              }}
              color="primary"
              size="superbig"
              title="Сохранить"
            />
          </ButtonContainer>
        </Padding>
        {/* <Selector
          onChange={val => {
            changeCategory(val);
            chooseOption(val);
          }}
          //@ts-ignore
          onAdd={openAddOptionDialog}
          value={category.value}
          isVisible={modalSelectorIsVisible}
          coords={modalSelectorCoordinates}
          options={opts}
          // value={opts.filter(el => el.active).value}
        /> */}
        <DialogInput
          textInputProps={{autoCorrect: false}}
          isDialogVisible={isDialogVisible}
          title="Добавить категорию"
          hintInput="Введите название"
          cancelText="Отмена"
          submitText="Сохранить"
          submitInput={inp => {
            const opt = {value: inp, label: inp};
            //@ts-ignore
            addOption(opt);
            closeAddOptionDialog();
          }}
          closeDialog={closeAddOptionDialog}></DialogInput>
      </MainScrollableView>
    </View>
  );
};

const InputGroup = styled.View`
  margin-top: 24px;
  margin-bottom: 36px;
`;
const Field = styled.View`
  display: flex;
  margin-bottom: 40px;
  padding: 0 ${ifNotProp('noHorizontalPadding', defaultTheme.padding.default, '0')};
`;

const Padding = styled.View`
  padding: 0 ${defaultTheme.padding.default};
`;

const Input = styled.TextInput`
  flex: 1;
  margin-top: 16px;
  min-height: 24px;
  font-size: ${defaultTheme.font.sizes.big};
  color: ${defaultTheme.colors.dark};
  padding-bottom: 7px;
  border-bottom-color: #ededed;
  border-bottom-width: 1px;
`;

const CategoryValue = styled(Text)`
  margin-left: 18px;
`;

const CategoryLabel = styled(Text)`
  padding: 0 ${defaultTheme.padding.default};
`;

const StyledHorizontalSelector = styled(HorizontalSelector)`
  margin-top: 20px;
`;

const ButtonContainer = styled.View`
  /* flex-direction: row;
  justify-content: flex-end;
  align-items: center; */
  z-index: 11;
`;

const Button = styled(UIButton)`
  margin-bottom: 15px;
`;
