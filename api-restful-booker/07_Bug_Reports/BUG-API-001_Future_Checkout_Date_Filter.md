# BUG-API-001 -- Future Checkout Date Filter

## 1. Defect Identification

  -----------------------------------------------------------------------
  Field                               Value
  ----------------------------------- -----------------------------------
  Defect ID                           BUG-API-001

  Title                               GET /booking - Future checkout date
                                      returns unexpected booking results

  Severity                            Medium

  Priority                            Medium

  Defect Type                         Functional / Validation

  Status                              Open

  Reported By                         Filip Jelinek

  Date Reported                       2026-07-24
  -----------------------------------------------------------------------

## 2. Defect Summary

During execution of TC-GETIDS-021, the request:

GET /booking?checkout=2100-01-01

returned HTTP 200 OK and approximately 566 booking IDs. The expected
result was an empty JSON array because no bookings should exist with a
checkout date in the year 2100.

## 3. Test Traceability

-   Requirement: REQ-BOOKING-005
-   Test Scenario: TS-BOOKING-005
-   Test Case: TC-GETIDS-021

## 4. API Request Details

Method: GET

Endpoint: {{baseUrl}}/booking?checkout=2100-01-01

Authentication: None

## 5. Preconditions

1.  Restful Booker API available.
2.  Postman environment configured.
3.  Base URL configured.

## 6. Test Data

checkout = 2100-01-01

## 7. Steps to Reproduce

1.  Open Postman.
2.  Execute GET /booking?checkout=2100-01-01.
3.  Observe the response.

## 8. Expected Result

HTTP 200 OK with an empty JSON array.

## 9. Actual Result

HTTP 200 OK with approximately 566 booking IDs.

## 10. API Response Details

Status: 200 OK

Response Time: \~2.8 s

Response: JSON array

## 11. Postman Assertion Results

PASS: - Status Code - Content-Type - Response Time - Valid JSON -
Response is Array - JSON Schema

FAIL: - Response is Empty

Assertion: AssertionError: expected 566 to deeply equal +0

## 12. Reproducibility

Always (100%)

## 13. Impact Analysis

Future checkout filtering appears to return unexpected results, which
may mislead API consumers.

## 14. Severity / Priority

Severity: Medium

Priority: Medium

## 15. Evidence

10_Test_Evidence/ └── Retrieve_Booking_IDs/ └──
TC-GETIDS-021_Future_Checkout_Date_Filter_Request_and_Tests.png

## 16. Additional Investigation

Future check-in filtering returned an empty array while future checkout
filtering returned hundreds of records, indicating inconsistent
filtering behaviour.

## 17. Environment

-   API: Restful Booker
-   Tool: Postman
-   Environment: Public Test Environment
-   OS: Windows

## 18. Status

Open

## 19. Re-test

Required: Yes

Status: Not Started

## 20. Summary

Expected: Empty JSON array.

Actual: 566 booking IDs returned.

Status: Open.
