import { CheckAuthentication, Authenticate } from '../../authentication/Authentication.js';

it('begins in the correct state', () => {
  let authState = CheckAuthentication();

  expect(authState).toStrictEqual({authenticated: false});
});

it('can authenticate with username and password and render an error', async () => {
  let authState = CheckAuthentication();
  let email = "test@email.test";
  let password = "Test1234";

  let errorState = await Authenticate(email, password);

  expect(errorState).toStrictEqual({authenticated: false, error: "Invalid username or password"});
});
