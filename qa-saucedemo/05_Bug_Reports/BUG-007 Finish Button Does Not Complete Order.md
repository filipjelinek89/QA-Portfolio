# BUG-007 – Finish Button Does Not Complete Order

⬅️ **Back to Bug Reports**

[05_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports.md)


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

**TC032 – Verify Successful Order Completion**

---

## Affected User

**error_user**

---

## Severity

**Critical**

---

## Priority

**Critical**

---

## Preconditions

- User is logged in as **error_user**.
- At least one product has been added to the shopping cart.
- Checkout Information has been completed successfully.
- User has reached the **Checkout: Overview** page.

---

## Steps to Reproduce

1. Log in as **error_user**.
2. Add at least one product to the shopping cart.
3. Proceed through the checkout process.
4. Complete the checkout information.
5. Navigate to the **Checkout: Overview** page.
6. Click the **Finish** button.

---

## Expected Result

The order is successfully completed, and the user is redirected to the **Checkout: Complete!** page displaying the order confirmation message.

---

## Actual Result

Clicking the **Finish** button has no effect. The order is not completed, and the user remains on the Checkout Overview page. No confirmation page is displayed.

---

## Impact

Users cannot complete purchases because the checkout process cannot be finalized. This completely blocks the primary business workflow of the application and prevents successful order placement.

---

## Attachments

**Screenshot:**

[BUG-007 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/09_Screenshots/BUG-007_Finish_Button_Not_Working_Checkout_Overview.png)

---

## QA Assessment

The defect is consistently reproducible using the **error_user** account. Although all previous checkout steps are completed successfully, the **Finish** button does not execute the final order submission. This is a critical functional defect affecting the application's primary business process.

---

## Test Evidence

- Test Case: **TC032 – Verify Successful Order Completion**
- Test User: **error_user**
- Result: **Fail**
- Reproducibility: **100% (5/5 attempts)**

---

⬅️ **Back to Bug Reports**

[05_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/05_Bug_Reports.md)
