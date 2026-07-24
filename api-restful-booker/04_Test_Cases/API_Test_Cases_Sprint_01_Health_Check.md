# API Test Cases -- Sprint 01

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 01 -- Health Check\
**Document Type:** API Test Cases\
**Version:** 1.0\
**Prepared by:** Filip Jelinek\
**Status:** Completed

------------------------------------------------------------------------

# In-page Navigation

1.  Purpose
2.  Scope
3.  Sprint Overview
4.  Test Case Summary
5.  Test Cases
6.  Sprint Summary
7.  Revision History

------------------------------------------------------------------------

# 1. Purpose

This document contains the detailed API Test Cases executed during
Sprint 01.

Sprint 01 validates the Health Check endpoint (`GET /ping`) and verifies
API availability, response contract, and handling of unsupported HTTP
methods.

------------------------------------------------------------------------

# 2. Scope

**Endpoint**

``` text
GET /ping
```

Related documents:

``` text
03_Test_Scenarios/Sprint_01/API_Test_Scenarios_Sprint_01_Health_Check.md
06_Test_Execution/Sprint_01/API_Test_Execution_Sprint_01_Health_Check.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module         Status
  ----------- -------------- --------------
  Sprint 01   Health Check   ✅ Completed

------------------------------------------------------------------------

# 4. Test Case Summary

  Test Case ID   Scenario                       Priority   Status
  -------------- ------------------------------ ---------- -----------
  TC-PING-001    Successful Health Check        High       ✅ Passed
  TC-PING-002    Response Contract Validation   High       ✅ Passed
  TC-PING-003    Unsupported HTTP Methods       Medium     ✅ Passed

------------------------------------------------------------------------

# 5. Test Cases

## TC-PING-001 -- Verify successful Health Check request

  Field              Value
  ------------------ -------------
  Related Scenario   TS-PING-001
  Endpoint           GET /ping
  Method             GET
  Priority           High
  Type               Positive

### Preconditions

-   API is available.

### Test Data

None.

### Test Steps

1.  Send a GET request to `/ping`.
2.  Observe the response.

### Expected Result

-   HTTP 201 response.
-   Response body contains `Created`.
-   Endpoint responds successfully.

------------------------------------------------------------------------

## TC-PING-002 -- Verify Health Check response contract

  Field              Value
  ------------------ -------------
  Related Scenario   TS-PING-002
  Endpoint           GET /ping
  Method             GET
  Priority           High
  Type               Contract

### Test Steps

1.  Send GET request.
2.  Verify response headers.
3.  Verify response format.

### Expected Result

-   Expected Content-Type.
-   Response format matches API contract.
-   Response structure is valid.

------------------------------------------------------------------------

## TC-PING-003 -- Verify unsupported HTTP methods

  Field              Value
  ------------------ -----------------------------
  Related Scenario   TS-PING-003
  Endpoint           GET /ping
  Method             POST / PUT / PATCH / DELETE
  Priority           Medium
  Type               Negative

### Test Steps

1.  Send POST request.
2.  Send PUT request.
3.  Send PATCH request.
4.  Send DELETE request.

### Expected Result

-   Unsupported methods are rejected.
-   Appropriate error status is returned.

------------------------------------------------------------------------

# 6. Sprint Summary

  Metric               Value
  ------------------ -------
  Total Test Cases         3
  Passed                   3
  Failed                   0
  Pass Rate             100%

------------------------------------------------------------------------

# 7. Revision History

  -----------------------------------------------------------------------
  Version                  Date           Description
  ------------------------ -------------- -------------------------------
  1.0                      24 July 2026   Initial standalone Sprint 01
                                          test case document.

  -----------------------------------------------------------------------

# End of Document
