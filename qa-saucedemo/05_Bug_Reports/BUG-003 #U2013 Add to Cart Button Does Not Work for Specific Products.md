# BUG-003 – Add to Cart Button Does Not Work for Specific Products

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
| Test User | problem_user |

---

## Related Test Case

**TC010 – Verify "Add to Cart" Button Functionality**

---

## Affected User

**problem_user**

---

## Severity

**High**

---

## Priority

**High**

---

## Preconditions

- User is logged in as **problem_user**.
- User is on the Inventory page.

---

## Steps to Reproduce

1. Log in as **problem_user**.
2. Navigate to the Inventory page.
3. Locate products displaying the **Add to cart** button.
4. Click the **Add to cart** button for each product.

---

## Expected Result

Each selected product is successfully added to the shopping cart. The **Add to cart** button changes to **Remove**, and the shopping cart badge increases by one for each added item.

---

## Actual Result

The **Add to cart** button does not respond for three specific products. Clicking the button has no effect, the products are not added to the shopping cart, the button remains labeled **Add to cart**, and the shopping cart badge is not updated. Other products function correctly.

---

## Impact

Users cannot add certain products to the shopping cart, preventing them from purchasing those items. This significantly impacts core e-commerce functionality and results in an inconsistent shopping experience.

---

## Attachments

**Screenshot:**

`BUG-004_Add_To_Cart_Button_Not_Working_Specific_Products.png`

---

## QA Assessment

The issue is consistently reproducible using the **problem_user** account. The defect affects only specific products, while the remaining products can be added successfully. This indicates inconsistent implementation of the Add to Cart functionality.

---

## Test Evidence

- Test Case: **TC010 – Verify "Add to Cart" Button Functionality**
- Test User: **problem_user**
- Result: **Fail**
- Reproducibility: **100% (5/5 attempts)**