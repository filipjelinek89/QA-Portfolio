# BUG-API-014

## Defect Identification

| Field | Value |
|-------|-------|
| Bug ID | BUG-API-014 |
| Title | PATCH Update Booking Accepts Invalid Date Format |
| Severity | Medium |
| Priority | High |
| Status | Open |
| Module | Partial Update Booking |
| Endpoint | PATCH /booking/{id} |
| Related Test Scenario | TS-BOOKING-019 |
| Related Test Case | TC-BOOKING-030 |

---

## Defect Summary

The PATCH endpoint accepts booking dates in an invalid format (`DD-MM-YYYY`) and returns **HTTP 200 OK** instead of rejecting the request with **HTTP 400 Bad Request**.

---

## Preconditions

- Valid authentication token
- Existing Booking ID
- PATCH endpoint available

---

## Test Data

```json
{
  "bookingdates": {
    "checkin": "25-07-2026",
    "checkout": "30-07-2026"
  }
}
```

---

## Steps to Reproduce

1. Authenticate successfully.
2. Send a PATCH request to `/booking/{id}`.
3. Use the request body above.
4. Execute the request.

---

## Expected Result

- HTTP 400 Bad Request
- Booking is not updated.
- API rejects the invalid date format.

---

## Actual Result

The API accepted the request, returned **HTTP 200 OK**, and updated the booking despite the invalid date format.

---

## API Response Details

- Status Code: **200 OK**
- Response Time: **266 ms**
- Response Size: **913 B**

---

## Postman Assertion Results

- Total Assertions: **7**
- Passed: **5**
- Failed: **2**

---

## Reproducibility

**Always (100%)**

---

## Impact Analysis

The API does not validate date formats during partial updates, allowing malformed date values to be accepted. This may lead to inconsistent or invalid booking data.

---

## Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-030_Update_Booking_With_Invalid_Date_Format_Request_and_Tests.png
```

---

## Environment

- Application: Restful Booker Demo API
- Method: PATCH
- Endpoint: /booking/{id}

---

## Retest

Pending after fix.

---

## Conclusion

Server-side validation for booking date formats is missing or incomplete in the PATCH endpoint.
