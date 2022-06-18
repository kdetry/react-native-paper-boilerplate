import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen } from 'screens/DetailsScreen';
import { HomeScreen } from 'screens/HomeScreen';

import { CustomNavigationBar } from 'components/CustomNavigationBar';

import { RootStackParamList } from 'constants/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackScreen: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => (
          <CustomNavigationBar
            navigation={props.navigation}
            back={props.back}
          />
        ),
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
