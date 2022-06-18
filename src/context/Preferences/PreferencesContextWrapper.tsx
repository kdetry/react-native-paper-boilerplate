import React, { useCallback, useState } from 'react';
import { useColorScheme } from 'react-native';

import { PreferencesContext } from 'context/Preferences/PreferencesContext';

import {
  PreferencesContextWrapperProps,
  TPreferencesContextGeneric,
} from './PreferencesContext.types';

export const PreferencesContextWrapper: React.FC<
  PreferencesContextWrapperProps
> = ({ children }) => {
  const colorScheme = useColorScheme();

  const toggleTheme = () =>
    setState(prev => ({ ...prev, isThemeDark: !prev.isThemeDark }));

  const [state, setState] = useState<TPreferencesContextGeneric>({
    isThemeDark: colorScheme === 'dark',
    toggleTheme: toggleTheme,
  });

  return (
    <PreferencesContext.Provider value={state}>
      {children}
    </PreferencesContext.Provider>
  );
};
