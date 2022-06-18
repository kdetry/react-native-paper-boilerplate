import React from 'react';

import { PreferencesContextWrapper } from 'context/Preferences/PreferencesContextWrapper';

import { MainRoute } from './MainRoute';

export const App = () => {
  return (
    <PreferencesContextWrapper>
      <MainRoute />
    </PreferencesContextWrapper>
  );
};
