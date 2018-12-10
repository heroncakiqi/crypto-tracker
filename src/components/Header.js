import React from 'react';
import { Text, View } from 'react-native';


const Header = props => {

  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> Crypto </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    position: 'relative'

  },
  textStyle: {
    fontSize: 25
  }
};

export default Header ;
