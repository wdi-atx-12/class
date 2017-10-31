import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import Contact from './Contact';
import Search from './Search'

export default class ContactList extends Component<{}> {
  _keyExtractor = (item, index) => item.id;

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
          marginLeft: 5,
          marginRight: 5
        }}
      />
    );
  };

  renderHeader = () => {
    return <Search
            searchTerm={this.props.searchTerm}
            onSearchInput={this.props.onSearchInput} />;
  };

  render() {
    return (
      <View>
        <FlatList
          style={styles.list}
          data={this.props.data}
          renderItem={({item}) => <Contact info={item}/>}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list:{
    borderTopWidth: 0,
    borderBottomWidth: 0
  }
})
