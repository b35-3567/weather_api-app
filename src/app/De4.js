import {View, Text} from 'react-native'
import React from 'react'

const De4 = props  => {
  const {hoTen, tuoi} = props
  return (
    <View>
       <Text>Thông tin sinh viên:</Text>
      <Text>Họ tên: {hoTen}</Text>
      <Text>Tuổi: {tuoi}</Text>
    </View>
  )
}

export default De4