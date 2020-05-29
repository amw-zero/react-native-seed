function CheckAuthentication() {
  return {
    authenticated: false
  };
};

async function httpAuthService(email, password){
  let response = await fetch("http://localhost:4567/auth", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  return response.json();
};

async function Authenticate(username, password, authService = httpAuthService) {
  let result = await authService(username, password);
  if (result.error) {
    return {
      authenticated: false,
      error: result.error
    };
  } 
    
  return {
    authenticated: true
  };
};

export { CheckAuthentication, Authenticate };