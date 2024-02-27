import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { users, updateUser } from './mock';

const EditUserScreen = ({ route, navigation }) => {
  const { user } = route.params || {};
  const { id, name: initialName = '', birthYear: initialBirthYear = '', avatar: initialAvatar = '' } = user || {};
  const [editedName, setEditedName] = useState(initialName);
  const [editedBirthYear, setEditedBirthYear] = useState(initialBirthYear);
  const [editedAvatar, setEditedAvatar] = useState(initialAvatar);

  const updateUserHandler = async () => {
    try {
      const updatedUser = await updateUser(id, {
        name: editedName,
        birthYear: editedBirthYear,
        avatar: editedAvatar,
      });

      console.log('Updated User:', updatedUser);
      Alert.alert('Success', 'User information updated successfully');
      // navigation.goBack();
      // Nếu bạn muốn điều hướng sau khi cập nhật thành công, hãy sử dụng navigation.navigate thay vì navigation.goBack
    } catch (error) {
      console.error('Error updating user:', error);
      Alert.alert('Error', 'Failed to update user information');
    }
  };

  const handleUpdateUser = () => {
    updateUserHandler();
    // Bạn có thể thêm điều kiện để kiểm tra xem dữ liệu có thay đổi trước khi gọi hàm cập nhật
    // if (editedName !== initialName || editedBirthYear !== initialBirthYear || editedAvatar !== initialAvatar) {
    //   updateUserHandler();
    // }
  };

  useEffect(() => {
    setEditedName(initialName);
    setEditedBirthYear(initialBirthYear);
    setEditedAvatar(initialAvatar);
  }, [user, initialName, initialBirthYear, initialAvatar]);

  return (
    <View>
      <Text style={{ color: 'orange', fontSize: 20 }}>
        Chỉnh sửa tài khoản {initialName}
      </Text>
      <TextInput
        value={editedName}
        onChangeText={setEditedName}
        placeholder="Tên"
        style={{ borderColor: 'black', borderWidth: 1, marginVertical: 10, padding: 8, color: 'blue' }}
      />
      <TextInput
        value={editedBirthYear}
        onChangeText={setEditedBirthYear}
        placeholder="Năm sinh"
        style={{ borderColor: 'black', borderWidth: 1, marginVertical: 10, padding: 8, color: 'blue' }}
      />
      <TextInput
        value={editedAvatar}
        onChangeText={setEditedAvatar}
        placeholder="Đường link ảnh đại diện"
        style={{ borderColor: 'black', borderWidth: 1, marginVertical: 10, padding: 8, color: 'blue' }}
      />

      <TouchableOpacity
        onPress={updateUser}
        style={{ backgroundColor: 'orange', padding: 10, borderRadius: 5, marginTop: 10 }}>
        <Text style={{ color: 'white' }}>Cập nhật thông tin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditUserScreen;
