# BUG-API-015

## Defect Identification

| Field | Value |
|-------|-------|
| Bug ID | BUG-API-015 |
| Title | PATCH Update Booking Accepts Checkout Date Earlier Than Check-in Date |
| Severity | Medium |
| Priority | High |
| Status | Open |
| Module | Partial Update Booking |
| Endpoint | PATCH /booking/{id} |
| Related Test Scenario | TS-BOOKING-020 |
| Related Test Case | TC-BOOKING-031 |

---

## Defect Summary

The PATCH endpoint accepts a booking update where the checkout date is earlier than the check-in date and returns **HTTP 200 OK** instead of rejecting the request with **HTTP 400 Bad Request**.

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
    "checkin": "2026-07-30",
    "checkout": "2026-07-25"
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
- API rejects the request because checkout cannot be earlier than check-in.

---

## Actual Result

The API accepted the request, returned **HTTP 200 OK**, and updated the booking even though the checkout date was earlier than the check-in date.

---

## API Response Details

- Status Code: **200 OK**
- Response Time: **267 ms**
- Response Size: **918 B**

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

The API does not enforce the booking business rule requiring the checkout date to be later than the check-in date. Invalid booking periods can therefore be stored, compromising data integrity.

---

## Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-031_Update_Booking_With_Checkout_Before_Checkin_Request_and_Tests.png
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

Server-side business rule validation is missing or incomplete in the PATCH endpoint, allowing logically invalid booking dates to be accepted.
