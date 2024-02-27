import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen_lab6';
import ArticleScreen from './ArticleScreen_lab6';
import ChatScreen from './ChatScreen_lab6';
import SettingScreen from './SettingScreen_lab6';
import DetailsScreen from './DetailsScreen_lab6';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text , StyleSheet,ScrollView} from 'react-native'
const Drawer = createDrawerNavigator();

const Bai2_lab6 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#f00',
          width: 240,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: () => <Icon name="home" size={24} />,
          }}
        />
        <Drawer.Screen
          name="Article"
          component={ArticleScreen}
          options={{
            drawerIcon: () => <Icon name="document-text-outline" size={24} />,
          }}
        />
        <Drawer.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            drawerIcon: () => <Icon name="chatbox-ellipses-outline" size={24} />,
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            drawerIcon: () => <Icon name="settings-outline" size={24} />,
          }}
        />
         <Drawer.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            drawerIcon: () => <Icon name="settings-outline" size={24} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Bai2_lab6;
