# API Test Scenarios -- Sprint 06

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 06 -- Update Booking\
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

This document contains the API Test Scenarios for Sprint 06 of the
Restful Booker API Testing Project.

Sprint 06 focuses on validating the **Update Booking** endpoint,
including successful booking updates, authentication, request body
validation, business rule validation, negative testing, and API
robustness.

------------------------------------------------------------------------

# 2. Scope

**Module:** Update Booking

**Endpoint**

``` text
PUT /booking/{id}
```

Detailed test cases:

``` text
04_Test_Cases/Sprint_06/API_Test_Cases_Sprint_06_Update_Booking.md
```

Execution results:

``` text
06_Test_Execution/Sprint_06/API_Test_Execution_Sprint_06_Update_Booking.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module           Status
  ----------- ---------------- --------------
  Sprint 06   Update Booking   ✅ Completed

## Objectives

-   Update a booking with valid data
-   Validate authentication
-   Validate request body
-   Validate required fields
-   Validate business rules
-   Validate server-side input validation

------------------------------------------------------------------------

# 4. Scenario Summary

  --------------------------------------------------------------------------------
  Scenario ID          Title            Priority         Type         Status
  -------------------- ---------------- ---------------- ------------ ------------
  TS-BOOKING-009       Verify           High             Positive     ✅ Completed
                       successful                                     
                       booking update                                 

  TS-BOOKING-010       Verify           High             Security     ✅ Completed
                       authentication                                 
                       validation                                     

  TS-BOOKING-011       Verify required  High             Negative     ✅ Completed
                       field validation                               

  TS-BOOKING-012       Verify invalid   High             Negative     ✅ Completed
                       data type                                      
                       handling                                       

  TS-BOOKING-013       Verify invalid   High             Negative     ✅ Completed
                       date format                                    
                       handling                                       

  TS-BOOKING-014       Verify business  High             Business     ✅ Completed
                       rule validation                   Rule         

  TS-BOOKING-015       Verify           Medium           Robustness   ✅ Completed
                       unexpected                                     
                       additional                                     
                       fields                                         
  --------------------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Test Scenarios

## TS-BOOKING-009 -- Verify successful booking update

**Module:** Update Booking\
**Endpoint:** PUT /booking/{id}\
**HTTP Method:** PUT\
**Priority:** High\
**Test Type:** Positive\
**Requirement:** REQ-BOOKING-003

### Objective

Verify that the API successfully updates an existing booking when valid
data and valid authentication are provided.

### Validation Focus

-   HTTP Status Code
-   Authentication
-   Response body
-   Updated booking values
-   Response time

### Related Postman Request

``` text
PUT - Update Booking with Valid Data
```

------------------------------------------------------------------------

## TS-BOOKING-010 -- Verify authentication validation

### Validation Focus

-   Missing authentication
-   Invalid authentication
-   Unauthorized access

### Related Postman Requests

``` text
PUT - Update Booking Without Authentication
PUT - Update Booking With Invalid Token
```

------------------------------------------------------------------------

## TS-BOOKING-011 -- Verify required field validation

### Validation Focus

-   Missing required fields
-   Server-side validation
-   Error handling

------------------------------------------------------------------------

## TS-BOOKING-012 -- Verify invalid data type handling

### Validation Focus

-   Invalid data types
-   Request validation

------------------------------------------------------------------------

## TS-BOOKING-013 -- Verify invalid date format handling

### Validation Focus

-   Invalid date format
-   Request validation

------------------------------------------------------------------------

## TS-BOOKING-014 -- Verify business rule validation

### Validation Focus

-   Checkout before check-in
-   Negative total price

------------------------------------------------------------------------

## TS-BOOKING-015 -- Verify unexpected additional fields

### Validation Focus

-   Unexpected fields
-   API robustness
-   Response consistency

------------------------------------------------------------------------

# 6. Sprint Summary

  Metric              Value
  ----------------- -------
  Total Scenarios         7
  Completed               7
  Completion Rate      100%

## Key skills demonstrated

-   PUT API testing
-   Authentication testing
-   Request body validation
-   Positive testing
-   Negative testing
-   Business rule validation
-   API robustness testing
-   Bug reporting

------------------------------------------------------------------------

## Sprint 06 Execution Outcome

  Test Cases        Result
  --------------- --------
  Executed               8
  Passed                 5
  Failed                 3
  Blocked                0
  Pass Rate          62.5%
  Bugs Reported          3

### Defects Identified

-   BUG-API-010 -- Update Booking Returns Internal Server Error When
    Invalid Data Types Are Submitted
-   BUG-API-011 -- Update Booking Accepts Invalid Date Format
-   BUG-API-012 -- Update Booking Accepts Checkout Date Earlier Than
    Check-in Date

# 7. Revision History

  -----------------------------------------------------------------------
  Version                Date            Description
  ---------------------- --------------- --------------------------------
  1.0                    25 July 2026    Initial Sprint 06 scenario
                                         document created.

  1.1                    25 July 2026    Sprint completed. Scenario
                                         statuses updated and execution
                                         outcome added.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# End of Document
