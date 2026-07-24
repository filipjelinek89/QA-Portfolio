# API Test Scenarios -- Sprint 02

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 02 -- Authentication\
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

This document contains all API Test Scenarios created for Sprint 02 of
the Restful Booker API Testing Project.

Sprint 02 validates the Authentication endpoint by verifying successful
authentication, failed authentication, required fields, request data
validation, and boundary value handling.

------------------------------------------------------------------------

# 2. Scope

**Module:** Authentication

**Endpoint**

``` text
POST /auth
```

Detailed execution steps:

``` text
04_Test_Cases/Sprint_02/API_Test_Cases_Sprint_02_Authentication.md
```

Execution results:

``` text
06_Test_Execution/Sprint_02/API_Test_Execution_Sprint_02_Authentication.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module           Status
  ----------- ---------------- --------------
  Sprint 02   Authentication   ✅ Completed

Objectives

-   Validate successful authentication
-   Validate invalid credentials
-   Validate mandatory fields
-   Validate request data types
-   Validate boundary values

------------------------------------------------------------------------

# 4. Scenario Summary

  --------------------------------------------------------------------------------
  Scenario ID          Title            Priority         Type         Status
  -------------------- ---------------- ---------------- ------------ ------------
  TS-AUTH-001          Verify           Critical         Positive     ✅ Completed
                       successful                                     
                       authentication                                 
                       using valid                                    
                       credentials                                    

  TS-AUTH-002          Verify           Critical         Negative     ✅ Completed
                       authentication                                 
                       fails with                                     
                       invalid                                        
                       credentials                                    

  TS-AUTH-003          Verify required  High             Validation   ✅ Completed
                       authentication                                 
                       fields                                         

  TS-AUTH-004          Verify           High             Negative     ✅ Completed
                       authentication                                 
                       request data                                   
                       type validation                                

  TS-AUTH-005          Verify           Medium           Boundary     ✅ Completed
                       authentication                                 
                       request boundary                               
                       values                                         
  --------------------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Test Scenarios

## TS-AUTH-001 -- Verify successful authentication using valid credentials

  Field         Value
  ------------- ----------------
  Module        Authentication
  Endpoint      POST /auth
  HTTP Method   POST
  Priority      Critical
  Test Type     Positive
  Requirement   REQ-AUTH-001

### Objective

Verify that valid credentials generate an authentication token.

### Validation Focus

-   Valid username
-   Valid password
-   HTTP Status Code
-   Authentication token generated
-   Response time

### Related Postman Request

``` text
POST - Valid Credentials
```

------------------------------------------------------------------------

## TS-AUTH-002 -- Verify authentication fails with invalid credentials

  Field         Value
  ------------- ----------------
  Module        Authentication
  Endpoint      POST /auth
  HTTP Method   POST
  Priority      Critical
  Test Type     Negative
  Requirement   REQ-AUTH-002

### Objective

Verify invalid credentials are rejected.

### Validation Focus

-   Invalid username
-   Invalid password
-   Invalid username and password
-   No token returned
-   Generic error response

### Related Postman Requests

``` text
POST - Invalid Username
POST - Invalid Password
POST - Invalid Username and Password
```

------------------------------------------------------------------------

## TS-AUTH-003 -- Verify required authentication fields

  Field         Value
  ------------- ----------------
  Module        Authentication
  Endpoint      POST /auth
  HTTP Method   POST
  Priority      High
  Test Type     Validation
  Requirement   REQ-AUTH-003

### Objective

Verify required request fields are validated.

### Validation Focus

-   Missing username
-   Missing password
-   Empty request body

### Related Postman Requests

``` text
POST - Missing Username
POST - Missing Password
POST - Empty Body
```

------------------------------------------------------------------------

## TS-AUTH-004 -- Verify authentication request data type validation

  Field         Value
  ------------- ----------------
  Module        Authentication
  Endpoint      POST /auth
  HTTP Method   POST
  Priority      High
  Test Type     Negative
  Requirement   REQ-AUTH-003

### Objective

Verify the API validates request data types.

### Validation Focus

-   Number instead of string
-   Boolean instead of string
-   Array instead of string
-   Object instead of string
-   Null values

### Related Postman Requests

``` text
POST - Invalid Username Data Type
POST - Invalid Password Data Type
POST - Null Credentials
```

------------------------------------------------------------------------

## TS-AUTH-005 -- Verify authentication request boundary values

  Field         Value
  ------------- ----------------
  Module        Authentication
  Endpoint      POST /auth
  HTTP Method   POST
  Priority      Medium
  Test Type     Boundary
  Requirement   REQ-AUTH-003

### Objective

Verify boundary values are handled correctly.

### Validation Focus

-   Empty string
-   One character
-   Maximum supported length
-   Very long strings
-   Special characters
-   Unicode characters
-   Diacritic characters

### Related Postman Requests

``` text
POST - Boundary Username
POST - Boundary Password
POST - Unicode Credentials
```

------------------------------------------------------------------------

# 6. Sprint Summary

  Metric              Value
  ----------------- -------
  Total Scenarios         5
  Completed               5
  Completion Rate      100%

Key skills demonstrated

-   POST API testing
-   Authentication testing
-   Positive and negative testing
-   Input validation
-   Boundary value analysis
-   Postman scripting

------------------------------------------------------------------------

# 7. Revision History

  Version   Date           Description
  --------- -------------- -------------------------------------------------
  1.0       24 July 2026   Initial standalone Sprint 02 scenario document.

------------------------------------------------------------------------

# End of Document
