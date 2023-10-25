import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const SignupScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignupScreen</Text>
      <Button title="Login" onPress={handleLogin}></Button>
    </View>
  );
};

export default SignupScreen;
