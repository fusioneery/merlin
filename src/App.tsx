import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'emotion-theming';
import {Immersive} from 'react-native-immersive';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {defaultTheme} from '@theme/default-theme';
import styled from '@theme/styled';
import {AddProfileScreen} from '@features/profiles/screens/add-profile';
import {PhotoInstructionScreen} from '@features/profiles/screens/add-profile/photo-instruction';
import {ResearchLandingPage} from '@features/researches/screens/research-landing';
import {ViewProfileScreen} from '@features/profiles/screens/view-profile';
import {Platform} from 'react-native';

const restoreImmersive = () => {
  Immersive.on();
};
if (Platform.OS === 'android') {
  restoreImmersive();
  Immersive.setImmersive(true);
  Immersive.addImmersiveListener(restoreImmersive);
  Immersive.removeImmersiveListener(restoreImmersive);
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaProvider>
        <SafeAreaView forceInset={{bottom: 'never'}} style={{flex: 1, backgroundColor: 'white'}}>
          <AppStack />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

const CenteredView = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const ProfileStack = createStackNavigator(
  {
    AddProfile: {
      screen: AddProfileScreen,
    },
    ViewProfile: {
      screen: ViewProfileScreen,
    },
    ResearchLanding: {
      screen: ResearchLandingPage,
    },
  },
  {
    headerMode: 'none',
  },
);

const AppNavigator = createStackNavigator(
  {
    Profile: {
      screen: ProfileStack,
    },
    AddProfileHintModal: {
      screen: PhotoInstructionScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    cardStyle: {
      // makes transparentCard work for android
      opacity: 1.0,
    },
  },
);

const AppStack = createAppContainer(AppNavigator);

export default App;
