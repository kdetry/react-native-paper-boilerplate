import React from 'react';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BoxView } from 'components/BoxView';

import { TDetailScreenProps } from './DetailScreen.types';

export const DetailsScreen: React.FC<TDetailScreenProps> = ({
  route: {
    params: { detailId },
  },
}) => (
  <SafeAreaView>
    <BoxView
      margin="m"
      padding="m"
      style={{ width: 200, height: 200, backgroundColor: 'red' }}>
      <Text>It is in the boxview</Text>
    </BoxView>
    <Text>Detail {detailId}</Text>
  </SafeAreaView>
);
