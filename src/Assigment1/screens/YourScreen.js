// YourScreen.js
import React from 'react';
import { View, Text } from 'react-native';
//import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const YourScreen = () => {
 // const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Screen Content</Text>
      <Text>Bottom Tab Bar Height: </Text>
    </View>
  );
};

export default YourScreen;
