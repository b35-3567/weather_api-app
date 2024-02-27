import {View, Text} from 'react-native'
import React, {useState} from 'react'
import De4 from './De4'
const De3 = () => {
  const hoTenSinhVien = 'Chipu';
  const tuoiSinhVien = 20;
  return (
    <View>
      <Text  style={{fontSize: 50}}>De3</Text>
      <Text style={{fontSize: 50}}> {name} </Text> 
      <De4 hoTen={name} tuoi={20}/>{''}
    </View>
  )
}

export default De3;