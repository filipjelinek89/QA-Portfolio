# API Test Cases -- Sprint 06 Partial Update Booking

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 07 -- Partial Partial Update Booking\
**Endpoint:** `PATCH /booking/{id}`

------------------------------------------------------------------------

## TC-BOOKING-025 -- Partial Update Booking with Valid Data

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-016
  Endpoint           PATCH /booking/{id}
  Method             PATCH
  Priority           High
  Type               Positive

### Test Data

`Valid partial booking payload`

### Expected Result

-   HTTP 200 OK
-   Booking updated successfully.
-   Response contains updated booking information.

------------------------------------------------------------------------

## TC-BOOKING-026 -- Partial Update Booking Without Authentication

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-017
  Endpoint           PATCH /booking/{id}
  Method             PATCH
  Priority           High
  Type               Security

### Test Data

`Partial payload without authentication`

### Expected Result

-   API rejects the request.
-   HTTP 403 Forbidden or other appropriate authentication error.

------------------------------------------------------------------------

## TC-BOOKING-027 -- Partial Update Booking with Invalid Authentication

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-017
  Endpoint           PATCH /booking/{id}
  Method             PATCH
  Priority           High
  Type               Security

### Test Data

`Partial payload + invalid token`

### Expected Result

-   API rejects invalid authentication.

------------------------------------------------------------------------

## TC-BOOKING-028 -- Partial Update Booking with Missing Required Field

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-018
  Endpoint           PATCH /booking/{id}
  Method             PATCH
  Priority           High
  Type               Negative

### Test Data

`firstname update only`

### Expected Result

-   API rejects the request.

------------------------------------------------------------------------

## TC-BOOKING-029 -- Partial Update Booking with Invalid Data Types

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-019
  Endpoint           PATCH /booking/{id}
  Method             PATCH
  Priority           High
  Type               Negative

### Test Data

`Invalid data types`

### Expected Result

-   API rejects invalid data types.

------------------------------------------------------------------------

## TC-BOOKING-030 -- Partial Update Booking with Invalid Date Format

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-020
  Endpoint           PATCH /booking/{id}
  Method             PATCH
  Priority           High
  Type               Negative

### Test Data

`Invalid date format`

### Expected Result

-   API rejects invalid date format.

------------------------------------------------------------------------

## TC-BOOKING-031 -- Partial Update Booking with Checkout Before Check-in

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-021
  Endpoint           PATCH /booking/{id}
  Method             PATCH
  Priority           High
  Type               Business Rule

### Test Data

`checkout earlier than checkin`

### Expected Result

-   API rejects invalid booking dates.

------------------------------------------------------------------------

## TC-BOOKING-032 -- Partial Update Booking with Unexpected Additional Fields

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-022
  Endpoint           PATCH /booking/{id}
  Method             PATCH
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

# End of Document
