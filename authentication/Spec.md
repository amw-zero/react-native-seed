# Types

username: string
password: string
error: 
  | InvalidCredentials

authenticationResult: result(token, error) 
authService: (email, password) => authenticationResult

# Commands

function Authenticate(username, password, authService)

# Type Cardinality

n(username) = inf
n(password) = inf
n(bool) = 2
n(authenticationResult) = 2

# Equivalence Classes

eqc(username) = 1 (all treated the same)
eqc(password) = 1 

# Authenticate

Inputs:

(username, password, authService)
(username, password, result)       ==> return value substitution
(1, 1, 2)

2 cases:

| Condition | Case 1 | Case 2 |
|-----------|--------|--------|
|Successful auth | { token: t } | { error: InvalidCredentials } |
| username | - | - |
| password | - | - |
