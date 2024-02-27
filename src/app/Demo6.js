import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Demo6 = () => {
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.text1}>Demo6</Text>
      <Text
        numberOfLines={2}
        style={myStyle.text2}>
        Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5Demo5
      </Text>
      <Image
        source={require('../../assets/img/Phật.jpg')}
        style={myStyle.img1}
        resizeMode='cover'
      />
      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTLg8z3-En1QgvA7eqhsiEHgbSENHMohIEdWHfP-mgGZbTX79MLs5L84OCZCSHh80vViRnlX2hAikYtFe1RBNFn3FCG01kQFetAW0enUA' }}
        style={myStyle.img1}
        resizeMode='cover'
      />
    </View>
  );
}

export default Demo6;

const myStyle = StyleSheet.create({
  img1: { 
    width: 200, 
    height: 200, 
    borderRadius: 20, 
    marginVertical: 20,
  },
  text2: {
    marginHorizontal: 50,
    marginVertical: 30,
    backgroundColor: 'blue',
    fontSize: 30,
    color: 'white',
  },
  text1: {
    backgroundColor: 'yellow',
    fontSize: 30,
  },
  container: {
    padding: 19,
    backgroundColor: 'orange',
    width: '100%',
    height: '100%',
  },
});
