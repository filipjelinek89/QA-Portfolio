# BUG-API-003 -- Decimal Booking ID Returns Existing Booking

## 1. Defect Identification

| Field | Value |
|-----------------------------------|-----------------------------------|
| Defect ID | BUG-API-003 |
| Title | GET /booking/{id} accepts decimal booking IDs and returns an existing booking |
| Severity | Medium |
| Priority | Medium |
| Defect Type | Functional / Input Validation |
| Status | Open |
| Reported By | Filip Jelinek |
| Date Reported | 2026-07-25 |

## 2. Defect Summary

During execution of TC-BOOKING-007, the request:

```http
GET /booking/1.5
```

returned **HTTP 200 OK** together with the booking associated with **Booking ID 1**.

Additional verification using:

```http
GET /booking/1.9
```

returned the same booking.

The API appears to truncate or ignore the decimal portion of the booking ID instead of rejecting the request as invalid input.

---

## 3. Test Traceability

- Requirement: REQ-BOOKING-001
- Test Scenario: TS-BOOKING-001
- Test Case: TC-BOOKING-007

---

## 4. API Request Details

Method: GET

Endpoint:

```http
GET {{baseUrl}}/booking/1.5
```

Authentication: None

---

## 5. Preconditions

1. Restful Booker API available.
2. Postman environment configured.
3. Base URL configured.

---

## 6. Test Data

```text
Booking ID = 1.5
```

Additional verification:

```text
Booking ID = 1.9
```

---

## 7. Steps to Reproduce

1. Open Postman.
2. Execute:

```http
GET /booking/1.5
```

3. Observe the response.
4. Execute:

```http
GET /booking/1.9
```

5. Compare both responses.

---

## 8. Expected Result

The API should reject decimal booking IDs because the endpoint expects an integer booking identifier.

Expected response:

- HTTP 404 Not Found

or

- HTTP 400 Bad Request

No booking resource should be returned.

---

## 9. Actual Result

The API returned:

- HTTP 200 OK
- A valid booking object

Both requests (`1.5` and `1.9`) returned the same booking associated with Booking ID **1**.

---

## 10. API Response Details

Status:

```text
200 OK
```

Response Time:

~2.1 s

Response:

```json
{
    "firstname": "Jim",
    "lastname": "Jackson",
    "totalprice": 312,
    "depositpaid": false,
    "bookingdates": {
        "checkin": "2018-06-09",
        "checkout": "2022-07-18"
    }
}
```

---

## 11. Postman Assertion Results

PASS:

- Response Time
- Content-Type Header Exists
- Response Body Not Empty
- Response is Plain Text/String Validation
- Server Header Exists
- Status Code is not 500

FAIL:

- Status Code is 404 Not Found
- Content-Type is text/plain
- Response contains "Not Found"
- API handles invalid booking ID correctly
- Response body exactly matches "Not Found"

---

## 12. Reproducibility

Always (100%)

---

## 13. Impact Analysis

The API accepts invalid decimal booking IDs and returns an existing booking instead of rejecting the request.

This may cause API consumers to retrieve incorrect resources when invalid identifiers are supplied and indicates inconsistent input validation.

---

## 14. Severity / Priority

Severity: Medium

Priority: Medium

---

## 15. Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking/
    └── TC-BOOKING-007_Retrieve_Booking_By_Decimal_ID_Request_and_Tests.png
```

---

## 16. Additional Investigation

Additional testing confirmed the issue.

Requests:

```http
GET /booking/1.5
GET /booking/1.9
```

both returned the same booking associated with Booking ID **1**.

This indicates that the API ignores or truncates the decimal portion of the booking ID instead of validating the identifier as an integer.

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

The API rejects decimal booking IDs with an appropriate client error response (HTTP 400 or HTTP 404).

Actual:

The API accepts decimal booking IDs (e.g., `1.5` and `1.9`) and returns the booking associated with the integer portion of the identifier.

Status: Open.