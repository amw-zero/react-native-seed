let authState = {
  authenticated: false
};

function CheckAuthentication() {
  return authState;
};

async function Authenticate(username, password) {
  return {
    authenticated: false,
    error: "Invalid username or password"
  };
};

export { CheckAuthentication, Authenticate };