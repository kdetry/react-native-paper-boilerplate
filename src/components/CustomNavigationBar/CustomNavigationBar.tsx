import React from 'react';
import { useContext } from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';

import { PreferencesContext } from 'context/Preferences/PreferencesContext';

import { TCustomNavigationBarProps } from './CustomNavigationBar.types';

export const CustomNavigationBar: React.FC<TCustomNavigationBarProps> = ({
  navigation,
  back,
}) => {
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);
  const openMenu = () => navigation.dispatch(DrawerActions.toggleDrawer);

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon="menu" color="white" onPress={openMenu} />
      )}
      <Appbar.Content title="My awesome app" />
      <Switch
        onChange={() => toggleTheme()}
        color={'red'}
        value={isThemeDark}
      />
    </Appbar.Header>
  );
};
