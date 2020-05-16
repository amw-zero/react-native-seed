import * as React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Authentication, authState } from './authentication/Authentication.js';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

function onPress(setState) {
  setState(Object.assign({}, authState, { authenticated: true }));
};

function renderAuthenticated() {
  return <Text style={styles.instructions}>Yep</Text>;
};

function renderUnauthenticated(setState) {
  return <Button title="clicky" onPress={() => onPress(setState)}></Button>;
};

export default function App() {
  let [state, setState] = React.useState(authState);

  return (
    <View style={styles.container}>
      {state.authenticated ? renderAuthenticated() : renderUnauthenticated(setState)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
