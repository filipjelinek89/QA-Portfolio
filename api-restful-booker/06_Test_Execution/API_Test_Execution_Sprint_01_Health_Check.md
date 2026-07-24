# API Test Execution -- Sprint 01

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 01 -- Health Check\
**Document Type:** API Test Execution\
**Version:** 1.0\
**Prepared by:** Filip Jelinek\
**Status:** Completed

------------------------------------------------------------------------

# In-page Navigation

1.  Purpose
2.  Scope
3.  Execution Environment
4.  Execution Summary
5.  Test Execution Details
6.  Defect Summary
7.  Sprint Summary
8.  Revision History

------------------------------------------------------------------------

# 1. Purpose

This document records the execution results for Sprint 01 of the Restful
Booker API Testing Project.

Sprint 01 validates the Health Check endpoint (`GET /ping`) and confirms
that the API is available and behaves as expected.

------------------------------------------------------------------------

# 2. Scope

**Endpoint**

``` text
GET /ping
```

Related documents:

``` text
03_Test_Scenarios/Sprint_01/API_Test_Scenarios_Sprint_01_Health_Check.md
04_Test_Cases/Sprint_01/API_Test_Cases_Sprint_01_Health_Check.md
```

------------------------------------------------------------------------

# 3. Execution Environment

  Item             Value
  ---------------- -------------------------
  Tester           Filip Jelinek
  Tool             Postman
  Environment      Restful Booker Demo API
  Sprint           Sprint 01
  Module           Health Check
  Execution Date   19 July 2026

------------------------------------------------------------------------

# 4. Execution Summary

  Metric                 Value
  -------------------- -------
  Planned Test Cases         3
  Executed                   3
  Passed                     3
  Failed                     0
  Blocked                    0
  Pass Rate               100%

------------------------------------------------------------------------

# 5. Test Execution Details

## TC-PING-001 -- Verify successful Health Check request

**Execution Date:** 19 July 2026

**Expected Result**

-   HTTP Status Code = 201 Created
-   Response Body = Created
-   Content-Type contains `text/plain`
-   Response time within project threshold
-   All Postman assertions pass

**Actual Result**

-   HTTP Status Code = 201 Created
-   Response Body = Created
-   Content-Type = text/plain
-   Response time within configured threshold
-   All Postman assertions passed

**Status**

✅ PASS

**Evidence**

``` text
10_Test_Evidence/
└── Health_Check/
    └── TC-PING-001_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-PING-002 -- Verify Health Check response contract

**Execution Date:** 19 July 2026

**Expected Result**

-   Status Code = 201
-   Response matches API contract
-   Content-Type = text/plain

**Actual Result**

-   Status Code = 201
-   Response Body = Created
-   Contract verified successfully

**Status**

✅ PASS

**Evidence**

``` text
10_Test_Evidence/
└── Health_Check/
    └── TC-PING-002_Response_Contract.png
```

------------------------------------------------------------------------

## TC-PING-003 -- Verify unsupported HTTP methods

**Execution Date:** 19 July 2026

**Expected Result**

Unsupported HTTP methods should be rejected.

**Actual Result**

  Method   Result
  -------- ---------------
  POST     404 Not Found
  PUT      404 Not Found
  PATCH    404 Not Found
  DELETE   404 Not Found

**Status**

✅ PASS

**Evidence**

``` text
10_Test_Evidence/
└── Health_Check/
    ├── TC-PING-003_DELETE_Not_Found.png
    └── TC-PING-003_POST_Not_Found.png
```

------------------------------------------------------------------------

# 6. Defect Summary

No defects were identified during Sprint 01.

  Severity     Count
  ---------- -------
  Critical         0
  High             0
  Medium           0
  Low              0

------------------------------------------------------------------------

# 7. Sprint Summary

  Metric                 Value
  ------------------ ---------
  Total Test Cases           3
  Passed                     3
  Failed                     0
  Overall Result       ✅ PASS

------------------------------------------------------------------------

# 8. Revision History

  Version   Date           Description
  --------- -------------- ------------------------------------------------
  1.0       24 July 2026   Initial standalone Sprint 01 execution report.

# End of Document
