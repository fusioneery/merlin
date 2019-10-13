import React from 'react';
import {useTheme} from 'emotion-theming';
import {ifProp, prop} from 'styled-tools';
import {css} from '@emotion/native';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {getShadowStyle} from '@lib/shadow-style';
import {Text} from '@lib/wrappers/Text';

interface Option {
  label: string;
  value: any;
}
interface ISelectorProps {
  onChange(val): void;
  onDelete?(): void;
  onAdd?(): void;
  onExit?(): void;
  coords: {
    x: number;
    y: number;
  };
  value?;
  options: any;
}

export const Selector: React.FC<ISelectorProps> = ({
  onChange,
  value,
  options,
  onDelete,
  onAdd,
  onExit,
  coords,
}) => {
  const theme: ITheme = useTheme();
  console.log(coords);
  return (
    <TouchOutsideHandler onPress={onExit}>
      <Container
        style={{
          ...getShadowStyle(theme.shadow.heavy),
          left: coords.x,
          top: coords.y,
        }}>
        {options.length > 0 &&
          options.map((opt, idx) => (
            <Option onPress={() => onChange(opt.value)} key={opt.value}>
              <Text
                weight={opt.value === value ? theme.font.weights.bold : theme.font.weights.normal}
                color={theme.colors[opt.type] || theme.colors.dark}>
                {opt.label}
              </Text>
            </Option>
          ))}
        {onAdd && (
          <Option key="add" onPress={onAdd}>
            <Text color={theme.colors.neutral}>Добавить категорию</Text>
          </Option>
        )}
        {onDelete && (
          <Option key="delete" onPress={onDelete}>
            <Text color={theme.colors.error}>Удалить</Text>
          </Option>
        )}
      </Container>
    </TouchOutsideHandler>
  );
};

const Container = styled.View`
  position: absolute;
  background-color: white;
  border-radius: ${defaultTheme.borderRadius.normal};
  z-index: 3;
  padding: 22px 0;
`;

const Option = styled.TouchableOpacity`
  padding: 8px 20px;
`;

const TouchOutsideHandler = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: yellow;
`;
