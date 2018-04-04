import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'rgba(118, 141, 234, 0.58)',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'rgba(118, 141, 234, 0.58)',
    position: 'relative'
  }
};

export { CardSection };
