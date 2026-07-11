# API Bug Report Template

**Project:** Restful Booker API Testing Project
**Document Type:** API Defect Report Template
**Version:** 1.0
**Prepared by:** Filip Jelinek

---

# In-page Navigation

* [1. Defect Identification](#1-defect-identification)
* [2. Defect Summary](#2-defect-summary)
* [3. Test Traceability](#3-test-traceability)
* [4. API Request Details](#4-api-request-details)
* [5. Preconditions](#5-preconditions)
* [6. Test Data](#6-test-data)
* [7. Steps to Reproduce](#7-steps-to-reproduce)
* [8. Expected Result](#8-expected-result)
* [9. Actual Result](#9-actual-result)
* [10. API Response Details](#10-api-response-details)
* [11. Postman Assertion Results](#11-postman-assertion-results)
* [12. Reproducibility](#12-reproducibility)
* [13. Impact Analysis](#13-impact-analysis)
* [14. Severity and Priority Justification](#14-severity-and-priority-justification)
* [15. Evidence](#15-evidence)
* [16. Additional Investigation](#16-additional-investigation)
* [17. Environment](#17-environment)
* [18. Defect Status](#18-defect-status)
* [19. Re-test Result](#19-re-test-result)
* [20. Defect Summary Record](#20-defect-summary-record)

---

# 1. Defect Identification

| Field         | Value                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Defect ID     | `BUG-API-XXX`                                                                                                          |
| Title         | `[HTTP Method] [Endpoint] - Short description of unexpected behaviour`                                                 |
| Severity      | Critical / High / Medium / Low                                                                                         |
| Priority      | Critical / High / Medium / Low                                                                                         |
| Defect Type   | Functional / Validation / Contract / Authentication / Authorization / Data Integrity / Error Handling / HTTP Behaviour |
| Status        | Open                                                                                                                   |
| Reported By   | Filip Jelinek                                                                                                          |
| Date Reported | YYYY-MM-DD                                                                                                             |

---

# 2. Defect Summary

## Description

Provide a concise description of the observed API defect.

The description should explain:

* Which endpoint is affected
* Which HTTP method is used
* Which request condition triggers the issue
* What unexpected API behaviour occurs
* Why the behaviour is considered incorrect

**Defect Description:**

```text id="m3r6py"
[Describe the observed API behaviour.]
```

## Short Technical Summary

```text id="2xnsrt"
[METHOD] [ENDPOINT]

Request Condition:
[Describe the request variation.]

Expected:
[Short expected behaviour.]

Actual:
[Short actual behaviour.]
```

---

# 3. Test Traceability

| Traceability Level | ID / Reference                            |
| ------------------ | ----------------------------------------- |
| Requirement ID     | `REQ-XXX-XXX`                             |
| Test Scenario ID   | `TS-XXX-XXX`                              |
| Test Case ID       | `TC-XXX-XXX`                              |
| Postman Request    | `[TC ID] - [METHOD] - [Request Name]`     |
| Execution Record   | `06_Test_Execution/API_Test_Execution.md` |

## Traceability Chain

```text id="6j8nqh"
REQ-XXX-XXX
      ↓
TS-XXX-XXX
      ↓
TC-XXX-XXX
      ↓
Postman Request
      ↓
Unexpected API Behaviour
      ↓
BUG-API-XXX
```

---

# 4. API Request Details

| Field            | Value                                      |
| ---------------- | ------------------------------------------ |
| HTTP Method      | GET / POST / PUT / PATCH / DELETE          |
| Endpoint         | `/endpoint`                                |
| Full Request URL | `{{baseUrl}}/endpoint`                     |
| Authentication   | None / Cookie Token / Basic Authentication |
| Content-Type     | `application/json` / Other / Not Set       |

## Request Headers

```text id="13x7sv"
Content-Type: application/json
Cookie: token={{authToken}}
```

Remove headers that are not applicable to the defect.

## Query Parameters

| Parameter     | Value     |
| ------------- | --------- |
| `[parameter]` | `[value]` |

If no query parameters are used:

```text id="fy2z8n"
Not applicable.
```

## Path Parameters

| Parameter | Value                        |
| --------- | ---------------------------- |
| `id`      | `[booking ID or test value]` |

If no path parameters are used:

```text id="ov9rmd"
Not applicable.
```

## Request Body

```json id="2q41rp"
{
  "property": "value"
}
```

If the request does not contain a request body:

```text id="92tr6h"
Not applicable.
```

---

# 5. Preconditions

List all conditions required before reproducing the defect.

Example:

1. Restful Booker API is accessible.
2. Postman is available.
3. `Restful Booker - QA` environment is selected.
4. `baseUrl` is configured.
5. A dedicated booking has been created.
6. `bookingId` contains the generated booking ID.
7. A valid authentication token has been generated.
8. `authToken` contains the generated token.

**Defect Preconditions:**

1. `[Precondition 1]`
2. `[Precondition 2]`
3. `[Precondition 3]`

---

# 6. Test Data

Document the exact test data required to reproduce the defect.

## Input Data

| Field     | Test Value |
| --------- | ---------- |
| `[field]` | `[value]`  |

## Baseline Valid Value

```text id="rjag8x"
[Valid baseline value]
```

## Defect-Triggering Value

```text id="6lv1mc"
[Invalid, boundary, or modified value]
```

## Test Data Variation

```text id="fzp4nw"
Valid Baseline
      ↓
Change:
[Describe one changed condition]
      ↓
Defect Reproduced
```

---

# 7. Steps to Reproduce

1. Open Postman.
2. Select the `Restful Booker - QA` environment.
3. Open the `Restful Booker API Testing` collection.
4. Navigate to `[Postman folder]`.
5. Open `[Postman request name]`.
6. Verify the HTTP method is `[METHOD]`.
7. Verify the request URL is `[REQUEST URL]`.
8. Configure the required authentication.
9. Configure the request headers.
10. Add the specified query parameters, path parameters, or request body.
11. Send the API request.
12. Review the HTTP status code.
13. Review the response headers.
14. Review the response body.
15. Review the Postman assertion results.
16. Observe the unexpected API behaviour.

## Minimal Reproduction Flow

```text id="62vlyh"
Configure Request
      ↓
Apply Defect-Triggering Test Data
      ↓
Send Request
      ↓
Review Response
      ↓
Observe Defect
```

---

# 8. Expected Result

Describe the expected API behaviour.

The expected result should be based on:

* Published API documentation
* Documented API data model
* Defined project requirement
* HTTP contract
* Authentication requirement
* Authorization requirement
* Resource integrity requirement

**Expected Result:**

```text id="z59ehm"
[Describe the expected API response and behaviour.]
```

## Expected HTTP Status

```text id="fqoc22"
[Expected status code and status text]
```

## Expected Resource State

```text id="a2rl61"
[Describe the expected state of the booking or API resource after the request.]
```

---

# 9. Actual Result

Describe the actual observed API behaviour.

**Actual Result:**

```text id="w8st2k"
[Describe the actual API response and behaviour.]
```

## Actual HTTP Status

```text id="w6hnyc"
[Actual status code and status text]
```

## Actual Resource State

```text id="m9g0hf"
[Describe the actual state of the booking or API resource after the request.]
```

## Expected vs Actual

| Expected               | Actual               |
| ---------------------- | -------------------- |
| `[Expected behaviour]` | `[Actual behaviour]` |

---

# 10. API Response Details

## HTTP Status

```text id="o6ndgk"
Status Code: [code]
Status Text: [text]
```

## Response Headers

Record relevant response headers.

```text id="a4ft89"
Content-Type: [value]
Content-Length: [value]
Server: [value]
```

Only headers relevant to the defect investigation should be included.

## Response Body

```json id="zz10r5"
{
  "response": "value"
}
```

If the response is not JSON:

```text id="ocyl8m"
[Exact relevant response body]
```

## Response Time

```text id="cjnvnr"
[response time] ms
```

Response time should only be treated as defect evidence when performance behaviour is relevant to the reported issue.

---

# 11. Postman Assertion Results

## Assertion Summary

| Assertion          | Result      |
| ------------------ | ----------- |
| `[Assertion name]` | PASS / FAIL |
| `[Assertion name]` | PASS / FAIL |
| `[Assertion name]` | PASS / FAIL |

## Failed Assertion

```text id="2c3emh"
[Postman assertion failure message]
```

## Relevant Postman Test Script

```javascript id="joxzve"
pm.test("Expected API behaviour", function () {
    // Relevant assertion
});
```

## Assertion Analysis

```text id="54r6wo"
[Explain why the failed assertion represents unexpected API behaviour and not an incorrect test script.]
```

A Postman assertion failure alone does not automatically confirm an API defect.

The request configuration, expected result, and assertion logic must be verified before the defect is reported.

---

# 12. Reproducibility

| Field                 | Value                        |
| --------------------- | ---------------------------- |
| Reproducibility       | Always / Intermittent / Once |
| Reproduction Attempts | X                            |
| Defect Reproduced     | X                            |
| Reproduction Rate     | X%                           |

## Reproduction Record

| Attempt | Result                      |
| ------- | --------------------------- |
| 1       | Reproduced / Not Reproduced |
| 2       | Reproduced / Not Reproduced |
| 3       | Reproduced / Not Reproduced |

## Reproducibility Notes

```text id="sv8hjh"
[Document any variation observed between reproduction attempts.]
```

Recommended minimum for stable API validation:

```text id="3ed3la"
3 reproduction attempts
```

Where the API uses a shared public environment, environment instability should be considered during analysis.

---

# 13. Impact Analysis

## Functional Impact

```text id="eav96s"
[Describe which API functionality is affected.]
```

## Data Impact

```text id="bytxjt"
[Describe whether invalid, incorrect, or inconsistent data is created, modified, returned, or deleted.]
```

## Authentication / Authorization Impact

```text id="b5i9ob"
[Describe authentication or authorization impact, if applicable.]
```

If not applicable:

```text id="rquyia"
Not applicable.
```

## Workflow Impact

```text id="5ffhdc"
[Describe whether the defect affects CRUD operations, request chaining, E2E workflows, or dependent API operations.]
```

## API Consumer Impact

```text id="pc6dgo"
[Describe the likely impact on a client application or API consumer.]
```

---

# 14. Severity and Priority Justification

## Severity

**Selected Severity:** `[Critical / High / Medium / Low]`

**Justification:**

```text id="dbf9px"
[Explain the technical and functional impact that supports the selected severity.]
```

### Severity Classification Reference

| Severity | API Defect Impact                                                                                                                |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Critical | Authentication bypass, unauthorized destructive operation, major data integrity failure, core API unavailable                    |
| High     | Core CRUD operation fails, required validation causes significant data integrity issues, protected operation behaves incorrectly |
| Medium   | Secondary validation issue, incorrect error handling, contract inconsistency with limited workflow impact                        |
| Low      | Minor API inconsistency, low-impact metadata issue, cosmetic response issue                                                      |

## Priority

**Selected Priority:** `[Critical / High / Medium / Low]`

**Justification:**

```text id="y53shm"
[Explain why the defect should be fixed with the selected urgency.]
```

Severity and priority are evaluated independently.

---

# 15. Evidence

## Screenshot Evidence

```text id="1f7i5x"
10_Evidence/Postman/[TC-ID]_[Short_Description].png
```

## Postman Request

```text id="6bkv1b"
[TC ID] - [METHOD] - [Request Name]
```

## Collection Reference

```text id="hgz9br"
05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json
```

## Execution Record

```text id="r7ew4j"
06_Test_Execution/API_Test_Execution.md
```

## Additional Evidence

```text id="7awbgk"
[Newman report, CI/CD result, response capture, or other relevant evidence]
```

Evidence should clearly show the unexpected API behaviour.

---

# 16. Additional Investigation

## Baseline Request Verification

```text id="ufr78w"
[Document whether the valid baseline request was executed successfully.]
```

## Alternative Request Variation

```text id="fsj49r"
[Document whether a similar test variation produces the same behaviour.]
```

## Resource State Verification

```text id="rx6q3x"
[Document any GET request used to verify the resource state after the defect-triggering request.]
```

## Authentication Verification

```text id="0twn96"
[Document whether the authentication token or Basic authentication configuration was independently verified.]
```

## Environment Verification

```text id="grmbtj"
[Document whether the behaviour was reproduced after refreshing test data or recreating the resource.]
```

## Investigation Conclusion

```text id="y8qumc"
[Summarize why the observed behaviour is classified as a confirmed API defect.]
```

---

# 17. Environment

| Attribute           | Value                                  |
| ------------------- | -------------------------------------- |
| API                 | Restful Booker                         |
| Base URL            | `https://restful-booker.herokuapp.com` |
| Environment         | Public Test Environment                |
| Test Tool           | Postman                                |
| Postman Environment | Restful Booker - QA                    |
| Operating System    | Windows                                |
| Network             | Internet                               |
| API Data Format     | JSON                                   |
| Test Type           | REST API Testing                       |

## Environment Notes

Restful Booker is a shared public API test environment.

The environment may be affected by:

* Other API consumers
* Shared booking data
* Periodic data resets
* Public hosting availability

The defect should be reproduced using dedicated dynamically created booking data where applicable.

---

# 18. Defect Status

**Current Status:** `Open`

## Defect Status Workflow

```text id="5oq2vn"
Open
  ↓
Under Investigation
  ↓
Confirmed
  ↓
Fixed
  ↓
Ready for Re-test
  ↓
Closed
```

Alternative states:

```text id="wm22ex"
Rejected
Duplicate
Cannot Reproduce
Deferred
Known Limitation
```

## Status History

| Date       | Status | Notes           |
| ---------- | ------ | --------------- |
| YYYY-MM-DD | Open   | Defect reported |

---

# 19. Re-test Result

**Re-test Required:** Yes / No
**Re-test Status:** Not Started / PASS / FAIL / BLOCKED
**Re-test Date:** YYYY-MM-DD / Not applicable

## Re-test Preconditions

```text id="m8q67z"
[Document required re-test conditions.]
```

## Re-test Steps

1. Recreate the required test data.
2. Configure the original defect-triggering request.
3. Send the API request.
4. Review the HTTP response.
5. Review the response body.
6. Verify the resource state.
7. Execute relevant Postman assertions.
8. Compare the result with the original defect.

## Re-test Result

```text id="sqt7r9"
[Document the observed re-test result.]
```

## Regression Impact

```text id="0kh54z"
[List related API operations or regression test cases that should be executed.]
```

## Final Defect Status

```text id="u6y58b"
[Open / Closed / Reopened / Deferred]
```

---

# 20. Defect Summary Record

| Field           | Value         |
| --------------- | ------------- |
| Defect ID       | `BUG-API-XXX` |
| Test Case ID    | `TC-XXX-XXX`  |
| Method          | `[METHOD]`    |
| Endpoint        | `[ENDPOINT]`  |
| Severity        | `[Severity]`  |
| Priority        | `[Priority]`  |
| Status          | `[Status]`    |
| Reproducibility | `[Rate]`      |
| Re-test Status  | `[Status]`    |

## Final Summary

```text id="b4d19p"
Defect:
BUG-API-XXX

Affected Request:
[METHOD] [ENDPOINT]

Trigger:
[Request condition]

Expected:
[Expected API behaviour]

Actual:
[Actual API behaviour]

Impact:
[Primary technical or functional impact]

Status:
[Current defect status]
```

---

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Template Version:** 1.0
