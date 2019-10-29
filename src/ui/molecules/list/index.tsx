import React from 'react';
import styled from '@theme/styled';
import PrimaryPoint from '@assets/icons/point.svg';
import SecondaryPoint from '@assets/icons/point-secondary.svg';
import {Text} from '@ui/atoms/text';
import {prop} from 'styled-tools';

interface IListProps {
  items: [string];
  color?: 'primary' | 'secondary';
  marginBetweenItems?: string;
}

export const List: React.FC<IListProps> = ({items, color = 'primary', marginBetweenItems}) => {
  const Point = color === 'primary' ? PrimaryPoint : SecondaryPoint;
  return (
    <UIList>
      {items.map((item, idx) => (
        <Item marginBetweenItems={marginBetweenItems} key={idx}>
          <Point width={20} height={20} />
          <Paragraph>{item}</Paragraph>
        </Item>
      ))}
    </UIList>
  );
};

const UIList = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const Item = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${prop('marginBetweenItems')};
`;

const Paragraph = styled(Text)`
  margin-left: 20px;
  flex: 1;
`;
