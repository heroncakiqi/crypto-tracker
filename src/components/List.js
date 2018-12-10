import React, { Component } from 'react';
import { ScrollView, Text, NestedScrollView  } from 'react-native';

import Card from './Card';

class List extends Component {
  render() {
   const { data } = this.props
    return (
      <ScrollView style={{marginBottom: 60}} showsVerticalScrollIndicator={false}>
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