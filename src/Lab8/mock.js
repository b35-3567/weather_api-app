import * as FileSystem from 'expo-file-system';

let users = [
  {"id":1,"name":"Ambrose","birthYear":"10/23/1901","avatar": ""},
  {"id":2,"name":"Janith","birthYear":"4/16/1984","avatar": ""},
  {"id":3,"name":"Valerye","birthYear":"6/20/2011","avatar": ""},
  {"id":4,"name":"Tedie","birthYear":"6/4/1953","avatar": ""}
];

const updateUser = async (userId, updatedData) => {
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedData };
    await saveToFile(users, './MOCK_DATA1.json');
    return { ...users[userIndex] }; // Trả về một bản sao của thông tin người dùng sau khi cập nhật
  } else {
    throw new Error(`User with ID ${userId} not found.`);
  }
};



const saveToFile = async (data, fileName) => {
  const path = `${FileSystem.documentDirectory}${fileName}`;
  await FileSystem.writeAsStringAsync(path, JSON.stringify(data, null, 2), { encoding: FileSystem.EncodingType.UTF8 });
  console.log('Data saved to file successfully.');
};

export { users, updateUser };
