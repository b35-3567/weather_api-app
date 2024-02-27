import { StyleSheet, Text, View } from 'react-native';
import Bai2_lab6 from './src/Lab6/Bai2_lab6';
import Bai1_lab6 from './src/Lab6/Bai1_lab6';
import Bai3_lab6 from './src/Lab6/Bai3_lab6';
import FormattedTextExample from './src/Lab6/FormattedTextExample';
import Custom from './src/f/Custom';
import TabNavigator from './src/Assigment1/navigators/TabNavigator';
import HomeScreen from './src/Assigment1/screens/HomeScreen';
import AppNavigator from './src/Lab7/AppNavigator';
import StackNavigator from './src/Lab7/StackNavigator';
import Bai1_lab7 from './src/Lab7/Bai1_lab7';
import Bai2_lab7 from './src/Lab7/Bai2_lab7';
import UserListScreen from './src/Lab8/UserListScreen';
import { StatusBar } from 'react-native'; // Import StatusBar từ react-native
import { NavigationContainer } from '@react-navigation/native';
import Bai2_lab8 from './src/Lab8/Bai2_lab8';
import { createStackNavigator } from '@react-navigation/stack';
import EditUserScreen from './src/Lab8/EditUserScreen';
import App_lab9 from './src/Lab9/App_lab9';
import EditScreen_lab9 from './src/Lab9/EditScreen_lab9';
import App_lab9_1 from './src/Lab9/App_lab9_1';
import Bai3_lab9 from './src/Lab9/Bai3_lab9';
import AddTaskScreen from './src/Lab9/AddTaskScreen';
import TaskDetailScreen from './src/Lab9/TaskDetailScreen';
import Bai1Lab8 from './src/Lab8/Bai1Lab8';
import Home from './src/Home';
import Details from './src/Details';
import Register from './src/thi/Register';
import Bai1_thi from './src/thi/Bai1_thi';
const Stack = createStackNavigator();
export default function App() {
  return (
   /*
    <NavigationContainer>

        <StatusBar barStyle="light-content" backgroundColor="#4d4c81" /> 
 <Stack.Navigator>
      <Stack.Screen name="UserList" component={Bai2_lab8} />
      <Stack.Screen name="EditUser" component={EditUserScreen} />
    </Stack.Navigator>
</NavigationContainer> */
/*
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home" component={Bai3_lab9} />
  <Stack.Screen name="EditScreen_lab9" component={EditScreen_lab9} />
  <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
  <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen}/>
</Stack.Navigator>
</NavigationContainer>
*/
 /*
<NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    */
    /////////////////////////////////////////////////////////////////////
 //<Bai1_lab7/>
 // <Bai2_lab7/> 
    //<Register/>
  <Bai1_thi/>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
