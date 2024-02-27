import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button, TouchableWithoutFeedback  } from 'react-native'
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'react-native-heroicons/outline';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
 
  return (
    <View style={styles.container}>
       <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTLg8z3-En1QgvA7eqhsiEHgbSENHMohIEdWHfP-mgGZbTX79MLs5L84OCZCSHh80vViRnlX2hAikYtFe1RBNFn3FCG01kQFetAW0enUA' }} style={styles.logo} />
       <View><Text style={styles.title}>Welcome to Lungo</Text></View>  
       <View><Text  style={styles.subtitle}>Register to contiunue</Text></View>

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



      <TouchableOpacity  style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Register</Text>
      </TouchableOpacity>  
      <View style={{flexDirection:'row',marginTop:10,fontSize:18}}>
      <Text style={styles.grayText}>You have an account? Click  </Text>
      <Text style={styles.yellowText}>Sign In</Text>
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
    height: 200,
    width: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    marginTop:8
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9,
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
  iconContainer: {
    padding: 10,
  },
  signInButton: {
    backgroundColor: '#df7232',
    width: '89%',
    height: 50,
    borderRadius: 14,
    marginTop: 45,
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
    width: '89%',
    height: 50,
    borderRadius: 14,
    marginTop: 15,
   
  },
  googleLogo: {
    height: 20,
    width: 20,
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
export default Register