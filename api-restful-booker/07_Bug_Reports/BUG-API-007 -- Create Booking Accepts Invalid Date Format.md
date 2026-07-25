# BUG-API-007 -- Create Booking Accepts Invalid Date Format

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-007 |
| Title | POST /booking accepts booking dates in an invalid format |
| Severity | Medium |
| Priority | Medium |
| Defect Type | Functional / Input Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

---

## 2. Defect Summary

During execution of **TC-BOOKING-013**, the Create Booking endpoint accepted booking dates using the format **DD-MM-YYYY** instead of the expected **YYYY-MM-DD** format.

The API successfully created the booking and returned **HTTP 200 OK** instead of rejecting the invalid input.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-002
- Test Scenario: TS-BOOKING-002
- Test Case: TC-BOOKING-013

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
    "firstname": "John",
    "lastname": "Doe",
    "totalprice": 150,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "01-08-2026",
        "checkout": "10-08-2026"
    },
    "additionalneeds": "Breakfast"
}
```

---

## 7. Steps to Reproduce

1. Open Postman.
2. Create a POST request to `POST {{baseUrl}}/booking`.
3. Submit booking dates using the `DD-MM-YYYY` format.
4. Execute the request.
5. Observe the response.

---

## 8. Expected Result

The API should reject booking dates that do not follow the required `YYYY-MM-DD` format.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

---

## 9. Actual Result

The API returned:

- HTTP 200 OK

A new booking was created despite the invalid date format.

---

## 10. API Response Details

Status:

```text
200 OK
```

Response Time:

~2.07 s

Response:

Booking successfully created.

---

## 11. Postman Assertion Results

PASS:

- Response Time
- Content-Type Header Exists
- Response Body Not Empty
- Status Code is not 500

FAIL:

- Status Code is 400 Bad Request

---

## 12. Reproducibility

Always (100%)

---

## 13. Impact Analysis

The API does not validate booking date formats before creating a booking.

Accepting inconsistent date formats may result in invalid or ambiguous data being stored and increases the risk of inconsistent client behavior.

---

## 14. Severity / Priority

Severity: Medium

Priority: Medium

---

## 15. Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-013_Create_Booking_With_Invalid_Date_Format_Request_and_Tests.png
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

The API rejects booking dates that are not in the required `YYYY-MM-DD` format.

Actual:

The API accepts dates in the `DD-MM-YYYY` format and successfully creates a booking.

Status: Open.