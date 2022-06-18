import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export type TCustomNavigationBarProps = Pick<
  NativeStackHeaderProps,
  'navigation' | 'back'
>;
