import * as React from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { CheckAuthentication, Authenticate } from './authentication/Authentication';

async function authService(email, password){ 
  if (email == "test@email.com" && password == "Test1234") {
    return {};
  } else {
    return { error: "Invalid credentials" };
  }
};

async function onPress(username, password, setState) {
  let authState = await Authenticate(username, password, authService);
  setState(authState);
};

function renderAuthenticated() {
  return <Text style={styles.instructions}>Yep</Text>;
};

function renderUnauthenticated(state, setState, username, setUsername, password, setPassword) {
  return <View>
    <TextInput style={styles.inputs} value={username} onChangeText={text => setUsername(text)} />
    <TextInput style={styles.inputs} value={password} onChangeText={text => setPassword(text)} />
    <Button title="Login" onPress={() => onPress(username, password, setState)} />
  </View>;
};

function renderError(state) {
  return <Text>{state.error}</Text>;
}

let initialAuthState = CheckAuthentication();

export default function App() {
  let [state, setState] = React.useState(initialAuthState);
  let [username, setUsername] = React.useState("username");
  let [password, setPassword] = React.useState("password");

  return (
    <View style={styles.container}>
      
      {state.authenticated ? renderAuthenticated() : renderUnauthenticated(state, setState, username, setUsername, password, setPassword)}
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
  inputs: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1
  }
});
