// App_lab6.tsx
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bai2_lab6 from './Bai2_lab6';
import HomeScreen from './HomeScreen_lab6';
import DetailsScreen from './DetailsScreen_lab6';
import { NavigationContainer } from '@react-navigation/native';

type RootStackParamList = {
  Drawer: undefined; // Sử dụng 'Drawer' thay vì 'Home' ở đây để mở Drawer Navigator
  Home: undefined; 
  Details: { id: number; name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App_lab6: FC = () => {
  return (
    <NavigationContainer>
      
        <Stack.Screen name="Drawer" component={Bai2_lab6} />
        <Stack.Screen name="Home" component={HomeScreen}/>
     
    </NavigationContainer>
  );
};

export default App_lab6;
