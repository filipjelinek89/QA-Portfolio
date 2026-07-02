# API006 – Verify Transfer Funds Request

**Module:** API Testing

**Priority:** Critical

**Severity:** Critical

**Type:** Functional API Test

---

## Objective

Verify that the Transfer Funds API successfully processes a valid fund transfer request and updates the account balances correctly.

---

## Preconditions

* The ParaBank application is accessible.
* The user is authenticated.
* At least two active accounts are available.
* The source account has sufficient funds.
* The Transfer Funds endpoint has been identified.

---

## Request Information

| Field          | Value                                  |
| -------------- | -------------------------------------- |
| HTTP Method    | POST                                   |
| Endpoint       | *To be identified during API analysis* |
| Headers        | *To be completed during testing*       |
| Authentication | *To be completed during testing*       |
| Content-Type   | *To be completed during testing*       |

---

## Test Data

| Field           | Value                       |
| --------------- | --------------------------- |
| From Account    | Valid account               |
| To Account      | Valid account               |
| Transfer Amount | Valid amount (e.g., 100.00) |

---

## Test Steps

| Step | Action                                                    |
| ---- | --------------------------------------------------------- |
| 1    | Log in to the ParaBank application.                       |
| 2    | Open Chrome DevTools (**Network**) or Postman.            |
| 3    | Initiate a fund transfer using valid account information. |
| 4    | Capture the Transfer Funds API request.                   |
| 5    | Recreate and send the request using Postman.              |
| 6    | Review the API response.                                  |
| 7    | Verify the updated account balances in the application.   |

---

## Expected Result

* The API returns **HTTP Status Code 200 (OK)** or the expected success status.
* The transfer request is processed successfully.
* Funds are deducted from the source account.
* Funds are credited to the destination account.
* The API response confirms the successful transaction.
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

* The response status code is correct.
* The transfer amount is processed accurately.
* The source and destination account IDs are correct.
* Account balances are updated correctly.
* The response body contains the expected confirmation details.
* Duplicate transactions are not created.
* Response time is acceptable.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
