function CheckAuthentication() {
  return {
    authenticated: false
  };
};

async function Authenticate(username, password, authService) {
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