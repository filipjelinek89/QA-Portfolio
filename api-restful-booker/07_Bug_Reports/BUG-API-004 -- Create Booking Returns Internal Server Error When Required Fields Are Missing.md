# BUG-API-004 -- Create Booking Returns Internal Server Error When Required Fields Are Missing

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-004 |
| Title | POST /booking returns HTTP 500 Internal Server Error when required fields are missing |
| Severity | High |
| Priority | High |
| Defect Type | Functional / Input Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

---

## 2. Defect Summary

During execution of **TC-BOOKING-010**, the Create Booking endpoint returned **HTTP 500 Internal Server Error** when one or more required fields were omitted from the request body.

Instead of validating the request and returning an appropriate client error (such as **HTTP 400 Bad Request**), the API encountered an internal server error.

Additional testing confirmed the issue occurs with different missing required fields, indicating a server-side validation defect rather than a field-specific issue.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-002
- Test Scenario: TS-BOOKING-002
- Test Case: TC-BOOKING-010

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

### Test 1 – Missing `totalprice`

```json
{
    "firstname": "John",
    "lastname": "Doe",
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-08-01",
        "checkout": "2026-08-10"
    },
    "additionalneeds": "Breakfast"
}
```

### Test 2 – Missing `lastname`

```json
{
    "firstname": "John",
    "totalprice": 150,
    "depositpaid": true,
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

3. Remove one required field from the request body.
4. Send the request.
5. Observe the response.

---

## 8. Expected Result

The API should validate the request before processing it.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

The API should clearly indicate that a required field is missing.

---

## 9. Actual Result

The API returned:

- HTTP 500 Internal Server Error

The request was not validated correctly and resulted in an internal server error.

---

## 10. API Response Details

Status:

```text
500 Internal Server Error
```

Response Time:

~2.0–2.8 s

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

The Create Booking endpoint does not properly validate required request fields.

Malformed client requests cause an internal server error instead of a validation error, exposing improper server-side input handling.

This behavior may confuse API consumers, complicate error handling, and indicates insufficient request validation.

---

## 14. Severity / Priority

Severity: High

Priority: High

---

## 15. Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-010_Create_Booking_With_Missing_Required_Field_Request_and_Tests.png
```

---

## 16. Additional Investigation

Additional testing confirmed the defect is reproducible.

The API returned **HTTP 500 Internal Server Error** when different required fields were omitted, including:

- `totalprice`
- `lastname`

This demonstrates that the issue is not limited to a single field but affects server-side validation of required request data.

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

The API validates missing required fields and returns an appropriate client validation error (e.g., HTTP 400 Bad Request).

Actual:

The API returns **HTTP 500 Internal Server Error** whenever required fields are omitted from the request body, indicating improper server-side validation.

Status: Open.