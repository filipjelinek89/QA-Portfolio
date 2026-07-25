# BUG-API-006 -- Create Booking Returns Internal Server Error for Invalid Data Types

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-006 |
| Title | POST /booking returns HTTP 500 Internal Server Error when request contains invalid data types |
| Severity | High |
| Priority | High |
| Defect Type | Functional / Input Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

---

## 2. Defect Summary

During execution of **TC-BOOKING-012**, the Create Booking endpoint returned **HTTP 500 Internal Server Error** when multiple request fields contained invalid data types.

Instead of validating the request payload and returning an appropriate client validation error (such as **HTTP 400 Bad Request**), the API encountered an internal server error.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-002
- Test Scenario: TS-BOOKING-002
- Test Case: TC-BOOKING-012

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
{
    "firstname": 12345,
    "lastname": "Doe",
    "totalprice": "150",
    "depositpaid": "true",
    "bookingdates": {
        "checkin": "2026-08-01",
        "checkout": "2026-08-10"
    },
    "additionalneeds": "Breakfast"
}
```

---

## 7. Steps to Reproduce

1. Open Postman.
2. Create a POST request to:

```http
POST {{baseUrl}}/booking
```

3. Submit a request containing invalid data types.
4. Execute the request.
5. Observe the response.

---

## 8. Expected Result

The API should validate the request payload and reject fields with invalid data types.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

The API should not create a booking.

---

## 9. Actual Result

The API returned:

- HTTP 500 Internal Server Error

The server failed to validate the request payload before processing it.

---

## 10. API Response Details

Status:

```text
500 Internal Server Error
```

Response Time:

~2.06 s

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

The Create Booking endpoint does not validate request field data types before processing the request.

Submitting invalid data types causes the API to return an internal server error instead of an appropriate client validation error, indicating insufficient server-side input validation.

---

## 14. Severity / Priority

Severity: High

Priority: High

---

## 15. Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-012_Create_Booking_With_Invalid_Data_Type_Request_and_Tests.png
```

---

## 16. Additional Investigation

The same endpoint also returned **HTTP 500 Internal Server Error** when:

- Required fields were omitted.
- An empty request body (`{}`) was submitted.

This indicates a broader issue with server-side request validation.

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

The API validates request field data types and returns an appropriate client validation error (e.g., HTTP 400 Bad Request).

Actual:

The API returns **HTTP 500 Internal Server Error** when invalid data types are submitted in the request body.

Status: Open.