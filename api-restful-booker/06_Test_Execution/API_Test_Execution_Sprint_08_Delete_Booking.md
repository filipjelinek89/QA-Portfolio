# API Test Execution -- Sprint 08 Delete Booking

**Project:** Restful Booker API Testing Project  
**Sprint:** Sprint 08 -- Delete Booking  
**Document Type:** API Test Execution  
**Version:** 1.0  
**Status:** Completed

------------------------------------------------------------------------

# Execution Summary

| Metric | Value |
|--------|------:|
| Planned Test Cases | 8 |
| Executed | 8 |
| Passed | 8 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |

------------------------------------------------------------------------

## TC-BOOKING-033 – Delete Booking with Valid Authentication

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-023 |
| Endpoint | DELETE /booking/{id} |
| Method | DELETE |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
DELETE /booking/{id}
```

### Expected Result

The API should successfully delete an existing booking when a valid authentication token and a valid Booking ID are provided.

Expected response:

- HTTP 201 Created
- Response body contains `Created`
- Booking is successfully deleted
- Response Content-Type is `text/plain; charset=utf-8`
- Response time is within the acceptable threshold
- No server-side errors are returned

### Actual Result

The API successfully deleted the existing booking.

Execution Summary:

- Status Code: **201 Created**
- Response Time: **272 ms**
- Response Size: **747 B**
- Total Assertions: **6**
- Assertions Passed: **6**
- Assertions Failed: **0**

The API successfully removed the specified booking using a valid authentication token. The server returned the expected HTTP status code, the response body contained `Created`, the Content-Type matched the API specification, and all response validation assertions passed successfully.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Delete_Booking/
    └── TC-BOOKING-033_Delete_Booking_with_Valid_Authentication_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-034 – Delete Booking Without Authentication

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-024 |
| Endpoint | DELETE /booking/{id} |
| Method | DELETE |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
DELETE /booking/{id}
```

### Expected Result

The API should reject the booking deletion request when no authentication credentials are provided.

Expected response:

- HTTP 403 Forbidden
- Response body contains `Forbidden`
- Booking is not deleted
- Response Content-Type is `text/plain`
- Response follows the documented API authorization rules

### Actual Result

The API correctly rejected the deletion request because no authentication credentials were provided.

Execution Summary:

- Status Code: **403 Forbidden**
- Response Time: **268 ms**
- Response Size: **759 B**
- Total Assertions: **6**
- Assertions Passed: **6**
- Assertions Failed: **0**

The API correctly enforced authentication by returning **HTTP 403 Forbidden**. The response body contained `Forbidden`, the Content-Type matched the API specification, and all response validation assertions passed successfully. The booking remained unchanged as expected.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Delete_Booking/
    └── TC-BOOKING-034_Delete_Booking_Without_Authentication_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-035 – Delete Booking with Invalid Authentication

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-024 |
| Endpoint | DELETE /booking/{id} |
| Method | DELETE |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
DELETE /booking/{id}
```

### Expected Result

The API should reject the booking deletion request when an invalid authentication token is provided.

Expected response:

- HTTP 403 Forbidden
- Response body contains `Forbidden`
- Booking is not deleted
- Response Content-Type is `text/plain`
- Response follows the documented API authorization rules

### Actual Result

The API correctly rejected the deletion request because an invalid authentication token was provided.

Execution Summary:

- Status Code: **403 Forbidden**
- Response Time: **281 ms**
- Response Size: **747 B**
- Total Assertions: **6**
- Assertions Passed: **6**
- Assertions Failed: **0**

The API correctly enforced authentication by returning **HTTP 403 Forbidden** when an invalid authentication token was supplied. The response body contained `Forbidden`, the Content-Type matched the API specification, and all response validation assertions passed successfully. The booking remained unchanged as expected.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Delete_Booking/
    └── TC-BOOKING-035_Delete_Booking_with_Invalid_Authentication_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-036 – Delete Non-existent Booking

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-025 |
| Endpoint | DELETE /booking/{id} |
| Method | DELETE |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
DELETE /booking/{id}
```

### Expected Result

The API should reject the deletion request when the specified Booking ID does not exist.

Expected response:

- HTTP 405 Method Not Allowed
- Response body contains `Method Not Allowed`
- No booking is deleted
- Response Content-Type is `text/plain`
- Response follows the documented API behavior

### Actual Result

The API correctly rejected the deletion request because the specified Booking ID does not exist.

Execution Summary:

- Status Code: **405 Method Not Allowed**
- Response Time: **269 ms**
- Response Size: **779 B**
- Total Assertions: **6**
- Assertions Passed: **6**
- Assertions Failed: **0**

The API correctly handled the request by returning **HTTP 405 Method Not Allowed** for a non-existent booking ID. The response body contained `Method Not Allowed`, the Content-Type matched the API specification, and all response validation assertions passed successfully.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Delete_Booking/
    └── TC-BOOKING-036_Delete_Non-existent_Booking_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-037 – Delete Already Deleted Booking

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-026 |
| Endpoint | DELETE /booking/{id} |
| Method | DELETE |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
DELETE /booking/{id}
```

### Expected Result

The API should reject a repeated deletion request for a booking that has already been deleted.

Expected response:

- HTTP 405 Method Not Allowed
- Response body contains `Method Not Allowed`
- No additional deletion is performed
- Response Content-Type is `text/plain`
- Response follows the documented API behavior

### Actual Result

The API correctly rejected the repeated deletion request because the booking had already been deleted.

Execution Summary:

- Status Code: **405 Method Not Allowed**
- Response Time: **266 ms**
- Response Size: **767 B**
- Total Assertions: **6**
- Assertions Passed: **6**
- Assertions Failed: **0**

The API correctly prevented a second deletion attempt by returning **HTTP 405 Method Not Allowed**. The response body contained `Method Not Allowed`, the Content-Type matched the API specification, and all response validation assertions passed successfully. The API correctly handled repeated deletion attempts for an already deleted resource.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Delete_Booking/
    └── TC-BOOKING-037_Delete_Already_Deleted_Booking_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-038 – Delete Booking with Invalid Booking ID

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-027 |
| Endpoint | DELETE /booking/{id} |
| Method | DELETE |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
DELETE /booking/{id}
```

### Expected Result

The API should reject the deletion request when an invalid (non-numeric) Booking ID is provided.

Expected response:

- HTTP 405 Method Not Allowed
- Response body contains `Method Not Allowed`
- No booking is deleted
- Response Content-Type is `text/plain`
- Response follows the documented API behavior

### Actual Result

The API correctly rejected the deletion request because an invalid (non-numeric) Booking ID was supplied.

Execution Summary:

- Status Code: **405 Method Not Allowed**
- Response Time: **265 ms**
- Response Size: **767 B**
- Total Assertions: **6**
- Assertions Passed: **6**
- Assertions Failed: **0**

The API correctly handled the invalid Booking ID by returning **HTTP 405 Method Not Allowed**. The response body contained `Method Not Allowed`, the Content-Type matched the API specification, and all response validation assertions passed successfully.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Delete_Booking/
    └── TC-BOOKING-038_Delete_Booking_with_Invalid_Booking_ID_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-039 – Delete Booking Using Invalid HTTP Method

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-027 |
| Endpoint | DELETE /booking/{id} |
| Method | GET |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
GET /booking/{id}
```

### Expected Result

The API should reject the request when an unsupported HTTP method is used for the Delete Booking operation.

Expected response:

- HTTP 404 Not Found
- Response body contains `Not Found`
- Response Content-Type is `text/plain`
- Response follows the documented API behavior

### Actual Result

The API correctly rejected the request by returning an HTTP 404 Not Found response.

Execution Summary:

- Status Code: **404 Not Found**
- Response Time: **271 ms**
- Response Size: **747 B**
- Total Assertions: **6**
- Assertions Passed: **6**
- Assertions Failed: **0**

The API rejected the request by returning **HTTP 404 Not Found**. The response body contained `Not Found`, the Content-Type matched the API specification, and all response validation assertions passed successfully.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Delete_Booking/
    └── TC-BOOKING-039_Delete_Booking_Using_Invalid_HTTP_Method_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-BOOKING-040 – Delete Booking API Robustness

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-BOOKING-027 |
| Endpoint | DELETE /booking/{id} |
| Method | DELETE |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Status | ✅ PASSED |

### Request

```http
DELETE /booking/{id}
```

### Expected Result

The API should remain stable and responsive when multiple valid DELETE requests are executed against different booking records.

Expected response:

- HTTP 201 Created
- Response body contains `Created`
- Each booking is successfully deleted
- Response Content-Type is `text/plain`
- No HTTP 500 Internal Server Error responses occur
- Response time remains within the acceptable threshold

### Actual Result

The API successfully processed repeated DELETE requests without any degradation in performance or stability.

Execution Summary:

- Status Code: **201 Created**
- Response Time: **207 ms**
- Response Size: **751 B**
- Total Assertions: **6**
- Assertions Passed: **6**
- Assertions Failed: **0**

The API consistently returned **HTTP 201 Created** for valid deletion requests. Each request completed successfully, the response body contained `Created`, the Content-Type matched the API specification, no server-side errors occurred, and all response validation assertions passed successfully throughout the robustness test.

### Defect

```text
None
```

### Evidence

```text
10_Test_Evidence/
└── Delete_Booking/
    └── TC-BOOKING-040_Delete_Booking_API_Robustness_Request_and_Tests.png
```

------------------------------------------------------------------------

# Planned Test Cases

TC-BOOKING-033 through TC-BOOKING-040

All test cases were executed and documented during Sprint 08.

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

**Sprint Status:** ✅ Completed

## Overall Result

- Planned Test Cases: **8**
- Executed: **8**
- Passed: **8**
- Failed: **0**
- Blocked: **0**
- Pass Rate: **100%**

------------------------------------------------------------------------

# End of Document
