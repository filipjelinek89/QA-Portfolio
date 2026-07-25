# API Test Scenarios -- Sprint 04

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 04 -- Retrieve Booking\
**Document Type:** API Test Scenarios\
**Version:** 1.0\
**Prepared by:** Filip Jelinek\
**Status:** Completed

------------------------------------------------------------------------

# In-page Navigation

1.  Purpose
2.  Scope
3.  Sprint Overview
4.  Scenario Summary
5.  Test Scenarios
6.  Sprint Summary
7.  Revision History

------------------------------------------------------------------------

# 1. Purpose

This document contains the API Test Scenarios for Sprint 04 of the
Restful Booker API Testing Project.

Sprint 04 focuses on validating the **Retrieve Booking** endpoint,
including successful retrieval using a Booking ID, response validation,
path parameter validation, negative testing and performance.

------------------------------------------------------------------------

# 2. Scope

**Module:** Retrieve Booking

**Endpoint**

``` text
GET /booking/{id}
```

Detailed test cases:

``` text
04_Test_Cases/Sprint_04/API_Test_Cases_Sprint_04_Retrieve_Booking.md
```

Execution results:

``` text
06_Test_Execution/Sprint_04/API_Test_Execution_Sprint_04_Retrieve_Booking.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module                  Status
  ----------- ----------------------- ------------
  Sprint 04   Retrieve Booking 🚧 I   n Progress

Objectives

-   Retrieve booking details by Booking ID
-   Validate response structure
-   Validate response body
-   Validate path parameter
-   Verify API performance

------------------------------------------------------------------------

# 4. Scenario Summary

  --------------------------------------------------------------------------------
  Scenario ID      Title                         Priority   Type       Status
  ---------------- ----------------------------- ---------- ---------- -----------
  TS-BOOKING-001   Verify retrieval of booking   High       Positive   ✅
                   by valid Booking ID                                 Completed

  --------------------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Test Scenarios

## TS-BOOKING-001 -- Verify retrieval of booking by valid Booking ID

  Field         Value
  ------------- -------------------
  Module        Retrieve Booking
  Endpoint      GET /booking/{id}
  HTTP Method   GET
  Priority      High
  Test Type     Positive
  Requirement   REQ-BOOKING-001

### Objective

Verify that the API successfully returns the complete booking details
for a valid Booking ID.

### Validation Focus

-   HTTP Status Code
-   JSON object
-   Booking object
-   Content-Type
-   Response time

### Related Postman Request

``` text
GET - Retrieve Booking by ID
```

------------------------------------------------------------------------

## TS-BOOKING-002 -- Verify booking response structure

  Field         Value
  ------------- -------------------
  Module        Retrieve Booking
  Endpoint      GET /booking/{id}
  HTTP Method   GET
  Priority      High
  Test Type     Contract
  Requirement   REQ-BOOKING-001

### Objective

Verify that the response matches the documented API contract.

### Validation Focus

-   JSON object
-   Booking object
-   Required fields
-   Correct data types
-   Response format

### Related Postman Request

``` text
GET - Retrieve Booking by ID
```

------------------------------------------------------------------------

## TS-BOOKING-003 -- Verify response body content

### Validation Focus

-   firstname
-   lastname
-   totalprice
-   depositpaid
-   bookingdates
-   additionalneeds

### Related Postman Request

``` text
GET - Retrieve Booking by ID
```

------------------------------------------------------------------------

## TS-BOOKING-004 -- Verify response JSON schema

### Validation Focus

-   Required fields
-   Data types
-   Nested object validation

### Related Postman Request

``` text
GET - Retrieve Booking by ID
```

------------------------------------------------------------------------

## TS-BOOKING-005 -- Verify invalid Booking ID handling

### Validation Focus

-   Invalid Booking ID
-   Invalid data type
-   Special characters

### Related Postman Request

``` text
GET - Retrieve Booking by Invalid ID
```

------------------------------------------------------------------------

## TS-BOOKING-006 -- Verify non-existing Booking ID handling

### Validation Focus

-   Unknown Booking ID
-   Error response

### Related Postman Request

``` text
GET - Retrieve Booking by Non-Existing ID
```

------------------------------------------------------------------------

## TS-BOOKING-007 -- Verify unsupported HTTP methods

### Validation Focus

-   POST
-   PUT
-   PATCH
-   DELETE

### Related Postman Request

``` text
Unsupported HTTP Methods - Retrieve Booking
```

------------------------------------------------------------------------

## TS-BOOKING-008 -- Verify performance and response validation

### Validation Focus

-   Response time
-   Content-Type
-   Response consistency

### Related Postman Request

``` text
GET - Retrieve Booking by ID
```

------------------------------------------------------------------------

# 6. Sprint Summary

  Metric              Value
  ----------------- -------
  Total Scenarios         1
  Completed               1
  Completion Rate      100%

Key skills demonstrated

-   GET API testing
-   Path parameter validation
-   Response validation
-   Negative testing
-   Performance testing

------------------------------------------------------------------------

# 7. Revision History

  ---------------------------------------------------------------------
  Version                 Date           Description
  ----------------------- -------------- ------------------------------
  1.0                     25 July 2026   Initial standalone Sprint 04
                                         scenario document created.

  ---------------------------------------------------------------------

------------------------------------------------------------------------

# End of Document
