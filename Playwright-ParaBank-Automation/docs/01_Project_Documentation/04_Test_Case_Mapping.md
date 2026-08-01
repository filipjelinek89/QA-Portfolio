# 04_Test_Case_Mapping

> **Playwright-ParaBank-Automation – Test Case Mapping & Automation Planning**

---

## Document Information

**Project:** Playwright-ParaBank-Automation  
**Document:** Test Case Mapping  
**Version:** 2.0  
**Prepared by:** Filip Jelinek  
**Framework:** Playwright + TypeScript  
**Status:** 🚧 Planning

---

# Purpose

This document establishes traceability between the Manual QA Test Cases and their corresponding Playwright automation tests.

Maintaining this mapping ensures that every automated test can be traced back to a manually designed and reviewed business scenario.

The Manual QA project remains the source of truth for test design, while this repository contains the automation implementation.

---

# Objectives

- Maintain complete traceability
- Track automation progress
- Prevent duplicate automation
- Identify remaining manual tests
- Support regression planning
- Improve project maintainability

---

# Traceability Strategy

```text
Business Requirement

        ↓

Manual Test Scenario

        ↓

Manual Test Case

        ↓

Playwright Automation Test

        ↓

Execution Report
```

Each automated test should have a corresponding manual test case.

---

# Mapping Rules

- One manual test case maps to one automation test whenever possible.
- Test IDs remain consistent across repositories.
- Automated tests inherit the business purpose of the manual test.
- Any changes to manual test cases should be reflected in the automation project.
- Traceability must be maintained throughout the project lifecycle.

---

# Naming Convention

Manual Test Case:

```text
TC009
```

Automation Test:

```text
TC009_Login_Valid_Credentials.spec.ts
```

The shared Test Case ID makes it easy to locate related documentation and automation.

---

# Mapping Status

| Manual Test Case | Automation Test | Module | Status |
|------------------|-----------------|--------|--------|
| TC001 | Planned | Registration | Planned |
| TC002 | Planned | Registration | Planned |
| TC009 | TC009_Login_Valid_Credentials.spec.ts | Login | Planned |
| TC010 | TC010_Login_Invalid_Password.spec.ts | Login | Planned |
| TC031 | TC031_Transfer_Funds.spec.ts | Transfer Funds | Planned |

> **Note:** This table will be expanded as automation development progresses.

---

# Automation Coverage

The mapping document will be used to monitor coverage.

Coverage Categories:

- Planned
- In Progress
- Automated
- Blocked
- Not Applicable

---

# Coverage Metrics

Future versions of this document will include:

- Total Manual Test Cases
- Total Automated Test Cases
- Automation Coverage (%)
- Remaining Test Cases
- Module Completion Status

Example:

```text
Total Manual Tests:      70
Automated Tests:         0
Automation Coverage:     0%
```

These values will be updated after each implementation phase.

---

# Module Mapping

## Registration

- User Registration
- Registration Validation

## Login

- Valid Login
- Invalid Login
- Session Validation

## Accounts

- Account Overview
- Open New Account

## Transfers

- Transfer Funds

## Payments

- Bill Payment

## Loans

- Request Loan

## Navigation

- Menu Navigation
- Logout

---

# Benefits

Maintaining test case mapping provides:

- Full traceability
- Easier maintenance
- Better project visibility
- Simplified regression planning
- Improved documentation quality
- Professional QA workflow

---

# Future Improvements

- Automatic coverage calculation
- Links to execution reports
- Links to screenshots
- Links to trace files
- CI/CD coverage dashboard
- Interactive HTML traceability matrix

---

_End of Test Case Mapping_

---

# In-page Navigation

* [1. Automation Test Summary](#1-test-case-summary)
* [2. User Registration](#2-user-registration)
* [3. Login](#3-login)
* [4. Account Overview](#4-account-overview)
* [5. Open New Account](#5-open-new-account)
* [6. Transfer Funds](#6-transfer-funds)
* [7. Bill Payment](#7-bill-payment)
* [8. Request Loan](#8-request-loan)
* [9. Navigation & Logout](#9-navigation--logout)
* [10. Validation & Negative Testing](#10-validation--negative-testing)

---

# 1. Automation Test Summary

| Module | Number of Automation Tests |
|---|:---:|
| User Registration | 8 |
| Login | 8 |
| Account Overview | 7 |
| Open New Account | 7 |
| Transfer Funds | 10 |
| Bill Payment | 9 |
| Request Loan | 7 |
| Navigation & Logout | 6 |
| Validation & Negative Testing | 8 |
| **Total** | **70** |

---

# 2. User Registration

| ID | Automation Test | Type | Priority |
|---|---|---|---|
| TC001 | `TC001_successful_user_registration.spec.ts` | Functional | High |
| TC002 | `TC002_Registration_With_Required_Fields_Only.spec.ts` | Functional | High |
| TC003 | `TC003_registration_with_empty_required_fields.spec.ts` | Negative | High |
| TC004 | `TC004_registration_with_an_existing_username.spec.ts` | Negative | High |
| TC005 | `TC005_password_confirmation_validation.spec.ts` | Validation | High |
| TC006 | `TC006_Username_Length_Boundary_Validation.spec.ts` | Boundary | Medium |
| TC007 | `TC007_registration_with_special_characters.spec.ts` | Validation | Medium |
| TC008 | `TC008_registration_with_alphabetic_zip_code.spec.ts` | Negative | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 3. Login

| ID | Automation Test | Type | Priority |
|---|---|---|---|
| TC009 | `TC009_login_with_valid_credentials.spec.ts` | Functional | High |
| TC010 | `TC010_login_with_invalid_password.spec.ts` | Negative | High |
| TC011 | `TC011_login_with_invalid_username.spec.ts` | Negative | High |
| TC012 | `TC012_login_with_empty_username.spec.ts` | Validation | High |
| TC013| Verify login with empty password | Validation | High |
| TC014 | `TC014_login_with_both_fields_empty.spec.ts` | Validation | High |
| TC015 | `TC015_session_persists_after_page_refresh.spec.ts` | Session | Medium |
| TC016 | `TC016_user_can_log_in_after_logout.spec.ts` | Functional | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 4. Account Overview

| ID | Automation Test | Type | Priority |
|---|---|---|---|
| TC017 | `TC017_Account_Overview_page_displays_correctly.spec.ts` | UI / Functional | High |
| TC018 | `TC018_account_balances_are_displayed.spec.ts` | Functional | High |
| TC019 | `TC019_account_details_page.spec.ts` | Functional | High |
| TC020 | `TC020_transaction_history.spec.ts` | Functional | High |
| TC021 | `TC021_multiple_accounts_are_displayed.spec.ts` | Functional | Medium |
| TC022 | `TC022_account_overview_after_refresh.spec.ts` | Session | Medium |
| TC023 | `TC023_transaction_history_for_a_new_account.spec.ts` | Functional | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 5. Open New Account

| ID | Automation Test | Type | Priority |
|---|---|---|---|
| TC024 | `TC024_opening_a_new_checking_account.spec.ts` | Functional | High |
| TC025 | `TC025_opening_a_new_savings_account.spec.ts` | Functional | High |
| TC026 | `TC026_newly_created_account_appears_in_Account_Overview.spec.ts` | Functional | High |
| TC027 | `TC027_unique_account_number_is_generated.spec.ts` | Functional | Medium |
| TC028 | `TC028_initial_account_balance.spec.ts` | Functional | Medium |
| TC029 | `TC029_opening_multiple_accounts.spec.ts` | Functional | Medium |
| TC030 | `TC030_account_creation_using_different_funding_accounts.spec.ts` | Functional | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 6. Transfer Funds

| ID | Automation Test | Type | Priority |
|---|---|---|---|
| TC031 | `TC031_successful_transfer_between_accounts.spec.ts` | Functional | Critical |
| TC032 | `TC032_transfer_of_entire_account_balance.spec.ts` | Functional | High |
| TC033 | `TC033_transfer_with_zero_amount.spec.ts` | Negative | High |
| TC034 | `TC034_transfer_with_negative_amount.spec.ts` | Negative | High |
| TC035 | `TC035_transfer_with_decimal_amount.spec.ts` | Functional | Medium |
| TC036 | `TC036_transfer_with_a_large_amount.spec.ts` | Boundary | Medium |
| TC037 | `TC037_transfer_between_the_same_account.spec.ts` | Negative | Medium |
| TC038 | `TC038_transfer_with_empty_amount.spec.ts` | Validation | High |
| TC039 | `TC039_account_balances_update_after_transfer.spec.ts` | Functional | Critical |
| TC040 | `TC040_transfer_confirmation_message.spec.ts` | Functional | High |

[⬆ Back to Top](#in-page-navigation)

---

# 7. Bill Payment

| ID | Automation Test | Type | Priority |
|---|---|---|---|
| TC041 | `TC041_successful_bill_payment.spec.ts` | Functional | Critical |
| TC042 | `TC042_bill_payment_with_empty_required_fields.spec.ts` | Validation | High |
| TC043 | `TC043_bill_payment_with_invalid_account_number.spec.ts` | Negative | High |
| TC044 | `TC044_bill_payment_with_empty_amount.spec.ts` | Validation | High |
| TC045| Verify bill payment with negative amount | Negative | High |
| TC046 | `TC046_bill_payment_with_decimal_amount.spec.ts` | Functional | Medium |
| TC047 | `TC047_bill_payment_with_invalid_ZIP_code.spec.ts` | Negative | Medium |
| TC048 | `TC048_bill_payment_with_invalid_phone_number.spec.ts` | Validation | Medium |
| TC049 | `TC049_payment_confirmation_message.spec.ts` | Functional | High |

[⬆ Back to Top](#in-page-navigation)

---

# 8. Request Loan

| ID | Automation Test | Type | Priority |
|---|---|---|---|
| TC050 | `TC050_successful_loan_request.spec.ts` | Functional | High |
| TC051 | `TC051_loan_request_with_zero_amount.spec.ts` | Negative | High |
| TC052 | `TC052_loan_request_with_negative_amount.spec.ts` | Negative | High |
| TC053 | `TC053_loan_request_with_empty_required_fields.spec.ts` | Validation | High |
| TC054 | `TC054_loan_request_with_large_amount.spec.ts` | Boundary | Medium |
| TC055 | `TC055_loan_request_using_different_accounts.spec.ts` | Functional | Medium |
| TC056 | `TC056_loan_approval_or_rejection_message.spec.ts` | Functional | High |

[⬆ Back to Top](#in-page-navigation)

---

# 9. Navigation & Logout

| ID | Automation Test | Type | Priority |
|---|---|---|---|
| TC057 | `TC057_Home_navigation_link.spec.ts` | UI / Navigation | Low |
| TC058 | `TC058_About_Us_page.spec.ts` | UI / Navigation | Low |
| TC059 | `TC059_Services_page.spec.ts` | UI / Navigation | Low |
| TC060 | `TC060_Contact_page.spec.ts` | UI / Navigation | Low |
| TC061 | `TC061_successful_logout.spec.ts` | Functional | High |
| TC062 | `TC062_browser_Back_button_after_logout.spec.ts` | Security / Session | High |

[⬆ Back to Top](#in-page-navigation)

---

# 10. Validation & Negative Testing

| ID | Automation Test | Type | Priority |
|---|---|---|---|
| TC063 | `TC063_SQL_injection_like_input_is_handled_safely.spec.ts` | Security | High |
| TC064 | `TC064_HTML_script_input_is_handled_safely.spec.ts` | Security | High |
| TC065 | `TC065_maximum_input_length_validation.spec.ts` | Boundary | Medium |
| TC066 | `TC066_leading_and_trailing_spaces_in_input_fields.spec.ts` | Validation | Medium |
| TC067 | `TC067_Unicode_characters_in_text_fields.spec.ts` | Validation | Low |
| TC068 | `TC068_browser_refresh_during_form_submission.spec.ts` | Session / Functional | Medium |
| TC069 | `TC069_double_clicking_the_Submit_button.spec.ts` | Negative / Usability | Medium |
| TC070 | `TC070_multiple_browser_tabs_with_the_same_session.spec.ts` | Security / Session | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# Automation Design Coverage

| Test Area | Covered |
|---|:---:|
| Functional Testing | ✅ |
| Negative Testing | ✅ |
| Boundary Testing | ✅ |
| Validation Testing | ✅ |
| Security Testing | ✅ |
| Session Testing | ✅ |
| UI Navigation Testing | ✅ |

---

# Automation Test Status

These automation test specifications represent the planned Playwright implementation of the Manual QA test suite.

Automation execution results will be tracked separately:

➡️ [05_Test_Execution](05_Test_Execution)

---

⬅️ Back to Playwright README

[QA-ParaBank-README.md](README.md)
