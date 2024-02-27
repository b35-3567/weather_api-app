import {View, Text} from 'react-native'
import React, {useState} from 'react'
import Demo4 from './Demo4'
const Demo3 = () => {
  const [name, setName] = useState('Chipu')
  return (
    <View>
      <Text> Demo3 </Text>
       <Text style={{fontSize: 50}}> {name} </Text> 
       <Demo4 hoTen={name} tuoi={20} />{' '}
    </View>
  )
}
export default Demo3
