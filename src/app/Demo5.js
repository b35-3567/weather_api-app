import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import De4 from './De4';
const Demo5 = () => {
 // Khởi tạo state cho hoTenSinhVien và tuoiSinhVien
 const [hoTenSinhVien, setHoTenSinhVien] = useState('Chipu');
 const [tuoiSinhVien, setTuoiSinhVien] = useState(20);

 // Hàm cập nhật thông tin sinh viên
 const updateSinhVienInfo = () => {
   // Giả sử bạn muốn cập nhật thông tin sinh viên ở đây
   // Ví dụ, sau khi người dùng nhấn nút cập nhật
   setHoTenSinhVien('Nguyen Van A');
   setTuoiSinhVien(22);
 };

  return (
    <View>
       <View>
      <Text>Thông tin sinh viên từ Demo3:</Text>
     <De4 hoTen={hoTenSinhVien} tuoi={tuoiSinhVien} />
     <Button title='Cập nhật thông tin' onPress={updateSinhVienInfo}/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  redText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Demo5;
