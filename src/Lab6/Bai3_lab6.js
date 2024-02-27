import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen_lab6';
import ArticleScreen from './ArticleScreen_lab6';
import ChatScreen from './ChatScreen_lab6';
import SettingScreen from './SettingScreen_lab6';
import DetailsScreen from './DetailsScreen_lab6';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ImageBackground } from 'react-native';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} >
        <ImageBackground
        source={require('../assets/blue_pink.jpg')} // Đường dẫn tới hình nền
        style={styles.drawerHeader}
      >
      <Avatar
          rounded
          size="large"
          source={{ uri: 'https://cdn.chanhtuoi.com/uploads/2022/01/hinh-avatar-nam-deo-kinh.jpg' }} // Replace with the URL of your avatar image
        />
        <Text style={styles.avatarText}>Nguyen Van A</Text>
        <Text style={styles.emailText}>vana@gmail.com</Text>
        </ImageBackground>
      <DrawerItemList {...props} />
      
      <DrawerItem
        label="Phiên bản ứng dụng 2.6.0"
        onPress={() => {}}
        labelStyle={styles.footerText}
      />
    </DrawerContentScrollView>
  );
};

const Bai3_lab6 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#f00',
          width: 240,
        }}
        screenOptions={{
            drawerActiveTintColor: 'orange',  // Màu khi label được nhấn
          }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
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

const styles = StyleSheet.create({
  drawerHeader: {
    flex: 1, //
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    
  },
  avatarText: {
    fontSize: 24,
    color: 'orange',
  },
  emailText: {
    fontSize: 16,
    color: 'black',
  },
  footerText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginTop:350
  },
});

export default Bai3_lab6;
