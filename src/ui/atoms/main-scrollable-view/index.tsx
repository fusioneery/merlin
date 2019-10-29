import React, {ReactNode} from 'react';
import {ScrollView} from 'react-native';
import styled from '@theme/styled';
import {defaultTheme} from '@theme/default-theme';
import {ifProp, ifNotProp, prop} from 'styled-tools';

interface IMainScrollableViewProps {
  noHorizontalPadding?: boolean;
  children: ReactNode;
  verticalPadding?: string;
}

export const MainScrollableView: React.FC<IMainScrollableViewProps> = ({
  noHorizontalPadding,
  children,
  verticalPadding,
}) => {
  return (
    <ScrollView>
      <Main verticalPadding={verticalPadding} noHorizontalPadding={noHorizontalPadding}>
        {children}
      </Main>
    </ScrollView>
  );
};

const Main = styled.View`
  padding: ${prop('verticalPadding', '35px')}
    ${ifNotProp('noHorizontalPadding', defaultTheme.padding.default, '0px')};
  background-color: ${defaultTheme.colors.light};
  flex: 1;
`;
