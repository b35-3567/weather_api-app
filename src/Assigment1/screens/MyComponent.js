import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="white"
          style={styles.input}
        />
    
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 2, marginTop: 29, borderColor: 'white', borderWidth: 1 }}>
    <TextInput placeholder="Email Address"placeholderTextColor="white" style={{ padding: 16, flex: 1, fontWeight: 'bold', color: 'white' }} />
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 29,
    borderColor: 'white',
    borderWidth: 1,
    width: '90%', // Độ rộng của View chứa TextInput
  },
  input: {
    padding: 16,
    flex: 1, // Đảm bảo TextInput chiếm phần còn lại của View
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MyComponent;
