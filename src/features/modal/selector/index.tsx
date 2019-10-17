import React from 'react';
import {useTheme} from 'emotion-theming';
import {ifProp, prop} from 'styled-tools';
import {css} from '@emotion/native';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {getShadowStyle} from '@lib/shadow-style';
import {Text} from '@ui/atoms/text';
import {hideModalSelector} from '@features/navigation/model';
import {TouchableWithoutFeedback} from 'react-native';
import {Shadow} from '@ui/atoms/shadow';

interface Option {
  label: string;
  value: any;
  type?: 'error' | 'neutral';
}
interface ISelectorProps {
  onChange(val): void;
  onDelete?(): void;
  onAdd?(): any;
  onExit?(): void;
  coords: {
    x: number;
    y: number;
  };
  value?;
  options: any;
  isVisible?: boolean;
}

export const Selector: React.FC<ISelectorProps> = ({
  onChange,
  value,
  isVisible,
  options,
  onDelete,
  onAdd,
  onExit,
  coords,
}) => {
  const theme: ITheme = useTheme();
  console.log(coords);
  return (
    <>
      {isVisible && (
        <TouchableWithoutFeedback
          onPress={() => {
            onExit && onExit();
            hideModalSelector();
          }}>
          <TouchOutsideView>
            <Container left={coords.x} top={coords.y}>
              {options.length > 0 &&
                options.map((opt, idx) => (
                  <Option
                    onPress={() => {
                      onChange(opt);
                      hideModalSelector();
                    }}
                    key={opt.value}>
                    <Text
                      weight={opt.value === value ? theme.font.weights.bold : theme.font.weights.normal}
                      color={theme.colors[opt.type] || theme.colors.dark}>
                      {opt.label}
                    </Text>
                  </Option>
                ))}
              {onAdd && (
                <Option
                  key="add"
                  onPress={() => {
                    onAdd();
                    hideModalSelector();
                  }}>
                  <Text color={theme.colors.neutral}>Добавить категорию</Text>
                </Option>
              )}
              {onDelete && (
                <Option
                  key="delete"
                  onPress={() => {
                    onDelete();
                    hideModalSelector();
                  }}>
                  <Text color={theme.colors.error}>Удалить</Text>
                </Option>
              )}
            </Container>
          </TouchOutsideView>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

const Container = styled.View`
  background-color: white;
  position: absolute;
  top: ${prop('top')}px;
  left: ${prop('left')}px;
  border-radius: ${defaultTheme.borderRadius.normal};
  padding: 22px 0;
  elevation: 10;
`;

const Option = styled.TouchableOpacity`
  padding: 8px 20px;
  min-width: 170px;
`;

const TouchOutsideView = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  flex: 1;
  z-index: 7;
`;
