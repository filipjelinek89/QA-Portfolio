# API Test Execution -- Sprint 06 Update Booking

**Project:** Restful Booker API Testing Project  
**Sprint:** Sprint 07 -- Partial Update Booking  
**Document Type:** API Test Execution  
**Version:** 1.0  
**Status:** Completed

------------------------------------------------------------------------

# Execution Summary

| Metric | Value |
|--------|------:|
| Planned Test Cases | 8 |
| Executed | 8 |
| Passed | 5 |
| Failed | 3 |
| Blocked | 0 |
| Not Executed | 0 |

------------------------------------------------------------------------

## TC-BOOKING-025 – Update Firstname Only

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-016 |
| Endpoint | PATCH /booking/{id} |
| Method | PATCH |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PATCH /booking/{id}
```

### Expected Result

The API should successfully perform a partial update of an existing booking when valid authentication, a valid Booking ID, and a valid request body are provided.

Expected response:

- HTTP 200 OK
- Valid JSON response
- Only the **firstname** field is updated
- All other booking fields remain unchanged
- Response Content-Type is `application/json`
- Response follows the documented API contract

### Actual Result

The API successfully performed a partial update of the existing booking.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **270 ms**
- Response Size: **919 B**
- Total Assertions: **15**
- Assertions Passed: **15**
- Assertions Failed: **0**

The API updated only the **firstname** field while preserving all other booking information. The response returned the expected HTTP status code, valid JSON structure, and all response validation assertions passed successfully.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-025_Update_Firstname_Only_Request_and_Tests.png
```
------------------------------------------------------------------------

## TC-BOOKING-026 – Update Lastname Only

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-016 |
| Endpoint | PATCH /booking/{id} |
| Method | PATCH |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PATCH /booking/{id}
```

### Expected Result

The API should successfully perform a partial update of an existing booking when valid authentication, a valid Booking ID, and a valid request body are provided.

Expected response:

- HTTP 200 OK
- Valid JSON response
- Only the **lastname** field is updated
- All other booking fields remain unchanged
- Response Content-Type is `application/json`
- Response follows the documented API contract

### Actual Result

The API successfully performed a partial update of the existing booking.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **269 ms**
- Response Size: **917 B**
- Total Assertions: **15**
- Assertions Passed: **15**
- Assertions Failed: **0**

The API updated only the **lastname** field while preserving all other booking information. The response returned the expected HTTP status code, valid JSON structure, and all response validation assertions passed successfully.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-026_Update_Lastname_Only_Request_and_Tests.png
```
------------------------------------------------------------------------

## TC-BOOKING-027 – Update Booking Without Authentication

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-017 |
| Endpoint | PATCH /booking/{id} |
| Method | PATCH |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PATCH /booking/{id}
```

### Expected Result

The API should reject the request because no authentication credentials are provided.

Expected response:

- HTTP 403 Forbidden
- Booking is not updated
- Response body contains an authentication error
- The API must not allow unauthorized users to partially update booking data.

### Actual Result

The API correctly rejected the request because no authentication credentials were provided.

Execution Summary:

- Status Code: **403 Forbidden**
- Response Time: **271 ms**
- Response Size: **751 B**
- Total Assertions: **7**
- Assertions Passed: **7**
- Assertions Failed: **0**

The API returned the expected HTTP status code and the response body confirmed that authentication is required before allowing partial updates to booking records.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-027_Update_Booking_Without_Authentication_Request_and_Tests.png
```
------------------------------------------------------------------------

## TC-BOOKING-028 – Update Booking with Invalid Authentication

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-017 |
| Endpoint | PATCH /booking/{id} |
| Method | PATCH |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PATCH /booking/{id}
```

### Expected Result

The API should reject the request because an invalid authentication token is provided.

Expected response:

- HTTP 403 Forbidden
- Booking is not updated
- Response body contains an authentication error
- The API must not allow partial updates using an invalid authentication token.

### Actual Result

The API correctly rejected the request because the supplied authentication token was invalid.

Execution Summary:

- Status Code: **403 Forbidden**
- Response Time: **2.63 s**
- Response Size: **751 B**
- Total Assertions: **7**
- Assertions Passed: **7**
- Assertions Failed: **0**

The API returned the expected HTTP status code and confirmed that invalid authentication credentials are not accepted for partial booking updates.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-028_Update_Booking_With_Invalid_Authentication_Request_and_Tests.png
```
------------------------------------------------------------------------

## TC-BOOKING-029 – Update Booking with Invalid Data Types

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-018 |
| Endpoint | PATCH /booking/{id} |
| Method | PATCH |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
PATCH /booking/{id}
```

### Expected Result

The API should validate request body data types and reject partial update requests containing invalid data types.

Expected response:

- HTTP 400 Bad Request
- Booking is not updated
- Response indicates invalid request data
- The API must not accept invalid data types.

### Actual Result

The API accepted the request even though an invalid data type was provided for the `firstname` field.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **265 ms**
- Response Size: **921 B**
- Total Assertions: **7**
- Assertions Passed: **5**
- Assertions Failed: **2**

The API successfully processed the PATCH request instead of validating the request body and rejecting the invalid input.

### Linked Defect

```text
BUG-API-013
```

### Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-029_Update_Booking_With_Invalid_Data_Types_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-030 – Update Booking with Invalid Date Format

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-019 |
| Endpoint | PATCH /booking/{id} |
| Method | PATCH |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
PATCH /booking/{id}
```

### Expected Result

The API should validate date formats and reject partial update requests containing invalid date values.

Expected response:

- HTTP 400 Bad Request
- Booking is not updated
- Response indicates invalid date format
- The API must not accept incorrectly formatted dates.

### Actual Result

The API accepted the request and successfully updated the booking despite receiving dates in an invalid format.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **266 ms**
- Response Size: **913 B**
- Total Assertions: **7**
- Assertions Passed: **5**
- Assertions Failed: **2**

The API did not validate the date format and accepted dates formatted as **DD-MM-YYYY** instead of the expected **YYYY-MM-DD** format.

### Linked Defect

```text
BUG-API-014
```

### Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-030_Update_Booking_With_Invalid_Date_Format_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-031 – Update Booking with Checkout Before Check-in

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-020 |
| Endpoint | PATCH /booking/{id} |
| Method | PATCH |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
PATCH /booking/{id}
```

### Expected Result

The API should validate booking business rules and reject partial update requests where the checkout date is earlier than the check-in date.

Expected response:

- HTTP 400 Bad Request
- Booking is not updated
- Response indicates a business rule validation error.
- The API must not accept a checkout date earlier than the check-in date.

### Actual Result

The API accepted the request and successfully updated the booking even though the checkout date was earlier than the check-in date.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **267 ms**
- Response Size: **918 B**
- Total Assertions: **7**
- Assertions Passed: **5**
- Assertions Failed: **2**

The API failed to enforce the booking date business rule and accepted a booking where the checkout date was earlier than the check-in date.

### Linked Defect

```text
BUG-API-015
```

### Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-031_Update_Booking_With_Checkout_Before_Checkin_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-032 – Update Booking with Unexpected Additional Fields

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-021 |
| Endpoint | PATCH /booking/{id} |
| Method | PATCH |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PATCH /booking/{id}
```

### Expected Result

The API should successfully process the request while ignoring unsupported request properties.

Expected response:

- HTTP 200 OK
- Supported field is updated
- Unsupported fields are ignored
- Unsupported fields are not returned in the response
- Response contains only valid booking properties

### Actual Result

The API successfully processed the request and updated the supported field.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **2.65 s**
- Response Size: **921 B**
- Total Assertions: **11**
- Assertions Passed: **11**
- Assertions Failed: **0**

The API ignored the unsupported request properties (`favoriteColor`, `age`, and `vip`) and returned only the expected booking object.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Partial_Update_Booking/
    └── TC-BOOKING-032_Update_Booking_With_Unexpected_Additional_Fields_Request_and_Tests.png
```

------------------------------------------------------------------------

# Planned Test Cases

TC-BOOKING-025 through TC-BOOKING-032

Each test case will receive its own execution record using the Sprint 05 template.

------------------------------------------------------------------------

# Defect Summary

| Severity | Count |
|----------|------:|
| Critical | 0 |
| High | 1 |
| Medium | 2 |
| Low | 0 |

------------------------------------------------------------------------

# Sprint Summary

**Sprint Status:** ✅ Completed

## Overall Result

- Planned Test Cases: **8**
- Executed: **8**
- Passed: **5**
- Failed: **3**
- Blocked: **0**
- Pass Rate: **62.5%**

------------------------------------------------------------------------

# End of Document
