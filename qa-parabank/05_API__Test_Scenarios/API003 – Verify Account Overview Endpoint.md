# API003 – Verify Account Overview Endpoint

**Module:** API Testing

**Priority:** High

**Severity:** Critical

**Type:** Functional API Test

---

## Objective

Verify that the Account Overview API endpoint returns the correct list of customer accounts, including account numbers, balances, and available balances.

---

## Preconditions

* The ParaBank application is accessible.
* A valid customer account exists.
* The user is authenticated.
* The Account Overview endpoint has been identified.

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

| Field    | Value                     |
| -------- | ------------------------- |
| Username | Valid registered user     |
| Password | Valid password            |
| Account  | Existing customer account |

---

## Test Steps

| Step | Action                                                                       |
| ---- | ---------------------------------------------------------------------------- |
| 1    | Log in to the ParaBank application.                                          |
| 2    | Open Chrome DevTools and navigate to the **Network** tab, or use Postman.    |
| 3    | Navigate to **Accounts Overview**.                                           |
| 4    | Identify the API request responsible for retrieving account information.     |
| 5    | Capture the request details (endpoint, headers, parameters, authentication). |
| 6    | Send the request using Postman.                                              |
| 7    | Review the API response.                                                     |

---

## Expected Result

* The API returns **HTTP Status Code 200 (OK)**.
* The response contains all customer accounts associated with the authenticated user.
* Each account includes the correct account number.
* Account balances are returned correctly.
* Available balances match the values displayed in the application.
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

* The account list is complete.
* Account numbers are unique.
* Account balances match the values displayed in the UI.
* Currency values are returned correctly.
* Response headers are correct.
* Response time is acceptable.
* The response body is valid JSON (or the expected response format).
* No unauthorized account information is returned.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
