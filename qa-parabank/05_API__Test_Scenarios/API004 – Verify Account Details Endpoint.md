# API004 – Verify Account Details Endpoint

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the Account Details API endpoint returns accurate account information for the selected account.

---

## Preconditions

* The ParaBank application is accessible.
* A valid customer account exists.
* The user is successfully authenticated.
* At least one bank account is available.
* The Account Details endpoint has been identified.

---

## Request Information

| Field          | Value                                  |
| -------------- | -------------------------------------- |
| HTTP Method    | GET                                    |
| Endpoint       | *To be identified during API analysis* |
| Headers        | *To be completed during testing*       |
| Authentication | *To be completed during testing*       |

---

## Test Data

| Field            | Value                       |
| ---------------- | --------------------------- |
| Account ID       | Valid account ID            |
| Customer Account | Existing account            |
| Authentication   | Valid authenticated session |

---

## Test Steps

| Step | Action                                                                              |
| ---- | ----------------------------------------------------------------------------------- |
| 1    | Log in to the ParaBank application.                                                 |
| 2    | Navigate to **Accounts Overview**.                                                  |
| 3    | Select an existing account.                                                         |
| 4    | Open Chrome DevTools and navigate to the **Network** tab, or use Postman.           |
| 5    | Identify the Account Details API request.                                           |
| 6    | Capture the endpoint, request method, headers, and parameters.                      |
| 7    | Send the request using Postman.                                                     |
| 8    | Compare the API response with the account information displayed in the application. |

---

## Expected Result

* The API returns **HTTP Status Code 200 (OK)**.
* The response contains the correct account information.
* The account ID matches the selected account.
* The account balance matches the value displayed in the UI.
* The account type is correct.
* The response format is valid and complete.
* No unexpected errors are returned.

---

## Actual Result

*To be completed during test execution.*

---

## Status

**Not Executed**

---

## Notes

Verify that:

* The account ID is correct.
* The account balance matches the UI.
* The account type is correct.
* The response body contains all expected fields.
* Response headers are correct.
* Response time is acceptable.
* No unexpected or sensitive information is exposed.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
