import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'rgba(44, 244, 250, 1)',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    width: '97%',
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(44, 244, 250, 1)',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };