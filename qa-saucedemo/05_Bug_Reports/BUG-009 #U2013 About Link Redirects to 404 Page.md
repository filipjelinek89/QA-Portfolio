# BUG-009 – About Link Redirects to 404 Page

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

**TC041 – Verify About Link**

---

## Affected User

**problem_user**

---

## Severity

**Medium**

---

## Priority

**Medium**

---

## Preconditions

- User is logged in as **problem_user**.
- User is on the **Products (Inventory)** page.

---

## Steps to Reproduce

1. Log in as **problem_user**.
2. Open the navigation menu.
3. Click the **About** link.

---

## Expected Result

The application redirects the user to the official Sauce Labs About page.

---

## Actual Result

Clicking the **About** link redirects the user to a **404 – Page Not Found** error page instead of the expected destination.

---

## Impact

Users cannot access the About page through the application's navigation menu. This results in broken navigation and reduces user confidence by directing users to a non-existent page.

---

## Attachments

**Screenshot:**

`BUG-009_About_Link_Redirects_To_404_Page.png`

---

## QA Assessment

The defect is consistently reproducible using the **problem_user** account. The navigation link points to an invalid destination, resulting in a 404 error page instead of the intended About page. This is a functional navigation defect.

---

## Test Evidence

- Test Case: **TC041 – Verify About Link**
- Test User: **problem_user**
- Result: **Fail**
- Reproducibility: **100% (5/5 attempts)**