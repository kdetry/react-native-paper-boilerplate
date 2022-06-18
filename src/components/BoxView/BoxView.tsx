import React from 'react';
import { useContext } from 'react';
import { View } from 'react-native';

import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
} from 'constants/ThemeConstants';
import { PreferencesContext } from 'context/Preferences/PreferencesContext';

import { BoxProps } from './BoxView.types';

export const BoxView: React.FC<BoxProps> = ({
  style,
  padding,
  margin,
  ...rest
}) => {
  const { isThemeDark } = useContext(PreferencesContext);
  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <View
      style={[
        {
          margin: margin && theme.spacing[margin],
          padding: padding && theme.spacing[padding],
          backgroundColor: theme.colors.background,
        },
        style,
      ]}
      {...rest}
    />
  );
};
