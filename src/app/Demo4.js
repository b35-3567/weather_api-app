import {View, Text} from 'react-native'
import React from 'react'

const Demo4 = props => {
  const {hoTen, tuoi} = props
  return (
    <View>
      <Text> Demo4 </Text> <Text style={{fontSize: 50}}> {hoTen} </Text>
      <Text style={{fontSize: 50}}> {tuoi} </Text>{' '}
    </View>
  )
}

export default Demo4
// props: dữ liệu của component cha truyền vào
