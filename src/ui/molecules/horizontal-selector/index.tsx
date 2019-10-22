import React from 'react';
import {prop, ifProp, switchProp} from 'styled-tools';
import {useTheme} from 'emotion-theming';
import styled from '@theme/styled';
import {ITheme} from '@theme/theme-type';
import {defaultTheme} from '@theme/default-theme';
import {IOption, Option} from '@ui/atoms/option';

interface IHorizontalSelectorProps {
  options: Array<IOption>;
  onAdd?(a: any): void;
  onSelect(opt: IOption): void;
  activeOption: IOption;
  color?: 'primary' | 'secondary' | 'neutral';
  style?: any;
}

export const HorizontalSelector: React.FC<IHorizontalSelectorProps> = ({
  options,
  onAdd,
  onSelect,
  activeOption,
  color = 'primary',
  style,
}) => {
  const theme: ITheme = useTheme();
  return (
    <Container style={style} showsHorizontalScrollIndicator={false} horizontal>
      {options.map((opt, idx) => (
        <StyledOption first={idx === 0} last={idx === options.length - 1} key={opt.value}>
          <Option
            option={opt}
            onSelect={() => {
              onSelect(opt);
            }}
            isActive={opt.value === activeOption.value}
            color={color}
          />
        </StyledOption>
      ))}
      {onAdd && <Option onAdd={onAdd} />}
    </Container>
  );
};

const Container = styled.ScrollView`
  width: 100%;
`;

const StyledOption = styled.View`
  margin-right: 10px;
  ${ifProp('first', `margin-left: ${defaultTheme.padding.default};`)}
  ${ifProp('last', `margin-right: ${defaultTheme.padding.default};`)}
`;
