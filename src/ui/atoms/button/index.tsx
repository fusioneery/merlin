import React, {ReactNode} from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import {prop, ifProp} from 'styled-tools';
import {useTheme} from 'emotion-theming';
import LinearGradient from 'react-native-linear-gradient';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {Text} from '@lib/wrappers/Text';
import {getShadowStyle} from '@lib/shadow-style';

interface IButtonProps {
  onPress?(): void;
  title?: string;
  accessibilityLabel?: string;
  color: 'primary' | 'secondary' | 'neutral';
  disabled?: boolean;
  testID?: string;
  size?: 'normal' | 'big';
  outlined?: boolean;
  isTextOnly?: boolean;
}

const UIButton = (props: IButtonProps) => {
  const {
    isTextOnly = false,
    title = 'Отправить',
    color = 'primary',
    onPress,
    size = 'normal',
    outlined,
  } = props;
  const theme: any = useTheme();
  const textSize = size == 'normal' ? theme.font.sizes.small : theme.font.sizes.normal;
  const textInGradientCommonProps = {
    color: theme.colors[color],
    size: textSize,
    fontFamily: theme.fontFamily,
  };
  const text = title.toUpperCase();
  if (isTextOnly) {
    if (Platform.OS == 'ios') {
      return (
        <TouchableOpacity onPress={onPress}>
          <MaskedView maskElement={<TextInGradient {...textInGradientCommonProps}>{text}</TextInGradient>}>
            <StyledLinearGradientContainer
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={theme.gradients[color]}>
              <TextInGradient {...textInGradientCommonProps} style={{opacity: 0}}>
                {text}
              </TextInGradient>
            </StyledLinearGradientContainer>
          </MaskedView>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={onPress}>
          <TextInGradient {...textInGradientCommonProps}>{text}</TextInGradient>
        </TouchableOpacity>
      );
    }
  }
  if (outlined) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Outline color={theme.colors[color]} radius={theme.buttons.borderRadius} size={size}>
          <TextInGradient {...textInGradientCommonProps}>{text}</TextInGradient>
        </Outline>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={getShadowStyle(theme.shadow.heavy)} onPress={onPress}>
      <StyledLinearGradient
        size={size}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        radius={theme.buttons.borderRadius}
        color={color}
        colors={theme.gradients[color]}>
        <TextInGradient color="white" size={textSize} fontFamily={theme.font.family}>
          {title.toUpperCase()}
        </TextInGradient>
      </StyledLinearGradient>
    </TouchableOpacity>
  );
};

const TextInGradient = styled(Text)`
  color: ${prop('color')};
  font-family: ${prop('fontFamily')};
  font-weight: bold;
`;

const StyledLinearGradient = styled(LinearGradient)`
  padding: 10px ${ifProp({size: 'big'}, '60px', '20px')};
  border-radius: ${prop('radius')};
`;

const StyledLinearGradientContainer = styled(LinearGradient)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Outline = styled.View`
  padding: 10px ${ifProp({size: 'big'}, '60px', '20px')};
  border-radius: ${prop('radius')};
  border: 1px solid ${prop('color')};
  background-color: transparent;
`;

export {UIButton};
