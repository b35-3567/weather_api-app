import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import CustomIcon from '../Assigment1/components/CustomIcon';
const Custom = () => {
  return (
    <View style={styles.container}>
    <CustomIcon
    name="home"
    size={55}
    color={'green'}
  />
    <Text>gggggggg</Text>
  </View>

  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Custom