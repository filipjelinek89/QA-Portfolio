# API Test Cases -- Sprint 03 Retrieve Booking IDs

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 03 -- Retrieve Booking IDs\
**Endpoint:** `GET /booking`

------------------------------------------------------------------------

## TC-GETIDS-001 -- Retrieve all booking IDs

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking
  Method             GET
  Priority           High
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Send GET request.
2.  Review response.

### Expected Result

-   HTTP 200 OK
-   Booking IDs returned

------------------------------------------------------------------------

## TC-GETIDS-002 -- Verify booking ID field

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking
  Method             GET
  Priority           High
  Type               Contract

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Send GET request.
2.  Verify `bookingid` field.

### Expected Result

-   Each object contains `bookingid`

------------------------------------------------------------------------

## TC-GETIDS-003 -- Verify non-empty response

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Send GET request.

### Expected Result

-   Response array is not empty

------------------------------------------------------------------------

## TC-GETIDS-004 -- Verify response time

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-001
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Performance

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Send GET request.

### Expected Result

-   Response meets project threshold

------------------------------------------------------------------------

## TC-GETIDS-005 -- Validate JSON structure

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-002
  Endpoint           GET /booking
  Method             GET
  Priority           High
  Type               Contract

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Send GET request.
2.  Validate JSON.

### Expected Result

-   Valid JSON array

------------------------------------------------------------------------

## TC-GETIDS-006 -- Validate bookingid type

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-002
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Contract

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Verify type.

### Expected Result

-   bookingid is integer

------------------------------------------------------------------------

## TC-GETIDS-007 -- Validate content type

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-002
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Contract

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Check headers.

### Expected Result

-   application/json

------------------------------------------------------------------------

## TC-GETIDS-008 -- Filter by firstname

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-003
  Endpoint           GET /booking
  Method             GET
  Priority           High
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=Susan

### Test Steps

1.  Send GET with firstname.

### Expected Result

-   Matching bookings returned

------------------------------------------------------------------------

## TC-GETIDS-009 -- Firstname no match

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-003
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=Unknown

### Test Steps

1.  Use unknown firstname.

### Expected Result

-   Empty array

------------------------------------------------------------------------

## TC-GETIDS-010 -- Firstname special chars

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-003
  Endpoint           GET /booking
  Method             GET
  Priority           Low
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=@@@

### Test Steps

1.  Use special characters.

### Expected Result

-   Handled gracefully

------------------------------------------------------------------------

## TC-GETIDS-011 -- Firstname case sensitivity

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-003
  Endpoint           GET /booking
  Method             GET
  Priority           Low
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=sUsAn

### Test Steps

1.  Change letter case.

### Expected Result

-   Behaviour documented

------------------------------------------------------------------------

## TC-GETIDS-012 -- Filter by lastname

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-004
  Endpoint           GET /booking
  Method             GET
  Priority           High
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: lastname=Brown

### Test Steps

1.  Filter by lastname.

### Expected Result

-   Matching bookings

------------------------------------------------------------------------

## TC-GETIDS-013 -- Lastname no match

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-004
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: lastname=XYZ

### Test Steps

1.  Unknown lastname.

### Expected Result

-   Empty array

------------------------------------------------------------------------

## TC-GETIDS-014 -- Lastname special chars

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-004
  Endpoint           GET /booking
  Method             GET
  Priority           Low
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: lastname=###

### Test Steps

1.  Special chars.

### Expected Result

-   No server error

------------------------------------------------------------------------

## TC-GETIDS-015 -- Lastname case sensitivity

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-004
  Endpoint           GET /booking
  Method             GET
  Priority           Low
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: lastname=bRoWn

### Test Steps

1.  Mixed case.

### Expected Result

-   Behaviour documented

------------------------------------------------------------------------

## TC-GETIDS-016 -- Filter by checkin

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-005
  Endpoint           GET /booking
  Method             GET
  Priority           High
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: checkin=2018-01-01

### Test Steps

1.  Filter by checkin.

### Expected Result

-   Matching results

------------------------------------------------------------------------

## TC-GETIDS-017 -- Filter by checkout

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-005
  Endpoint           GET /booking
  Method             GET
  Priority           High
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: checkout=2019-01-01

### Test Steps

1.  Filter by checkout.

### Expected Result

-   Matching results

------------------------------------------------------------------------

## TC-GETIDS-018 -- Filter by date range

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-005
  Endpoint           GET /booking
  Method             GET
  Priority           High
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: checkin=2018-01-01&checkout=2019-01-01

### Test Steps

1.  Use both dates.

### Expected Result

-   Matching results

------------------------------------------------------------------------

## TC-GETIDS-019 -- Invalid date

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-005
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: checkin=abc

### Test Steps

1.  Use invalid date.

### Expected Result

-   Graceful handling

------------------------------------------------------------------------

## TC-GETIDS-020 -- Future date

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-005
  Endpoint           GET /booking
  Method             GET
  Priority           Low
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: checkin=2099-01-01

### Test Steps

1.  Use future date.

### Expected Result

-   Valid response

------------------------------------------------------------------------

## TC-GETIDS-021 -- Firstname + lastname

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-006
  Endpoint           GET /booking
  Method             GET
  Priority           High
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=Susan&lastname=Brown

### Test Steps

1.  Use two filters.

### Expected Result

-   Matching bookings

------------------------------------------------------------------------

## TC-GETIDS-022 -- Firstname + dates

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-006
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=Susan&checkin=2018-01-01

### Test Steps

1.  Combine filters.

### Expected Result

-   Matching results

------------------------------------------------------------------------

## TC-GETIDS-023 -- All filters

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-006
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Positive

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=Susan&lastname=Brown&checkin=2018-01-01

### Test Steps

1.  Apply all filters.

### Expected Result

-   Valid response

------------------------------------------------------------------------

## TC-GETIDS-024 -- No matching combination

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-006
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: mixed

### Test Steps

1.  Impossible combination.

### Expected Result

-   Empty array

------------------------------------------------------------------------

## TC-GETIDS-025 -- Unknown parameter

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-007
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Negative

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: foo=bar

### Test Steps

1.  Add invalid parameter.

### Expected Result

-   API handles request

------------------------------------------------------------------------

## TC-GETIDS-026 -- SQL-like parameter

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-007
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Security

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=' OR 1=1

### Test Steps

1.  SQL-like input.

### Expected Result

-   No server error

------------------------------------------------------------------------

## TC-GETIDS-027 -- XSS-like parameter

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-007
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Security

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=
```{=html}
<script>
```
### Test Steps

1.  XSS payload.

### Expected Result

-   No execution

------------------------------------------------------------------------

## TC-GETIDS-028 -- Empty parameter

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-007
  Endpoint           GET /booking
  Method             GET
  Priority           Low
  Type               Boundary

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: firstname=

### Test Steps

1.  Empty value.

### Expected Result

-   Graceful handling

------------------------------------------------------------------------

## TC-GETIDS-029 -- Response under threshold

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-008
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Performance

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Measure response.

### Expected Result

-   Within threshold

------------------------------------------------------------------------

## TC-GETIDS-030 -- Repeated requests

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-008
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Performance

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Send multiple requests.

### Expected Result

-   Stable responses

------------------------------------------------------------------------

## TC-GETIDS-031 -- Status consistency

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-008
  Endpoint           GET /booking
  Method             GET
  Priority           Medium
  Type               Reliability

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Repeat request.

### Expected Result

-   Always HTTP 200

------------------------------------------------------------------------

## TC-GETIDS-032 -- Header validation

  Field              Value
  ------------------ ----------------
  Related Scenario   TS-BOOKING-008
  Endpoint           GET /booking
  Method             GET
  Priority           Low
  Type               Contract

### Preconditions

-   Restful Booker API is available.
-   Postman environment is configured.

### Test Data

Query Parameters: None

### Test Steps

1.  Check headers.

### Expected Result

-   Required headers present

------------------------------------------------------------------------
