import { StyleSheet, View } from 'react-native';
import React from 'react';

const Demo8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
      <View style={styles.view4}></View>
      <View style={styles.view5}></View>
    
    </View>
  );
};

export default Demo8;

const styles = StyleSheet.create({
  view1: { backgroundColor: 'red', width: 50, height: 50 },
  view2: { backgroundColor: 'blue', width: 50, height: 50 },
  view3: { backgroundColor: 'green', width: 50, height: 50 },
  view4: { backgroundColor: 'orange', width: 50, height: 50 },
  view5: { backgroundColor: 'purple', width: 50, height: 50 },
  container: {
    flexDirection: 'row', // Sắp xếp theo hàng ngang
    justifyContent: 'space-between', // Cách đều các phần tử theo chiều ngang
    flexWrap:'wrap',
    padding: 10,
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
  },
});
