import React from 'react';
import {ThemeProvider} from 'emotion-theming';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CenteredView></CenteredView>
    </ThemeProvider>
  );
};

const CenteredView = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export default App;
