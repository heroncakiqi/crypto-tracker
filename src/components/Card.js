import React from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../Utils/CoinIcons';


const Card = (props) => {
  const sevenDay = props.item.quotes.EUR.percent_change_7d;
  const twentyFour =props.item.quotes.EUR.percent_change_24h;
  return (
    <View style={styles.contanierStyle}>
      <View style={styles.sectionOne}>
        <View style={styles.logo}>
          <Image style={styles.image} source={{uri: images[props.item.symbol]}} />
          <Text> {props.item.symbol} | {props.item.name}</Text>
        </View>
        <Text>{props.item.quotes.EUR.price.toFixed(2)}&euro;</Text>
      </View>
      <View style={styles.sectionTwo}>
        <Text style={twentyFour >= 0 ? { color: '#2ECC71'} : { color: 'red'}}>
          <Text style={{color: 'black'}}>24h: </Text>{twentyFour}%
        </Text>
        <Text style={twentyFour >= 0 ? { color: '#2ECC71'} : { color: 'red'}}>
         <Text style={{color: 'black'}}>7h: </Text>{sevenDay}%
        </Text>
      </View>
    </View>
  );
};

const styles = {
  contanierStyle: {
    borderWidth: 0,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    padding: 5,
    height: 100,
  },
  sectionOne: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionTwo: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 25,
    width: 25
  },
  logo: {
    flex: 1 ,
    flexDirection: 'row'
  }
};

export default Card;
