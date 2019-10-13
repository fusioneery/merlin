import React from 'react';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import {ThemeProvider} from 'emotion-theming';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {AddProfileScreen} from '@screens/add-profile';
import {profilesStore} from '@features/profiles/store';

// configure({enforceActions: true});

const App: React.FC = () => {
  return (
    // <Provider profilesStore={profilesStore}>
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaProvider>
        <SafeAreaView forceInset={{bottom: 'never'}} style={{flex: 1, backgroundColor: 'white'}}>
          <AddProfileScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
    // </Provider>
  );
};

const CenteredView = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export default App;
