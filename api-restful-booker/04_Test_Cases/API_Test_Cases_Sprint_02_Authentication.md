# API Test Cases -- Sprint 02 Authentication

## TC-AUTH-001 -- Verify successful authentication using valid credentials

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-001
  Endpoint           POST /auth
  Method             POST
  Priority           High
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin",
  "password":"password123"
}
```

### Test Steps

1.  Send a POST request to `/auth`.
2.  Use valid credentials.
3.  Submit the request.

### Expected Result

-   HTTP 200 OK
-   Authentication token is returned
-   Response body contains `token`

------------------------------------------------------------------------

## TC-AUTH-002 -- Verify invalid username

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-002
  Endpoint           POST /auth
  Method             POST
  Priority           High
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"wrong",
  "password":"password123"
}
```

### Test Steps

1.  Send POST request.
2.  Use invalid username and valid password.
3.  Submit request.

### Expected Result

-   Authentication is rejected
-   Response indicates bad credentials

------------------------------------------------------------------------

## TC-AUTH-003 -- Verify invalid password

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-002
  Endpoint           POST /auth
  Method             POST
  Priority           High
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin",
  "password":"wrong"
}
```

### Test Steps

1.  Send POST request.
2.  Use valid username and invalid password.
3.  Submit request.

### Expected Result

-   Authentication is rejected
-   Response indicates bad credentials

------------------------------------------------------------------------

## TC-AUTH-004 -- Verify invalid username and password

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-002
  Endpoint           POST /auth
  Method             POST
  Priority           High
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"wrong",
  "password":"wrong"
}
```

### Test Steps

1.  Send POST request.
2.  Use invalid credentials.
3.  Submit request.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------

## TC-AUTH-005 -- Verify missing username

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-003
  Endpoint           POST /auth
  Method             POST
  Priority           High
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "password":"password123"
}
```

### Test Steps

1.  Omit username.
2.  Send request.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------

## TC-AUTH-006 -- Verify missing password

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-003
  Endpoint           POST /auth
  Method             POST
  Priority           High
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin"
}
```

### Test Steps

1.  Omit password.
2.  Send request.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------

## TC-AUTH-007 -- Verify empty request body

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-003
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{}
```

### Test Steps

1.  Send empty JSON object.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------

## TC-AUTH-008 -- Verify username as number

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":123,
  "password":"password123"
}
```

### Test Steps

1.  Set username to numeric value.
2.  Send request.

### Expected Result

-   Request is rejected

------------------------------------------------------------------------

## TC-AUTH-009 -- Verify password as number

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin",
  "password":123
}
```

### Test Steps

1.  Set password to numeric value.
2.  Send request.

### Expected Result

-   Request is rejected

------------------------------------------------------------------------

## TC-AUTH-010 -- Verify username as boolean

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":true,
  "password":"password123"
}
```

### Test Steps

1.  Set username to boolean.
2.  Send request.

### Expected Result

-   Request is rejected

------------------------------------------------------------------------

## TC-AUTH-011 -- Verify password as boolean

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin",
  "password":true
}
```

### Test Steps

1.  Set password to boolean.
2.  Send request.

### Expected Result

-   Request is rejected

------------------------------------------------------------------------

## TC-AUTH-012 -- Verify username as array

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":["admin"],
  "password":"password123"
}
```

### Test Steps

1.  Set username to array.
2.  Send request.

### Expected Result

-   Request is rejected

------------------------------------------------------------------------

## TC-AUTH-013 -- Verify password as array

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin",
  "password":["password123"]
}
```

### Test Steps

1.  Set password to array.
2.  Send request.

### Expected Result

-   Request is rejected

------------------------------------------------------------------------

## TC-AUTH-014 -- Verify username as object

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":{"name":"admin"},
  "password":"password123"
}
```

### Test Steps

1.  Set username to object.
2.  Send request.

### Expected Result

-   Request is rejected

------------------------------------------------------------------------

## TC-AUTH-015 -- Verify password as object

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin",
  "password":{"value":"password123"}
}
```

### Test Steps

1.  Set password to object.
2.  Send request.

### Expected Result

-   Request is rejected

------------------------------------------------------------------------

## TC-AUTH-016 -- Verify null credentials

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":null,
  "password":null
}
```

### Test Steps

1.  Set both values to null.
2.  Send request.

### Expected Result

-   Request is rejected

------------------------------------------------------------------------

## TC-AUTH-017 -- Verify empty username

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"",
  "password":"password123"
}
```

### Test Steps

1.  Set username to empty string.
2.  Send request.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------

## TC-AUTH-018 -- Verify empty password

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Priority           Medium
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin",
  "password":""
}
```

### Test Steps

1.  Set password to empty string.
2.  Send request.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------

## TC-AUTH-019 -- Verify one-character username

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Priority           Low
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"a",
  "password":"password123"
}
```

### Test Steps

1.  Use one-character username.
2.  Send request.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------

## TC-AUTH-020 -- Verify one-character password

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Priority           Low
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin",
  "password":"a"
}
```

### Test Steps

1.  Use one-character password.
2.  Send request.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------

## TC-AUTH-021 -- Verify very long username

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Priority           Low
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"<256-char string>",
  "password":"password123"
}
```

### Test Steps

1.  Use very long username.
2.  Send request.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------

## TC-AUTH-022 -- Verify very long password

  Field              Value
  ------------------ -------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Priority           Low
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

``` json
{
  "username":"admin",
  "password":"<256-char string>"
}
```

### Test Steps

1.  Use very long password.
2.  Send request.

### Expected Result

-   Authentication is rejected

------------------------------------------------------------------------
