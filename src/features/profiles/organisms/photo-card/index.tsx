import React from 'react';
import {useTheme} from 'emotion-theming';
import LinearGradient from 'react-native-linear-gradient';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import Profile from 'assets/icons/face-profile.svg';
import Sideview from 'assets/icons/face-sideview.svg';
import {UIButton} from '@ui/atoms/button';
import {getShadowStyle} from '@lib/shadow-style';
import {Text} from '@ui/atoms/text';
import {normalize} from '@lib/normalize-font';
import {Shadow} from '@ui/atoms/shadow';

interface IPhotoCardProps {
  type: 'profile' | 'sideview';
  photo?: any;
  onLoad?: any;
}

export const PhotoCard: React.FC<IPhotoCardProps> = ({type, onLoad, photo}) => {
  const iconStyle = {marginTop: 60, zIndex: 5};
  const theme: ITheme = useTheme();
  const Icon = type == 'profile' ? Profile : Sideview;
  const photoStyles = {
    borderRadius: 33, // emotion doesnt support border radius for image background
  };
  const hasPhoto = photo;
  return (
    //@ts-ignore
    <StyledShadow shadow={theme.cards.shadow} radius={theme.cards.borderRadius}>
      <Card style={getShadowStyle(theme.cards.shadow)} title="">
        {!hasPhoto && <Icon style={iconStyle} {...theme.cards.iconSizes} />}
        <Caption color={theme.colors.neutral}>Фото в {type == 'profile' ? 'профиль' : 'фас'}</Caption>
        <UIButton
          style={{zIndex: 5}}
          onPress={onLoad}
          size="big"
          isTextOnly
          color="primary"
          title={photo ? 'изменить' : 'загрузить'}
        />
        {hasPhoto && (
          <>
            <Overlay
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              colors={theme.cards.overlayGradient}></Overlay>

            <Photo imageStyle={photoStyles} source={{uri: photo}} />
          </>
        )}
      </Card>
    </StyledShadow>
  );
};

const Card = styled.View`
  padding: 25px;
  border-radius: ${defaultTheme.cards.borderRadius};
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 32px;
  min-height: ${defaultTheme.cards.height};
`;

const Caption = styled(Text)`
  margin-top: 27px;
  margin-bottom: 16px;
  z-index: 5;
`;

const Photo = styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  border-radius: ${defaultTheme.cards.borderRadius};
`;

const Overlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  border-radius: ${defaultTheme.cards.borderRadius};
`;

const StyledShadow = styled(Shadow)`
  margin-bottom: 32px;
  z-index: 1;
`;
