import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
import WelcomeScreen from '../Screens/OnBoardingScreen/WelcomeScreen/WelcomeScreen';
import SignupScreen from '../Screens/OnBoardingScreen/SignupScreen/SignupScreen';
import LoginScreen from '../Screens/OnBoardingScreen/LoginScreen/LoginScreen';
import TopTabBar from './TopTabBar';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Chats" component={TopTabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
