# BUG-API-010 -- Update Booking Returns Internal Server Error When Invalid Data Types Are Submitted

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-010 |
| Title | PUT /booking/{id} returns Internal Server Error when invalid data types are submitted |
| Severity | High |
| Priority | High |
| Defect Type | Input Validation / Server-side Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

---

## 2. Defect Summary

During execution of **TC-BOOKING-021**, the Update Booking endpoint received a request containing multiple invalid data types.

Instead of validating the request and rejecting it with an appropriate client validation error (for example **HTTP 400 Bad Request**), the API returned **HTTP 500 Internal Server Error**.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-003
- Test Scenario: TS-BOOKING-012
- Test Case: TC-BOOKING-021

---

## 4. API Request Details

**Method:** PUT

**Endpoint:**

```http
PUT {{baseUrl}}/booking/{{bookingId}}
```

Authentication:

```text
Cookie: token={{token}}
```

---

## 5. Preconditions

1. Restful Booker API available.
2. Valid authentication token generated.
3. Existing Booking ID available.
4. Postman environment configured.

---

## 6. Test Data

```json
{
    "firstname": 12345,
    "lastname": "Smith",
    "totalprice": "200",
    "depositpaid": "true",
    "bookingdates": {
        "checkin": "2026-09-01",
        "checkout": "2026-09-10"
    },
    "additionalneeds": false
}
```

---

## 7. Steps to Reproduce

1. Open Postman.
2. Create a PUT request to:

```http
PUT {{baseUrl}}/booking/{{bookingId}}
```

3. Authenticate using a valid token.
4. Submit the request containing invalid data types.
5. Execute the request.
6. Observe the response.

---

## 8. Expected Result

The API should validate request body data types before processing the request.

Expected response:

- HTTP **400 Bad Request**

or another appropriate client validation error.

The booking should **not** be updated.

---

## 9. Actual Result

The API returned:

- HTTP **500 Internal Server Error**

The request caused an unexpected server error instead of a validation error.

---

## 10. API Response Details

Status:

```text
500 Internal Server Error
```

Response Time:

~270 ms

Response:

Internal Server Error

---

## 11. Postman Assertion Results

PASS:

- Response Time
- Response Body Not Empty
- Response Size Greater Than 0 Bytes
- Request Rejected
- Response Not Empty

FAIL:

- Status Code is 400 Bad Request
- Response is not HTTP 500

---

## 12. Reproducibility

Always (100%)

---

## 13. Impact Analysis

The Update Booking endpoint does not properly validate request body data types before processing the request.

Submitting invalid data causes the server to throw an internal exception instead of returning a client validation error.

This behavior indicates insufficient server-side validation and may expose application stability issues.

---

## 14. Severity / Priority

Severity: High

Priority: High

---

## 15. Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-021_Update_Booking_With_Invalid_Data_Types_Request_and_Tests.png
```

---

## 16. Environment

- API: Restful Booker
- Tool: Postman
- Environment: Public Test Environment
- OS: Windows

---

## 17. Status

Open

---

## 18. Re-test

Required: Yes

Status: Not Started

---

## 19. Summary

Expected:

The API validates request body data types and rejects invalid input with an appropriate client validation error (for example **HTTP 400 Bad Request**).

Actual:

The API returns **HTTP 500 Internal Server Error** when invalid data types are submitted, indicating inadequate server-side input validation.

Status: Open.