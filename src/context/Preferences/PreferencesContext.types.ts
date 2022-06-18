import React from 'react';

export type TPreferencesContextGeneric = {
  toggleTheme: () => void;
  isThemeDark: boolean;
};

export type TPreferencesContext = React.Context<TPreferencesContextGeneric>;

export type PreferencesContextWrapperProps = {
  children: React.ReactNode;
};
