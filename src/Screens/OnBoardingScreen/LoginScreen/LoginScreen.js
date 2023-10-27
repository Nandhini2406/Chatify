import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import { ThemeContext } from '../../../Components/ThemeContext';

const LoginScreen = () => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  const handleChats = () => {
    navigation.navigate('Chats');
  };
  

  return (
    <View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
      <Text style={styles.title}>LoginScreen</Text>
      <Button title="Chats" onPress={handleChats}></Button>
    </View>
  );
};

export default LoginScreen;
