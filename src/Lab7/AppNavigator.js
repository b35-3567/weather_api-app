// navigation/index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'; // Import StatusBar từ react-native
import BottomTabNavigator from './BottomTabNavigator';

const AppNavigator = () => (
  
  <NavigationContainer>
       <StatusBar barStyle="light-content" backgroundColor="#4d4c81" /> 
    {/* Đặt màu nền và kiểu chữ cho StatusBar */}
    <BottomTabNavigator />
  </NavigationContainer>
);

export default AppNavigator;
