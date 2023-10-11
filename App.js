import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';
import ColorChangeScreen from './src/screens/ColorChangeScreen';
import PasswordScreen from './src/screens/PasswordScreen';


const Stack =  createNativeStackNavigator();

export default function App() {


return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Courses" component={CoursesScreen} />
    <Stack.Screen name="Courses Information" component={CoursesInformationScreen} />
    <Stack.Screen name="Counter" component={CounterScreen} />
    <Stack.Screen name="Box" component={BoxScreen} />
    <Stack.Screen name="Color Change Screen" component={ColorChangeScreen} />
    <Stack.Screen name="Password Screen" component={PasswordScreen} />
  </Stack.Navigator>
</NavigationContainer>
);

}

const styles = StyleSheet.create({
 
});
