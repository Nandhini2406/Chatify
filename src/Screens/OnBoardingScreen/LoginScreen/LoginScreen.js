import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleChats = () => {
    navigation.navigate('Chats');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginScreen</Text>
      <Button title="Chats" onPress={handleChats}></Button>
    </View>
  );
};

export default LoginScreen;
