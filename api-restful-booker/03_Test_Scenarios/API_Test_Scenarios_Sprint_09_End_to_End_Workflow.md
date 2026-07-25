# API Test Scenarios -- Sprint 09

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 09 -- End-to-End Workflow\
**Document Type:** API Test Scenarios\
**Version:** 1.1\
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

This document contains the API Test Scenarios for Sprint 09 of the
Restful Booker API Testing Project.

Sprint 09 focuses on validating the **End-to-End Workflow** endpoint,
including successful booking deletion, authentication, authorization, deletion of existing and non-existing bookings, negative testing, error handling, and API robustness.

------------------------------------------------------------------------

# 2. Scope

**Module:** End-to-End Workflow

**Endpoint**

``` text
Multiple API Endpoints
```

Detailed test cases:

``` text
04_Test_Cases/Sprint_09/API_Test_Cases_Sprint_09_End_to_End_Workflow.md
```

Execution results:

``` text
06_Test_Execution/Sprint_09/API_Test_Execution_Sprint_09_End_to_End_Workflow.md
```

------------------------------------------------------------------------

# 3. Sprint Overview

  Sprint      Module           Status
  ----------- ---------------- --------------
  Sprint 09 | End-to-End Workflow | ✅ Completed

## Objectives

- Execute complete booking lifecycle
- Validate API integration
- Validate authentication flow
- Validate data consistency
- Validate resource lifecycle
- Validate end-to-end workflow
- Execute Collection Runner successfully


------------------------------------------------------------------------

# 4. Scenario Summary

  --------------------------------------------------------------------------------
  Scenario ID          Title                          Priority    Type        Status
  -------------------- ------------------------------ ----------- ----------- ------------
  TS-WORKFLOW-001      Verify complete booking        High        Positive    ✅ Completed
                       lifecycle

  TS-WORKFLOW-002      Verify workflow authentication High        Security    ✅ Completed

  TS-WORKFLOW-003      Verify deleted booking         High        Negative    ✅ Completed
                       cannot be retrieved

  TS-WORKFLOW-004      Verify workflow data           High        Integration ✅ Completed
                       consistency

  TS-WORKFLOW-005      Verify repeated workflow       Medium      Robustness  ✅ Completed
                       execution
  --------------------------------------------------------------------------------

------------------------------------------------------------------------

# 5. Test Scenarios

## TS-WORKFLOW-001 -- Verify complete booking lifecycle

**Module:** End-to-End Workflow\
**Endpoint:** Multiple API Endpoints\
**HTTP Method:** Multiple\
**Priority:** High\
**Test Type:** Positive\
**Requirement:** REQ-WORKFLOW-001

### Objective

Verify that the complete booking lifecycle executes successfully from authentication through booking deletion.

### Validation Focus

- Authentication
- CRUD workflow
- Data consistency
- Resource lifecycle
- Response validation

### Related Postman Request

``` text
End-to-End Booking Workflow
```

------------------------------------------------------------------------

## TS-WORKFLOW-002 -- Verify workflow authentication

### Validation Focus

- Missing authentication
- Invalid authentication
- Authorization

------------------------------------------------------------------------

## TS-WORKFLOW-003 -- Verify deleted booking cannot be retrieved

### Validation Focus

- Resource deletion
- HTTP status validation
- Resource lifecycle

------------------------------------------------------------------------

## TS-WORKFLOW-004 -- Verify workflow data consistency

### Validation Focus

- Data integrity
- Create/Update consistency
- Retrieval validation

------------------------------------------------------------------------

## TS-WORKFLOW-005 -- Verify repeated workflow execution

### Validation Focus

- Multiple executions
- API stability
- Workflow robustness

------------------------------------------------------------------------

# 6. Sprint Summary

  Metric              Value
  ----------------- -------
  Total Scenarios         5
  Completed               5
  Completion Rate        100%

## Key skills demonstrated

- End-to-End API testing
- API integration testing
- Authentication testing
- CRUD lifecycle validation
- Data consistency validation
- API robustness testing
- Bug reporting

------------------------------------------------------------------------

## Sprint 09 Execution Outcome

  Test Cases        Result
  --------------- --------
  Executed               8
  Passed                 8
  Failed                 0
  Blocked                0
  Pass Rate             100%
  Bugs Reported          0

### Defects Identified

- None

# 7. Revision History

  -----------------------------------------------------------------------
  Version                Date            Description
  ---------------------- --------------- --------------------------------
  1.0                    25 July 2026    Sprint 09 completed and execution results updated.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# End of Document

