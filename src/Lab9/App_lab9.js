// App_lab9.js
import React, { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import Task from './Task';
import EditScreen_lab9 from './EditScreen_lab9';
import { useNavigation } from '@react-navigation/native';

export default function App_lab9() {
    const navigation = useNavigation();
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Thêm trạng thái để kiểm tra liệu bạn đang chỉnh sửa hay không

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const handleEditTask = (index) => {
    // Chuyển đến màn hình chỉnh sửa với thông tin của công việc
    // Truyền thông tin công việc và một hàm callback để cập nhật công việc sau khi chỉnh sửa
    navigation.navigate('EditScreen_lab9', {
      task: taskItems[index],
      updateTask: (updatedTask) => {
        // Cập nhật công việc trong danh sách
        let itemsCopy = [...taskItems];
        itemsCopy[index] = updatedTask;
        setTaskItems(itemsCopy);
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <View key={index} style={styles.taskContainer}>
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
              {!isEditing && (
                <TouchableOpacity onPress={() => handleEditTask(index)}>
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => (isEditing ? handleUpdateTask() : handleAddTask())}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>{isEditing ? 'Update' : '+'}</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      editText: {
        color: 'blue',
        marginLeft: 10,
      },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});