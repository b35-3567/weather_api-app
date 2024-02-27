import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Demo7 = () => {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const onPressSubmit = () => {
    if (!name || name.trim().length === 0) {
      setIsNameValid(false);
      setErrorMsg('Họ tên không được để trống');
    } else {
      setIsNameValid(true);
      setErrorMsg('');
    }
  };

  return (
    <View style={myStyle.container}>
      <Text>Demo7</Text>
      <TextInput
        placeholder="Enter your name"
        keyboardType='number-pad'
        secureTextEntry={false}
        style={[myStyle.input, !isNameValid && myStyle.nameInvalid]}
        value={name}
        onChangeText={(text) => {
          setName(text);
          setIsNameValid(true); // Reset trạng thái khi người dùng nhập liệu mới
          setErrorMsg('');
        }}
      />
      <Text>{errorMsg}</Text>
      <TouchableOpacity
        onPress={onPressSubmit}
        style={myStyle.buttonContainer}
      >
        <Text style={myStyle.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const myStyle = {
  nameInvalid: {
    borderColor: 'red',
    borderWidth: 2,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
  },
  buttonContainer: {
    marginTop: 50,
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  container: {
    padding: 19,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
};

export default Demo7;
