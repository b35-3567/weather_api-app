// SettingScreen.tsx
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingScreen_lab6: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting Screen</Text>
      {/* Your Setting Screen content goes here */}
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
});

export default SettingScreen_lab6;
