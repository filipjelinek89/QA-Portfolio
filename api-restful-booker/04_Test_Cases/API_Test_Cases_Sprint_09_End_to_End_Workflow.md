# API Test Cases -- Sprint 09 End-to-End Workflow

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 09 -- End-to-End Workflow\
**Endpoint:** `Complete Booking Lifecycle`

------------------------------------------------------------------------

## TC-WORKFLOW-041 -- Complete Booking Lifecycle

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-WORKFLOW-001
  Endpoint           Multiple Endpoints
  Method             CRUD Workflow
  Priority           High
  Type               Positive

### Test Data

`Valid authentication and valid booking data`

### Expected Result

- Complete workflow executes successfully.
- Booking is created, retrieved, updated, partially updated and deleted.
- Deleted booking cannot be retrieved (HTTP 404 Not Found).

------------------------------------------------------------------------

## TC-WORKFLOW-042 -- Workflow Without Authentication

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-WORKFLOW-002
  Endpoint           Multiple Endpoints
  Method             CRUD Workflow
  Priority           High
  Type               Security

### Test Data

`Workflow executed without authentication`

### Expected Result

- Protected operations are rejected.
- Appropriate HTTP authentication errors are returned.

------------------------------------------------------------------------

## TC-WORKFLOW-043 -- Retrieve Deleted Booking

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-WORKFLOW-003
  Endpoint           GET /booking/{id}
  Method             GET
  Priority           High
  Type               Negative

### Test Data

`Previously deleted booking ID`

### Expected Result

- Deleted booking cannot be retrieved (HTTP 404 Not Found).
- HTTP 404 Not Found is returned.

------------------------------------------------------------------------

## TC-WORKFLOW-044 -- Validate Workflow Data Consistency

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-WORKFLOW-004
  Endpoint           Multiple Endpoints
  Method             CRUD Workflow
  Priority           High
  Type               Validation

### Test Data

`Booking updated during workflow`

### Expected Result

- Data remains consistent throughout the workflow.
- Updated values are correctly returned by the API.

------------------------------------------------------------------------

## TC-WORKFLOW-045 -- Execute Multiple Complete Workflows

  Field              Value
  ------------------ -------------------
  Related Scenario   TS-WORKFLOW-005
  Endpoint           Multiple Endpoints
  Method             CRUD Workflow
  Priority           Medium
  Type               Robustness

### Test Data

`Multiple valid workflow executions`

### Expected Result

- Multiple workflows execute successfully.
- No unexpected server errors occur.
- API remains stable.

------------------------------------------------------------------------

# Sprint Summary

  Metric                  Value
  --------------------- -------
  Planned Test Cases          5
  Executed Test Cases         5
  Passed                      5
  Failed                      0
  Blocked                     0
  Pass Rate                100%
  Bugs Reported               0

------------------------------------------------------------------------

# End of Document
