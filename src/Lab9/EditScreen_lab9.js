// EditScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const EditScreen_lab9 = ({ route, navigation }) => {
  const { task: initialTask, updateTask } = route.params;
  const [editedTask, setEditedTask] = useState(initialTask);
  const [imageLink, setImageLink] = useState(''); // Trạng thái mới để lưu đường link ảnh

  const handleUpdateTask = () => {
    // Kết hợp cả đường link ảnh khi cập nhật công việc
    const updatedTask = `${editedTask}\nImage Link: ${imageLink}`;
    // Gọi hàm callback để cập nhật công việc trong màn hình chính (App_lab9)
    updateTask(updatedTask);
    // Quay lại màn hình chính
    navigation.goBack();
  };

  return (
    <View>
      <Text>Edit Screen</Text>
      <TextInput
        value={editedTask}
        onChangeText={setEditedTask}
        placeholder="Edit your task"
        style={{ borderColor: 'black', borderWidth: 1, marginVertical: 10, padding: 8, color: 'blue' }}
      />
      {/* TextInput cho đường link ảnh */}
      <TextInput
        value={imageLink}
        onChangeText={setImageLink}
        placeholder="Paste image link here"
        style={{ borderColor: 'black', borderWidth: 1, marginVertical: 10, padding: 8, color: 'blue' }}
      />
      <TouchableOpacity onPress={handleUpdateTask}>
        <Text>Update Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditScreen_lab9;
