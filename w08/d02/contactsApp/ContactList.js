import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import contactsData from './contactsData';

export default class ContactList extends Component<{}> {
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View>
        <FlatList
          data={contactsData}
          renderItem={({item}) => <Text>{item.firstName}</Text>}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
