// CustomIcon.js
import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CustomIcon = ({ name, size, color }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <MaterialIcons name={name} size={size} color={color} />
    <Text style={{ marginLeft: 5 ,fontSize:15,color:'white'}}>{name}</Text>
  </View>
);

export default CustomIcon;
