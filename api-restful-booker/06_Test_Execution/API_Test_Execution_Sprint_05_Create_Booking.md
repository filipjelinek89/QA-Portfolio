# API Test Execution -- Sprint 05 Create Booking

**Project:** Restful Booker API Testing Project  
**Sprint:** Sprint 05 -- Create Booking  
**Document Type:** API Test Execution  
**Version:** 1.0  
**Status:** Completed

------------------------------------------------------------------------

# Execution Summary

| Metric | Value |
|--------|------:|
| Planned Test Cases | 8 |
| Executed | 8 |
| Passed | 2 |
| Failed | 6 |
| Blocked | 0 |
| Not Executed | 0 |

------------------------------------------------------------------------

------------------------------------------------------------------------
## TC-BOOKING-009 – Create Booking with Valid Data

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | POST /booking |
| Method | POST |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
POST /booking
```

### Expected Result

The API should successfully create a new booking and return:

- HTTP 200 OK
- A valid JSON response
- A generated `bookingid`
- A `booking` object containing all submitted values

### Actual Result

The API successfully created a new booking.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **2.06 s**
- Response Size: **943 B**
- Total Assertions: **24**
- Assertions Passed: **24**
- Assertions Failed: **0**

The response contained a valid `bookingid`, and all returned values matched the submitted request payload.

### Defect

None

### Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-009_Create_Booking_With_Valid_Data_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-010 – Create Booking with Missing Required Field

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | POST /booking |
| Method | POST |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
POST /booking
```

### Expected Result

The API should validate the request body and reject requests with missing required fields.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

The API should not create a booking and should not return an internal server error.

### Actual Result

The API returned:

- HTTP 500 Internal Server Error

Execution Summary:

- Response Time: **2.04 s**
- Response Size: **777 B**
- Total Assertions: **5**
- Assertions Passed: **3**
- Assertions Failed: **2**

Additional investigation confirmed the same behavior when different required fields (e.g., `totalprice` and `lastname`) were omitted, indicating a server-side validation defect rather than a field-specific issue.

### Defect

```text
BUG-API-004
Create Booking Returns Internal Server Error When Required Fields Are Missing
```

### Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-010_Create_Booking_With_Missing_Required_Field_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-011 – Create Booking with Empty Request Body

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | POST /booking |
| Method | POST |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
POST /booking
```

Request Body:

```json
{}
```

### Expected Result

The API should reject an empty request body and return an appropriate client validation error.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

The API should not create a booking and should not return an internal server error.

### Actual Result

The API returned:

- HTTP 500 Internal Server Error

Execution Summary:

- Response Time: **1.91 s**
- Response Size: **777 B**
- Total Assertions: **5**
- Assertions Passed: **3**
- Assertions Failed: **2**

The API failed to validate the empty request body and returned an internal server error instead of a client validation error.

### Defect

```text
BUG-API-004
Create Booking Returns Internal Server Error When Required Fields Are Missing
```

### Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-011_Create_Booking_With_Empty_Request_Body_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-012 – Create Booking with Invalid Data Type

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | POST /booking |
| Method | POST |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
POST /booking
```

Request Body:

```json
{
    "firstname": 12345,
    "lastname": "Doe",
    "totalprice": "150",
    "depositpaid": "true",
    "bookingdates": {
        "checkin": "2026-08-01",
        "checkout": "2026-08-10"
    },
    "additionalneeds": "Breakfast"
}
```

### Expected Result

The API should reject the request because multiple fields contain invalid data types.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

The API should not create a booking and should not return an internal server error.

### Actual Result

The API returned:

- HTTP 500 Internal Server Error

Execution Summary:

- Response Time: **2.06 s**
- Response Size: **777 B**
- Total Assertions: **5**
- Assertions Passed: **3**
- Assertions Failed: **2**

The API failed to validate invalid data types and returned an internal server error instead of an appropriate client validation error.

### Defect

```text
BUG-API-004
Create Booking Returns Internal Server Error When Invalid Request Data Is Submitted
```

### Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-012_Create_Booking_With_Invalid_Data_Type_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-013 – Create Booking with Invalid Date Format

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | POST /booking |
| Method | POST |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
POST /booking
```

Request Body:

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

### Expected Result

The API should reject the request because the booking dates are not in the required `YYYY-MM-DD` format.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

No booking should be created.

### Actual Result

The API accepted the request and created a booking.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **2.07 s**
- Response Size: **944 B**
- Total Assertions: **5**
- Assertions Passed: **4**
- Assertions Failed: **1**

The API accepted booking dates in an invalid format instead of validating the input.

### Defect

```text
BUG-API-007
Create Booking Accepts Invalid Date Format
```

### Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-013_Create_Booking_With_Invalid_Date_Format_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-014 – Create Booking with Checkout Date Before Check-in

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | POST /booking |
| Method | POST |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
POST /booking
```

Request Body:

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

### Expected Result

The API should reject the request because the checkout date is earlier than the check-in date.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

No booking should be created.

### Actual Result

The API accepted the request and created a booking.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **2.84 s**
- Response Size: **940 B**
- Total Assertions: **5**
- Assertions Passed: **4**
- Assertions Failed: **1**

The API accepted a booking where the checkout date precedes the check-in date, violating the expected business rule.

### Defect

```text
BUG-API-008
Create Booking Accepts Checkout Date Before Check-in
```

### Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-014_Create_Booking_With_Checkout_Date_Before_Checkin_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-015 – Create Booking with Negative Total Price

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | POST /booking |
| Method | POST |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
POST /booking
```

Request Body:

```json
{
    "firstname": "John",
    "lastname": "Doe",
    "totalprice": -150,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-08-01",
        "checkout": "2026-08-10"
    },
    "additionalneeds": "Breakfast"
}
```

### Expected Result

The API should reject the request because the total booking price cannot be negative.

Expected response:

- HTTP 400 Bad Request

or another appropriate client validation error.

No booking should be created.

### Actual Result

The API accepted the request and created a booking.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **2.68 s**
- Response Size: **937 B**
- Total Assertions: **5**
- Assertions Passed: **4**
- Assertions Failed: **1**

The API accepted a booking with a negative total price instead of validating the business rule.

### Defect

```text
BUG-API-009
Create Booking Accepts Negative Total Price
```

### Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-015_Create_Booking_With_Negative_Total_Price_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-016 – Create Booking with Unexpected Additional Fields

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | POST /booking |
| Method | POST |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
POST /booking
```

Request Body:

```json
{
    "firstname": "John",
    "lastname": "Doe",
    "totalprice": 150,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-08-01",
        "checkout": "2026-08-10"
    },
    "additionalneeds": "Breakfast",
    "vip": true,
    "discount": 50,
    "createdBy": "QA Portfolio"
}
```

### Expected Result

The API should safely handle unexpected request fields.

Acceptable behavior includes:

- Ignoring unsupported fields and creating the booking.
- Rejecting the request with an appropriate client validation error.

The API must not return HTTP 500 Internal Server Error.

### Actual Result

The API successfully created the booking and ignored the unsupported fields.

Execution Summary:

- Status Code: **200 OK**
- Response Time: **2.83 s**
- Response Size: **940 B**
- Total Assertions: **5**
- Assertions Passed: **5**
- Assertions Failed: **0**

The API handled unexpected fields correctly without affecting the booking creation process.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Create_Booking/
    └── TC-BOOKING-016_Create_Booking_With_Unexpected_Additional_Fields_Request_and_Tests.png
```

------------------------------------------------------------------------

# Planned Test Cases

TC-BOOKING-009 through TC-BOOKING-016

Each test case has its own execution record in this document.

------------------------------------------------------------------------

# Defect Summary

| Severity | Count |
|----------|------:|
| Critical | 0 |
| High | 5 |
| Medium | 0 |
| Low | 0 |

------------------------------------------------------------------------

# Sprint Summary

**Sprint Status:** ✅ Completed

## Overall Result

- Planned Test Cases: **8**
- Executed: **8**
- Passed: **2**
- Failed: **6**
- Blocked: **0**
- Pass Rate: **25%**

------------------------------------------------------------------------

# End of Document
