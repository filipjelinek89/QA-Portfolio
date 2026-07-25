# API Test Execution -- Sprint 09 End-to-End Workflow

**Project:** Restful Booker API Testing Project  
**Sprint:** Sprint 09 -- End-to-End Workflow  
**Document Type:** API Test Execution  
**Version:** 1.1  
**Status:** Completed

------------------------------------------------------------------------

# Execution Summary

| Metric | Value |
|--------|------:|
| Planned Test Cases | 5 |
| Executed | 5 |
| Passed | 5 |
| Failed | 0 |
| Blocked | 0 |
| Not Executed | 0 |

------------------------------------------------------------------------

# API End-to-End Workflow Test Execution

## TC-E2E-001 – Restful Booker Complete API Workflow

| Field | Value |
|------------------|-------------------------|
| Related Scenario | TS-E2E-001 |
| Test Suite | Complete API Workflow |
| API | Restful Booker Demo API |
| Execution Date | 2026-07-25 |
| Tester | Filip Jelinek |
| Environment | Restful Booker Demo API |
| Collection | Restful Booker API Testing |
| Status | ✅ PASSED |

---

## Test Objective

Verify that the complete Restful Booker API workflow functions correctly from authentication through booking deletion while maintaining data integrity and API stability.

---

## Executed Requests

| Step | Endpoint | Method | Status |
|------|----------|--------|--------|
| 1 | /ping | GET | ✅ PASS |
| 2 | /auth | POST | ✅ PASS |
| 3 | /booking | POST | ✅ PASS |
| 4 | /booking/{id} | GET | ✅ PASS |
| 5 | /booking/{id} | PUT | ✅ PASS |
| 6 | /booking/{id} | PATCH | ✅ PASS |
| 7 | /booking/{id} | DELETE | ✅ PASS |
| 8 | /booking/{id} | GET | ✅ PASS (404 Not Found) |

---

## Expected Result

The complete API workflow should execute successfully.

Expected behaviour:

- Health Check endpoint responds successfully.
- Authentication token is generated.
- New booking is created.
- Booking details are retrieved successfully.
- Booking is fully updated using PUT.
- Booking is partially updated using PATCH.
- Booking is deleted successfully.
- Deleted booking returns HTTP 404 Not Found.
- No unexpected server errors occur.
- All response validation assertions pass successfully.
- API remains stable throughout the workflow.

---

## Actual Result

The complete API workflow executed successfully without interruptions.

Execution Summary:

- Requests Executed: **8**
- Requests Passed: **8**
- Requests Failed: **0**
- Total Assertions: **48**
- Assertions Passed: **48**
- Assertions Failed: **0**
- Overall Result: **PASS**

Each endpoint returned the expected HTTP status code and response body according to the API specification. Authentication was successful, booking creation and retrieval worked correctly, full and partial updates modified the expected data, deletion completed successfully, and the final verification confirmed that the deleted booking no longer existed by returning **HTTP 404 Not Found**. No unexpected API behaviour or server-side errors were observed during execution.

---

## Defect

```text
None
```

---

## Evidence

```text
10_Test_Evidence/
└── Sprint_09_End_to_End/
    ├── 01_GET_Ping.png
    ├── 02_POST_Auth.png
    ├── 03_POST_Create_Booking.png
    ├── 04_GET_Booking.png
    ├── 05_PUT_Update_Booking.png
    ├── 06_PATCH_Partial_Update.png
    ├── 07_DELETE_Booking.png
    ├── 08_GET_Deleted_Booking.png
    └── 09_Run_Result.png  
```

---

## Execution Conclusion

The Restful Booker API successfully completed the full CRUD lifecycle and authentication workflow. All functional, response validation, and API stability checks passed successfully. The application demonstrated consistent behaviour across all tested endpoints, confirming that the API is suitable for standard CRUD operations and meets the defined acceptance criteria for this end-to-end workflow.

------------------------------------------------------------------------

# Planned Test Cases

TC-WORKFLOW-041 through TC-WORKFLOW-045

All planned test cases were executed successfully during Sprint 09.

------------------------------------------------------------------------

# Defect Summary

| Severity | Count |
|----------|------:|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |

------------------------------------------------------------------------

# Sprint Summary

**Sprint Status:** ✅ Completed

## Overall Result

- Planned Test Cases: **5**
- Executed: **5**
- Passed: **5**
- Failed: **0**
- Blocked: **0**
- Pass Rate: **100%**

------------------------------------------------------------------------

# End of Document
