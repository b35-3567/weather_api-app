// navigation/StackNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const StackNavigator = () => (
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={BottomTabNavigator}
      options={({ route }) => ({
        headerShown: false, // Ẩn header
      })}
    />
  </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
