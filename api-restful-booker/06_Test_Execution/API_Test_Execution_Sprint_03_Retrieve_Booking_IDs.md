# API Test Execution -- Sprint 03 Retrieve Booking IDs

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 03 -- Retrieve Booking IDs\
**Document Type:** API Test Execution\
**Version:** 2.0\
**Status:** Completed

------------------------------------------------------------------------

# Execution Summary

| Metric | Value |
|--------|------:|
| Planned Test Cases | 32 |
| Executed | 32 |
| Passed | 30 |
| Failed | 2 |
| Blocked | 0 |
| Not Executed | 0 |

------------------------------------------------------------------------

## TC-GETIDS-001 – Retrieve All Booking IDs

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response contains a valid JSON array of booking IDs.
- Each object contains the required `bookingid` property.
- All booking IDs are unique, non-null, and positive integers.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array of booking IDs.
- All returned objects contained the required `bookingid` property.
- All booking IDs were verified as unique, non-null, and positive integers.
- Response successfully matched the expected JSON schema.
- Response time was **2.05 seconds**, which met the project performance requirement.
- **12 of 12 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-001_Retrieve_All_Booking_IDs_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-002 – Verify Booking ID Field

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Every object in the response contains the required `bookingid` property.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Every object contained the required `bookingid` property.
- Validation completed successfully.
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-001_Retrieve_All_Booking_IDs_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-003 – Verify Non-Empty Response

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking
```

### Expected Result

- Endpoint returns a non-empty JSON array of booking IDs.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned a non-empty JSON array.
- Booking IDs were successfully retrieved.
- Validation completed successfully.
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-001_Retrieve_All_Booking_IDs_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-004 – Verify Response Time

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-001 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking
```

### Expected Result

- Endpoint responds within the project threshold of **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint responded in **2.05 seconds**.
- Response time met the defined project performance requirement.
- No performance issues were identified.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-001_Retrieve_All_Booking_IDs_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-005 – Validate JSON Structure

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking
```

### Expected Result

- Response is valid JSON.
- Response structure matches the expected JSON array.
- Response matches the defined JSON schema.
- All Postman assertions pass successfully.

### Actual Result

- Response was successfully parsed as valid JSON.
- Response structure matched the expected JSON array.
- JSON Schema validation passed successfully.
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-001_Retrieve_All_Booking_IDs_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-006 – Validate Booking ID Type

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking
```

### Expected Result

- Every `bookingid` value is an integer.
- Every `bookingid` is non-null and greater than zero.
- All Postman assertions pass successfully.

### Actual Result

- Every `bookingid` value was verified as an integer.
- All booking IDs were non-null and positive integers.
- Validation completed successfully.
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-001_Retrieve_All_Booking_IDs_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-007 – Validate Content Type

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-002 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking
```

### Expected Result

- Response header contains **Content-Type: application/json**.
- All Postman assertions pass successfully.

### Actual Result

- Response header contained **Content-Type: application/json**.
- Content type matched the API contract.
- Validation completed successfully.
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-001_Retrieve_All_Booking_IDs_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-008 – Filter by Firstname

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-003 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?firstname=Susan
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response contains a valid JSON array of booking IDs matching the provided firstname.
- Each object contains the required `bookingid` property.
- All booking IDs are unique, non-null, and positive integers.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array of booking IDs for the specified firstname.
- All returned objects contained the required `bookingid` property.
- All booking IDs were verified as unique, non-null, and positive integers.
- Response successfully matched the expected JSON schema.
- Response time was **1.96 seconds**, which met the project performance requirement.
- **11 of 11 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-008_Filter_Bookings_By_Firstname_Request_and_Tests.png

------------------------------------------------------------------------

## TC-GETIDS-009 – Firstname No Match

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-003 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?firstname=Unknown
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- Response array is empty because no booking matches the supplied first name.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid empty JSON array.
- No booking matched the supplied first name.
- Response successfully matched the expected JSON schema.
- Response time was **2.90 seconds**, which met the project performance requirement.
- **7 of 7 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-009_Firstname_No_Match_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-010 – Firstname Special Characters

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-003 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?firstname=@@@
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- The API handles special characters without returning server errors.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array.
- The API handled the special character input without returning any server errors.
- Response successfully matched the expected JSON schema.
- Response time was **268 ms**, which met the project performance requirement.
- **6 of 6 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-010_Firstname_Special_Characters_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-011 – Firstname Case Sensitivity

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-003 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?firstname=sUsAn
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- API behaviour regarding case sensitivity is documented.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array.
- The API successfully processed the mixed-case firstname request.
- Response successfully matched the expected JSON schema.
- Response time was **2.81 seconds**, which met the project performance requirement.
- **6 of 6 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-011_Firstname_Case_Sensitivity_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-012 – Filter by Lastname

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-004 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?lastname=Brown
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- Each object contains the required `bookingid` property.
- Every returned booking ID belongs to a booking where the lastname matches the supplied query parameter.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array of booking IDs.
- All returned objects contained the required `bookingid` property.
- All booking IDs were verified as unique, non-null, and positive integers.
- Response successfully matched the expected JSON schema.
- Response time was **2.08 seconds**, which met the project performance requirement.
- **11 of 11 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-012_Filter_By_Lastname_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-013 – Lastname No Match

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-004 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?lastname=XYZ
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- Response array is empty because no booking matches the supplied last name.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid empty JSON array.
- No booking matched the supplied last name.
- Response successfully matched the expected JSON schema.
- Response time was **2.88 seconds**, which met the project performance requirement.
- **7 of 7 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-013_Lastname_No_Match_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-014 – Lastname Special Characters

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-004 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?lastname=###
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- The API handles special characters without returning server errors.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array.
- The API handled the special character input without returning any server errors.
- Response successfully matched the expected JSON schema.
- Response time was **2.66 seconds**, which met the project performance requirement.
- **6 of 6 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-014_Lastname_Special_Characters_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-015 – Lastname Case Sensitivity

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-004 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?lastname=bRoWn
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- API behaviour regarding case sensitivity is documented.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array.
- The API successfully processed the mixed-case last name request.
- Response successfully matched the expected JSON schema.
- Response time was **2.07 seconds**, which met the project performance requirement.
- **6 of 6 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-015_Lastname_Case_Sensitivity_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-016 – Filter by Check-in Date

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-005 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?checkin=2018-01-01
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- Each object contains the required `bookingid` property.
- Every returned booking ID belongs to a booking where the check-in date matches the supplied query parameter.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array of booking IDs.
- All returned objects contained the required `bookingid` property.
- All booking IDs were verified as unique, non-null, and positive integers.
- Response successfully matched the expected JSON schema.
- Response time was **2.83 seconds**, which met the project performance requirement.
- **11 of 11 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-016_Filter_By_Checkin_Date_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-017 – Filter by Check-out Date

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-005 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?checkout=2019-01-01
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- Each object contains the required `bookingid` property.
- Every returned booking ID belongs to a booking where the check-out date matches the supplied query parameter.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array of booking IDs.
- All returned objects contained the required `bookingid` property.
- All booking IDs were verified as unique, non-null, and positive integers.
- Response successfully matched the expected JSON schema.
- Response time was **3.15 seconds**, which met the project performance requirement.
- **11 of 11 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-017_Filter_By_Checkout_Date_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-018 – Filter by Check-in and Check-out Date

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-005 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?checkin=2018-01-01&checkout=2019-01-01
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- Each object contains the required `bookingid` property.
- Every returned booking ID belongs to a booking matching both supplied dates.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array of booking IDs.
- All returned objects contained the required `bookingid` property.
- All booking IDs were verified as unique, non-null, and positive integers.
- Response successfully matched the expected JSON schema.
- Response time was **2.11 seconds**, which met the project performance requirement.
- **11 of 11 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-018_Filter_By_Checkin_And_Checkout_Date_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-019 – Invalid Date Format

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-005 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?checkin=01-01-2018
```

### Expected Result

- The API handles the invalid date format without crashing.
- The response is returned successfully.
- The response body is returned in **application/json** format.
- The response body is a valid JSON array.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array.
- The API handled the invalid date format without returning any server errors.
- Response successfully matched the expected JSON schema.
- Response time was **2.14 seconds**, which met the project performance requirement.
- **6 of 6 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-019_Invalid_Date_Format_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-020 – Future Date Filter

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-005 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?checkin=2100-01-01
```

### Expected Result

- The API returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- The response array is empty because no bookings exist for the supplied future date.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid empty JSON array.
- No bookings were found for the supplied future check-in date.
- Response successfully matched the expected JSON schema.
- Response time was **3.89 seconds**, which met the project performance requirement.
- **7 of 7 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-020_Future_Date_Filter_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-021 – Future Checkout Date Filter

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-005 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAIL |

### Request

```http
GET /booking?checkout=2100-01-01
```

### Expected Result

- The API returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- The response array is empty because no bookings exist for the supplied future date.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array.
- Contrary to the expected result, the response was **not empty**.
- The API returned **566 booking IDs** for the supplied future checkout date.
- Response successfully matched the expected JSON schema.
- Response time was **2.80 seconds**, which met the project performance requirement.
- **6 of 7 Postman assertions passed successfully.**
- The assertion verifying an empty response failed because the API returned booking records instead of an empty array.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-021_Future_Checkout_Date_Filter_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-022 – Invalid Checkout Date Format

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-005 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?checkout=01-01-2019
```

### Expected Result

- The API returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array.
- The API handled the invalid checkout date format without returning server errors.
- Response successfully matched the expected JSON schema.
- Response time was **2.44 seconds**, which met the project performance requirement.
- **6 of 6 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-022_Invalid_Checkout_Date_Format_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-023 – Filter by First Name and Last Name

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-006 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?firstname=Susan&lastname=Brown
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- Each object contains the required `bookingid` property.
- Every returned booking ID belongs to a booking where both the first name and last name match the supplied values.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array of booking IDs.
- All returned objects contained the required `bookingid` property.
- All booking IDs were verified as unique, non-null, and positive integers.
- Response successfully matched the expected JSON schema.
- Response time was **2.09 seconds**, which met the project performance requirement.
- **11 of 11 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-023_Filter_By_Firstname_And_Lastname_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-024 – Filter by First Name and Last Name (No Match)

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-006 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?firstname=Unknown&lastname=Unknown
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response body is a valid JSON array.
- The response array is empty because no booking matches the supplied first name and last name.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid empty JSON array.
- No booking matched the supplied first name and last name.
- Response successfully matched the expected JSON schema.
- Response time was **2.22 seconds**, which met the project performance requirement.
- **7 of 7 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-024_Filter_By_Firstname_And_Lastname_No_Match_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-025 – Filter by All Supported Query Parameters

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-007 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?firstname=Susan&lastname=Brown&checkin=2018-01-01&checkout=2019-01-01
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response contains a valid JSON array.
- Every returned object contains the required `bookingid` property.
- All booking IDs are unique, non-null, and positive integers.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- Response contained a valid JSON array of booking IDs matching all supplied query parameters.
- Every returned object contained the required `bookingid` property.
- All booking IDs were verified as unique, non-null, and positive integers.
- Response successfully matched the expected JSON schema.
- Response time was **1.14 seconds**, which met the project performance requirement.
- **11 of 11 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-025_Filter_By_All_Supported_Query_Parameters_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-026 – Filter Using Unsupported Query Parameter

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-008 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?country=CzechRepublic
```

### Expected Result

- Endpoint returns **HTTP 200 OK**.
- Response body is returned in **application/json** format.
- Response contains a valid JSON array.
- Unsupported query parameters are ignored by the API.
- Every returned object contains the required `bookingid` property.
- All booking IDs are unique, non-null, and positive integers.
- Response matches the defined JSON schema.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response body was returned in **application/json** format.
- The unsupported query parameter was ignored by the API.
- Response contained a valid JSON array of booking IDs.
- Every returned object contained the required `bookingid` property.
- All booking IDs were verified as unique, non-null, and positive integers.
- Response successfully matched the expected JSON schema.
- Response time was **2.33 seconds**, which met the project performance requirement.
- **11 of 11 Postman assertions passed successfully.**
- No defects were identified during execution.

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-026_Filter_Using_Unsupported_Query_Parameter_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-027 – Filter Using Duplicate Query Parameters

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-008 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ❌ FAIL |

### Request

```http
GET /booking?firstname=Susan&firstname=John
```

### Expected Result

- Endpoint handles duplicate query parameters gracefully.
- API returns either:
  - **HTTP 200 OK** by processing one of the supplied values, or
  - **HTTP 400 Bad Request** if duplicate parameters are considered invalid.
- API does not return an internal server error.
- Response is returned in a controlled format.
- No unexpected server-side exception occurs.
- Response time is less than **5000 ms**.

### Actual Result

- Endpoint returned **HTTP 500 Internal Server Error**.
- Server failed to process the request containing duplicate query parameters.
- Response body contained a plain text error message instead of the expected JSON response.
- JSON validation could not be performed because the response was not JSON.
- Response time was **2.02 seconds**.
- The negative test script executed successfully and confirmed the unexpected server behaviour.
- The issue was reproduced consistently.
- Defect recorded as **BUG-API-002**.

### Defect

```text
BUG-API-002
GET /booking returns HTTP 500 Internal Server Error when duplicate query parameters are supplied.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-027_Filter_Using_Duplicate_Query_Parameters_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-028 – Filter Using Empty Parameter Value

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-009 |
| Endpoint | GET /booking |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking?firstname=
```

### Expected Result

- Endpoint handles an empty query parameter value gracefully.
- API returns either:
  - **HTTP 200 OK** with a valid JSON response, or
  - **HTTP 400 Bad Request** if empty parameter values are considered invalid.
- API does not return an internal server error.
- Response is returned in a controlled format.
- Response body is valid JSON.
- If HTTP 200 is returned, the response is a valid JSON array.
- No unexpected server-side exception occurs.
- Response time is less than **5000 ms**.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Server successfully processed the request containing an empty `firstname` query parameter.
- Response body contained a valid JSON array.
- JSON Schema validation passed successfully.
- All Postman assertions passed.
- No server-side exception occurred.
- Response time was **2.65 seconds**.
- The API handled the empty query parameter gracefully and remained fully operational.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-028_Filter_Using_Empty_Parameter_Value_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-029 – Filter Bookings by Booking ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-009 |
| Endpoint | GET /booking/{id} |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/1
```

### Expected Result

- Endpoint returns the booking details for the specified Booking ID.
- HTTP Status Code is **200 OK**.
- Response Content-Type is **application/json**.
- Response body is a valid JSON object.
- Response contains all required booking properties:
  - firstname
  - lastname
  - totalprice
  - depositpaid
  - bookingdates
- The **bookingdates** object contains both:
  - checkin
  - checkout
- Optional property **additionalneeds** is validated when present.
- All returned values match the expected data types.
- Response matches the defined JSON Schema.
- Response time is less than **5000 ms**.

### Actual Result

- Endpoint returned **HTTP 200 OK**.
- Response Content-Type was **application/json**.
- Response body contained a valid booking object.
- All required properties were present.
- The **bookingdates** object contained valid **checkin** and **checkout** values.
- The optional **additionalneeds** property was present and successfully validated.
- All data types matched the expected contract.
- JSON Schema validation passed successfully.
- All **21 Postman assertions passed**.
- Response time was **3.11 seconds**.
- No unexpected behaviour was observed during execution.

### Defect

```text
No defects identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-029_Filter_Booking_By_Booking_ID_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-030 – Retrieve Booking by Invalid Booking ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-010 |
| Endpoint | GET /booking/{bookingId} |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/999999999
```

### Expected Result

- Endpoint correctly handles requests for a booking ID that does not exist.
- API returns **HTTP 404 Not Found**.
- Response body contains an appropriate error message or an empty response.
- API does not return **HTTP 500 Internal Server Error**.
- Response is handled gracefully.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 404 Not Found**.
- Server correctly identified that the requested booking ID does not exist.
- Response was returned in a controlled manner without any unexpected server-side exception.
- Response body matched the expected "not found" behaviour.
- Response time was **2.10 seconds**.
- All Postman assertions passed successfully.
- API correctly handled the invalid booking ID request.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_By_ID/
    └── TC-GETIDS-030_Retrieve_Booking_by_Invalid_Booking_ID_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-031 – Retrieve Booking Using Invalid Data Type

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-011 |
| Endpoint | GET /booking/{bookingId} |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/abc
```

### Expected Result

- Endpoint correctly handles a non-numeric booking ID.
- API returns **HTTP 404 Not Found** or **HTTP 400 Bad Request**.
- API rejects the invalid booking ID without exposing internal server errors.
- Response is returned in a controlled format.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 404 Not Found**.
- Server correctly rejected the non-numeric booking ID.
- Response body contained the expected **"Not Found"** message.
- No unexpected server-side exception occurred.
- Response time was **2.44 seconds**.
- All Postman assertions passed successfully.
- API correctly handled the invalid booking ID request.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_By_ID/
    └── TC-GETIDS-031_Retrieve_Booking_Using_Invalid_Data_Type_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-GETIDS-032 – Retrieve Booking Using Special Characters in Booking ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-010 |
| Endpoint | GET /booking/{bookingId} |
| Method | GET |
| Execution Date | 24 July 2026 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASS |

### Request

```http
GET /booking/@#$%
```

### Expected Result

- Endpoint correctly rejects a booking ID containing special characters.
- API returns **HTTP 404 Not Found** or **HTTP 400 Bad Request**.
- API does not return **HTTP 500 Internal Server Error**.
- Response is returned in a controlled format.
- Response body contains an appropriate error message.
- Response time is less than **5000 ms**.
- All Postman assertions pass successfully.

### Actual Result

- Endpoint returned **HTTP 404 Not Found**.
- API correctly rejected the invalid booking ID containing special characters.
- Response body contained an appropriate error message ("Not Found").
- No unexpected server-side exception occurred.
- API did not return **HTTP 500 Internal Server Error**.
- Response time was **2.12 seconds**.
- All Postman assertions passed successfully.
- The API handled the invalid path parameter gracefully.

### Defect

```text
No defect identified.
```

### Evidence

```text
10_Test_Evidence/
└── Retrieve_Booking_IDs/
    └── TC-GETIDS-032_Retrieve_Booking_Using_Special_Characters_in_Booking_ID_Request_and_Tests.png
```

------------------------------------------------------------------------

# Defect Summary

| Severity | Count |
|----------|------:|
| Critical | 0 |
| High | 1 |
| Medium | 1 |
| Low | 0 |

## Recorded Defects

| Defect ID | Test Case | Summary | Severity | Status |
|-----------|-----------|---------|----------|--------|
| BUG-API-001 | TC-GETIDS-021 | Future checkout date filter returned 566 booking IDs instead of an empty array. | Medium | Open |
| BUG-API-002 | TC-GETIDS-027 | Duplicate query parameters caused HTTP 500 Internal Server Error. | High | Open |

# Sprint Summary

**Sprint Status:** ✅ Completed

## Overall Result

- Planned Test Cases: **32**
- Executed: **32**
- Passed: **30**
- Failed: **2**
- Blocked: **0**
- Pass Rate: **93.75%**

## Scope Covered

- Retrieve all booking IDs
- Filter by first name
- Filter by last name
- Filter by check-in/check-out dates
- Combined filters
- Unsupported, duplicate and empty query parameters
- Retrieve booking by valid and invalid IDs
- Invalid data types
- Special characters

## Conclusion

Sprint 03 successfully validated the GET booking retrieval endpoints of the Restful Booker API. Two genuine defects were identified and documented:

- BUG-API-001 – Future checkout filtering returned unexpected booking records.
- BUG-API-002 – Duplicate query parameters caused an HTTP 500 Internal Server Error.

All remaining test cases passed successfully.

# End of Document
