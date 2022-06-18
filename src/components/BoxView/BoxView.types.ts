import { StyleProp, ViewProps, ViewStyle } from 'react-native';

import { ThemeSpacing } from 'constants/ThemeConstants.types';

export type BoxProps = ViewProps & {
  style?: StyleProp<ViewStyle>;
  padding?: keyof ThemeSpacing;
  margin?: keyof ThemeSpacing;
};
