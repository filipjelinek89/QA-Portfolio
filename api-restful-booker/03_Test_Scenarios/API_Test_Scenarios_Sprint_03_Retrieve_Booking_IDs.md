# API Test Scenarios -- Sprint 03

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 03 -- Retrieve Booking IDs\
**Document Type:** API Test Scenarios\
**Version:** 1.0\
**Prepared by:** Filip Jelinek\
**Status:** In Progress

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

This document contains the API Test Scenarios for Sprint 03 of the
Restful Booker API Testing Project.

Sprint 03 focuses on validating the **Retrieve Booking IDs** endpoint,
including response structure, filtering, query parameters, and
non-functional behaviour.

------------------------------------------------------------------------

# 2. Scope

**Module:** Retrieve Booking IDs

**Endpoint**

``` text
GET /booking
```

Detailed test cases:

``` text
04_Test_Cases/Sprint_03/API_Test_Cases_Sprint_03_Retrieve_Booking_IDs.md
```

Execution results:

``` text
06_Test_Execution/Sprint_03/API_Test_Execution_Sprint_03_Retrieve_Booking_IDs.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module                 Status
  ----------- ---------------------- ----------------
  Sprint 03   Retrieve Booking IDs   🚧 In Progress

Objectives

-   Retrieve all booking IDs
-   Validate response structure
-   Verify filtering
-   Validate query parameters
-   Verify API performance

------------------------------------------------------------------------

# 4. Scenario Summary

  ----------------------------------------------------------------------------------------
  Scenario ID          Title                Priority         Type             Status
  -------------------- -------------------- ---------------- ---------------- ------------
  TS-BOOKING-001       Verify retrieval of  High             Positive         🚧 In
                       all booking IDs                                        Progress

  TS-BOOKING-002       Verify booking       High             Contract         ⏳ Planned
                       response structure                                     

  TS-BOOKING-003       Verify filtering by  High             Functional       ⏳ Planned
                       firstname                                              

  TS-BOOKING-004       Verify filtering by  High             Functional       ⏳ Planned
                       lastname                                               

  TS-BOOKING-005       Verify filtering by  High             Functional       ⏳ Planned
                       check-in/check-out                                     
                       dates                                                  

  TS-BOOKING-006       Verify multiple      Medium           Functional       ⏳ Planned
                       query parameter                                        
                       combinations                                           

  TS-BOOKING-007       Verify invalid and   Medium           Negative         ⏳ Planned
                       unsupported query                                      
                       parameters                                             

  TS-BOOKING-008       Verify performance   Medium           Non-Functional   ⏳ Planned
                       and response                                           
                       validation                                             
  ----------------------------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Test Scenarios

## TS-BOOKING-001 -- Verify retrieval of all booking IDs

  Field         Value
  ------------- ----------------------
  Module        Retrieve Booking IDs
  Endpoint      GET /booking
  HTTP Method   GET
  Priority      High
  Test Type     Positive
  Requirement   REQ-BOOKING-001

### Objective

Verify that the API successfully returns a list of booking IDs.

### Validation Focus

-   HTTP Status Code
-   JSON array
-   bookingid property
-   Content-Type
-   Response time

### Related Postman Request

``` text
GET - Retrieve All Booking IDs
```

------------------------------------------------------------------------

## TS-BOOKING-002 -- Verify booking response structure

  Field         Value
  ------------- ----------------------
  Module        Retrieve Booking IDs
  Endpoint      GET /booking
  HTTP Method   GET
  Priority      High
  Test Type     Contract
  Requirement   REQ-BOOKING-001

### Objective

Verify that the response structure matches the documented API contract.

### Validation Focus

-   JSON array
-   bookingid property
-   Integer data type
-   Response format

### Related Postman Request

``` text
GET - Retrieve All Booking IDs
```

------------------------------------------------------------------------

## TS-BOOKING-003 -- Verify filtering by firstname

### Validation Focus

-   Valid firstname
-   Matching records
-   Empty result handling

### Related Postman Request

``` text
GET - Booking by Firstname
```

------------------------------------------------------------------------

## TS-BOOKING-004 -- Verify filtering by lastname

### Validation Focus

-   Valid lastname
-   Matching records
-   Empty result handling

### Related Postman Request

``` text
GET - Booking by Lastname
```

------------------------------------------------------------------------

## TS-BOOKING-005 -- Verify filtering by check-in/check-out dates

### Validation Focus

-   Check-in filter
-   Check-out filter
-   Combined dates
-   Empty results

### Related Postman Request

``` text
GET - Booking by Dates
```

------------------------------------------------------------------------

## TS-BOOKING-006 -- Verify multiple query parameter combinations

### Validation Focus

-   firstname + lastname
-   firstname + dates
-   lastname + dates
-   Multiple filters

### Related Postman Request

``` text
GET - Booking with Multiple Filters
```

------------------------------------------------------------------------

## TS-BOOKING-007 -- Verify invalid and unsupported query parameters

### Validation Focus

-   Unsupported parameters
-   Invalid values
-   Graceful API behaviour

### Related Postman Request

``` text
GET - Invalid Query Parameters
```

------------------------------------------------------------------------

## TS-BOOKING-008 -- Verify performance and response validation

### Validation Focus

-   Response time
-   Content-Type
-   Response consistency
-   Non-empty response

### Related Postman Request

``` text
GET - Retrieve All Booking IDs
```

------------------------------------------------------------------------

# 6. Sprint Summary

  Metric              Value
  ----------------- -------
  Total Scenarios         8
  Completed               0
  Completion Rate        0%

Key skills demonstrated

-   GET API testing
-   Query parameter testing
-   Response contract validation
-   Filtering verification
-   JSON array validation
-   Performance testing
-   Functional and negative testing

------------------------------------------------------------------------

# 7. Revision History

  -----------------------------------------------------------------------
  Version                  Date           Description
  ------------------------ -------------- -------------------------------
  1.0                      24 July 2026   Initial standalone Sprint 03
                                          scenario document created.

  -----------------------------------------------------------------------

------------------------------------------------------------------------

# End of Document
