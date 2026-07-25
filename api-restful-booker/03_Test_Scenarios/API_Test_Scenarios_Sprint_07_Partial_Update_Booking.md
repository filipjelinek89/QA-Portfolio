# API Test Scenarios -- Sprint 07

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 07 -- Partial Partial Update Booking\
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

This document contains the API Test Scenarios for Sprint 07 of the
Restful Booker API Testing Project.

Sprint 07 focuses on validating the **Partial Partial Update Booking** endpoint,
including successful booking updates, authentication, request body
validation, business rule validation, negative testing, and API
robustness.

------------------------------------------------------------------------

# 2. Scope

**Module:** Partial Partial Update Booking

**Endpoint**

``` text
PATCH /booking/{id}
```

Detailed test cases:

``` text
04_Test_Cases/Sprint_07/API_Test_Cases_Sprint_07_Update_Booking.md
```

Execution results:

``` text
06_Test_Execution/Sprint_07/API_Test_Execution_Sprint_07_Update_Booking.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module           Status
  ----------- ---------------- --------------
  Sprint 07 | Partial Partial Update Booking | ✅ Completed

## Objectives

-   Partially update a booking with valid data
-   Validate authentication
-   Validate request body
-   Validate partial request body
-   Validate business rules
-   Validate unchanged fields remain intact

------------------------------------------------------------------------

# 4. Scenario Summary

  --------------------------------------------------------------------------------
  Scenario ID          Title            Priority         Type         Status
  -------------------- ---------------- ---------------- ------------ ------------
  TS-BOOKING-016       Verify           High             Positive     ✅ Completed
                       successful                                     
                       booking update                                 

  TS-BOOKING-017       Verify           High             Security     ✅ Completed
                       authentication                                 
                       validation                                     

  TS-BOOKING-018       Verify required  High             Negative     ✅ Completed
                       field validation                               

  TS-BOOKING-019       Verify invalid   High             Negative     ✅ Completed
                       data type                                      
                       handling                                       

  TS-BOOKING-020       Verify invalid   High             Negative     ✅ Completed
                       date format                                    
                       handling                                       

  TS-BOOKING-021       Verify business  High             Business     ✅ Completed
                       rule validation                   Rule         

  TS-BOOKING-022       Verify           Medium           Robustness   ✅ Completed
                       unexpected                                     
                       additional                                     
                       fields                                         
  --------------------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Test Scenarios

## TS-BOOKING-016 -- Verify successful partial booking update

**Module:** Partial Partial Update Booking\
**Endpoint:** PATCH /booking/{id}\
**HTTP Method:** PATCH\
**Priority:** High\
**Test Type:** Positive\
**Requirement:** REQ-BOOKING-004

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
PATCH - Partial Partial Update Booking with Valid Data
```

------------------------------------------------------------------------

## TS-BOOKING-017 -- Verify authentication validation

### Validation Focus

-   Missing authentication
-   Invalid authentication
-   Unauthorized access

### Related Postman Requests

``` text
PATCH - Partial Partial Update Booking Without Authentication
PATCH - Partial Partial Update Booking With Invalid Token
```

------------------------------------------------------------------------

## TS-BOOKING-018 -- Verify partial request validation

### Validation Focus

-   Missing required fields
-   Server-side validation
-   Error handling

------------------------------------------------------------------------

## TS-BOOKING-019 -- Verify invalid data type handling

### Validation Focus

-   Invalid data types
-   Request validation

------------------------------------------------------------------------

## TS-BOOKING-020 -- Verify invalid date format validation

### Validation Focus

-   Invalid date format
-   Request validation

------------------------------------------------------------------------

## TS-BOOKING-021 -- Verify business rule validation

### Validation Focus

-   Checkout before check-in
-   Negative total price

------------------------------------------------------------------------

## TS-BOOKING-022 -- Verify partial update preserves unspecified fields

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

-   PATCH API testing
-   Authentication testing
-   Request body validation
-   Positive testing
-   Negative testing
-   Business rule validation
-   API robustness testing
-   Bug reporting

------------------------------------------------------------------------

## Sprint 07 Execution Outcome

  Test Cases        Result
  --------------- --------
  Executed               8
  Passed                 5
  Failed                 3
  Blocked                0
  Pass Rate          62.5%
  Bugs Reported          3

### Defects Identified

-   BUG-API-013 -- PATCH Update Booking Accepts Invalid Data Types
-   BUG-API-014 -- PATCH Update Booking Accepts Invalid Date Format
-   BUG-API-015 -- PATCH Update Booking Accepts Checkout Date Earlier Than Check-in Date

# 7. Revision History

  -----------------------------------------------------------------------
  Version                Date            Description
  ---------------------- --------------- --------------------------------
  1.0                    25 July 2026    Sprint 07 completed. Updated scenario statuses, completion metrics, execution outcome, and defect references.

  
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# End of Document
