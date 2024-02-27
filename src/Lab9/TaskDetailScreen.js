// TaskDetailScreen.js

import React from 'react';
import { View, Text } from 'react-native';

const TaskDetailScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View>
      <Text>Task Detail</Text>
      <Text>{task}</Text>
      {/* Hiển thị các thông tin khác về Task nếu cần */}
    </View>
  );
};

export default TaskDetailScreen;
