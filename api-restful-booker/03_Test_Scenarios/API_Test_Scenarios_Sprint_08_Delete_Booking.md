# API Test Scenarios -- Sprint 08

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 08 -- Delete Booking\
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

This document contains the API Test Scenarios for Sprint 08 of the
Restful Booker API Testing Project.

Sprint 08 focuses on validating the **Delete Booking** endpoint,
including successful booking deletion, authentication, authorization, deletion of existing and non-existing bookings, negative testing, error handling, and API robustness.

------------------------------------------------------------------------

# 2. Scope

**Module:** Delete Booking

**Endpoint**

``` text
DELETE /booking/{id}
```

Detailed test cases:

``` text
04_Test_Cases/Sprint_08/API_Test_Cases_Sprint_08_Delete_Booking.md
```

Execution results:

``` text
06_Test_Execution/Sprint_08/API_Test_Execution_Sprint_08_Delete_Booking.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module           Status
  ----------- ---------------- --------------
  Sprint 08 | Delete Booking | ✅ Completed

## Objectives

-   Delete a booking with valid authentication
-   Validate authentication
-   Validate deletion response
-   Validate resource removal
-   Validate deletion error handling
-   Validate API robustness

------------------------------------------------------------------------

# 4. Scenario Summary

  --------------------------------------------------------------------------------
  Scenario ID          Title            Priority         Type         Status
  -------------------- ---------------- ---------------- ------------ ------------
  TS-BOOKING-023       Verify           High             Positive     ✅ Completed
                       successful                                     
                       booking update                                 

  TS-BOOKING-024       Verify           High             Security     ✅ Completed
                       authentication                                 
                       validation                                     

  TS-BOOKING-025       Verify deletion of
                       non-existent booking  High        Negative    ✅ Completed                               

  TS-BOOKING-026       Verify invalid   High             Negative     ✅ Completed
                       data type                                      
                       handling                                       

  TS-BOOKING-027       Verify invalid   High             Negative     ✅ Completed
                       date format                                    
                       handling                                       

  TS-BOOKING-027       Verify business  High             Business     ✅ Completed
                       rule validation                   Rule         

  TS-BOOKING-027       Verify           Medium           Robustness   ✅ Completed
                       unexpected                                     
                       additional                                     
                       fields                                         
  --------------------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Test Scenarios

## TS-BOOKING-023 -- Verify successful booking deletion

**Module:** Delete Booking\
**Endpoint:** DELETE /booking/{id}\
**HTTP Method:** DELETE\
**Priority:** High\
**Test Type:** Positive\
**Requirement:** REQ-BOOKING-005

### Objective

Verify that the API successfully deletes an existing booking when valid
data and valid authentication are provided.

### Validation Focus

-   HTTP Status Code
-   Authentication
-   Response body
-   Updated booking values
-   Response time

### Related Postman Request

``` text
DELETE - Delete Booking with Valid Authentication
```

------------------------------------------------------------------------

## TS-BOOKING-024 -- Verify authentication validation

### Validation Focus

-   Missing authentication
-   Invalid authentication
-   Unauthorized access

### Related Postman Requests

``` text
DELETE - Delete Booking Without Authentication
DELETE - Delete Booking With Invalid Authentication
```

------------------------------------------------------------------------

## TS-BOOKING-025 -- Verify deletion of non-existent booking

### Validation Focus

-   Deletion of non-existent booking
-   Error handling
-   HTTP status code validation

------------------------------------------------------------------------

## TS-BOOKING-026 -- Verify repeated deletion handling

### Validation Focus

-   Repeated deletion request
-   Resource lifecycle validation

------------------------------------------------------------------------

## TS-BOOKING-027 -- Verify invalid booking ID handling

### Validation Focus

-   Invalid booking ID
-   Error handling

------------------------------------------------------------------------

## TS-BOOKING-027 -- Verify DELETE endpoint robustness

### Validation Focus

-   Repeated DELETE requests
-   API stability

------------------------------------------------------------------------

## TS-BOOKING-027 -- Verify API response consistency

### Validation Focus

-   Consistent API responses
-   API robustness
-   No HTTP 500 errors

------------------------------------------------------------------------

# 6. Sprint Summary

  Metric              Value
  ----------------- -------
  Total Scenarios         5
  Completed               7
  Completion Rate      100%

## Key skills demonstrated

-   DELETE API testing
-   Authentication testing
-   Authorization validation
-   Positive testing
-   Negative testing
-   Resource lifecycle validation
-   API robustness testing
-   Bug reporting

------------------------------------------------------------------------

## Sprint 08 Execution Outcome

  Test Cases        Result
  --------------- --------
  Executed               8
  Passed                 8
  Failed                 0
  Blocked                0
  Pass Rate           100%
  Bugs Reported          0

### Defects Identified

-   None

# 7. Revision History

  -----------------------------------------------------------------------
  Version                Date            Description
  ---------------------- --------------- --------------------------------
  1.0                    25 July 2026    Sprint 08 completed. Updated all scenario descriptions, statuses, completion metrics, execution outcome, and final results.

  
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# End of Document
