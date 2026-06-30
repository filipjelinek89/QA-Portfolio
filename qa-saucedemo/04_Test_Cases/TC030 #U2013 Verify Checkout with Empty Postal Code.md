# TC030 – Verify Checkout with Empty Postal Code

## Test Information

| Field                | Value                 |
| -------------------- | --------------------- |
| **Test Case ID**     | TC030                 |
| **Module**           | Checkout              |
| **Requirement**      | FR-005                |
| **Related Scenario** | TS-014                |
| **Priority**         | Medium                |
| **Severity**         | Major                 |
| **Test Type**        | Negative / Validation |
| **Execution Type**   | Manual                |

---

## Objective

Verify that the application displays a validation message when the **Postal Code** field is left empty during checkout.

---

## Preconditions

- The SauceDemo application is available.
- The user is logged in as `standard_user`.
- At least one product has been added to the shopping cart.
- The **Checkout: Your Information** page is displayed.

---

## Test Data

| First Name | Last Name | Postal Code |
| ---------- | --------- | ----------- |
| John       | Tester    | *(empty)*   |

---

## Test Steps

| Step | Action                                         | Expected Result                                                                                      |
| ---: | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|    1 | Enter **John** into the **First Name** field.  | The value is accepted.                                                                               |
|    2 | Enter **Tester** into the **Last Name** field. | The value is accepted.                                                                               |
|    3 | Leave the **Postal Code** field empty.         | The field remains empty.                                                                             |
|    4 | Click the **Continue** button.                 | The application validates the entered information.                                                   |
|    5 | Observe the application response.              | A validation error message is displayed and the user remains on the Checkout: Your Information page. |

---

## Expected Result

- The checkout process does not continue.
- The user remains on the **Checkout: Your Information** page.
- The following validation message is displayed:

```text
Error: Postal Code is required
```

- No order information is processed.
- The **Checkout: Overview** page is not displayed.

---

## Actual Result

The application prevented the checkout process when the **Postal Code** field was left empty. A validation error message was displayed indicating that the Postal Code is required, and the user remained on the **Checkout: Your Information** page.

---

## Status

✅ Pass

---

## Notes

Verify that:

- The validation message is displayed above the checkout form.
- The **First Name** and **Last Name** values remain populated.
- The **Postal Code** field is highlighted as invalid.
- The **Continue** button remains available.
- The URL remains `/checkout-step-one.html`.
- No visual or functional issues occur after validation.

---

⬅️ **Back to Test Cases**

[04_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases.md)
