import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const Bai1Lab8 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://65bb204eb4d53c0665540cf7.mockapi.io/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    getUsers();
  }, []);

  const renderUserItem = ({ item }) => {
    const { id, name, birth_day,avatar  } = item;
  
    // Định dạng ngày sinh
    const formatBirthday = (birthday) => {
      const date = new Date(birthday);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
 //   console.log('Avatar URL:', avatar); // Thêm dòng log này
    return (
      <View style={styles.userContainer}>
        <Image source={{uri:avatar} } style={styles.avatar}/>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.birthday}>{formatBirthday(birth_day)}</Text>
        </View>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  birthday: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Bai1Lab8;