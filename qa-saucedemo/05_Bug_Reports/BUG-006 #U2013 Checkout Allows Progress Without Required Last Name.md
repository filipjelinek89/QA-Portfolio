# BUG-006 – Checkout Allows Progress Without Required Last Name

⬅️ **Back to Bug Reports**

[05_Bug_Reports.md](05_Bug_Reports.md)

---

## Environment

| Field | Value |
|-------|-------|
| Application | SauceDemo |
| URL | https://www.saucedemo.com/ |
| Browser | Google Chrome |
| Browser Version | 149.0.7827.197 |
| Operating System | Windows 11 |
| Test User | error_user |

---

## Related Test Case

**TC029 – Verify Checkout with Empty Last Name**

---

## Affected User

**error_user**

---

## Severity

**High**

---

## Priority

**High**

---

## Preconditions

- User is logged in as **error_user**.
- At least one product has been added to the shopping cart.
- User has navigated to the **Checkout: Your Information** page.

---

## Steps to Reproduce

1. Log in as **error_user**.
2. Add any product to the shopping cart.
3. Open the shopping cart.
4. Click **Checkout**.
5. Enter a valid first name.
6. Leave the **Last Name** field empty.
7. Enter a valid postal code.
8. Click **Continue**.

---

## Expected Result

The application should prevent the user from continuing and display a validation message indicating that the **Last Name** field is required.

---

## Actual Result

The application allows the user to proceed to the next checkout step without entering a value in the **Last Name** field. No validation message is displayed, and the required field validation is bypassed.

---

## Impact

Mandatory input validation is not enforced, allowing incomplete customer information to proceed through the checkout process. This may result in invalid order data and compromises data integrity.

---

## Attachments

**Screenshot:**

[BUG-006 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-006_Checkout_Allows_Empty_Last_Name.png)

---

## QA Assessment

The defect is consistently reproducible using the **error_user** account. The application fails to validate a mandatory field, allowing users to bypass required input validation and continue the checkout process.

---

## Test Evidence

- Test Case: **TC029 – Verify Checkout with Empty Last Name**
- Test User: **error_user**
- Result: **Fail**
- Reproducibility: **100% (5/5 attempts)**

---

⬅️ **Back to Bug Reports**

[05_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports.md)
