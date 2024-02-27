import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button, TouchableWithoutFeedback  } from 'react-native'
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'react-native-heroicons/outline';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Valide_Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleLogin = () => {
    // Check if the password is empty
    if (!password) {
      setPasswordError('Password is required!');
    } else if (password.length < 6) {
      // Check if the password is valid (at least 6 characters)
      setPasswordError('Password is not true!');
    } else {
      // Reset password error if password is valid
      setPasswordError('');
      
      // Add your login logic here
      // Only proceed with login if the password is valid
      console.log('Login successful!');
    }
  };
  
  
  return (
    <View style={styles.container}>
       <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTLg8z3-En1QgvA7eqhsiEHgbSENHMohIEdWHfP-mgGZbTX79MLs5L84OCZCSHh80vViRnlX2hAikYtFe1RBNFn3FCG01kQFetAW0enUA' }} style={styles.logo} />
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


      <View style={[styles.inputContainer,   { 
      borderColor: passwordError ? 'red' : 'white', 
      borderWidth: passwordError ? 2 : 1 // Độ dày của viền khi có lỗi
      
    }]}>
      <MaterialIcons name="lock" size={30} color="white" style={styles.icon} />
      <TextInput
  placeholder="Password"
  placeholderTextColor="white"
  style={[
    styles.input,
    { 
      
    }
  ]}
  autoCapitalize="none"
  autoComplete="off"
  secureTextEntry={!isPasswordVisible}
  onChangeText={(text) => {
    // Handle the text change here
    setPassword(text);
    // Reset password error when user types
    setPasswordError('');
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

      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
      
      <TouchableOpacity onPress={handleLogin} style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleSignInButton}>
        <Image source={{ uri:'https://img.freepik.com/free-icon/search_318-265146.jpg' }} style={styles.googleLogo} />
        <Text style={styles.googleSignInButtonText}>Sign in with Google</Text>
      </TouchableOpacity> 
      
      <View style={{flexDirection:'row',marginTop:40,fontSize:18}}>
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
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize:18,
    textAlign: 'right',  // Đặt vị trí văn bản ở bên trái
  marginRight: 180,     // Canh lề bên trái
  },
});
export default Valide_Login