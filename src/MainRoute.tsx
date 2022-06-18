import React, { useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomeStackScreen } from 'screens/HomeStackScreen';

import { CustomDrawerContent } from 'components/CustomDrawerContent';

import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
} from 'constants/ThemeConstants';
import { PreferencesContext } from 'context/Preferences/PreferencesContext';

const Drawer = createDrawerNavigator();

export const MainRoute: React.FC = () => {
  const { isThemeDark } = useContext(PreferencesContext);
  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Drawer.Navigator
          drawerContent={() => <CustomDrawerContent />}
          screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
