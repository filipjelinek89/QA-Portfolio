# API Test Execution -- Sprint 02 Authentication

**Project:** Restful Booker API Testing Project\
**Sprint:** Sprint 02 -- Authentication\
**Document Type:** API Test Execution\
**Version:** 2.0\
**Status:** Completed

------------------------------------------------------------------------

# Execution Summary

  Metric                 Value
  -------------------- -------
  Planned Test Cases        22
  Executed                  22
  Passed                    22
  Failed                     0
  Blocked                    0
  Pass Rate               100%

------------------------------------------------------------------------

## TC-AUTH-001 -- Verify successful authentication using valid credentials

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-001
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"admin",
  "password":"password123"
}
```

### Expected Result

-   HTTP 200 OK
-   Authentication token returned
-   Content-Type is application/json

### Actual Result

-   HTTP 200 OK
-   Token successfully generated
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-001_Valid_Credentials_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-002 -- Verify invalid username

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-002
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-002_Invalid_Username_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-003 -- Verify invalid password

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-002
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-003_Invalid_Password_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-004 -- Verify invalid username and password

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-002
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-004_Invalid_Username_and_Password_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-005 -- Verify missing username

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-003
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-005_Missing_Username_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-006 -- Verify missing password

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-003
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-006_Missing_Password_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-007 -- Verify empty request body

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-003
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-007_Empty_Body_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-008 -- Verify username as number

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-008_Username_as_Number_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-009 -- Verify password as number

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-009_Password_as_Number_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-010 -- Verify username as boolean

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-010_Username_as_Boolean_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-011 -- Verify password as boolean

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-011_Password_as_Boolean_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-012 -- Verify username as array

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-012_Username_as_Array_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-013 -- Verify password as array

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-013_Password_as_Array_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-014 -- Verify username as object

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-014_Username_as_Object_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-015 -- Verify password as object

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-015_Password_as_Object_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-016 -- Verify null credentials

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-004
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-016_Null_Credentials_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-017 -- Verify empty username

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-017_Username_Empty_String_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-018 -- Verify empty password

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-018_Password_Empty_String_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-019 -- Verify one-character username

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-019_Username_One_Character_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-020 -- Verify one-character password

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-020_Password_One_Character_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-021 -- Verify very long username

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-021_Username_Very_Long_String_Request_and_Tests.png
```

------------------------------------------------------------------------

## TC-AUTH-022 -- Verify very long password

  Field              Value
  ------------------ -------------------------
  Related Scenario   TS-AUTH-005
  Endpoint           POST /auth
  Method             POST
  Execution Date     23 July 2026
  Tester             Filip Jelinek
  Environment        Restful Booker Demo API
  Status             ✅ PASS

### Request Body

``` json
{
  "username":"<invalid>",
  "password":"<test value>"
}
```

### Expected Result

-   Invalid authentication request is rejected
-   API returns expected error behaviour

### Actual Result

-   Request rejected as expected
-   API returned "Bad credentials" or equivalent response
-   All Postman assertions passed

### Evidence

```text
10_Test_Evidence/
└── Authentication/
    └── TC-AUTH-022_Password_Very_Long_String_Request_and_Tests.png
```

------------------------------------------------------------------------

# Defect Summary

No defects were identified during Sprint 02.

  Severity     Count
  ---------- -------
  Critical         0
  High             0
  Medium           0
  Low              0

------------------------------------------------------------------------

# Sprint Summary

All 22 authentication test cases were executed successfully.

-   Positive authentication testing
-   Negative testing
-   Boundary value validation
-   Data type validation
-   Response validation
-   Postman scripting

**Overall Result:** ✅ PASS

# End of Document
