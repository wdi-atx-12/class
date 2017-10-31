import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';

export default class Search extends Component<{}> {
  render() {
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={this.props.searchTerm}
          onChangeText={text => this.props.onSearchInput(text) }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer:{
    backgroundColor: '#CED0CE'
  },
  input: {
   height: 50,
   margin: 5,
   marginTop: 30,
   paddingHorizontal: 8,
   fontSize: 15,
   borderColor: '#CED0CE',
   backgroundColor: 'white',
   borderWidth: 1,
   borderRadius: 3
 }
})
