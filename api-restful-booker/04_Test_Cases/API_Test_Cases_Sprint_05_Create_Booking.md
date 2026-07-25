# API Test Cases -- Sprint 05 Create Booking

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 05 -- Create Booking\
**Endpoint:** `POST /booking`

------------------------------------------------------------------------

## TC-BOOKING-009 -- Create Booking with Valid Data

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-002
  Endpoint           POST /booking
  Method             POST
  Priority           High
  Type               Positive

### Test Data

`Valid booking payload`

### Expected Result

-   HTTP 200 OK
-   Booking is created successfully.
-   Response contains `bookingid` and booking object.

------------------------------------------------------------------------

## TC-BOOKING-010 -- Create Booking with Missing Required Field

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-003
  Endpoint           POST /booking
  Method             POST
  Priority           High
  Type               Negative

### Test Data

`firstname missing`

### Expected Result

-   API rejects the request.

**Actual execution:** Booking created (BUG-API-004).

------------------------------------------------------------------------

## TC-BOOKING-011 -- Create Booking with Empty Request Body

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-004
  Endpoint           POST /booking
  Method             POST
  Priority           High
  Type               Negative

### Test Data

`{}`

### Expected Result

-   API rejects the empty request body.

**Actual execution:** Linked to **BUG-API-004**.

------------------------------------------------------------------------

## TC-BOOKING-012 -- Create Booking with Invalid Data Types

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-005
  Endpoint           POST /booking
  Method             POST
  Priority           High
  Type               Negative

### Test Data

`Invalid data types`

### Expected Result

-   API rejects invalid data types.

**Actual execution:** BUG-API-006.

------------------------------------------------------------------------

## TC-BOOKING-013 -- Create Booking with Invalid Date Format

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-006
  Endpoint           POST /booking
  Method             POST
  Priority           High
  Type               Negative

### Test Data

`Invalid date format`

### Expected Result

-   API rejects invalid date format.

**Actual execution:** BUG-API-007.

------------------------------------------------------------------------

## TC-BOOKING-014 -- Create Booking with Checkout Before Check-in

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-007
  Endpoint           POST /booking
  Method             POST
  Priority           High
  Type               Business Rule

### Test Data

`checkout < checkin`

### Expected Result

-   API rejects invalid booking dates.

**Actual execution:** BUG-API-008.

------------------------------------------------------------------------

## TC-BOOKING-015 -- Create Booking with Negative Total Price

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-007
  Endpoint           POST /booking
  Method             POST
  Priority           High
  Type               Business Rule

### Test Data

`totalprice = -100`

### Expected Result

-   API rejects negative price.

**Actual execution:** BUG-API-009.

------------------------------------------------------------------------

## TC-BOOKING-016 -- Create Booking with Unexpected Additional Fields

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-008
  Endpoint           POST /booking
  Method             POST
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
  Executed Test Cases         8
  Passed                      2
  Failed                      6
  Blocked                     0
  Pass Rate                 25%
  Bugs Reported               5
