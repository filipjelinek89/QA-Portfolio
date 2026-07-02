# Exploratory Testing

**Project:** ParaBank Manual Testing Project

**Application:** ParaBank

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# 1. Purpose

The purpose of exploratory testing is to evaluate the application's behavior beyond predefined test cases by simultaneously learning, designing, and executing tests. This approach helps identify unexpected defects, usability issues, and inconsistencies that may not be covered by scripted testing.

---

# 2. Test Charter

**Session Goal:**

Explore the ParaBank application from the perspective of a new banking customer and identify functional issues, UI inconsistencies, validation problems, navigation defects, and unexpected application behavior.

---

# 3. Test Environment

| Item | Details |
|------|---------|
| Application | ParaBank |
| URL | https://parabank.parasoft.com/ |
| Browser | Google Chrome |
| Operating System | Windows 11 |
| Testing Type | Manual Exploratory Testing |

---

# 4. Areas Explored

The following application areas were explored during the session:

- User Registration
- User Login
- Navigation Menu
- Account Overview
- Open New Account
- Transfer Funds
- Bill Payment
- Request Loan
- Account History
- Logout

---

# 5. Testing Approach

The following exploratory techniques were used:

- Free-form exploration
- Error guessing
- Boundary value exploration
- Negative input testing
- Random navigation
- Session-based testing
- UI consistency checks

---

# 6. Test Notes

During the exploratory session, attention was given to:

- Invalid user inputs
- Empty form submissions
- Long text values
- Unexpected navigation paths
- Browser refresh behavior
- Back button behavior
- Multiple clicks on buttons
- Session timeout handling
- User feedback messages
- Page loading behavior
- Form validation messages

---

# 7. Potential Risks Investigated

The following risks were explored:

| Area | Risk |
|------|------|
| Registration | Invalid account creation |
| Login | Authentication failures |
| Transfers | Incorrect transaction processing |
| Bill Payment | Missing validation |
| Loan Requests | Invalid approval logic |
| Navigation | Broken links |
| Session Management | Unauthorized access after logout |

---

# 8. Findings

Examples of findings that may be discovered during exploratory testing include:

- Missing validation messages
- Inconsistent page layouts
- Incorrect navigation flow
- Unexpected system errors
- Buttons with inconsistent behavior
- UI alignment issues
- Broken links
- Slow page responses

Detailed defects are documented separately in the **Bug Reports** section.

---

# 9. Recommendations

Based on the exploratory session:

- Improve input validation for all user forms.
- Ensure consistent error messages across the application.
- Verify navigation between all banking features.
- Validate user session behavior after logout.
- Review UI consistency across all pages.

---

# 10. Session Summary

| Item | Result |
|------|--------|
| Session Type | Session-Based Exploratory Testing |
| Application Coverage | Core Banking Features |
| Test Status | Completed |
| Defects | See Bug Reports |
| Notes | Exploratory testing complemented scripted functional testing. |

---

# Document Version History

| Version | Date | Author | Changes |
|----------|------|--------|---------|
| 1.0 | YYYY-MM-DD | Filip Jelinek | Initial version |

---

⬅️ Back to QA ParaBank README

[QA-ParaBank-README.md](qa-parabank-README.md)

