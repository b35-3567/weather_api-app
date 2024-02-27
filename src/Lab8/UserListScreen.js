import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator,Image } from 'react-native';

const UserListScreen = (props) => {
  const { navigation } = props;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://65b8d2c5b71048505a8988a8.mockapi.io/thao/user');
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
    const { id, name, brithday, avatar } = item;

    // Định dạng ngày sinh
    const formatBirthday = (birthday) => {
      const date = new Date(birthday);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    return (
      <View style={{ borderRadius: 15, backgroundColor: 'white', padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd', margin: 10, elevation: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'black', fontSize: 18 }}>{name}</Text>
        <View style={{flexDirection:'column'}}>
        <Text style={{ color: 'gray', fontSize: 14 }}>{formatBirthday(brithday)}</Text>
        <Image source={{uri:avatar}} style={{width:50,height:50 }} resizeMode="cover"/>
        </View>
      </View>
    );
  };


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Image source={{uri:'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep.jpg'}} style={{width:128,height:128}}/>
       <Image source={{uri:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1041.jpg'}} style={{width:128,height:128}}/>
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

export default UserListScreen;
