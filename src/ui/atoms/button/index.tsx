import React, {ReactNode} from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import {prop, ifProp, switchProp} from 'styled-tools';
import {useTheme} from 'emotion-theming';
import LinearGradient from 'react-native-linear-gradient';
import styled from '@theme/styled';
import {ITheme, Colors} from '@theme/theme-type';
import {Text} from '@ui/atoms/text';
import {getShadowStyle} from '@lib/shadow-style';
import {defaultTheme} from '@theme/default-theme';

const getTextSize = size => {
  switch (size) {
    case 'normal':
      return 'small';
    case 'big':
      return 'normal';
    case 'superbig':
      return 'smallier';
    default:
      return 'small';
  }
};

interface IButtonProps {
  onPress?(): void;
  title?: string;
  accessibilityLabel?: string;
  color: Colors;
  disabled?: boolean;
  testID?: string;
  size?: 'normal' | 'big' | 'superbig';
  outlined?: boolean;
  isTextOnly?: boolean;
  style?: any;
  weight?: string;
  isLowerCase?: boolean;
}

const UIButton = (props: IButtonProps) => {
  const theme: any = useTheme();
  const {
    isTextOnly = false,
    isLowerCase = false,
    title = 'Отправить',
    color = 'primary',
    weight = theme.font.weights.bold,
    onPress,
    size = 'normal',
    outlined,
    style,
  } = props;
  const textSize = getTextSize(size);
  const textInGradientCommonProps = {
    color: theme.colors[color],
    weight: weight,
    size: textSize,
    fontFamily: theme.fontFamily,
    textAlign: 'center',
  };
  const text = isLowerCase ? title : title.toUpperCase();
  if (isTextOnly) {
    if (Platform.OS == 'ios') {
      return (
        <TouchableOpacity style={style} onPress={onPress}>
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
        <TouchableOpacity style={style} onPress={onPress}>
          <TextInGradient {...textInGradientCommonProps}>{text}</TextInGradient>
        </TouchableOpacity>
      );
    }
  }
  if (outlined) {
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Outline color={theme.colors[color]} radius={theme.buttons.borderRadius} size={size}>
          <TextInGradient {...textInGradientCommonProps}>{text}</TextInGradient>
        </Outline>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={{...getShadowStyle(theme.shadow.heavy), ...style}} onPress={onPress}>
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
  font-weight: ${prop('weight', 'bold')};
  text-align: center;
`;

const StyledLinearGradient = styled(LinearGradient)`
  padding: ${switchProp('size', {
    big: '10px 60px',
    normal: '10px 20px',
    superbig: '16px 65px',
  })};
  border-radius: ${prop('radius')};
`;

const StyledLinearGradientContainer = styled(LinearGradient)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Outline = styled.View`
  padding: ${switchProp('size', {
    big: '10px 60px',
    normal: '10px 20px',
    superbig: '16px 65px',
  })};
  border-radius: ${prop('radius')};
  border: 1px solid ${prop('color')};
  background-color: transparent;
`;

export {UIButton};
