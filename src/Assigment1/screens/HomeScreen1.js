import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme/theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../com/coffeeCard';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { MapPinIcon } from 'react-native-heroicons/solid';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View style={{ flex: 1, position: 'relative', backgroundColor: 'white' }}>
      <StatusBar />

      <Image
        source={require('../assets/images/beansBackground1.png')}
        style={{ height: height * 0.2, width: '100%', position: 'absolute', top: ios ? -5 : -50, opacity: 0.1 }}
      />

      <SafeAreaView style={{ marginBottom: ios ? -8 : 0 }}>
        <View style={{ marginHorizontal: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image source={require('../assets/images/avatar.png')} style={{ height: 45, width: 45, borderRadius: 22.5 }} />

          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
            <MapPinIcon size={25} color={themeColors.bgLight} />
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>New York, NYC</Text>
          </View>

          <BellIcon size={27} color="black" />
        </View>

        <View style={{ marginHorizontal: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginTop: height * 0.06 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 25, backgroundColor: '#e6e6e6' }}>
            <TextInput placeholder="Search" style={{ padding: 16, flex: 1, fontWeight: 'bold', color: 'gray' }} />
            <TouchableOpacity style={{ borderRadius: 15, backgroundColor: themeColors.bgLight, padding: 10 }}>
              <MagnifyingGlassIcon size={25} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingHorizontal: 5, marginTop: 10 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const isActive = item.id == activeCategory;
              const activeTextClass = isActive ? 'white' : 'gray-700';
              const backgroundColor = isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)';
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{ backgroundColor, padding: 16, paddingHorizontal: 20, marginRight: 5, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                >
                  <Text style={{ fontWeight: 'bold', color: activeTextClass }}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>

      <View style={{ overflow: 'visible', justifyContent: 'center', flex: 1, marginTop: ios ? 10 : 0 }}>
        <View>
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            loop
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width * 0.63}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
        </View>
      </View>
    </View>
  );
}
