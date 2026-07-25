# BUG-API-012 -- Update Booking Accepts Checkout Date Earlier Than Check-in Date

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-012 |
| Title | PUT /booking/{id} accepts checkout date earlier than check-in date |
| Severity | Medium |
| Priority | Medium |
| Defect Type | Business Rule Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

---

## 2. Defect Summary

During execution of **TC-BOOKING-023**, the Update Booking endpoint accepted a request where the checkout date was earlier than the check-in date.

Instead of rejecting the request with an appropriate validation error, the API updated the booking and returned **HTTP 200 OK**.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-003
- Test Scenario: TS-BOOKING-014
- Test Case: TC-BOOKING-023

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
    "firstname": "John",
    "lastname": "Smith",
    "totalprice": 200,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-09-10",
        "checkout": "2026-09-01"
    },
    "additionalneeds": "Breakfast"
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
4. Submit a request where checkout is earlier than check-in.
5. Execute the request.
6. Observe the response.

---

## 8. Expected Result

The API should validate booking dates and reject requests where the checkout date is earlier than the check-in date.

Expected response:

- HTTP **400 Bad Request**

The booking should not be updated.

---

## 9. Actual Result

The API accepted the request and updated the booking.

Response:

- HTTP **200 OK**

---

## 10. API Response Details

Status:

```text
200 OK
```

Response Time:

~2.84 s

---

## 11. Postman Assertion Results

PASS:

- Response Time
- Response Body Not Empty
- Response Size Greater Than 0 Bytes
- Response Is Not HTTP 500
- Response Is Valid JSON

FAIL:

- Status Code is 400 Bad Request
- Request Was Rejected

---

## 12. Reproducibility

Always (100%)

---

## 13. Impact Analysis

The API does not enforce a fundamental booking business rule. Allowing bookings where the checkout date precedes the check-in date can lead to inconsistent or invalid booking records and may affect downstream systems that rely on valid booking periods.

---

## 14. Severity / Priority

Severity: Medium

Priority: Medium

---

## 15. Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-023_Update_Booking_With_Checkout_Before_Checkin_Request_and_Tests.png
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

The API rejects booking updates where the checkout date is earlier than the check-in date by returning an appropriate client validation error.

Actual:

The API accepts the invalid booking period and returns **HTTP 200 OK**, indicating that the business rule is not enforced.

Status: Open.