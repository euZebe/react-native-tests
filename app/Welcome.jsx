import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  
  render() {
    const { name } = this.props;
    return (
      <View>
        <Text>Welcome {name}!</Text>
      </View>
    );
  }
}