import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import Contact from './Contact';

export default class ContactList extends Component<{}> {
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          extraData={this.state}
          renderItem={({item}) => <Contact info={item}/>}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
