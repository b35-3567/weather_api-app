// ArticleScreen.tsx
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ArticleScreen_lab6: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Article Screen</Text>
      {/* Your Article Screen content goes here */}
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

export default ArticleScreen_lab6;
