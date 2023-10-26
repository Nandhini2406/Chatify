import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {styles}    from './styles';

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: '3%',
    padding: 8,
    alignItems: 'center',

    borderRadius: 25,

    backgroundColor: '#7956D8',
    shadowColor: 'red',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    // elevation: 2,
  },
  text: {
    fontWeight: '500',
    color: 'white',
    fontSize: 20,
    shadowColor: 'red',
    // shadowOffset: {
    //   width: 5,
    //   height: 10,
    // },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
});

export default CustomButton;
