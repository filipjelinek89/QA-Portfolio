# API Test Scenarios -- Sprint 01

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 01 -- Health Check\
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

This document contains all API Test Scenarios created for Sprint 01 of
the Restful Booker API Testing Project.

Sprint 01 validates the API Health Check endpoint and confirms the
service is available, returns the expected response, and correctly
handles unsupported HTTP methods.

------------------------------------------------------------------------

# 2. Scope

Module: Health Check

Endpoint:

``` text
GET /ping
```

The detailed execution steps are maintained in:

``` text
04_Test_Cases/Sprint_01/API_Test_Cases_Sprint_01_Health_Check.md
```

Execution results are maintained in:

``` text
06_Test_Execution/Sprint_01/API_Test_Execution_Sprint_01_Health_Check.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module         Status
  ----------- -------------- --------------
  Sprint 01   Health Check   ✅ Completed

Objectives:

-   Verify API availability
-   Validate response contract
-   Verify unsupported HTTP methods are rejected

------------------------------------------------------------------------

# 4. Scenario Summary

  ---------------------------------------------------------------------------
  Scenario ID          Title         Priority         Type       Status
  -------------------- ------------- ---------------- ---------- ------------
  TS-PING-001          Verify        High             Positive   ✅ Completed
                       successful                                
                       Health Check                              
                       request                                   

  TS-PING-002          Verify Health High             Contract   ✅ Completed
                       Check                                     
                       response                                  
                       contract                                  

  TS-PING-003          Verify        Medium           Negative   ✅ Completed
                       unsupported                               
                       HTTP methods                              
                       are rejected                              
  ---------------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Test Scenarios

## TS-PING-001 -- Verify successful Health Check request

  Field         Value
  ------------- --------------
  Module        Health Check
  Endpoint      GET /ping
  HTTP Method   GET
  Priority      High
  Test Type     Positive
  Requirement   REQ-PING-001

### Objective

Verify that the Health Check endpoint is available and returns a
successful response.

### Validation Focus

-   HTTP Status Code
-   Response Body
-   Content-Type
-   Response Time

### Related Postman Request

``` text
GET - Health Check
```

------------------------------------------------------------------------

## TS-PING-002 -- Verify Health Check response contract

  Field         Value
  ------------- --------------
  Module        Health Check
  Endpoint      GET /ping
  HTTP Method   GET
  Priority      High
  Test Type     Contract
  Requirement   REQ-PING-001

### Objective

Verify that the response matches the documented API contract.

### Validation Focus

-   Response body
-   Response format
-   Content-Type
-   Headers

### Related Postman Request

``` text
GET - Health Check
```

------------------------------------------------------------------------

## TS-PING-003 -- Verify unsupported HTTP methods are rejected

  Field         Value
  ------------- -----------------------------
  Module        Health Check
  Endpoint      GET /ping
  HTTP Method   POST / PUT / PATCH / DELETE
  Priority      Medium
  Test Type     Negative
  Requirement   REQ-PING-002

### Objective

Verify that unsupported HTTP methods are rejected by the API.

### Validation Focus

-   POST request
-   PUT request
-   PATCH request
-   DELETE request
-   Error response

### Related Postman Requests

``` text
POST - Health Check

PUT - Health Check

PATCH - Health Check

DELETE - Health Check
```

------------------------------------------------------------------------

# 6. Sprint Summary

  Metric              Value
  ----------------- -------
  Total Scenarios         3
  Completed               3
  Completion Rate      100%

Key skills demonstrated:

-   GET API testing
-   API availability validation
-   Contract verification
-   HTTP method validation
-   Response header validation
-   Performance verification

------------------------------------------------------------------------

# 7. Revision History

  Version   Date           Description
  --------- -------------- ------------------------------------------------
  1.0       24 July 2026   Initial Sprint 01 standalone document created.

------------------------------------------------------------------------

# End of Document
