// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'rgba(118, 141, 234, 0.58)',
    borderColor: 'rgba(118, 141, 234, 0.58)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    width: '100%'
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  }
};

// Make the component available to other parts of the app
export { Header };
