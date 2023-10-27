import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import CustomButton from '../../../Components/CustomButton';
import {ThemeContext} from '../../../Components/ThemeContext';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Image
        source={require('../../../Assets/Images/ChatifyIcon.png')}
        style={styles.img}></Image>
      <Text style={styles.title}>Welcome to Chatify</Text>
      <CustomButton text="Login" onPress={handleLogin} />
      <CustomButton text="Signup" onPress={handleSignup} />
    </View>
  );
};

export default WelcomeScreen;
