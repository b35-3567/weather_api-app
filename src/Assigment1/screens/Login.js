import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button, TouchableWithoutFeedback  } from 'react-native'
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'react-native-heroicons/outline';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Thực hiện các logic đăng nhập ở đây

    // Chuyển hướng đến màn hình Setting
    navigation.navigate('Setting');
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
 
  return (
    <View style={styles.container}>
       <Image source={require('../../assets/img/Group72.png')} style={styles.logo} />
       <View><Text style={styles.title}>Welcome to Lungo</Text></View>  
       <View><Text  style={styles.subtitle}>Login to contiunue</Text></View>
       <View style={styles.inputContainer}>
       <MaterialIcons name="email" size={30} color="white" style={styles.icon} />
   <TextInput
      placeholder="Email Address"
      placeholderTextColor="white"
      style={styles.input}
   />
</View>


      <View style={styles.inputContainer2}>
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
      <TouchableOpacity  style={styles.signInButton} onPress={handleLoginPress}>
        <Text style={styles.signInButtonText}>Login</Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.googleSignInButton}>
        <Image source={{ uri:'https://img.freepik.com/free-icon/search_318-265146.jpg' }} style={styles.googleLogo} />
        <Text style={styles.googleSignInButtonText}>Sign in with Google</Text>
      </TouchableOpacity> 
      
      <View style={{flexDirection:'row',marginTop:31,fontSize:18}}>
      <Text style={styles.grayText}>Don't have an account? Click </Text>
      <Text style={styles.yellowText}>Register</Text>
    </View>
    <View style={{flexDirection:'row',marginTop:20,fontSize:18,fontWeight:'bold'}}>
      <Text style={styles.grayText}>Forgot Password? Click </Text>
      <Text style={styles.yellowText}>Reset</Text>
    </View>
 
    
    </View>
  
    
  )
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    flexDirection:'column',
    backgroundColor: 'black',
    alignItems:'center'
  },
  logo: {
    height: 142,
    width: 142,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
    marginTop:8
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginTop:31,
    borderColor: 'white',
    borderWidth: 1,
    width: 348, // Độ rộng của View chứa TextInput
  },
  inputContainer2:{
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginTop:16,
    borderColor: 'white',
    borderWidth: 1,
    width: 348, // Độ rộng của View chứa TextInput
  },
  input: {
    paddingHorizontal: 17,
    paddingVertical:11,
    flex: 1, // Đảm bảo TextInput chiếm phần còn lại của View
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    padding: 10,
  },
  signInButton: {
    backgroundColor: '#df7232',
    width: 348,
    height: 57,
    borderRadius: 14,
    marginTop: 41,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  googleSignInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 348,
    height: 57,
    borderRadius: 14,
    marginTop: 15,
   
  },
  googleLogo: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginLeft:19
   
  },
  googleSignInButtonText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft:90
 
  },
  grayText: {
    color: 'gray',
  },
  yellowText: {
    color: '#df7232',
    fontWeight: 'bold', // Optional: If you want to make the "Register" text bold
  },
  icon: {
    padding: 10,
    fontFamily: 'MaterialIcons', // Add this line to set the font family
  },
});

export default Login