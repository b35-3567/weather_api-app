import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import  { useState, useEffect } from 'react';
async function loadFonts() {
  await Font.loadAsync({
    'RubikBurned-Regular': require('../assets/fonts/RubikBurned-Regular.ttf'),
  });
}

loadFonts();

const FormattedTextExample = () => {
    const [isFontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
      async function loadApp() {
        await loadFonts();
        setFontLoaded(true);
      }
  
      loadApp();
    }, []);
  
    if (!isFontLoaded) {
      // Nếu font chưa load xong, có thể hiển thị một màn hình loading hoặc component khác.
      return null;
    }
  
  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>This is normal text.</Text>
      <Text style={styles.boldText}>This is bold text.</Text>
      <Text style={styles.italicText}>This is italic text.</Text>
      <Text style={styles.customTextStyle}>This is custom-styled text.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalText: {
    fontSize: 26,
    color: 'black',
    fontFamily:'RubikBurned-Regular'
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  italicText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'green',
  },
  customTextStyle: {
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'italic',
    color: 'red',
    textDecorationLine: 'underline',
  },
});

export default FormattedTextExample;
