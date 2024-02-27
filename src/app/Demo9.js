import { View, StyleSheet } from 'react-native';
import React from 'react';

const Demo9 = () => {
  return (
    <View style={styles.container}>
      <View>
      <View style={[styles.view, styles.view1]}></View>
      <View style={[styles.view, styles.view2]}></View>
      </View>
     


      <View style={[styles.view, styles.centerView]}></View>

     <View>
     <View style={[styles.view, styles.view3]}></View>
      <View style={[styles.view, styles.view4]}></View>
     </View>
      
     
    </View>
  );
};

export default Demo9;

const styles = StyleSheet.create({
  view: { width: 50, height: 50 },
  view1: { backgroundColor: 'red' },
  view2: { backgroundColor: 'blue' },
  view3: { backgroundColor: 'green' },
  view4: { backgroundColor: 'orange' },
  centerView: { backgroundColor: 'purple' },
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
  },
});
