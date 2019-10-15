import React from 'react';
import {Modal} from '@ui/atoms/modal';
import styled from '@theme/styled';
import {defaultTheme} from '@theme/default-theme';
import {getShadowStyle} from '@lib/shadow-style';
import {ITheme} from '@theme/theme-type';
import {useTheme} from 'emotion-theming';
//@ts-ignore
import Photo from '@assets/images/photo-instruction.jpg';
import Point from '@assets/icons/point.svg';
import {Text} from '@ui/atoms/text';

interface IPhotoInstructionScreenProps {
  navigation: any;
}

const INSTRUCTIONS = [
  'Волосы полностью убраны с ушей и лба',
  'Отсутствует макияж',
  'Нейтральное положение лица, взгляд перед собой',
  'Профиль - тело повёрнуто вместе с лицом',
  'Камера чётко направлена на испытуемого',
];

export const PhotoInstructionScreen: React.FC<IPhotoInstructionScreenProps> = ({navigation}) => {
  const theme: ITheme = useTheme();
  return (
    <Modal
      onBGPress={() => {
        navigation.goBack();
      }}
      visible={true}>
      <Card style={getShadowStyle(theme.shadow.light)}>
        <PhotoInstruction source={Photo} />
        <List>
          {INSTRUCTIONS.map(msg => (
            <Item key={msg}>
              <Point width={20} height={20} />
              <Paragraph>{msg}</Paragraph>
            </Item>
          ))}
        </List>
      </Card>
    </Modal>
  );
};

const Card = styled.View`
  z-index: 10;
  background-color: white;
  border-radius: ${defaultTheme.borderRadius.normal};
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 520px;
`;

const PhotoInstruction = styled.Image`
  flex: 2;
  width: 100%;
  border-top-left-radius: ${defaultTheme.borderRadius.normal};
  border-top-right-radius: ${defaultTheme.borderRadius.normal};
`;

const List = styled.View`
  flex: 5;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 15px 0;
`;

const Item = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Paragraph = styled(Text)`
  margin-left: 20px;
  flex: 1;
`;
