import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {styles}    from './styles';

const CustomButton = ({onPress, text, type = 'Primary'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    margin: '3%',
    padding: '3%',
    alignItems: 'center',
  },
  container_Primary: {
    width: '80%',
    margin: '3%',
    padding: '2%',
    alignItems: 'center',

    borderRadius: 25,

    backgroundColor: '#7956D8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container_Tertiary: {
    margin: '1%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  text_Tertiary: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CustomButton;
