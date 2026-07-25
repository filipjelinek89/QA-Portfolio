# API Test Execution -- Sprint 04 Retrieve Booking

**Project:** Restful Booker API Testing Project  
**Sprint:** Sprint 04 -- Retrieve Booking  
**Document Type:** API Test Execution  
**Version:** 1.0  
**Status:** Not Started

------------------------------------------------------------------------

# Execution Summary

| Metric | Value |
|--------|------:|
| Planned Test Cases | 32 |
| Executed | 0 |
| Passed | 0 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 32 |

------------------------------------------------------------------------
## TC-BOOKING-001 – Retrieve Booking by Valid ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking/{id} |
| Method | GET |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/{id}
```

### Expected Result

The API returns HTTP 200 OK together with a valid booking object for the specified booking ID. The response must contain all mandatory properties, correct data types, valid booking dates, valid JSON format, required HTTP headers, and successfully pass all contract, business rule, and JSON Schema validations.

### Actual Result

The endpoint returned **HTTP 200 OK** and successfully retrieved the booking information for the requested booking ID.

Execution summary:

- Response Time: **2.81 s**
- Response Size: **917 B**
- Total Assertions: **23**
- Assertions Passed: **23**
- Assertions Failed: **0**

All validations completed successfully, including:

- Status Code Validation
- Response Time Validation
- Content-Type Validation
- Response Body Validation
- Required Property Validation
- Data Type Validation
- Booking Dates Validation
- Optional Property Validation
- JSON Validation
- Header Validation
- Property Count Validation
- Date Format Validation
- Null Value Validation
- Empty String Validation
- JSON Schema Validation
- Business Rule Validation
- Numeric Validation
- Boolean Validation
- Response Contract Validation

The endpoint behaved as expected and no unexpected behaviour was observed during execution.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Sprint_04/
    └── TC-BOOKING-001/
        └── TC-BOOKING-001_Request_and_Tests.png
```
------------------------------------------------------------------------
## TC-BOOKING-002 – Retrieve Booking by Non-Existent ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking/{id} |
| Method | GET |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/99999999
```

### Expected Result

The API returns **HTTP 404 Not Found** for a booking ID that does not exist. The response should contain an appropriate error message, return a valid plain text response, and handle the request without generating an internal server error.

### Actual Result

The API returned **HTTP 404 Not Found** for the non-existent booking ID.

Execution Summary:

- Response Time: **273 ms**
- Response Size: **751 B**
- Total Assertions: **11**
- Assertions Passed: **11**
- Assertions Failed: **0**

The response contained the expected error message ("Not Found"), returned the correct Content-Type (`text/plain`), included the required response headers, and handled the invalid request correctly without producing an internal server error.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking/
    └── TC-BOOKING-002_Retrieve_Booking_By_Non_Existent_ID_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-003 – Retrieve Booking by Invalid ID Format

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking/{id} |
| Method | GET |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/abc
```

### Expected Result

The API returns **HTTP 404 Not Found** when an invalid booking ID format is provided. The response should contain an appropriate error message, return a valid plain text response, and handle the invalid input without generating an internal server error.

### Actual Result

The API returned **HTTP 404 Not Found** for the invalid booking ID format.

Execution Summary:

- Response Time: **2.64 s**
- Response Size: **755 B**
- Total Assertions: **11**
- Assertions Passed: **11**
- Assertions Failed: **0**

The response contained the expected error message ("Not Found"), returned the expected Content-Type (`text/plain`), included the required response headers, and handled the invalid booking ID format correctly without producing an internal server error.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking/
    └── TC-BOOKING-003_Retrieve_Booking_By_Invalid_ID_Format_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-004 – Retrieve Booking by Negative ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking/{id} |
| Method | GET |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/-1
```

### Expected Result

The API returns **HTTP 404 Not Found** when a negative booking ID is provided. The response should contain an appropriate error message, return a valid plain text response, and handle the invalid request without generating an internal server error.

### Actual Result

The API returned **HTTP 404 Not Found** for the negative booking ID.

Execution Summary:

- Response Time: **2.81 s**
- Response Size: **755 B**
- Total Assertions: **11**
- Assertions Passed: **11**
- Assertions Failed: **0**

The response contained the expected error message ("Not Found"), returned the expected Content-Type (`text/plain`), included the required response headers, and handled the negative booking ID correctly without producing an internal server error.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking/
    └── TC-BOOKING-004_Retrieve_Booking_By_Negative_ID_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-005 – Retrieve Booking by Zero ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking/{id} |
| Method | GET |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/0
```

### Expected Result

The API returns **HTTP 404 Not Found** when a booking ID of zero is provided. The response should contain an appropriate error message, return a valid plain text response, and handle the invalid request without generating an internal server error.

### Actual Result

The API returned **HTTP 404 Not Found** for the booking ID `0`.

Execution Summary:

- Response Time: **2.08 s**
- Response Size: **755 B**
- Total Assertions: **11**
- Assertions Passed: **11**
- Assertions Failed: **0**

The response contained the expected error message ("Not Found"), returned the expected Content-Type (`text/plain`), included the required response headers, and handled the zero booking ID correctly without producing an internal server error.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking/
    └── TC-BOOKING-005_Retrieve_Booking_By_Zero_ID_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-006 – Retrieve Booking by Special Characters

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking/{id} |
| Method | GET |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/@#$%
```

### Expected Result

The API returns **HTTP 404 Not Found** when special characters are provided instead of a valid booking ID. The response should contain an appropriate error message, return a valid plain text response, and handle the invalid request without generating an internal server error.

### Actual Result

The API returned **HTTP 404 Not Found** for the booking ID containing special characters.

Execution Summary:

- Response Time: **271 ms**
- Response Size: **751 B**
- Total Assertions: **11**
- Assertions Passed: **11**
- Assertions Failed: **0**

The response contained the expected error message ("Not Found"), returned the expected Content-Type (`text/plain`), included the required response headers, and handled the special character input correctly without producing an internal server error.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking/
    └── TC-BOOKING-006_Retrieve_Booking_By_Special_Characters_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-007 – Retrieve Booking by Decimal ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking/{id} |
| Method | GET |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAILED |

### Request

```http
GET /booking/1.5
```

### Expected Result

The API should reject a decimal booking ID because the endpoint expects an integer identifier.

Expected response:

- HTTP 404 Not Found

or

- HTTP 400 Bad Request

No booking resource should be returned.

### Actual Result

The API returned **HTTP 200 OK** together with a valid booking object.

Execution Summary:

- Response Time: **2.07 s**
- Response Size: **893 B**
- Total Assertions: **11**
- Assertions Passed: **6**
- Assertions Failed: **5**

The API accepted the decimal booking ID (`1.5`) and returned the booking associated with Booking ID **1** instead of rejecting the request as invalid input.

### Defect

```text
BUG-API-003
Decimal Booking ID Returns Existing Booking Instead of Rejecting Invalid Input
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking/
    └── TC-BOOKING-007_Retrieve_Booking_By_Decimal_ID_Request_and_Tests.png
```

------------------------------------------------------------------------
## TC-BOOKING-008 – Retrieve Booking by Very Large ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking/{id} |
| Method | GET |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
GET /booking/999999999999999
```

### Expected Result

The API should reject a very large booking ID and return an appropriate error response without causing an internal server error.

Expected response:

- HTTP 404 Not Found
- Plain text response containing **"Not Found"**

### Actual Result

The API correctly returned:

- HTTP 404 Not Found
- Response body: **Not Found**

Execution Summary:

- Response Time: **2.20 s**
- Response Size: **747 B**
- Total Assertions: **11**
- Assertions Passed: **11**
- Assertions Failed: **0**

The API handled the very large booking ID correctly by rejecting the request and returning the expected error response.

### Defect

None

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking/
    └── TC-BOOKING-008_Retrieve_Booking_By_Very_Large_ID_Request_and_Tests.png
```

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

TC-BOOKING-001 through TC-BOOKING-032

Each test case will receive its own execution record using the template above.

------------------------------------------------------------------------

# Defect Summary

| Severity | Count |
|----------|------:|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |

------------------------------------------------------------------------

# Sprint Summary

**Sprint Status:** 🚧 In Progress

## Overall Result

- Planned Test Cases: **32**
- Executed: **0**
- Passed: **0**
- Failed: **0**
- Blocked: **0**
- Pass Rate: **0%**

------------------------------------------------------------------------

# End of Document
