# API Test Execution -- Sprint 04 Retrieve Booking

**Project:** Restful Booker API Testing Project  
**Sprint:** Sprint 04 -- Retrieve Booking  
**Document Type:** API Test Execution  
**Version:** 1.0  
**Status:** Completed

------------------------------------------------------------------------

# Execution Summary

| Metric | Value |
|--------|------:|
| Planned Test Cases | 8 |
| Executed | 8 |
| Passed | 7 |
| Failed | 1 |
| Blocked | 0 |
| Not Executed | 0 |

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


------------------------------------------------------------------------

# Planned Test Cases

TC-BOOKING-001 through TC-BOOKING-008

Each test case has its own execution record in this document.

------------------------------------------------------------------------

# Defect Summary

| Severity | Count |
|----------|------:|
| Critical | 0 |
| High | 0 |
| Medium | 1 |
| Low | 0 |

------------------------------------------------------------------------

# Sprint Summary

**Sprint Status:** ✅ Completed

## Overall Result

- Planned Test Cases: **8**
- Executed: **8**
- Passed: **7**
- Failed: **1**
- Blocked: **0**
- Pass Rate: **87.5%**

------------------------------------------------------------------------

# End of Document
