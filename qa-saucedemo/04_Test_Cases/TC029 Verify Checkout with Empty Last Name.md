# TC029 – Verify Checkout with Empty Last Name

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC029                 |
| **Module**           | Checkout              |
| **Requirement**      | FR-005                |
| **Related Scenario** | TS-014                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Negative / Validation |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the application displays a validation message when the **Last Name** field is left empty during checkout.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `error_user`.
- At least one product has been added to the shopping cart.
- The **Checkout: Your Information** page is displayed.

---

## Test Data

| First Name | Last Name | Postal Code |
| ---------- | --------- | ----------- |
| John       | *(empty)* | 12345       |

---

## Test Steps

| Step | Action                                          | Expected Result                                                                                      |
| ---: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|    1 | Enter **John** into the **First Name** field.   | The value is accepted.                                                                               |
|    2 | Leave the **Last Name** field empty.            | The field remains empty.                                                                             |
|    3 | Enter **12345** into the **Postal Code** field. | The value is accepted.                                                                               |
|    4 | Click the **Continue** button.                  | The application validates the entered information.                                                   |
|    5 | Observe the application response.               | A validation error message is displayed and the user remains on the Checkout: Your Information page. |

---

## Expected Result

- The checkout process does not continue.
- The user remains on the **Checkout: Your Information** page.
- The following validation message is displayed:

```text
Error: Last Name is required
```

- No order information is processed.
- The **Checkout: Overview** page is not displayed.

---

## Actual Result

The checkout process allows the user to continue to the next step without entering a value in the mandatory Last Name field. No validation message is displayed, and the checkout information is accepted despite the missing required data.

---

## Status

❌ Fail

---

## Notes

Verify that:

- The validation message is displayed above the checkout form.
- The **First Name** and **Postal Code** values remain populated.
- The **Last Name** field is highlighted as invalid.
- The **Continue** button remains available.
- The URL remains `/checkout-step-one.html`.
- No visual or functional issues occur after validation.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
