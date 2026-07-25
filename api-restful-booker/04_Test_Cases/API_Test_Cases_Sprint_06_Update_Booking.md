# API Test Cases -- Sprint 06 Update Booking

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 06 -- Update Booking\
**Endpoint:** `PUT /booking/{id}`

------------------------------------------------------------------------

## TC-BOOKING-017 -- Update Booking with Valid Data

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-009
  Endpoint           PUT /booking/{id}
  Method             PUT
  Priority           High
  Type               Positive

### Test Data

`Valid booking payload`

### Expected Result

-   HTTP 200 OK
-   Booking updated successfully.
-   Response contains updated booking information.

------------------------------------------------------------------------

## TC-BOOKING-018 -- Update Booking Without Authentication

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-010
  Endpoint           PUT /booking/{id}
  Method             PUT
  Priority           High
  Type               Security

### Test Data

`Valid payload without authentication`

### Expected Result

-   API rejects the request.
-   HTTP 403 Forbidden or other appropriate authentication error.

------------------------------------------------------------------------

## TC-BOOKING-019 -- Update Booking with Invalid Authentication

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-010
  Endpoint           PUT /booking/{id}
  Method             PUT
  Priority           High
  Type               Security

### Test Data

`Valid payload + invalid token`

### Expected Result

-   API rejects invalid authentication.

------------------------------------------------------------------------

## TC-BOOKING-020 -- Update Booking with Missing Required Field

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-011
  Endpoint           PUT /booking/{id}
  Method             PUT
  Priority           High
  Type               Negative

### Test Data

`firstname missing`

### Expected Result

-   API rejects the request.

------------------------------------------------------------------------

## TC-BOOKING-021 -- Update Booking with Invalid Data Types

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-012
  Endpoint           PUT /booking/{id}
  Method             PUT
  Priority           High
  Type               Negative

### Test Data

`Invalid data types`

### Expected Result

-   API rejects invalid data types.

------------------------------------------------------------------------

## TC-BOOKING-022 -- Update Booking with Invalid Date Format

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-013
  Endpoint           PUT /booking/{id}
  Method             PUT
  Priority           High
  Type               Negative

### Test Data

`Invalid date format`

### Expected Result

-   API rejects invalid date format.

------------------------------------------------------------------------

## TC-BOOKING-023 -- Update Booking with Checkout Before Check-in

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-014
  Endpoint           PUT /booking/{id}
  Method             PUT
  Priority           High
  Type               Business Rule

### Test Data

`checkout < checkin`

### Expected Result

-   API rejects invalid booking dates.

------------------------------------------------------------------------

## TC-BOOKING-024 -- Update Booking with Unexpected Additional Fields

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-015
  Endpoint           PUT /booking/{id}
  Method             PUT
  Priority           Medium
  Type               Robustness

### Test Data

`Valid payload + unexpected field`

### Expected Result

-   API handles additional fields consistently.

------------------------------------------------------------------------

# Sprint Summary

  Metric                  Value
  --------------------- -------
  Planned Test Cases          8
  Executed Test Cases         8
  Passed                      5
  Failed                      3
  Blocked                     0
  Pass Rate               62.5%
  Bugs Reported               3

------------------------------------------------------------------------

## Execution Results

  Test Case        Result
  ---------------- -----------------------
  TC-BOOKING-017   ✅ PASS
  TC-BOOKING-018   ✅ PASS
  TC-BOOKING-019   ✅ PASS
  TC-BOOKING-020   ✅ PASS
  TC-BOOKING-021   ❌ FAIL → BUG-API-010
  TC-BOOKING-022   ❌ FAIL → BUG-API-011
  TC-BOOKING-023   ❌ FAIL → BUG-API-012
  TC-BOOKING-024   ✅ PASS

## Reported Defects

-   BUG-API-010 -- Update Booking Returns Internal Server Error When
    Invalid Data Types Are Submitted
-   BUG-API-011 -- Update Booking Accepts Invalid Date Format
-   BUG-API-012 -- Update Booking Accepts Checkout Date Earlier Than
    Check-in Date

# End of Document
