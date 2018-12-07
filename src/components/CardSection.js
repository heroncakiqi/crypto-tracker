import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
  return (
    <View style={styles.sectionStyles}>
      {props.children}
    </View>
  );
};

const styles = {
  sectionStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'

  }
};

export default CardSection;
