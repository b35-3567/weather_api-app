import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Image } from 'react-native';
import HomeScreen_lab7 from './HomeScreen_lab7';
import FeedScreen_lab7 from './FeedScreen_lab7';
import NotificationsScreen_lab7 from './NotificationsScreen_lab7';
import ProfileScreen_lab7 from './ProfileScreen_lab7';
import { StatusBar } from 'react-native'; // Import StatusBar từ react-native
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const ICONS_MENU = {
  Home: 'https://cdn-icons-png.freepik.com/256/846/846449.png', // Thay thế bằng URL hình ảnh thật
  Feed: 'https://t4.ftcdn.net/jpg/05/88/34/51/360_F_588345136_LwvIcsbOB5vQtONkhMvNGGMsJbtEJQ6c.jpg',
  Notifications: 'https://cdn-icons-png.flaticon.com/512/3239/3239958.png',
  Profile: 'https://static.thenounproject.com/png/4037736-200.png',
};

const renderLabel = (props) =>
  props.focused ? (
    <Text style={[styles.labelStyle, { color: props.color }]}>
      {props.children}
    </Text>
  ) : null;

const renderIcon = (icon, props) => (
  <Image
    source={{ uri: icon }}
    style={{ tintColor: props.color, height: 16, width: 16 }}
  />
);

const Bai1_lab7 = () => {
  return (
    <NavigationContainer>
       <StatusBar barStyle="light-content" backgroundColor="#4d4c81" /> 
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FF6C22',
        tabBarLabelStyle: { flexDirection: 'row' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen_lab7}
        options={{
          tabBarIcon: (props) => renderIcon(ICONS_MENU.Home, props),
          tabBarLabel: (props) => renderLabel(props),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen_lab7}
        options={{
          tabBarIcon: (props) => renderIcon(ICONS_MENU.Feed, props),
          tabBarLabel: (props) => renderLabel(props),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen_lab7}
        options={{
          tabBarIcon: (props) => renderIcon(ICONS_MENU.Notifications, props),
          tabBarLabel: (props) => renderLabel(props),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen_lab7}
        options={{
          tabBarIcon: (props) => renderIcon(ICONS_MENU.Profile, props),
          tabBarLabel: (props) => renderLabel(props),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = {
  labelStyle: {
    fontSize: 12,
    textAlign: 'center',
  },
};

export default Bai1_lab7;
