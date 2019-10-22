import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from '@theme/styled';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '@ui/atoms/text';
import {prop, ifProp, switchProp} from 'styled-tools';
import {useTheme} from 'emotion-theming';
import {ITheme} from '@theme/theme-type';
import {defaultTheme} from '@theme/default-theme';
import Plus from 'assets/icons/plus.svg';

export interface IOption {
  value: any;
  label: string;
  active?: boolean;
}

interface IOptionProps {
  option?: IOption;
  isActive?: boolean;
  onSelect?(a: any): void;
  onAdd?(a: any): void;
  color?: 'primary' | 'secondary' | 'neutral';
}

const neutralGradient = ['#f7f7f7', '#f7f7f7'];

export const Option: React.FC<IOptionProps> = ({option, isActive, onSelect, onAdd, color = 'primary'}) => {
  const theme: ITheme = useTheme();
  return (
    <TouchableOpacity onPress={onAdd ? onAdd : onSelect}>
      <StyledLinearGradientContainer
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={isActive ? theme.gradients[color] : neutralGradient}>
        {!onAdd && option && (
          <Text
            weight={theme.font.weights.bold}
            color={isActive ? theme.colors.light : theme.colors.darkNeutral}
            size={'smallier'}>
            {option.label.toUpperCase()}
          </Text>
        )}
        {onAdd && <Plus width={24} height={24} />}
      </StyledLinearGradientContainer>
    </TouchableOpacity>
  );
};

const StyledLinearGradientContainer = styled(LinearGradient)`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 13px 31px;
  border-radius: ${defaultTheme.borderRadius.option};
`;
