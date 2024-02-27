import React, { useState } from 'react';
import { TabView, TabBar } from 'react-native-tab-view';
import { View, Text, Image } from 'react-native';
import { FONTFAMILY, FONTSIZE } from '../Assigment1/theme/theme';

const ICONS_MENU = {
  'Yêu Thích': 'https://cdn-icons-png.freepik.com/256/846/846449.png',
  'Phổ Biến': 'https://cdn-icons-png.freepik.com/256/846/846449.png',
  'Trực Tiếp': 'https://cdn-icons-png.freepik.com/256/846/846449.png',
};

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabBar}
    renderLabel={({ route, focused, color }) => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: ICONS_MENU[route.title] }}
          style={{ height: 20, width: 20, tintColor: color, marginRight: 5 }}
        />
        <Text style={{ color, fontFamily: 'RubikBurned-Regular', fontSize: FONTSIZE.medium }}>
          {route.title}
        </Text>
      </View>
    )}
  />
);

const Bai2_lab7 = () => {
  const [index, setIndex] = useState(0);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'tab1':
        return (
          <View>
            <Text style={{ fontFamily: 'Roboto-BlackItalic', fontSize: 20, padding: 10, color: 'black' }}>
              Tab 1 Content
            </Text>
          </View>
        );
      case 'tab2':
        return (
          <View>
            <Text style={{ fontFamily: 'RubikBurned-Regular', fontSize: 20, padding: 10, color: 'black' }}>
              Tab 2 Content
            </Text>
          </View>
        );
      case 'tab3':
        return (
          <View>
            <Text style={{ fontFamily: 'RubikBurned-Regular', fontSize: 20, padding: 10, color: 'black' }}>
              Tab 3 Content
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  const initialLayout = { width: 300, height: 100 };

  const routes = [
    { key: 'tab1', title: 'Yêu Thích' },
    { key: 'tab2', title: 'Phổ Biến' },
    { key: 'tab3', title: 'Trực Tiếp' },
  ];

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = {
  indicatorStyle: {
    backgroundColor: '#FF6C22',
  },
  tabBar: {
    backgroundColor: '#FF6C22', // Màu cam
  },
  labelStyle: {
    color: '#fff', // Màu chữ trắng
  },
};

export default Bai2_lab7;
