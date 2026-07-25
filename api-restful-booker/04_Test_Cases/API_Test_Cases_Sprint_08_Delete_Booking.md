# API Test Cases -- Sprint 08 Delete Booking

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 08 -- Delete Booking\
**Endpoint:** `DELETE /booking/{id}`

------------------------------------------------------------------------

## TC-BOOKING-033 -- Delete Booking with Valid Authentication

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-023
  Endpoint           DELETE /booking/{id}
  Method             DELETE
  Priority           High
  Type               Positive

### Test Data

`Valid booking ID with valid authentication`

### Expected Result

-   HTTP 201 Created
-   Booking deleted successfully.
-   Deleted booking cannot be retrieved.

------------------------------------------------------------------------

## TC-BOOKING-034 -- Delete Booking Without Authentication

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-024
  Endpoint           DELETE /booking/{id}
  Method             DELETE
  Priority           High
  Type               Security

### Test Data

`Delete request without authentication`

### Expected Result

-   HTTP 405 Method Not Allowed
-   Response body contains `Method Not Allowed`.
-   HTTP 403 Forbidden or other appropriate authentication error.

------------------------------------------------------------------------

## TC-BOOKING-035 -- Delete Booking with Invalid Authentication

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-024
  Endpoint           DELETE /booking/{id}
  Method             DELETE
  Priority           High
  Type               Security

### Test Data

`Delete request with invalid authentication`

### Expected Result

-   API rejects invalid authentication.

------------------------------------------------------------------------

## TC-BOOKING-036 -- Delete Non-existent Booking

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-025
  Endpoint           DELETE /booking/{id}
  Method             DELETE
  Priority           High
  Type               Negative

### Test Data

`Non-existent booking ID`

### Expected Result

-   HTTP 405 Method Not Allowed
-   Response body contains `Method Not Allowed`.

------------------------------------------------------------------------

## TC-BOOKING-037 -- Delete Already Deleted Booking

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-026
  Endpoint           DELETE /booking/{id}
  Method             DELETE
  Priority           High
  Type               Negative

### Test Data

`Previously deleted booking ID`

### Expected Result

-   HTTP 405 Method Not Allowed
-   Response body contains `Method Not Allowed`.

------------------------------------------------------------------------

## TC-BOOKING-038 -- Delete Booking with Invalid Booking ID

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-027
  Endpoint           DELETE /booking/{id}
  Method             DELETE
  Priority           High
  Type               Negative

### Test Data

`Invalid booking ID`

### Expected Result

-   HTTP 405 Method Not Allowed
-   Response body contains `Method Not Allowed`.

------------------------------------------------------------------------

## TC-BOOKING-039 -- Delete Booking Using Invalid HTTP Method

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-027
  Endpoint           DELETE /booking/{id}
  Method             DELETE
  Priority           High
  Type               Business Rule

### Test Data

`DELETE request using unsupported HTTP method`

### Expected Result

-   HTTP 404 Not Found
-   Response body contains `Not Found`.

------------------------------------------------------------------------

## TC-BOOKING-040 -- Delete Booking API Robustness

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-BOOKING-027
  Endpoint           DELETE /booking/{id}
  Method             DELETE
  Priority           Medium
  Type               Robustness

### Test Data

`Valid authenticated DELETE request`

### Expected Result

-   HTTP 201 Created
-   Response body contains `Created`.
-   API remains stable during repeated DELETE requests.

------------------------------------------------------------------------

# Sprint Summary

  Metric                  Value
  --------------------- -------
  Planned Test Cases          8
  Executed Test Cases         8
  Passed                      8
  Failed                      0
  Blocked                     0
  Pass Rate                100%
  Bugs Reported               0

------------------------------------------------------------------------

# End of Document
