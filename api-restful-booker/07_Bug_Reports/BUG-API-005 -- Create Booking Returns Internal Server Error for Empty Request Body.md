# BUG-API-005 -- Create Booking Returns Internal Server Error for Empty Request Body

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-005 |
| Title | POST /booking returns HTTP 500 Internal Server Error when request body is empty |
| Severity | High |
| Priority | High |
| Defect Type | Functional / Input Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

---

## 2. Defect Summary

During execution of **TC-BOOKING-011**, the Create Booking endpoint returned **HTTP 500 Internal Server Error** when an empty JSON request body (`{}`) was submitted.

Instead of validating the request and returning an appropriate client validation error (such as **HTTP 400 Bad Request**), the API encountered an internal server error.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-002
- Test Scenario: TS-BOOKING-002
- Test Case: TC-BOOKING-011

---

## 4. API Request Details

**Method:** POST

**Endpoint:**

```http
POST {{baseUrl}}/booking
```

Authentication: None

---

## 5. Preconditions

1. Restful Booker API available.
2. Postman environment configured.
3. Base URL configured.

---

## 6. Test Data

```json
{}
```

---

## 7. Steps to Reproduce

1. Open Postman.
2. Create a POST request to:

```http
POST {{baseUrl}}/booking
```

3. Send an empty JSON object:

```json
{}
```

4. Execute the request.
5. Observe the response.

---

## 8. Expected Result

The API should reject the empty request body.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

The API should not create a booking.

---

## 9. Actual Result

The API returned:

- HTTP 500 Internal Server Error

The server failed to validate the request before processing it.

---

## 10. API Response Details

Status:

```text
500 Internal Server Error
```

Response Time:

~1.9 s

Response Body:

```text
Internal Server Error
```

---

## 11. Postman Assertion Results

PASS:

- Response Time
- Content-Type Header Exists
- Response Body Not Empty

FAIL:

- Status Code is 400 Bad Request
- Status Code is not 500

---

## 12. Reproducibility

Always (100%)

---

## 13. Impact Analysis

Submitting an empty request body causes the API to return an internal server error instead of validating the request and returning an appropriate client error.

This indicates insufficient server-side request validation and may lead to unexpected behavior for API consumers.

---

## 14. Severity / Priority

Severity: High

Priority: High

---

## 15. Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-011_Create_Booking_With_Empty_Request_Body_Request_and_Tests.png
```

---

## 16. Additional Investigation

This behavior is consistent with other malformed request scenarios, including requests with missing required fields, which also return **HTTP 500 Internal Server Error**.

---

## 17. Environment

- API: Restful Booker
- Tool: Postman
- Environment: Public Test Environment
- OS: Windows

---

## 18. Status

Open

---

## 19. Re-test

Required: Yes

Status: Not Started

---

## 20. Summary

Expected:

The API validates an empty request body and returns an appropriate client validation error (e.g., HTTP 400 Bad Request).

Actual:

The API returns **HTTP 500 Internal Server Error** when an empty request body is submitted.

Status: Open.