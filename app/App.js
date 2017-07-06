import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Welcome } from './Welcome';
import { Authentication } from './Authentication';

const App = StackNavigator({
  Welcome: { screen: Welcome, name: 'Quentin' },
  Authentication: { screen: Authentication},
}); 

export default App;
