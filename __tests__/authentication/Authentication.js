import { CheckAuthentication, Authenticate } from '../../authentication/Authentication.js';

function makeAuthService(result) {
  return async (email, password) => result;  
};

it('begins in the correct state', () => {
  let authState = CheckAuthentication();

  expect(authState).toStrictEqual({authenticated: false});
});

it('can authenticate with username and password and render an error', async () => {
  let authState = CheckAuthentication();
  let email = "test@email.test";
  let password = "Test1234";
  let authService = makeAuthService({ error: "Invalid username or password" });

  let errorState = await Authenticate(email, password, authService);

  expect(errorState).toStrictEqual({authenticated: false, error: "Invalid username or password"});
});

it('can authenticate with username and password successfully', async () => {
  let authState = CheckAuthentication();
  let email = "test@email.test";
  let password = "Test1234";
  let user = { email, password };
  let authService = makeAuthService({});

  let successState = await Authenticate(email, password, authService);

  expect(successState).toStrictEqual({authenticated: true});
});
