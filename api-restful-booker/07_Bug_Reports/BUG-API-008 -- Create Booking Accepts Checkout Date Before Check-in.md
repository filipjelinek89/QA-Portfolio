# BUG-API-008 -- Create Booking Accepts Checkout Date Before Check-in

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-008 |
| Title | POST /booking accepts a booking where checkout date is earlier than check-in date |
| Severity | High |
| Priority | High |
| Defect Type | Functional / Business Rule Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

---

## 2. Defect Summary

During execution of **TC-BOOKING-014**, the Create Booking endpoint accepted a booking request where the checkout date occurred before the check-in date.

The API successfully created the booking and returned **HTTP 200 OK** instead of rejecting the request.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-002
- Test Scenario: TS-BOOKING-002
- Test Case: TC-BOOKING-014

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
        "checkin": "2026-08-10",
        "checkout": "2026-08-01"
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

3. Submit a booking where the checkout date is earlier than the check-in date.
4. Execute the request.
5. Observe the response.

---

## 8. Expected Result

The API should reject the request because checkout cannot occur before check-in.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

No booking should be created.

---

## 9. Actual Result

The API returned:

- HTTP 200 OK

A booking was successfully created despite the invalid booking dates.

---

## 10. API Response Details

Status:

```text
200 OK
```

Response Time:

~2.84 s

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

The Create Booking endpoint does not enforce the business rule requiring the checkout date to occur after the check-in date.

Allowing invalid booking periods may result in inconsistent or invalid reservation data.

---

## 14. Severity / Priority

Severity: High

Priority: High

---

## 15. Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-014_Create_Booking_With_Checkout_Date_Before_Checkin_Request_and_Tests.png
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

The API validates the booking period and rejects requests where the checkout date is earlier than the check-in date.

Actual:

The API accepts the invalid booking period and successfully creates the booking.

Status: Open.