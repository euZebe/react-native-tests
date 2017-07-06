import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Authentication extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {name: 'Home'};
  }

  handleChange = (name) => {
    this.setState({name});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Please log in...</Text>
        <TextInput 
          onChangeText={this.handleChange}
          value={this.state.name} 
          autofocus
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, paddingLeft: 10}}
        />
        <Button
          title='➡'
          onPress={() => navigate('Welcome', {name: this.state.name} )}
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
});


class Welcome extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`,
  });
  
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Welcome {params.name}!</Text>
      </View>
    );
  }
}

const App = StackNavigator({
  Authentication: { screen: Authentication},
  Welcome: { screen: Welcome, name: 'Quentin' },
}); 

export default App;
