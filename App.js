import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import axios from 'axios';
import List from './src/components/List';

export default class App extends React.Component {

  state = {
    data: []
  }

  async componentDidMount() {
    try{
      const res = await axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=10');
      this.setState({ data: Object.values(res.data.data) });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});
