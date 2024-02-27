import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Thay thế import từ 'react-native-vector-icons'
import { useFonts } from 'expo-font'; // Thêm import từ 'expo-font'

const Register = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    };

    const onPressRegister = () => {
        // Kiểm tra tên
        if (name.length < 5 || name.length > 10) {
            setNameError('Tên phải từ 5 đến 10 ký tự');
        } else {
            setNameError('');
        }

        // Kiểm tra email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Email không hợp lệ');
        } else {
            setEmailError('');
        }

        // Kiểm tra mật khẩu
        if (password.length < 5) {
            setPasswordError('Mật khẩu phải ít nhất 5 ký tự');
        } else {
            setPasswordError('');
        }

        // Kiểm tra xác nhận mật khẩu
        if (password !== confirmPassword) {
            setConfirmPasswordError('Mật khẩu xác nhận không trùng khớp');
        } else {
            setConfirmPasswordError('');
        }

        // Nếu không có lỗi, thực hiện đăng ký
        if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
            console.log('Đăng ký thành công!');
        }
    };

    // Load font
    const [loaded] = useFonts({
        MaterialIcons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={ styles.container }>
            <Image
                source={ {
                    uri: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTLg8z3-En1QgvA7eqhsiEHgbSENHMohIEdWHfP-mgGZbTX79MLs5L84OCZCSHh80vViRnlX2hAikYtFe1RBNFn3FCG01kQFetAW0enUA',
                } }
                style={ styles.logo }
            />
            <Text style={ styles.title }>Welcome to Lungo</Text>
            <Text style={ styles.subtitle }>Register to continue</Text>

            <View style={ styles.inputContainer }>
                <MaterialIcons name="person" size={ 30 } color="black" style={ styles.icon } />
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="black"
                    style={ styles.input }
                    value={ name }
                    onChangeText={ text => setName(text) }
                />
            </View>
            { nameError ? <Text style={ styles.errorText }>{ nameError }</Text> : null }

            <View style={ styles.inputContainer }>
                <MaterialIcons name="email" size={ 30 } color="black" style={ styles.icon } />
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="black"
                    style={ styles.input }
                    value={ email }
                    onChangeText={ text => setEmail(text) }
                />
            </View>
            { emailError ? <Text style={ styles.errorText }>{ emailError }</Text> : null }

            <View style={ styles.inputContainer }>
                <MaterialIcons name="lock" size={ 30 } color="black" style={ styles.icon } />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="black"
                    style={ styles.input }
                    autoCapitalize="none"
                    autoComplete="off"
                    secureTextEntry={ !isPasswordVisible }
                    value={ password }
                    onChangeText={ text => setPassword(text) }
                />
                <TouchableOpacity onPress={ togglePasswordVisibility } style={ styles.iconContainer }>
                    <MaterialIcons
                        name={ isPasswordVisible ? 'visibility-off' : 'visibility' }
                        size={ 20 }
                        color="white"
                    />
                </TouchableOpacity>
            </View>
            { passwordError ? <Text style={ styles.errorText }>{ passwordError }</Text> : null }

            <View style={ styles.inputContainer }>
                <MaterialIcons name="lock" size={ 30 } color="black" style={ styles.icon } />
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="black"
                    style={ styles.input }
                    autoCapitalize="none"
                    autoComplete="off"
                    secureTextEntry={ !isPasswordVisible }
                    value={ confirmPassword }
                    onChangeText={ text => setConfirmPassword(text) }
                />
                <TouchableOpacity onPress={ togglePasswordVisibility } style={ styles.iconContainer }>
                    <MaterialIcons
                        name={ isPasswordVisible ? 'visibility-off' : 'visibility' }
                        size={ 20 }
                        color="white"
                    />
                </TouchableOpacity>
            </View>
            { confirmPasswordError ? (
                <Text style={ styles.errorText }>{ confirmPasswordError }</Text>
            ) : null }

            <TouchableOpacity style={ styles.signInButton }>
                <Text style={ styles.signInButtonText } onPress={ () => onPressRegister() }>
                    Register
                </Text>
            </TouchableOpacity>

            <View style={ { flexDirection: 'row', marginTop: 10, fontSize: 18 } }>
                <Text style={ styles.grayText }>You have an account? Click </Text>
                <Text style={ styles.yellowText }>Sign In</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
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
        marginTop: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 9,
        marginTop: 29,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#e6e7ea',
        width: '100%', // Độ rộng của View chứa TextInput
    },
    input: {
        padding: 16,
        flex: 1, // Đảm bảo TextInput chiếm phần còn lại của View
        fontWeight: 'bold',
        color: 'black',
    },
    iconContainer: {
        padding: 10,
    },
    signInButton: {
        backgroundColor: '#df7232',
        width: '100%',
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

export default Register;
