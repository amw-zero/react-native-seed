import * as React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { CheckAuthentication, Authenticate } from './authentication/Authentication';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

async function onPress(state, setState) {
  console.log("onPress");
  let authState = await Authenticate("test", "pw");
  console.log("done");
  setState(Object.assign({}, state, authState));
};

function renderAuthenticated() {
  return <Text style={styles.instructions}>Yep</Text>;
};

function renderUnauthenticated(state, setState) {
  return <Button title="clicky" onPress={() => onPress(state, setState)}></Button>;
};

function renderError(state) {
  return <Text>{state.error}</Text>;
}

let initialAuthState = CheckAuthentication();

export default function App() {
  let [state, setState] = React.useState(initialAuthState);

  return (
    <View style={styles.container}>
      {state.authenticated ? renderAuthenticated() : renderUnauthenticated(state, setState)}
      {state.error ? renderError(state) : null}
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
