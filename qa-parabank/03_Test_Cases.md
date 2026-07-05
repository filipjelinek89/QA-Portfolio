# Test Cases

**Project:** ParaBank Manual Testing Project  
**Version:** 1.1  
**Prepared by:** Filip Jelinek  

---

# In-page Navigation

* [1. Test Case Summary](#1-test-case-summary)
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

# 1. Test Case Summary

| Module | Number of Test Cases |
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

| ID | Test Case | Type | Priority |
|---|---|---|---|
| [TC001](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC001%20%E2%80%93%20Verify%20Successful%20User%20Registration.md) | Verify successful user registration | Functional | High |
| [TC002](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC002%20%E2%80%93%20Verify%20Registration%20with%20Required%20Fields%20Only.md) | Verify registration with required fields only | Functional | High |
| [TC003](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC003%20%E2%80%93%20Verify%20Registration%20with%20Empty%20Required%20Fields.md) | Verify registration with empty required fields | Negative | High |
| [TC004](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC004%20%E2%80%93%20Verify%20Registration%20with%20an%20Existing%20Username.md) | Verify registration with an existing username | Negative | High |
| [TC005](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC005%20%E2%80%93%20Verify%20Password%20Confirmation%20Validation.md) | Verify password confirmation validation | Validation | High |
| [TC006](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC006%20%E2%80%93%20Verify%20Registration%20with%20Maximum%20Field%20Lengths.md) | Verify registration with maximum field lengths | Boundary | Medium |
| TC007 | Verify registration with special characters | Validation | Medium |
| TC008 | Verify registration with invalid ZIP code | Negative | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 3. Login

| ID | Test Case | Type | Priority |
|---|---|---|---|
| TC009 | Verify login with valid credentials | Functional | High |
| TC010 | Verify login with invalid password | Negative | High |
| TC011 | Verify login with invalid username | Negative | High |
| TC012 | Verify login with empty username | Validation | High |
| TC013 | Verify login with empty password | Validation | High |
| TC014 | Verify login with both fields empty | Validation | High |
| TC015 | Verify session persists after page refresh | Session | Medium |
| TC016 | Verify user can log in after logout | Functional | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 4. Account Overview

| ID | Test Case | Type | Priority |
|---|---|---|---|
| TC017 | Verify Account Overview page displays correctly | UI / Functional | High |
| TC018 | Verify account balances are displayed | Functional | High |
| TC019 | Verify account details page | Functional | High |
| TC020 | Verify transaction history | Functional | High |
| TC021 | Verify multiple accounts are displayed | Functional | Medium |
| TC022 | Verify account overview after refresh | Session | Medium |
| TC023 | Verify transaction history for a new account | Functional | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 5. Open New Account

| ID | Test Case | Type | Priority |
|---|---|---|---|
| TC024 | Verify opening a new checking account | Functional | High |
| TC025 | Verify opening a new savings account | Functional | High |
| TC026 | Verify newly created account appears in Account Overview | Functional | High |
| TC027 | Verify unique account number is generated | Functional | Medium |
| TC028 | Verify initial account balance | Functional | Medium |
| TC029 | Verify opening multiple accounts | Functional | Medium |
| TC030 | Verify account creation using different funding accounts | Functional | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 6. Transfer Funds

| ID | Test Case | Type | Priority |
|---|---|---|---|
| TC031 | Verify successful transfer between accounts | Functional | Critical |
| TC032 | Verify transfer of entire account balance | Functional | High |
| TC033 | Verify transfer with zero amount | Negative | High |
| TC034 | Verify transfer with negative amount | Negative | High |
| TC035 | Verify transfer with decimal amount | Functional | Medium |
| TC036 | Verify transfer with a large amount | Boundary | Medium |
| TC037 | Verify transfer between the same account | Negative | Medium |
| TC038 | Verify transfer with empty amount | Validation | High |
| TC039 | Verify account balances update after transfer | Functional | Critical |
| TC040 | Verify transfer confirmation message | Functional | High |

[⬆ Back to Top](#in-page-navigation)

---

# 7. Bill Payment

| ID | Test Case | Type | Priority |
|---|---|---|---|
| TC041 | Verify successful bill payment | Functional | Critical |
| TC042 | Verify bill payment with empty required fields | Validation | High |
| TC043 | Verify bill payment with invalid account number | Negative | High |
| TC044 | Verify bill payment with empty amount | Validation | High |
| TC045 | Verify bill payment with negative amount | Negative | High |
| TC046 | Verify bill payment with decimal amount | Functional | Medium |
| TC047 | Verify bill payment with invalid ZIP code | Negative | Medium |
| TC048 | Verify bill payment with invalid phone number | Validation | Medium |
| TC049 | Verify payment confirmation message | Functional | High |

[⬆ Back to Top](#in-page-navigation)

---

# 8. Request Loan

| ID | Test Case | Type | Priority |
|---|---|---|---|
| TC050 | Verify successful loan request | Functional | High |
| TC051 | Verify loan request with zero amount | Negative | High |
| TC052 | Verify loan request with negative amount | Negative | High |
| TC053 | Verify loan request with empty required fields | Validation | High |
| TC054 | Verify loan request with large amount | Boundary | Medium |
| TC055 | Verify loan request using different accounts | Functional | Medium |
| TC056 | Verify loan approval or rejection message | Functional | High |

[⬆ Back to Top](#in-page-navigation)

---

# 9. Navigation & Logout

| ID | Test Case | Type | Priority |
|---|---|---|---|
| TC057 | Verify Home navigation link | UI / Navigation | Low |
| TC058 | Verify About Us page | UI / Navigation | Low |
| TC059 | Verify Services page | UI / Navigation | Low |
| TC060 | Verify Contact page | UI / Navigation | Low |
| TC061 | Verify successful logout | Functional | High |
| TC062 | Verify browser Back button after logout | Security / Session | High |

[⬆ Back to Top](#in-page-navigation)

---

# 10. Validation & Negative Testing

| ID | Test Case | Type | Priority |
|---|---|---|---|
| TC063 | Verify SQL injection-like input is handled safely | Security | High |
| TC064 | Verify HTML/script input is handled safely | Security | High |
| TC065 | Verify maximum input length validation | Boundary | Medium |
| TC066 | Verify leading and trailing spaces in input fields | Validation | Medium |
| TC067 | Verify Unicode characters in text fields | Validation | Low |
| TC068 | Verify browser refresh during form submission | Session / Functional | Medium |
| TC069 | Verify double-clicking the Submit button | Negative / Usability | Medium |
| TC070 | Verify multiple browser tabs with the same session | Security / Session | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# Test Design Coverage

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

# Test Case Status

These test cases represent the designed test suite.

Execution results are tracked separately:

➡️ [06_Test_Execution.md](06_Test_Execution.md)

---

⬅️ Back to QA ParaBank README

[QA-ParaBank-README.md](qa-parabank-README.md)
