// HomeScreen.tsx
import React, { FC, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen_lab6: FC<HomeScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');

  const goToDetailsScreen = () => {
    navigation.navigate('Details', { id: 1, name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nhập tên của bạn:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Đi tới màn hình chi tiết" onPress={goToDetailsScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default HomeScreen_lab6;
