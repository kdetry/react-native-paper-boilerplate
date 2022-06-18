import React from 'react';
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';

export const CustomDrawerContent: React.FC = () => {
  const [active, setActive] = React.useState('');

  return (
    <DrawerContentScrollView>
      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          icon="star"
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          icon="mail"
          onPress={() => setActive('second')}
        />
        <Drawer.Item
          label="Third Item"
          active={active === 'third'}
          icon="download"
          onPress={() => setActive('third')}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};
