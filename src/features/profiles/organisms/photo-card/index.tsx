import React from 'react';
import {useTheme} from 'emotion-theming';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import Profile from 'assets/icons/face-profile.svg';
import Sideview from 'assets/icons/face-sideview.svg';
import {UIButton} from '@ui/atoms/button';
import {getShadowStyle} from '@lib/shadow-style';
import {Text} from '@lib/wrappers/Text';

interface IPhotoCardProps {
  type: 'profile' | 'sideview';
  photo?: any;
  onLoad?: any;
}

export const PhotoCard: React.FC<IPhotoCardProps> = ({type, onLoad, photo}) => {
  const iconStyle = {marginTop: 60};
  const theme: ITheme = useTheme();
  const Icon = type == 'profile' ? Profile : Sideview;
  return (
    <Card style={getShadowStyle(theme.cards.shadow)} title="">
      {!photo && <Icon style={iconStyle} {...theme.cards.iconSizes} />}
      <Caption color={theme.colors.neutral}>Фото в {type == 'profile' ? 'профиль' : 'фас'}</Caption>
      <UIButton
        onPress={onLoad}
        size="big"
        isTextOnly
        color="primary"
        title={photo ? 'изменить' : 'загрузить'}
      />
      {photo && <Photo source={photo} />}
    </Card>
  );
};

const Card = styled.View`
  padding: 25px;
  border-radius: ${defaultTheme.cards.borderRadius};
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 32px;
  min-height: 345px;
`;

const Caption = styled(Text)`
  margin-top: 27px;
  margin-bottom: 16px;
`;

const Photo = styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;
