import * as React from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { CheckAuthentication, Authenticate } from './authentication/Authentication';

async function authService(email, password){ 
  return { };
};

async function onPress(state, setState) {
  let authState = await Authenticate("test", "pw", authService);
  setState(Object.assign({}, state, authState));
};

function renderAuthenticated() {
  return <Text style={styles.instructions}>Yep</Text>;
};

function renderUnauthenticated(state, setState) {
  return <Button title="Login" onPress={() => onPress(state, setState)}></Button>;
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
