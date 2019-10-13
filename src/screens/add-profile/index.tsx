import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useTheme} from 'emotion-theming';
import {ifProp} from 'styled-tools';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {Toolbar} from '@features/navigation/toolbar';
import {UIButton} from '@ui/atoms/button';
import {Text} from '@lib/wrappers/Text';
import {Selector} from '@features/modal/selector';
import {inject, observer} from 'mobx-react';

import {getShadowStyle} from '@lib/shadow-style';
import {PhotoCard} from '@features/profiles/organisms/photo-card';
import {profilesStore} from '@features/profiles/store';

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

export const AddProfileScreen = observer(() => {
  const theme: ITheme = useTheme();
  const labelStyleParams = {size: theme.font.sizes.small, color: theme.colors.neutral};
  const categoryValRef: any = useRef(null);
  const [name, setName] = useState('Евгений Бугров');
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [category, setCategory] = useState(1);
  const setCategorySelectorCoords = () => {
    if (categoryValRef.current) {
      categoryValRef.current.measure((x, y, width, height, pageX, pageY) => {
        console.log(x, y, pageX, pageY);
        setCoords({x: pageX, y: pageY});
      });
    }
  };
  useEffect(() => {
    console.log(profilesStore.newProfile);
  }, [profilesStore.newProfile]);
  useEffect(() => {
    console.log('categoryValRef:', categoryValRef.current);
    if (categoryValRef.current) {
      categoryValRef.current.measure((x, y, width, height, pageX, pageY) => {
        console.log(x, y, pageX, pageY);
        setCoords({x: pageX, y: pageY});
      });
    }
  }, [categoryValRef.current]);
  return (
    <View onLayout={setCategorySelectorCoords} style={{flex: 1, backgroundColor: 'white'}}>
      <Toolbar title="Новая анкета" />
      <ScrollView>
        <Main>
          <InputGroup>
            <Field>
              <Text {...labelStyleParams}>ФИО</Text>
              <Input onChangeText={text => setName(text)} value={name} />
            </Field>
            <Field>
              <Text
                onPress={e => setCoords({x: e.nativeEvent.locationX, y: e.nativeEvent.locationY})}
                {...labelStyleParams}>
                Категория
              </Text>
              <CategoryValue ref={categoryValRef} weight={theme.font.weights.bold}>
                Дизайнеры
              </CategoryValue>
            </Field>
          </InputGroup>
          <PhotoCard
            photo={profilesStore.newProfilePhotos('profile')}
            onLoad={() => {
              profilesStore.takeNewProfilePhoto('profile');
            }}
            type="profile"
          />
          <PhotoCard type="sideview" />
          <ButtonContainer>
            <UIButton color="primary" title="Сохранить" />
          </ButtonContainer>
          {/* <Selector
          onChange={val => {
            console.warn(val);
          }}
          coords={coords}
          options={CATS}
        /> */}
        </Main>
      </ScrollView>
    </View>
  );
});

const Main = styled.View`
  padding: 35px ${defaultTheme.padding.default};
  background-color: ${defaultTheme.colors.light};
`;
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
  flex: 1;
  margin-left: 18px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
