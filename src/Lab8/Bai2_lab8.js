import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import MOCK_DATA from './MOCK_DATA1.json';

const Bai2_lab8 = () => {
    const navigation = useNavigation(); // Hook to access navigation object
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const onGetUserList = async () => {
    setLoading(true);
    try {
      // Sử dụng dữ liệu từ file JSON đã import
      if (Array.isArray(MOCK_DATA)) {
        setUsers(MOCK_DATA);
      }
    } catch (error) {
      console.error('Error reading user list:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      onGetUserList();
    }, [])
  );

  const handleEdit = (user) => {
    // Navigate to the EditUserScreen with the user information
    navigation.navigate('EditUser', { user });
  };
  
  

  const handleDelete = (userId) => {
    // Implement delete logic based on the userId
    console.log(`Delete user with ID: ${userId}`);
  };

  const renderUserItem = ({ item }) => (
    <View style={{ borderRadius: 15, backgroundColor: 'white', padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd', margin: 10, elevation: 15, flexDirection: 'column', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'black', fontSize: 18 }}>{item.name}</Text>
        <Text style={{ color: 'gray', fontSize: 14 }}>{item.birthYear}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
      <TouchableOpacity onPress={() => handleEdit(item)} style={{ backgroundColor: 'blue', padding: 8, borderRadius: 5, marginRight: 8 }}>
  <Text style={{ color: 'white' }}>Sửa thông tin</Text>
</TouchableOpacity>

        <TouchableOpacity onPress={() => handleDelete(item.id)} style={{ backgroundColor: 'red', padding: 8, borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {loading ? (
        <ActivityIndicator size="large" color="#4d4c81" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUserItem}
        />
      )}
    </View>
  );
};

export default Bai2_lab8;
