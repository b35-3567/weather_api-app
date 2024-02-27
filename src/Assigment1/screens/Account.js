import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button, TouchableWithoutFeedback  } from 'react-native'
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'react-native-heroicons/outline';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Account = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingButton}>
        <MaterialIcons name="chevron-left" size={30} color="#df7232" />
        <Text style={styles.settingText}>Setting</Text>
      </TouchableOpacity>

      <View>
      <Image source={require('../../assets/img/logo_doctor.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
       <MaterialIcons name="person" size={30} color="white" style={styles.icon} />
   <TextInput
      placeholder="Name"
      placeholderTextColor="white"
      style={styles.input}
   />
</View>

       <View style={styles.inputContainer}>
       <MaterialIcons name="email" size={30} color="white" style={styles.icon} />
   <TextInput
      placeholder="Email Address"
      placeholderTextColor="white"
      style={styles.input}
   />
</View>

  <View style={styles.inputContainer}>
      <MaterialIcons name="lock" size={30} color="white" style={styles.icon} />
      <TextInput
        placeholder="Password"
        placeholderTextColor="white"
        style={styles.input}
        autoCapitalize="none"
        autoComplete="off"
        secureTextEntry={!isPasswordVisible}
        onChangeText={(text) => {
          // Handle the text change here
          console.log('Text changed:', text);
        }}
      />  
      <TouchableOpacity
      onPress={() => {
        setIsPasswordVisible((prev) => !prev);
      }}
      style={styles.iconContainer}>
      {/* Use MaterialIcons for the eye icons */}
      <MaterialIcons name={isPasswordVisible ? 'visibility-off' : 'visibility'} size={20} color="white" />
    </TouchableOpacity>

    </View>


    <View style={styles.inputContainer}>
      <MaterialIcons name="lock" size={30} color="white" style={styles.icon} />
      <TextInput
        placeholder="Re-password"
        placeholderTextColor="white"
        style={styles.input}
        autoCapitalize="none"
        autoComplete="off"
        secureTextEntry={!isPasswordVisible}
        onChangeText={(text) => {
          // Handle the text change here
          console.log('Text changed:', text);
        }}
      />  
      <TouchableOpacity
      onPress={() => {
        setIsPasswordVisible((prev) => !prev);
      }}
      style={styles.iconContainer}>
      {/* Use MaterialIcons for the eye icons */}
      <MaterialIcons name={isPasswordVisible ? 'visibility-off' : 'visibility'} size={20} color="white" />
    </TouchableOpacity>

    </View>

    <TouchableOpacity  style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Save</Text>
      </TouchableOpacity>  

      </View>
    </View>
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
  signInButton: {
    backgroundColor: '#df7232',
    width: 334,
    height: 57,
    borderRadius: 14,
    marginTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  icontainer: {
    flexDirection:'column',
    backgroundColor: 'black',
    padding: 20,
    width:'100%',
    height:'100%',
    alignItems:'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9,
    marginTop: 29,
    marginLeft:20,
    borderColor: 'white',
    borderWidth: 1,
    height:48,
    width: 334, // Độ rộng của View chứa TextInput
  },
  input: {
    padding: 16,
    flex: 1, // Đảm bảo TextInput chiếm phần còn lại của View
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    height: 200,
    width: 300,
    marginTop:41,
    flexDirection:'row',
    alignItems:'center',
    resizeMode: 'contain',
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

export default Account