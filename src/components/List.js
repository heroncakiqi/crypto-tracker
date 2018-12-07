import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import Card from './Card';

class List extends Component {
  render() {
   const { data } = this.props
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          data.map(item => (
            <Card key={item.id} item={item} />
            )
          )
        }
      </ScrollView>
    )
  }
}

export default List;