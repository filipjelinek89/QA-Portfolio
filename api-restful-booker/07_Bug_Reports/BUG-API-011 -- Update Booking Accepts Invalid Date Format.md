# BUG-API-011 -- Update Booking Accepts Invalid Date Format

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-011 |
| Title | PUT /booking/{id} accepts invalid date format during booking update |
| Severity | Medium |
| Priority | Medium |
| Defect Type | Input Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

---

## 2. Defect Summary

During execution of **TC-BOOKING-022**, the Update Booking endpoint accepted booking dates using an invalid date format (**DD-MM-YYYY**) instead of rejecting the request.

The API successfully updated the booking and returned **HTTP 200 OK** instead of returning an appropriate validation error.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-003
- Test Scenario: TS-BOOKING-013
- Test Case: TC-BOOKING-022

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
        "checkin": "01-09-2026",
        "checkout": "10-09-2026"
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
4. Use the request body containing dates formatted as **DD-MM-YYYY**.
5. Execute the request.
6. Observe the response.

---

## 8. Expected Result

The API should validate the date format before processing the request.

Expected response:

- HTTP **400 Bad Request**

or another appropriate client validation error.

The booking should **not** be updated.

---

## 9. Actual Result

The API accepted the request and updated the booking.

Response returned:

- HTTP **200 OK**

The booking was updated using dates formatted as **DD-MM-YYYY**.

---

## 10. API Response Details

Status:

```text
200 OK
```

Response Time:

~269 ms

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

The Update Booking endpoint does not validate the expected date format before updating booking records.

Accepting inconsistent date formats may result in invalid or inconsistent booking data being stored and may lead to downstream processing issues if other systems expect dates in **YYYY-MM-DD** format.

---

## 14. Severity / Priority

Severity: Medium

Priority: Medium

---

## 15. Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-022_Update_Booking_With_Invalid_Date_Format_Request_and_Tests.png
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

The API validates date formats and rejects requests containing incorrectly formatted dates by returning an appropriate client validation error (for example **HTTP 400 Bad Request**).

Actual:

The API accepts dates formatted as **DD-MM-YYYY** and successfully updates the booking, returning **HTTP 200 OK** instead of rejecting the invalid input.

Status: Open.