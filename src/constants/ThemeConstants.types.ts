import { Theme as TPaperTheme } from 'react-native-paper/lib/typescript/types';
import { Theme as TNavigationTheme } from '@react-navigation/native';

export type ThemeSpacing = {
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type CombinedTheme = TPaperTheme &
  TNavigationTheme & { spacing: ThemeSpacing };
