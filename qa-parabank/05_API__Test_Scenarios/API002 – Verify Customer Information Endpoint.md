# API002 – Verify Customer Information Endpoint

**Module:** API Testing

**Priority:** High

**Severity:** High

**Type:** Functional API Test

---

## Objective

Verify that the Customer Information API endpoint returns the correct customer details for an authenticated user.

---

## Preconditions

* The ParaBank application is accessible.
* A valid customer account exists.
* The user is authenticated.
* The Customer Information endpoint has been identified.

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

| Field          | Value                       |
| -------------- | --------------------------- |
| Customer ID    | Valid customer ID           |
| Authentication | Valid authenticated session |

---

## Test Steps

| Step | Action                                                                       |
| ---- | ---------------------------------------------------------------------------- |
| 1    | Open the ParaBank application and log in.                                    |
| 2    | Open Chrome DevTools and navigate to the **Network** tab, or use Postman.    |
| 3    | Identify the Customer Information API request.                               |
| 4    | Capture the request details (endpoint, headers, parameters, authentication). |
| 5    | Send the request using Postman.                                              |
| 6    | Review the API response.                                                     |

---

## Expected Result

* The API returns **HTTP Status Code 200 (OK)**.
* The response contains the authenticated customer's information.
* The returned data matches the customer account used for testing.
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

* The correct customer information is returned.
* No sensitive information is exposed unnecessarily.
* Response headers are correct.
* Response time is acceptable.
* Response body is valid and properly formatted.
* No unexpected fields or missing values are present.

---

⬅️ Back to API Testing

[05_API_Testing.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/05_API_Testing.md)
