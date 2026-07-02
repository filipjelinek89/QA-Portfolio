# API007 – Verify Bill Payment Request

**Module:** API Testing

**Priority:** Critical

**Severity:** Critical

**Type:** Functional API Test

---

## Objective

Verify that the Bill Payment API successfully processes a valid payment request and returns the expected response.

---

## Preconditions

* The ParaBank application is accessible.
* A valid customer account exists.
* The user is authenticated.
* A source account with sufficient funds is available.
* The Bill Payment endpoint has been identified.

---

## Request Information

| Field          | Value                                  |
| -------------- | -------------------------------------- |
| HTTP Method    | POST                                   |
| Endpoint       | *To be identified during API analysis* |
| Headers        | *To be completed during testing*       |
| Authentication | *To be completed during testing*       |

---

## Test Data

| Field          | Value                   |
| -------------- | ----------------------- |
| Payee Name     | Test Payee              |
| Address        | 123 Main Street         |
| City           | New York                |
| State          | NY                      |
| ZIP Code       | 10001                   |
| Phone          | 1234567890              |
| Account Number | Valid payee account     |
| Verify Account | Matching account number |
| Amount         | 100.00                  |
| Source Account | Valid customer account  |

---

## Test Steps

| Step | Action                                                                       |
| ---- | ---------------------------------------------------------------------------- |
| 1    | Log in to the ParaBank application.                                          |
| 2    | Open Chrome DevTools (**Network**) or Postman.                               |
| 3    | Navigate to **Bill Pay** and identify the payment API request.               |
| 4    | Capture the request details (endpoint, headers, parameters, authentication). |
| 5    | Send the request with valid payment data.                                    |
| 6    | Review the API response.                                                     |

---

## Expected Result

* The API returns **HTTP Status Code 200 (OK)** or another documented success status.
* The payment request is processed successfully.
* A confirmation response is returned.
* The response contains the expected payment details or confirmation message.
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

* The payment amount is processed correctly.
* The correct source account is used.
* Response headers and body are valid.
* The response time is acceptable.
* The transaction is reflected correctly in the application (if applicable).
* No duplicate payment is created if the request is sent only once.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
