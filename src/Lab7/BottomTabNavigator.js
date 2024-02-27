// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen_lab7';
import SettingScreen from './SettingScreen_lab7';
import CallScreen from './CallScreen';
import TopTabNavigator from './TopTabNavigator';
import CustomIcon from './CustomIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
     activeBackgroundColor: '#4d4c81', // Màu nền khi tab được nhấn
      style: { backgroundColor: '#4d4c81' }, // Màu nền cho Bottom Tab
    }}
  >
    <Tab.Screen
      name="Home"
      component={TopTabNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <CustomIcon name="home" size={size} color={color} />
        ),
        headerShown: false, 
        tabBarLabel: () => null, // Ẩn chữ "Home" trên Bottom Tab
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <CustomIcon name="settings" size={size} color={color} />
        ),
        tabBarLabel: () => null, // Ẩn chữ "Setting" trên Bottom Tab
      }}
    />
    <Tab.Screen
      name="Call"
      component={CallScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <CustomIcon name="call" size={size} color={color} />
        ),
        tabBarLabel: () => null, // Ẩn chữ "Call" trên Bottom Tab
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
