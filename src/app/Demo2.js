import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import React, { useState } from 'react'
// properties
const Demo2 = (props) => {
    // số thứ 1, thứ 2, kết quả
    const [so1, setSo1] = useState(2)
    const [so2, setSo2] = useState(3)
    const [ketqua, setKetqua] = useState(7)
    const [name, setName] = useState()

    console.log('Demo2 renderinggggggg')
    const changeNumber = () => {
        const newSo1 = Math.floor(Math.random() * 5)
        const newSo2 = Math.floor(Math.random() * 5)
        setSo1(newSo1)
        setSo2(newSo2)
            // random ket qua
        const newKetqua = Math.floor(Math.random() * 10)
        setKetqua(newKetqua)
    }
    return ( <View >
        <Text style = { myStyle.name } > { so1 } + { so2 } </Text>  
        <Text style = { myStyle.name } > = </Text>  
        <Text style = { myStyle.name } > { ketqua } </Text>  
        <Button title = "Đổi"onPress = { changeNumber }/>  
        </View>
    )
}
export default Demo2
const myStyle = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue'
    }
})

// dữ liệu của ứng dụng
// state: dữ liệu của riêng component
// state đổi thì component render lại