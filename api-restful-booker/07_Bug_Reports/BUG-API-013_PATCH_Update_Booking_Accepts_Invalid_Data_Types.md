# BUG-API-013 -- PATCH Update Booking Accepts Invalid Data Types

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-013 |
| Title | PATCH /booking/{id} accepts invalid data types |
| Severity | Medium |
| Priority | Medium |
| Defect Type | Input Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

---

## 2. Defect Summary

During execution of **TC-BOOKING-029**, the Partial Update Booking endpoint accepted a request containing an invalid data type for the firstname field.

Instead of rejecting the request with an appropriate validation error, the API updated the booking and returned **HTTP 200 OK**.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-003
- Test Scenario: TS-BOOKING-018
- Test Case: TC-BOOKING-029

---

## 4. API Request Details

**Method:** PATCH

**Endpoint:**

```http
PATCH {{baseUrl}}/booking/{{bookingId}}
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
    "firstname": 12345
}
```

---

## 7. Steps to Reproduce

1. Open Postman.
2. Create a PUT request to:

```http
PATCH {{baseUrl}}/booking/{{bookingId}}
```

3. Authenticate using a valid token.
4. Submit a request where checkout is earlier than check-in.
5. Execute the request.
6. Observe the response.

---

## 8. Expected Result

The API should validate request body data types and reject requests containing invalid data types.

Expected response:

- HTTP **400 Bad Request**

The booking should not be updated.

---

## 9. Actual Result

The API accepted the request and processed the partial update despite the invalid data type.

Response:

- HTTP **200 OK**

---

## 10. API Response Details

Status:

```text
200 OK
```

Response Time:

265 ms

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

The API does not enforce a fundamental booking business rule. Allowing bookings where the invalid data types can lead to inconsistent data, unreliable validation, and reduced API robustness.

---

## 14. Severity / Priority

Severity: Medium

Priority: Medium

---

## 15. Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-029_Partial_Update_Booking_With_Checkout_Before_Checkin_Request_and_Tests.png
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

The API rejects partial update requests containing invalid data types by returning HTTP 400 Bad Request.

Actual:

The API accepts invalid data types and returns **HTTP 200 OK**, indicating that request body validation is not enforced.

Status: Open.