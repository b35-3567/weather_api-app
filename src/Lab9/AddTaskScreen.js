// AddTaskScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddTaskScreen = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    navigation.navigate('Home', { newTask: task });
  };

  return (
    <View>
      <Text>Add Task</Text>
      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <Text>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskScreen;
