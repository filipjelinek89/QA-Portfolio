# API008 – Verify Loan Request Endpoint

**Module:** API Testing

**Priority:** High

**Severity:** Critical

**Type:** Functional API Test

---

## Objective

Verify that the Loan Request API correctly processes a valid loan request and returns an appropriate response.

---

## Preconditions

* The ParaBank application is accessible.
* A valid customer account exists.
* The user is authenticated.
* The customer has at least one eligible account.
* The Loan Request endpoint has been identified.

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

| Field        | Value                |
| ------------ | -------------------- |
| Loan Amount  | 1000                 |
| Down Payment | 100                  |
| From Account | Valid account number |

---

## Test Steps

| Step | Action                                                   |
| ---- | -------------------------------------------------------- |
| 1    | Log in to the ParaBank application.                      |
| 2    | Navigate to the **Request Loan** page.                   |
| 3    | Open Chrome DevTools (**Network** tab) or Postman.       |
| 4    | Submit a valid loan request and capture the API request. |
| 5    | Replay the request in Postman using the same parameters. |
| 6    | Review the response returned by the API.                 |

---

## Expected Result

* The API returns **HTTP Status Code 200 (OK)** or the expected success status.
* The loan request is processed successfully.
* The response contains the loan approval or rejection result.
* The response format is valid and complete.
* No unexpected server errors occur.

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
* The response body contains the loan request result.
* Returned values match the submitted request.
* Error messages are meaningful if the request is rejected.
* Response headers are correct.
* Response time is acceptable.
* No unexpected fields or missing values are present.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
