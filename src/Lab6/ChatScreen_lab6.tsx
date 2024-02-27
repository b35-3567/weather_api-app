// ChatScreen.tsx
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen_lab6: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
      {/* Your Chat Screen content goes here */}
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

export default ChatScreen_lab6;
