# BUG-004 – Remove Button Does Not Remove Product on Product Details Page

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

**TC016 – Verify "Remove" Button on Product Details Page**

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
- User is on the Inventory page.
- At least one product has been added to the shopping cart.
- User opens the Product Details page for the added product.

---

## Steps to Reproduce

1. Log in as **error_user**.
2. Add any product to the shopping cart.
3. Open the Product Details page for the added product.
4. Click the **Remove** button.

---

## Expected Result

The selected product is removed from the shopping cart. The **Remove** button changes to **Add to cart**, and the shopping cart badge decreases accordingly.

---

## Actual Result

Clicking the **Remove** button has no effect. The product remains in the shopping cart, the **Remove** button remains visible, and the shopping cart badge is not updated.

---

## Impact

Users cannot remove products directly from the Product Details page, forcing them to navigate to another page or preventing item removal entirely. This negatively impacts core shopping cart functionality and user experience.

---

## Attachments

**Screenshot:**

`BUG-003_Remove_Button_Not_Working_Product_Details_Page.png`

---

## QA Assessment

The defect is consistently reproducible using the **error_user** account. The remove action fails despite the button being enabled and clickable. This represents a functional defect affecting a primary e-commerce workflow.

---

## Test Evidence

- Test Case: **TC016 – Verify "Remove" Button on Product Details Page**
- Test User: **error_user**
- Result: **Fail**
- Reproducibility: **100% (5/5 attempts)**