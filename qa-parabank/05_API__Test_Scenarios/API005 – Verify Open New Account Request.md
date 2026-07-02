# API005 – Verify Open New Account Request

**Module:** API Testing

**Priority:** High

**Severity:** Critical

**Type:** Functional API Test

---

## Objective

Verify that the API successfully creates a new bank account when a valid account creation request is submitted.

---

## Preconditions

* The ParaBank application is accessible.
* A valid customer account exists.
* The user is authenticated.
* The Open New Account API endpoint has been identified.

---

## Request Information

| Field          | Value                                  |
| -------------- | -------------------------------------- |
| HTTP Method    | *To be identified during API analysis* |
| Endpoint       | *To be identified during API analysis* |
| Headers        | *To be completed during testing*       |
| Authentication | *To be completed during testing*       |

---

## Test Data

| Field           | Value                  |
| --------------- | ---------------------- |
| Customer ID     | Valid customer ID      |
| Account Type    | Checking or Savings    |
| Funding Account | Valid existing account |

---

## Test Steps

| Step | Action                                                                    |
| ---- | ------------------------------------------------------------------------- |
| 1    | Log in to the ParaBank application.                                       |
| 2    | Open Chrome DevTools and navigate to the **Network** tab, or use Postman. |
| 3    | Open the **Open New Account** page.                                       |
| 4    | Select an account type and funding account.                               |
| 5    | Submit the request and capture the API call.                              |
| 6    | Replay the request in Postman.                                            |
| 7    | Review the API response.                                                  |

---

## Expected Result

* The API successfully processes the request.
* The response returns a successful HTTP status code.
* A new bank account is created.
* A unique account number is returned.
* The newly created account is available in the Account Overview page.
* No unexpected errors occur.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:

* The correct HTTP status code is returned.
* A unique account number is generated.
* The response body contains the expected account details.
* The account type matches the selected option.
* The funding account is processed correctly.
* The response time is acceptable.
* No duplicate accounts are created if the request is submitted only once.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
