// AppNavigator.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import YourScreen from './YourScreen';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="YourScreen" component={YourScreen} />
      {/* Thêm các màn hình khác nếu cần */}
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
