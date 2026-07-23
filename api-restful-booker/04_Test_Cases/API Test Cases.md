# 7. Authentication Test Cases

---

## TC-AUTH-001 – Verify successful authentication using valid credentials

| Field | Value |
|------|-------|
| Scenario ID | TS-AUTH-001 |
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Test Type | Positive |
| Priority | Critical |

### Preconditions

- Restful Booker API is available.
- `baseUrl` environment variable is configured.
- Postman environment is selected.

### Test Data

```http
POST {{baseUrl}}/auth
```

```json
{
  "username": "admin",
  "password": "password123"
}
```

### Test Steps

1. Open the **POST - Create Token - Valid Credentials** request.
2. Verify the HTTP method is **POST**.
3. Send the request.
4. Review the response.
5. Verify the automated Postman assertions.

### Expected Result

- HTTP Status Code = **200 OK**
- Response contains a valid authentication token.
- Response format matches the documented API contract.
- Response time is below the project threshold.
- All Postman tests pass.

### Related Postman Request

```
POST - Create Token - Valid Credentials
```

---

## TC-AUTH-002 – Verify authentication fails with invalid credentials

| Field | Value |
|------|-------|
| Scenario ID | TS-AUTH-002 |
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Test Type | Negative |
| Priority | Critical |

### Preconditions

- API is available.
- Authentication request is configured.

### Test Data

```json
{
  "username": "invalidUser",
  "password": "invalidPassword"
}
```

### Test Steps

1. Open the invalid authentication request.
2. Send the request.
3. Review the response.
4. Verify that no authentication token is returned.

### Expected Result

- Authentication is rejected.
- No valid token is returned.
- Error response is returned according to the API behaviour.

### Related Postman Requests

```
POST - Invalid Username

POST - Invalid Password

POST - Invalid Credentials
```

---

## TC-AUTH-003 – Verify required authentication fields

| Field | Value |
|------|-------|
| Scenario ID | TS-AUTH-003 |
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Test Type | Validation |
| Priority | High |

### Preconditions

- API is available.
- Authentication request is configured.

### Test Data

Execute requests with:

```json
{}
```

```json
{
  "username": "admin"
}
```

```json
{
  "password": "password123"
}
```

```json
{
  "username": "",
  "password": ""
}
```

### Test Steps

1. Execute each request.
2. Observe the server response.
3. Verify the returned status code and response body.
4. Confirm that no authentication token is returned.

### Expected Result

- Requests with missing or empty required fields are rejected.
- No authentication token is returned.
- Returned responses are documented.

### Related Postman Requests

```
POST - Missing Username

POST - Missing Password

POST - Empty Credentials
```

---

## TC-AUTH-004 – Verify authentication request data type validation

| Field | Value |
|------|-------|
| Scenario ID | TS-AUTH-004 |
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Test Type | Negative |
| Priority | High |

### Preconditions

- API is available.

### Test Data

Execute requests using incorrect data types.

### Test Steps

1. Replace username with Number, Boolean, Array and Object.
2. Replace password with Number, Boolean, Array and Object.
3. Send each request.
4. Record the responses.

### Expected Result

- Invalid data types are rejected.
- No authentication token is returned.
- API behaviour is documented.

### Related Postman Requests

```
POST - Invalid Username Data Type

POST - Invalid Password Data Type

POST - Null Credentials
```

---

## TC-AUTH-005 – Verify authentication request boundary values

| Field | Value |
|------|-------|
| Scenario ID | TS-AUTH-005 |
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Test Type | Boundary |
| Priority | Medium |

### Preconditions

- API is available.

### Test Data

Execute requests using:

- One character
- Maximum length
- Very long strings
- Unicode
- Special characters
- Diacritics

### Test Steps

1. Execute each boundary value request.
2. Observe the API response.
3. Record the results.

### Expected Result

- Boundary values are processed according to API behaviour.
- Results are documented.

### Related Postman Requests

```
POST - Boundary Username

POST - Boundary Password

POST - Unicode Credentials
```

---

## TC-AUTH-006 – Verify authentication response contract

| Field | Value |
|------|-------|
| Scenario ID | TS-AUTH-006 |
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Test Type | Contract |
| Priority | High |

### Preconditions

- Valid authentication request is configured.

### Test Steps

1. Execute the authentication request.
2. Verify the Status Code.
3. Verify the Response Body.
4. Verify the Content-Type header.
5. Verify the response contract.

### Expected Result

- HTTP Status Code = **200 OK**
- JSON response contains the **token** property.
- Content-Type contains **application/json**.
- Response matches the documented API contract.

### Related Postman Request

```
POST - Create Token - Valid Credentials
```

---

## TC-AUTH-007 – Verify authentication request headers

| Field | Value |
|------|-------|
| Scenario ID | TS-AUTH-007 |
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Test Type | Header Validation |
| Priority | Medium |

### Preconditions

- API is available.

### Test Data

Execute requests with:

- Missing Content-Type
- Invalid Content-Type
- Unsupported Content-Type

### Test Steps

1. Execute each request.
2. Observe the server response.
3. Record the returned status code and response body.

### Expected Result

- Request headers are validated.
- API returns the expected behaviour.

### Related Postman Requests

```
POST - Missing Content-Type

POST - Invalid Content-Type
```

---

## TC-AUTH-008 – Verify authentication security behavior

| Field | Value |
|------|-------|
| Scenario ID | TS-AUTH-008 |
| Module | Authentication |
| Endpoint | POST /auth |
| HTTP Method | POST |
| Test Type | Security |
| Priority | High |

### Preconditions

- API is available.

### Test Steps

1. Execute invalid authentication requests.
2. Review the response.
3. Verify that sensitive information is not exposed.
4. Verify that no authentication token is returned.

### Expected Result

- No authentication token is returned.
- Sensitive information is not exposed.
- Authentication failures follow consistent API behaviour.

### Related Postman Requests

```
POST - Invalid Credentials

POST - Security Validation
```

---

# 8. Sprint Progress

| Sprint | Planned | Completed |
|---------|---------|-----------|
| Sprint 1 | 3 Test Cases | 3 |
| Sprint 2 | 8 Test Cases | 0 |
| Sprint 3 | TBD | 0 |
| Sprint 4 | TBD | 0 |
| Sprint 5 | TBD | 0 |
| Sprint 6 | TBD | 0 |
| Sprint 7 | TBD | 0 |
| Sprint 8 | TBD | 0 |
| Sprint 9 | TBD | 0 |

---

# 9. Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | July 2026 | Initial Sprint 1 Test Cases |
| 2.0 | July 2026 | Completed Sprint 1 documentation |
| 3.0 | July 2026 | Added project scope, traceability workflow, Sprint 2 planning, Authentication Test Case roadmap and master Test Case summary |