# JSON Schema Validation Template

**Project:** Restful Booker API Testing Project
**Document Type:** JSON Schema Validation Template
**Version:** 1.0
**Prepared by:** Filip Jelinek
**Validation Tool:** Postman
**Schema Standard:** JSON Schema
**Status:** Template

---

# In-page Navigation

* [1. Schema Identification](#1-schema-identification)
* [2. Purpose](#2-purpose)
* [3. API Response Under Validation](#3-api-response-under-validation)
* [4. Test Traceability](#4-test-traceability)
* [5. Expected Response Contract](#5-expected-response-contract)
* [6. JSON Schema Definition](#6-json-schema-definition)
* [7. Root-Level Validation](#7-root-level-validation)
* [8. Required Property Validation](#8-required-property-validation)
* [9. Data Type Validation](#9-data-type-validation)
* [10. Nested Object Validation](#10-nested-object-validation)
* [11. Array Validation](#11-array-validation)
* [12. Format Validation](#12-format-validation)
* [13. Additional Property Validation](#13-additional-property-validation)
* [14. Postman Schema Validation](#14-postman-schema-validation)
* [15. Positive Schema Validation](#15-positive-schema-validation)
* [16. Negative Schema Validation](#16-negative-schema-validation)
* [17. Validation Result](#17-validation-result)
* [18. Schema Deviation Analysis](#18-schema-deviation-analysis)
* [19. Evidence](#19-evidence)
* [20. Schema Maintenance](#20-schema-maintenance)
* [21. Schema Summary](#21-schema-summary)

---

# 1. Schema Identification

| Field          | Value                                 |
| -------------- | ------------------------------------- |
| Schema ID      | `SCHEMA-XXX-001`                      |
| Schema Name    | `[Schema Name]`                       |
| API Resource   | `[API Resource]`                      |
| HTTP Method    | `[GET / POST / PUT / PATCH / DELETE]` |
| Endpoint       | `[Endpoint]`                          |
| Response Type  | Object / Array                        |
| Schema Version | 1.0                                   |
| Status         | Draft / Active / Deprecated           |
| Prepared By    | Filip Jelinek                         |

## Schema Naming Convention

Schema identifiers use the following format:

```text
SCHEMA-[FUNCTION]-[NUMBER]
```

Examples:

```text
SCHEMA-AUTH-001
SCHEMA-BOOKING-001
SCHEMA-CREATE-001
SCHEMA-GETIDS-001
```

Recommended schema file naming convention:

```text
[resource]_response.schema.json
```

Examples:

```text
auth_response.schema.json
booking_response.schema.json
create_booking_response.schema.json
booking_ids_response.schema.json
```

---

# 2. Purpose

The purpose of this schema is to validate the JSON response structure returned by:

```text
[METHOD] [ENDPOINT]
```

The schema verifies that the API response conforms to the expected response contract.

Validation may include:

* Root JSON type
* Required properties
* Property names
* Property data types
* Nested object structure
* Array item structure
* Date formats
* Numeric values
* Boolean values
* Optional properties
* Unexpected properties

The schema validation process supports the project traceability model:

```text
API Requirement
      ↓
Test Scenario
      ↓
Test Case
      ↓
API Response
      ↓
JSON Schema Validation
      ↓
Postman Assertion
      ↓
Execution Result
```

JSON Schema validation is used as part of API contract testing.

---

# 3. API Response Under Validation

## Request

```text
[METHOD] {{baseUrl}}/[endpoint]
```

## Authentication

```text
[None / Cookie Token / Basic Authentication]
```

## Request Headers

```text
Content-Type: application/json
```

Remove headers that are not applicable.

## Request Body

```json
{
  "property": "value"
}
```

If the request does not contain a body:

```text
Not applicable.
```

## Expected HTTP Status

```text
[Expected status code and status text]
```

## Example API Response

```json
{
  "property": "value"
}
```

The example response should represent a valid API response observed or documented for the endpoint under validation.

---

# 4. Test Traceability

| Traceability Level | ID / Reference                            |
| ------------------ | ----------------------------------------- |
| Requirement ID     | `REQ-XXX-XXX`                             |
| Test Scenario ID   | `TS-XXX-XXX`                              |
| Test Case ID       | `TC-XXX-XXX`                              |
| Schema ID          | `SCHEMA-XXX-001`                          |
| Postman Request    | `[TC ID] - [METHOD] - [Request Name]`     |
| Execution Record   | `06_Test_Execution/API_Test_Execution.md` |

## Traceability Chain

```text
REQ-XXX-XXX
      ↓
TS-XXX-XXX
      ↓
TC-XXX-XXX
      ↓
API Response
      ↓
SCHEMA-XXX-001
      ↓
Postman Schema Assertion
      ↓
PASS / FAIL
```

If a schema deviation is confirmed as an API defect:

```text
Schema Validation
      ↓
FAIL
      ↓
Manual Contract Review
      ↓
Defect Confirmation
      ↓
BUG-API-XXX
```

A failed schema assertion does not automatically confirm an API defect.

---

# 5. Expected Response Contract

Document the expected JSON response structure.

## Expected Root Type

```text
[Object / Array]
```

## Expected Properties

| Property     | Required | Expected Type                              | Description     |
| ------------ | -------- | ------------------------------------------ | --------------- |
| `[property]` | Yes / No | string / number / boolean / object / array | `[Description]` |
| `[property]` | Yes / No | string / number / boolean / object / array | `[Description]` |
| `[property]` | Yes / No | string / number / boolean / object / array | `[Description]` |

## Nested Properties

| Parent Property | Child Property | Required | Expected Type |
| --------------- | -------------- | -------- | ------------- |
| `[parent]`      | `[child]`      | Yes / No | `[type]`      |
| `[parent]`      | `[child]`      | Yes / No | `[type]`      |

## Optional Properties

```text
[List optional properties.]
```

Example:

```text
additionalneeds
```

## Expected Contract Example

```json
{
  "property": "value",
  "nestedObject": {
    "nestedProperty": "value"
  }
}
```

---

# 6. JSON Schema Definition

The JSON Schema should be defined using a supported JSON Schema draft.

## Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "[schema identifier]",
  "title": "[Schema Title]",
  "description": "[Schema description]",
  "type": "object",
  "required": [
    "property"
  ],
  "properties": {
    "property": {
      "type": "string"
    }
  }
}
```

The schema should reflect the documented API contract.

Schema constraints should not be invented when the API documentation does not define them.

For example, do not automatically add:

```json
{
  "minLength": 1,
  "maxLength": 255,
  "minimum": 0,
  "maximum": 10000
}
```

unless the limit is:

* Documented
* Defined by a project requirement
* Intentionally used as an exploratory schema rule and clearly identified as such

---

# 7. Root-Level Validation

The root JSON structure should be explicitly validated.

## Expected Root Type

```text
[Object / Array]
```

## Schema Definition

### Object Response

```json
{
  "type": "object"
}
```

### Array Response

```json
{
  "type": "array"
}
```

## Postman Assertion

```javascript
pm.test("Response root type matches expected contract", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("object");
});
```

For an array response:

```javascript
pm.test("Response root is an array", function () {
    const response = pm.response.json();

    pm.expect(response).to.be.an("array");
});
```

## Expected Result

```text
The root JSON structure matches the documented API response contract.
```

---

# 8. Required Property Validation

Required properties must be explicitly defined in the JSON Schema.

Example:

```json
{
  "required": [
    "firstname",
    "lastname",
    "totalprice",
    "depositpaid",
    "bookingdates"
  ]
}
```

## Required Property Matrix

| Property          | Required | Schema Validation |
| ----------------- | -------- | ----------------- |
| `firstname`       | Yes      | Required          |
| `lastname`        | Yes      | Required          |
| `totalprice`      | Yes      | Required          |
| `depositpaid`     | Yes      | Required          |
| `bookingdates`    | Yes      | Required          |
| `additionalneeds` | No       | Optional          |

Update the matrix according to the API response under validation.

## Expected Result

All documented required response properties are present.

Optional properties are not incorrectly enforced as mandatory.

---

# 9. Data Type Validation

JSON Schema should validate documented property data types.

## Data Type Matrix

| Property     | Expected JSON Type |
| ------------ | ------------------ |
| `[property]` | `string`           |
| `[property]` | `number`           |
| `[property]` | `boolean`          |
| `[property]` | `object`           |
| `[property]` | `array`            |

## Schema Example

```json
{
  "properties": {
    "firstname": {
      "type": "string"
    },
    "totalprice": {
      "type": "number"
    },
    "depositpaid": {
      "type": "boolean"
    },
    "bookingdates": {
      "type": "object"
    }
  }
}
```

## Expected Result

Each response property uses the documented JSON data type.

Example invalid contract behaviour:

```text
Expected:
totalprice = number

Actual:
totalprice = string
```

Example:

```json
{
  "totalprice": "500"
}
```

If the documented response model requires a number, the response should fail schema validation.

---

# 10. Nested Object Validation

Nested JSON objects should define their own:

* Type
* Required properties
* Child properties
* Child property data types

## Nested Object Example

```json
{
  "bookingdates": {
    "type": "object",
    "required": [
      "checkin",
      "checkout"
    ],
    "properties": {
      "checkin": {
        "type": "string"
      },
      "checkout": {
        "type": "string"
      }
    }
  }
}
```

## Nested Property Matrix

| Parent         | Property   | Required | Expected Type |
| -------------- | ---------- | -------- | ------------- |
| `bookingdates` | `checkin`  | Yes      | string        |
| `bookingdates` | `checkout` | Yes      | string        |

## Expected Result

The nested object:

* Exists when required
* Uses the expected object type
* Contains required child properties
* Uses expected child property data types

---

# 11. Array Validation

Array responses should validate both the root array and each array item.

## Array Schema Example

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "bookingid"
    ],
    "properties": {
      "bookingid": {
        "type": "number"
      }
    }
  }
}
```

## Array Validation Matrix

| Validation             | Expected Result |
| ---------------------- | --------------- |
| Root type              | Array           |
| Array items            | Object          |
| Required item property | `bookingid`     |
| `bookingid` type       | Number          |

## Empty Array Behaviour

An empty array:

```json
[]
```

may still be schema-valid.

Schema validation should distinguish:

```text
Contract Validity
      ≠
Business Result Availability
```

For example, a filter returning no matching bookings may return an empty array while still conforming to the response schema.

---

# 12. Format Validation

JSON Schema may validate supported semantic formats.

Example date schema:

```json
{
  "type": "string",
  "format": "date"
}
```

Example:

```json
{
  "checkin": "2026-08-01"
}
```

## Format Validation Matrix

| Property                | Expected Format |
| ----------------------- | --------------- |
| `bookingdates.checkin`  | date            |
| `bookingdates.checkout` | date            |

## Format Validation Note

Format validation should only be enforced when:

* The API contract defines the expected format
* The schema validator supports the format
* The validation behaviour is understood

A string may satisfy:

```json
{
  "type": "string"
}
```

while still containing an invalid date value.

Example:

```json
{
  "checkin": "not-a-date"
}
```

Therefore:

```text
Data Type Validation
        +
Format Validation
        =
Stronger Contract Validation
```

---

# 13. Additional Property Validation

The schema must explicitly define how unexpected properties are handled.

## Strict Schema

```json
{
  "additionalProperties": false
}
```

This rejects properties not defined in the schema.

Example unexpected response:

```json
{
  "firstname": "Filip",
  "unexpectedProperty": "value"
}
```

## Flexible Schema

```json
{
  "additionalProperties": true
}
```

This permits undocumented response properties.

## Selected Strategy

```text
[Strict / Flexible]
```

## Justification

```text
[Explain why additional properties are allowed or rejected.]
```

Strict schema validation should not be enabled automatically.

The decision should be based on the expected API contract.

---

# 14. Postman Schema Validation

JSON Schema validation can be implemented in the Postman **Tests** section.

## Schema Definition

```javascript
const schema = {
    type: "object",
    required: [
        "property"
    ],
    properties: {
        property: {
            type: "string"
        }
    }
};
```

## Postman Assertion

```javascript
pm.test("Response matches JSON schema", function () {
    pm.response.to.have.jsonSchema(schema);
});
```

## Complete Example

```javascript
const schema = {
    type: "object",
    required: [
        "token"
    ],
    properties: {
        token: {
            type: "string"
        }
    }
};

pm.test("Authentication response matches JSON schema", function () {
    pm.response.to.have.jsonSchema(schema);
});
```

## Expected Result

```text
PASS
```

when the response conforms to the defined schema.

If the response does not conform:

```text
FAIL
```

The schema validation error should be investigated before defect classification.

---

# 15. Positive Schema Validation

Positive schema validation uses a valid API response.

## Preconditions

1. API is accessible.
2. A valid request is configured.
3. Required authentication is available.
4. Required resource exists.

## Execution Steps

1. Send the valid API request.
2. Confirm the expected HTTP status.
3. Parse the JSON response.
4. Execute the JSON Schema assertion.
5. Review the Postman test result.

## Expected Result

```text
HTTP request succeeds
        ↓
JSON response returned
        ↓
Schema assertion executed
        ↓
Response matches schema
        ↓
PASS
```

## Validation Result

| Validation          | Result      |
| ------------------- | ----------- |
| HTTP Status         | PASS / FAIL |
| JSON Response       | PASS / FAIL |
| Root Type           | PASS / FAIL |
| Required Properties | PASS / FAIL |
| Data Types          | PASS / FAIL |
| Nested Structure    | PASS / FAIL |
| JSON Schema         | PASS / FAIL |

---

# 16. Negative Schema Validation

Negative schema validation verifies that a deliberately invalid mock or modified JSON object fails the schema.

The API response should not be artificially modified and then reported as an API defect.

Negative schema validation tests the schema itself.

## Valid Object

```json
{
  "token": "abc123"
}
```

## Invalid Object

```json
{
  "token": 12345
}
```

Expected schema:

```json
{
  "type": "object",
  "required": [
    "token"
  ],
  "properties": {
    "token": {
      "type": "string"
    }
  }
}
```

## Expected Result

```text
Valid JSON Object
      ↓
Schema Validation
      ↓
PASS
```

```text
Invalid JSON Object
      ↓
Schema Validation
      ↓
FAIL
```

## Schema Self-Test Objective

The purpose is to verify that the schema can detect:

* Missing required properties
* Incorrect data types
* Invalid nested structures
* Invalid array item structures
* Disallowed additional properties, when strict validation is enabled

---

# 17. Validation Result

## Execution Information

| Field           | Value             |
| --------------- | ----------------- |
| Execution Date  | YYYY-MM-DD        |
| Postman Request | `[Request Name]`  |
| Test Case ID    | `TC-XXX-XXX`      |
| Schema ID       | `SCHEMA-XXX-001`  |
| HTTP Status     | `[Status]`        |
| Schema Result   | PASS / FAIL       |
| Defect ID       | `BUG-API-XXX / —` |

## Validation Summary

| Validation Area       | Expected     | Actual     | Result      |
| --------------------- | ------------ | ---------- | ----------- |
| Root Type             | `[type]`     | `[type]`   | PASS / FAIL |
| Required Properties   | Present      | `[actual]` | PASS / FAIL |
| Data Types            | Valid        | `[actual]` | PASS / FAIL |
| Nested Structure      | Valid        | `[actual]` | PASS / FAIL |
| Array Structure       | Valid / N/A  | `[actual]` | PASS / FAIL |
| Format                | Valid / N/A  | `[actual]` | PASS / FAIL |
| Additional Properties | `[strategy]` | `[actual]` | PASS / FAIL |
| Overall Schema        | Valid        | `[actual]` | PASS / FAIL |

## Overall Result

```text
[PASS / FAIL]
```

---

# 18. Schema Deviation Analysis

Complete this section when schema validation fails.

## Validation Failure

```text
[Record the schema assertion failure.]
```

## Expected Contract

```text
[Describe the expected JSON structure.]
```

## Actual Response

```json
{
  "property": "unexpected value"
}
```

## Deviation Type

```text
Missing Required Property
Incorrect Data Type
Incorrect Root Type
Invalid Nested Structure
Invalid Array Item
Invalid Format
Unexpected Property
Other
```

## Contract Source

```text
[Published API documentation / Project requirement / Defined API model]
```

## Analysis

```text
[Explain the difference between the expected schema and actual response.]
```

## Classification

```text
Schema Definition Issue
Postman Assertion Issue
Documentation Ambiguity
API Contract Deviation
Confirmed API Defect
```

## Defect Reference

```text
BUG-API-XXX / Not applicable
```

---

# 19. Evidence

Schema validation evidence may include:

* Postman assertion result
* API response body
* Postman Console output
* Collection Runner result
* Newman report
* GitHub Actions execution result

## Screenshot Evidence

```text
10_Evidence/Postman/[TC-ID]_Schema_Validation.png
```

Example:

```text
10_Evidence/Postman/TC-AUTH-018_Schema_Validation.png
```

## Schema File

```text
08_JSON_Schema/[schema_file].schema.json
```

## Postman Collection

```text
05_Postman/Collection/Restful_Booker_API_Testing.postman_collection.json
```

## Execution Record

```text
06_Test_Execution/API_Test_Execution.md
```

---

# 20. Schema Maintenance

JSON Schemas should remain synchronized with the documented API contract.

If the API response contract changes:

```text
API Contract Change
      ↓
Requirements Review
      ↓
Test Case Review
      ↓
JSON Schema Review
      ↓
Postman Assertion Review
      ↓
Regression Execution
```

## Schema Version History

| Version | Date       | Change         | Author        |
| ------- | ---------- | -------------- | ------------- |
| 1.0     | YYYY-MM-DD | Initial schema | Filip Jelinek |

## Maintenance Rules

1. Do not modify a schema only to make a failing API response pass.
2. Verify the API contract before changing schema requirements.
3. Document intentional schema changes.
4. Review affected Postman assertions.
5. Re-run related contract tests.
6. Update schema version information when the contract changes materially.

The following pattern should be avoided:

```text
Schema FAIL
      ↓
Remove Validation Rule
      ↓
Test PASS
```

The correct process is:

```text
Schema FAIL
      ↓
Investigate Contract
      ↓
Identify Root Cause
      ↓
Update API or Schema if Justified
      ↓
Re-test
```

---

# 21. Schema Summary

**Schema ID:** `SCHEMA-XXX-001`
**Schema Name:** `[Schema Name]`
**Endpoint:** `[METHOD] [ENDPOINT]`
**Response Root Type:** `[Object / Array]`
**Schema Version:** `1.0`
**Validation Tool:** Postman
**Validation Status:** `[Not Executed / PASS / FAIL]`

The schema validates:

```text
Root JSON Type
      ↓
Required Properties
      ↓
Property Data Types
      ↓
Nested Object Structure
      ↓
Array Item Structure
      ↓
Data Formats
      ↓
Additional Property Strategy
      ↓
Complete Response Contract
```

The JSON Schema is used as part of API contract testing within the Restful Booker API Testing Project.

Schema validation results are linked to:

```text
Test Case
      ↓
Postman Assertion
      ↓
API Test Execution
      ↓
Defect Report, if required
```

**Prepared by:** Filip Jelinek
**Role:** QA Tester
**Template Version:** 1.0
**Status:** Template
