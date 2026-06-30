# BUG-005 – Last Name Field Does Not Accept Input During Checkout

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

**TC027 – Complete Checkout Information with Valid Data**

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
6. Click the **Last Name** field.
7. Attempt to enter a valid surname.

---

## Expected Result

The **Last Name** field accepts keyboard input, allowing the user to enter a valid surname and continue the checkout process.

---

## Actual Result

The **Last Name** field does not accept any keyboard input. The user is unable to enter a surname, preventing completion of the checkout information form and blocking the checkout process.

---

## Impact

Users cannot complete the mandatory checkout information because the required **Last Name** field is non-functional. This blocks the purchase process and prevents order completion.

---

## Attachments

**Screenshot:**

`BUG-005_Last_Name_Field_Does_Not_Accept_Input_Checkout.png`

---

## QA Assessment

The issue is consistently reproducible using the **error_user** account. The defect affects a mandatory form field required to proceed with checkout, resulting in a complete blocker for the purchasing workflow.

---

## Test Evidence

- Test Case: **TC027 – Complete Checkout Information with Valid Data**
- Test User: **error_user**
- Result: **Fail**
- Reproducibility: **100% (5/5 attempts)**
```