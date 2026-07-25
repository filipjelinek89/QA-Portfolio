# API Test Cases -- Sprint 04 Retrieve Booking

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 04 -- Retrieve Booking\
**Endpoint:** `GET /booking/{id}`


------------------------------------------------------------------------

## TC-BOOKING-001 -- Retrieve Booking with Valid Booking ID

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking/{id}
  Method             GET
  Priority           High
  Type               Positive

### Test Data

`bookingid = 1`

### Expected Result

-   HTTP 200 OK
-   Booking details are returned.

------------------------------------------------------------------------

## TC-BOOKING-002 -- Retrieve Non-existing Booking ID

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking/{id}
  Method             GET
  Priority           High
  Type               Negative

### Test Data

`bookingid = 999999`

### Expected Result

-   HTTP 404 Not Found.

------------------------------------------------------------------------

## TC-BOOKING-003 -- Retrieve Booking Using Invalid ID Format

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking/{id}
  Method             GET
  Priority           Medium
  Type               Negative

### Test Data

`bookingid = abc`

### Expected Result

-   HTTP 404 Not Found.

------------------------------------------------------------------------

## TC-BOOKING-004 -- Retrieve Booking Using Negative ID

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking/{id}
  Method             GET
  Priority           Medium
  Type               Negative

### Test Data

`bookingid = -1`

### Expected Result

-   HTTP 404 Not Found.

------------------------------------------------------------------------

## TC-BOOKING-005 -- Retrieve Booking Using Zero ID

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking/{id}
  Method             GET
  Priority           Medium
  Type               Boundary

### Test Data

`bookingid = 0`

### Expected Result

-   HTTP 404 Not Found.

------------------------------------------------------------------------

## TC-BOOKING-006 -- Retrieve Booking Using Special Characters

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking/{id}
  Method             GET
  Priority           Medium
  Type               Negative

### Test Data

`bookingid = @#$`

### Expected Result

-   HTTP 404 Not Found.

------------------------------------------------------------------------

## TC-BOOKING-007 -- Retrieve Booking Using Decimal ID

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking/{id}
  Method             GET
  Priority           High
  Type               Boundary

### Test Data

`bookingid = 1.5`

### Expected Result

-   HTTP 404 Not Found.

**Actual execution:** Returned **HTTP 200 OK** (BUG-API-003).

------------------------------------------------------------------------

## TC-BOOKING-008 -- Retrieve Booking Using Very Large ID

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking/{id}
  Method             GET
  Priority           Medium
  Type               Boundary

### Test Data

`bookingid = 999999999999`

### Expected Result

-   HTTP 404 Not Found.

------------------------------------------------------------------------

# Sprint Summary

  Metric                  Value
  --------------------- -------
  Executed Test Cases         8
  Passed                      7
  Failed                      1
  Blocked                     0
  Pass Rate               87.5%
  Bugs Reported               1
