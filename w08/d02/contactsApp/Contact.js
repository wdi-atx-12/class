import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Contact extends Component<{}> {
  render() {
    let fullName = `${this.props.info.firstName} ${this.props.info.lastName}`
    return (
      <View style={styles.rowContainer}>
        <Image style={styles.image} source={{uri: this.props.info.imageUrl}}></Image>
        <Text style={styles.text}>{fullName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height:40,
    width: 40,
    borderRadius: 20
  },
  text: {
    marginLeft: 12,
    fontSize: 16
  },
  rowContainer:{
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
