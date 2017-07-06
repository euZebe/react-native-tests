import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Authentication extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (name) => {
    this.setState({name});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Please log in...</Text>
        <TextInput 
          onChange={this.handleChange}
          value={this.state.name} 
          autofocus
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}}
        />
        <Button
          title='➡'
          onPress={() => this.setState({name: ''})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}