// navigation/TopTabNavigator.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChoBanScreen from './ChoBanScreen';
import TrucTiepScreen from './TrucTiepScreen';
import TroChoiScreen from './TroChoiScreen';
import CustomIcon from './CustomIcon';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => (
  <Tab.Navigator
  screenOptions={{
    tabBarStyle: { 
      backgroundColor: '#4d4c81', // Màu nền cho Top Tab
      height: 60, // Chiều cao của Top Tab
      borderBottomWidth: 2, // Độ dày của đường border
      borderBottomColor: '#ffffff', // Màu của đường border
      justifyContent: 'center', // Căn giữa đường border
    },
    showIcon: true, // Hiển thị icon
  }}
  >
    <Tab.Screen
      name="Cho Bạn"
      component={ChoBanScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <CustomIcon name="people" size={25} color={'white'} />
        ),
        tabBarLabel: () => null, // Sử dụng một hàm trả về null
      }}
    />
    <Tab.Screen
      name="Trực Tiếp"
      component={TrucTiepScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <CustomIcon name="live-tv" size={25} color={'red'} />
        ),
        tabBarLabel: () => null, // Sử dụng một hàm trả về null
      }}
    />
   <Tab.Screen
      name="Trò Chơi"
      component={TroChoiScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <CustomIcon name="games" size={25} color={'white'} />
        ),
        tabBarLabel: () => null, // Sử dụng một hàm trả về null
      }}
    />
  </Tab.Navigator>
);

export default TopTabNavigator;