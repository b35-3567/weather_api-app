import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image } from 'react-native';

const Bai1_thi = () => {
  // Dữ liệu mẫu cho hai cột
  const dataLeftColumn = [
    { id: '1', title: 'Item 1', img: 'https://picsum.photos/200/300' },
    { id: '2', title: 'Item 2', img: 'https://picsum.photos/200/301' },
    { id: '3', title: 'Item 3', img: 'https://picsum.photos/200/302' },
    { id: '4', title: 'Item 3', img: 'https://picsum.photos/200/302' },
    { id: '5', title: 'Item 3', img: 'https://picsum.photos/200/302' },
    { id: '6', title: 'Item 3', img: 'https://picsum.photos/200/302' },
    // Thêm dữ liệu cho cột trái tại đây
  ];

  const dataRightColumn = [
    { id: '7', title: 'Item 4', img: 'https://picsum.photos/200/303' },
    { id: '8', title: 'Item 5', img: 'https://picsum.photos/200/304' },
    { id: '9', title: 'Item 6', img: 'https://picsum.photos/200/305' },
    { id: '10', title: 'Item 3', img: 'https://picsum.photos/200/302' },
    { id: '11', title: 'Item 3', img: 'https://picsum.photos/200/302' },
    { id: '12', title: 'Item 3', img: 'https://picsum.photos/200/302' },
    // Thêm dữ liệu cho cột phải tại đây
  ];

  // Render một mục trong FlatList
  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: randomColor() }]}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  // Tạo màu nền ngẫu nhiên cho mỗi ô
  const randomColor = () => {
    const colors = ['#fce9e3', '#e3f1fc', '#fde3e3', '#e3f7fc', '#e3fcd7', '#fcfce3'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.column}>
          <FlatList
            data={dataLeftColumn}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.column}>
          <FlatList
            data={dataRightColumn}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexDirection: 'row', // Sử dụng flex direction là row để hai cột được sắp xếp cạnh nhau
  },
  column: {
    flex: 1, // Chia đều không gian cho hai cột
    paddingHorizontal: 10, // Khoảng cách giữa cột và nội dung bên trong
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Bai1_thi;
