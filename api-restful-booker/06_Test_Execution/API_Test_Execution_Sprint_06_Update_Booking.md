# API Test Execution -- Sprint 06 Update Booking

**Project:** Restful Booker API Testing Project  
**Sprint:** Sprint 06 -- Update Booking  
**Document Type:** API Test Execution  
**Version:** 1.1  
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
## TC-BOOKING-017 – Update Booking with Valid Data

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-009 |
| Endpoint | PUT /booking/{id} |
| Method | PUT |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PUT /booking/{id}
```

### Expected Result

The API should successfully update an existing booking when valid authentication, a valid Booking ID, and a valid request body are provided.

Expected response:

- HTTP 200 OK
- Valid JSON response
- Updated booking object returned
- All submitted values match the request payload
- Response Content-Type is `application/json`
- Response follows the documented API contract

### Actual Result

The API successfully updated the existing booking.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **266 ms**
- Response Size: **925 B**
- Total Assertions: **16**
- Assertions Passed: **16**
- Assertions Failed: **0**

The response contained the updated booking information, all returned values matched the submitted request payload, and the API returned the expected HTTP status code and response structure.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-017_Update_Booking_With_Valid_Data_Request_and_Tests.png
```
------------------------------------------------------------------------
## TC-BOOKING-018 – Update Booking Without Authentication

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-010 |
| Endpoint | PUT /booking/{id} |
| Method | PUT |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PUT /booking/{id}
```

### Expected Result

The API should reject the request because no authentication credentials are provided.

Expected response:

- HTTP 403 Forbidden
- Booking is not updated
- Response body contains an authentication error
- The API must not allow unauthorized users to modify booking data

### Actual Result

The API correctly rejected the request because no authentication credentials were provided.

Execution Summary:

- Status Code: **403 Forbidden**
- Response Time: **1.85 s**
- Response Size: **751 B**
- Total Assertions: **8**
- Assertions Passed: **8**
- Assertions Failed: **0**

The API returned the expected HTTP status code and the response body contained **"Forbidden"**, confirming that authentication is correctly enforced before allowing booking updates.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-018_Update_Booking_Without_Authentication_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-019 – Update Booking with Invalid Authentication

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-010 |
| Endpoint | PUT /booking/{id} |
| Method | PUT |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PUT /booking/{id}
```

### Expected Result

The API should reject the request because an invalid authentication token is provided.

Expected response:

- HTTP 403 Forbidden
- Booking is not updated
- Response body contains an authentication error
- The API must not allow updates using an invalid authentication token

### Actual Result

The API correctly rejected the request because the supplied authentication token was invalid.

Execution Summary:

- Status Code: **403 Forbidden**
- Response Time: **2.13 s**
- Response Size: **755 B**
- Total Assertions: **8**
- Assertions Passed: **8**
- Assertions Failed: **0**

The API returned the expected HTTP status code and the response body contained **"Forbidden"**, confirming that invalid authentication tokens are correctly rejected and unauthorized booking updates are prevented.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-019_Update_Booking_With_Invalid_Authentication_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-020 – Update Booking with Missing Required Field

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-011 |
| Endpoint | PUT /booking/{id} |
| Method | PUT |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PUT /booking/{id}
```

### Expected Result

The API should validate the request body and reject update requests when one or more required fields are missing.

Expected response:

- HTTP 400 Bad Request
- Booking is not updated
- Response indicates that the request is invalid
- The API must not return an internal server error

### Actual Result

The API correctly rejected the request because the required `firstname` field was missing.

Execution Summary:

- Status Code: **400 Bad Request**
- Response Time: **270 ms**
- Response Size: **760 B**
- Total Assertions: **7**
- Assertions Passed: **7**
- Assertions Failed: **0**

The API successfully validated the request body and returned the expected client validation error without attempting to update the booking.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-020_Update_Booking_With_Missing_Required_Field_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-021 – Update Booking with Invalid Data Types

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-012 |
| Endpoint | PUT /booking/{id} |
| Method | PUT |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
PUT /booking/{id}
```

### Expected Result

The API should validate request body data types and reject requests containing invalid data types.

Expected response:

- HTTP 400 Bad Request
- Booking is not updated
- Response indicates invalid request data
- The API must not return an Internal Server Error

### Actual Result

The API returned an unexpected server error instead of validating the request.

Execution Summary:

- Status Code: **500 Internal Server Error**
- Response Time: **270 ms**
- Response Size: **777 B**
- Total Assertions: **7**
- Assertions Passed: **5**
- Assertions Failed: **2**

The server failed to validate the request body and returned an Internal Server Error when invalid data types were submitted.

### Linked Defect

```text
BUG-API-010
```

### Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-021_Update_Booking_With_Invalid_Data_Types_Request_and_Tests.png
```

------------------------------------------------------------------------
------------------------------------------------------------------------
## TC-BOOKING-022 – Update Booking with Invalid Date Format

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-013 |
| Endpoint | PUT /booking/{id} |
| Method | PUT |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
PUT /booking/{id}
```

### Expected Result

The API should validate date formats and reject update requests containing invalid date values.

Expected response:

- HTTP 400 Bad Request
- Booking is not updated
- Response indicates invalid date format
- The API must not accept incorrectly formatted dates.

### Actual Result

The API accepted the request and successfully updated the booking despite receiving dates in an invalid format.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **269 ms**
- Response Size: **909 B**
- Total Assertions: **7**
- Assertions Passed: **5**
- Assertions Failed: **2**

The API did not validate the date format and updated the booking using dates formatted as **DD-MM-YYYY** instead of the expected **YYYY-MM-DD**.

### Linked Defect

```text
BUG-API-011
```

### Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-022_Update_Booking_With_Invalid_Date_Format_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-023 – Update Booking with Checkout Before Check-in

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-014 |
| Endpoint | PUT /booking/{id} |
| Method | PUT |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
PUT /booking/{id}
```

### Expected Result

The API should validate booking business rules and reject update requests where the checkout date is earlier than the check-in date.

Expected response:

- HTTP 400 Bad Request
- Booking is not updated
- Response indicates a business rule validation error

### Actual Result

The API accepted the request and successfully updated the booking even though the checkout date was earlier than the check-in date.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **2.84 s**
- Response Size: **909 B**
- Total Assertions: **7**
- Assertions Passed: **5**
- Assertions Failed: **2**

The API failed to enforce the booking date business rule and updated the booking with logically invalid dates.

### Linked Defect

```text
BUG-API-012
```

### Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-023_Update_Booking_With_Checkout_Before_Checkin_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-024 – Update Booking with Unexpected Additional Fields

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-015 |
| Endpoint | PUT /booking/{id} |
| Method | PUT |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
PUT /booking/{id}
```

### Expected Result

The API should safely handle unsupported JSON fields.

Acceptable behavior includes:

- Ignore unsupported fields and update the booking.
- Reject the request with HTTP 400 Bad Request.

The API must not return an Internal Server Error.

### Actual Result

The API successfully updated the booking and ignored all unsupported request fields.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **272 ms**
- Response Size: **917 B**
- Total Assertions: **8**
- Assertions Passed: **8**
- Assertions Failed: **0**

The API ignored the unsupported fields (`vip`, `discount`, `createdBy`) and processed only the supported booking properties.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Update_Booking/
    └── TC-BOOKING-024_Update_Booking_With_Unexpected_Additional_Fields_Request_and_Tests.png
```
------------------------------------------------------------------------

# Planned Test Cases

TC-BOOKING-017 through TC-BOOKING-024

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
