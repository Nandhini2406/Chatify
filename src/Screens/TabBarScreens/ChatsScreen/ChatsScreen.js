import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import { ThemeContext } from '../../../Components/ThemeContext';
import {styles} from './styles';

const ChatsScreen = () => {
  const theme = useContext(ThemeContext);
  const styles1 = StyleSheet.create({
    container: {
    backgroundColor: theme.backgroundColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    // color: theme.colors.text,
  });


  return (
    <View style={styles1.container}>
      <Text style={{color:'#7956D8'}}>ChatsScreen</Text>
    </View>
  );
};

export default ChatsScreen;
