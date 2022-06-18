import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { THomeScreenProps } from './HomeScreen.types';
import { HomeScreenStyle } from './HomeScreenStyle';

export const HomeScreen = ({ navigation }: THomeScreenProps) => {
  return (
    <View style={HomeScreenStyle.homeSafeAreaView}>
      <Text>Home Screen</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() =>
          navigation.navigate('Detail', {
            detailId: (Math.random() * 100).toString(),
          })
        }>
        Click
      </Button>
    </View>
  );
};
