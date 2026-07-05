# TC057 – Verify Home Page Navigation

**Module:** Navigation & Logout

**Requirement ID:** FR-008

**Priority:** Low

**Severity:** Low

**Type:** Navigation Test

---

## Objective

Verify that clicking the **Home** navigation link redirects the user to the ParaBank home page successfully.

---

## Preconditions

- User is logged into ParaBank.
- Internet connection is available.
- User is on any page other than the Home page.

---

## Test Data

| Field | Value |
|------|------|
| User Account | Valid registered user |

---

## Test Steps

| Step | Action |
|------|--------|
| 1 | Log in to ParaBank. |
| 2 | Navigate to any page other than the Home page (e.g., Transfer Funds or Bill Pay). |
| 3 | Click the **Home** link in the left navigation menu. |

---

## Expected Result

- The Home page is displayed successfully.
- The page loads without errors.
- The URL changes to the Home page.
- All main navigation links remain visible and functional.
- No unexpected error messages are displayed.

---

## Actual Result

The user successfully accessed the ParaBank Home page using the navigation menu. The Home page loaded correctly and displayed the expected content without any errors. All page elements were visible, and the navigation functionality worked as expected, allowing the user to access the Home section successfully.

---

## Status

✅ PASS

---

## Notes

Verify that:
- The correct page is displayed.
- Navigation completes without delays or broken links.
- The browser Back and Forward buttons continue to work as expected.
- The user session remains active after navigation.

---

⬅️ Back to 03 Test Cases

[03_Test_Cases.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases.md)
