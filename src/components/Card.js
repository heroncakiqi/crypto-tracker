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
        {images[props.item.symbol] && <Image style={styles.image} source={{uri: images[props.item.symbol]}} />}
          <Text> <Text style={{fontWeight: 'bold'}} >{props.item.symbol}</Text> | {props.item.name}</Text>
        </View>
        <View style={styles.price}>
          <Text style={{fontWeight: 'bold'}}>{props.item.quotes.EUR.price.toFixed(2)}&euro;</Text>
        </View>
      </View>
      <View style={styles.sectionTwo}>
        <View style={styles.twentyFour}>
          <Text>
            <Text> 24h: </Text>
              <Text style={{color:  twentyFour >= 0 ?  '#2ECC71' :'red', fontWeight: 'bold'}}>
                {twentyFour}% 
              </Text>
          </Text>
        </View>
        <View style={styles.sevenDay}>
          <Text>
            <Text>7d: </Text>
              <Text style={{color:  sevenDay >= 0 ?  '#2ECC71' :'red', fontWeight: 'bold'}}>
                {sevenDay}%
              </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  contanierStyle: {
    borderWidth: 0,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    elevation: 0.5,
    padding: 20,
    paddingLeft: 35,
    paddingRight: 35,
    height: 110,
  },
  sectionOne: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0,
    borderColor: '#f5f5f5',
    borderBottomWidth: 1,

  },
  sectionTwo: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    position: "absolute",
    left: -20,
    height: 20,
    width: 20
  },
  logo: {
    flex: 1 ,
    flexDirection: 'row',
  
  },
  price: {
    flex: 1,
    alignItems: 'flex-end',

  },
  twentyFour: {
    flex: 1,
    justifyContent: 'flex-end',
   
  },
  sevenDay: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    
  }
};

export default Card;
