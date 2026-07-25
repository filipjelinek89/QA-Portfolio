# API Test Scenarios -- Sprint 05

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 05 -- Create Booking\
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

This document contains the API Test Scenarios for Sprint 05 of the
Restful Booker API Testing Project.

Sprint 05 focuses on validating the **Create Booking** endpoint,
including successful booking creation, request body validation, business
rule validation, negative testing, and API robustness.

------------------------------------------------------------------------

# 2. Scope

**Module:** Create Booking

**Endpoint**

``` text
POST /booking
```

Detailed test cases:

``` text
04_Test_Cases/Sprint_05/API_Test_Cases_Sprint_05_Create_Booking.md
```

Execution results:

``` text
06_Test_Execution/Sprint_05/API_Test_Execution_Sprint_05_Create_Booking.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module           Status
  ----------- ---------------- --------------
  Sprint 05   Create Booking   ✅ Completed

Objectives

-   Create a booking with valid data
-   Validate request body
-   Validate required fields
-   Validate business rules
-   Validate server-side input validation

------------------------------------------------------------------------

# 4. Scenario Summary

  ----------------------------------------------------------------------------
  Scenario ID          Title        Priority         Type         Status
  -------------------- ------------ ---------------- ------------ ------------
  TS-BOOKING-002       Verify       High             Positive     ✅ Completed
                       successful                                 
                       booking                                    
                       creation                                   

  TS-BOOKING-003       Verify       High             Negative     ✅ Completed
                       required                                   
                       field                                      
                       validation                                 

  TS-BOOKING-004       Verify empty High             Negative     ✅ Completed
                       request body                               
                       handling                                   

  TS-BOOKING-005       Verify       High             Negative     ✅ Completed
                       invalid data                               
                       type                                       
                       handling                                   

  TS-BOOKING-006       Verify       High             Negative     ✅ Completed
                       invalid date                               
                       format                                     
                       handling                                   

  TS-BOOKING-007       Verify       High             Business     ✅ Completed
                       business                      Rule         
                       rule                                       
                       validation                                 

  TS-BOOKING-008       Verify       Medium           Robustness   ✅ Completed
                       unexpected                                 
                       additional                                 
                       fields                                     
  ----------------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Test Scenarios

## TS-BOOKING-002 -- Verify successful booking creation

**Module:** Create Booking\
**Endpoint:** POST /booking\
**HTTP Method:** POST\
**Priority:** High\
**Test Type:** Positive\
**Requirement:** REQ-BOOKING-002

### Objective

Verify that the API successfully creates a booking when valid data is
submitted.

### Validation Focus

-   HTTP Status Code
-   Response body
-   Booking ID
-   Response structure
-   Response time

### Related Postman Request

``` text
POST - Create Booking with Valid Data
```

------------------------------------------------------------------------

## TS-BOOKING-003 -- Verify required field validation

### Validation Focus

-   Missing required fields
-   Server-side validation
-   Error handling

### Related Postman Request

``` text
POST - Create Booking with Missing Required Field
```

------------------------------------------------------------------------

## TS-BOOKING-004 -- Verify empty request body handling

### Validation Focus

-   Empty request body
-   Error response

### Related Postman Request

``` text
POST - Create Booking with Empty Request Body
```

------------------------------------------------------------------------

## TS-BOOKING-005 -- Verify invalid data type handling

### Validation Focus

-   Invalid data types
-   Request validation

### Related Postman Request

``` text
POST - Create Booking with Invalid Data Type
```

------------------------------------------------------------------------

## TS-BOOKING-006 -- Verify invalid date format handling

### Validation Focus

-   Invalid date format
-   Request validation

### Related Postman Request

``` text
POST - Create Booking with Invalid Date Format
```

------------------------------------------------------------------------

## TS-BOOKING-007 -- Verify business rule validation

### Validation Focus

-   Checkout before check-in
-   Negative total price

### Related Postman Requests

``` text
POST - Create Booking with Checkout Before Check-in
POST - Create Booking with Negative Total Price
```

------------------------------------------------------------------------

## TS-BOOKING-008 -- Verify unexpected additional fields

### Validation Focus

-   Unexpected fields
-   API robustness
-   Response consistency

### Related Postman Request

``` text
POST - Create Booking with Unexpected Additional Fields
```

------------------------------------------------------------------------

# 6. Sprint Summary

  Metric              Value
  ----------------- -------
  Total Scenarios         7
  Completed               7
  Completion Rate      100%

Key skills demonstrated

-   POST API testing
-   Request body validation
-   Positive testing
-   Negative testing
-   Business rule validation
-   API robustness testing
-   Bug reporting

------------------------------------------------------------------------

# 7. Revision History

  Version   Date           Description
  --------- -------------- ----------------------------------------------
  1.0       25 July 2026   Initial Sprint 05 scenario document created.

------------------------------------------------------------------------

# End of Document
