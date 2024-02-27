import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button, TouchableWithoutFeedback  } from 'react-native'
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'react-native-heroicons/outline';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Setting = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingButton}>
        <MaterialIcons name="chevron-left" size={30} color="#df7232" />
        <Text style={styles.settingText}>Setting</Text>
      </TouchableOpacity>

      {renderItem('history', 'History')}
      {renderItem('person', 'Personal Setting')}
      {renderItem('location-on', 'Address')}
      {renderItem('payment', 'Payment Method')}
      {renderItem('info', 'About')}
      {renderItem('help', 'Help')}
      {renderItem('exit-to-app', 'Log out')}
    </View>
  );
};

const renderItem = (iconName, text) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <MaterialIcons name={iconName} size={24} color="#df7232" />
      <Text style={styles.itemText}>{text}</Text>
      <MaterialIcons name="chevron-right" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    backgroundColor: 'black',
    padding: 20,
    width:'100%',
    height:'100%',
  },
  settingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    color: 'white',
    fontSize: 20,
    marginLeft:140
    
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop:15
  },
  itemText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 25,
    flex: 1,
  },
});

export default Setting