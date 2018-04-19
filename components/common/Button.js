import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const button = ({ onPress, children }) => {
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
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    width: '97%',
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(118, 141, 234, 0.58)',
    marginLeft: 5,
    marginRight: 5
  }
};

export { button };