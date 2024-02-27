import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type DetailsScreenProps = {
  route: any;
  navigation: any;
};

const DetailsScreen_lab6: FC<DetailsScreenProps> = ({ route, navigation }) => {
  const { id, name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chào bạn, {name}</Text>
      <Text style={styles.subText}>Id của bạn là, {id}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Trở lại bằng -- goBack --</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.reset({ routes: [{ name: 'Home' }] })}
      >
        <Text style={styles.buttonText}>Trở lại bằng -- reset --</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.pop()}
      >
        <Text style={styles.buttonText}>Trở lại bằng -- pop --</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Trở lại bằng -- popToTop --</Text>
      </TouchableOpacity>
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
  subText: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#007BFF', // Customize the background color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', // Customize the text color
    textAlign: 'center',
  },
});

export default DetailsScreen_lab6;
