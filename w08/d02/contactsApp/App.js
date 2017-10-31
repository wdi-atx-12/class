/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ContactList from './ContactList';
import contactsData from './contactsData';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class ContactApp extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      contacts: contactsData,
      searchTerm: ''
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput(searchTerm) {
    // given a contact, see if the search term in that contact's full name
    console.log(searchTerm);
    let filterbyFullName = contact => {
      let fullName = `${contact.firstName} ${contact.lastName}`
      return fullName.includes(searchTerm.toLowerCase())
    }

    // filter our list of contacts, making sure to preserve immutability
    let updatedContacts = this.state.contacts.slice().filter(filterbyFullName)

    // if there's no search results, return a copy of original dataset
    updatedContacts = updatedContacts.length ? updatedContacts : this.state.contacts.slice();

    this.setState({
      searchTerm, // update the searchTerm controlling the input
      contacts: updatedContacts
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ContactList
          data={this.state.contacts}
          onSearchInput={this.handleSearchInput}
          searchTerm={this.state.searchTerm}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
