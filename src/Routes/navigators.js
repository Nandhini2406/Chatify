import React, {createContext} from 'react';
import {useColorScheme} from 'react-native';
import {Colors } from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import WelcomeScreen from '../Screens/OnBoardingScreen/WelcomeScreen/WelcomeScreen';
import SignupScreen from '../Screens/OnBoardingScreen/SignupScreen/SignupScreen';
import LoginScreen from '../Screens/OnBoardingScreen/LoginScreen/LoginScreen';
import TopTabBar from './TopTabBar';

const Stack = createNativeStackNavigator();
const ThemeContext = createContext('light');

const Navigators = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <ThemeContext> 
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{headerShown: true}}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Chats" component={TopTabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    // </ThemeContext>
  );
};

export default Navigators;
