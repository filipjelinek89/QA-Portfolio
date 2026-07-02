# Test Cases

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

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

| Module                        | Number of Test Cases |
| ----------------------------- | :------------------: |
| User Registration             |           8          |
| Login                         |           8          |
| Account Overview              |           7          |
| Open New Account              |           7          |
| Transfer Funds                |          10          |
| Bill Payment                  |           9          |
| Request Loan                  |           7          |
| Navigation & Logout           |           6          |
| Validation & Negative Testing |           8          |
| **Total**                     |        **70**        |

---

# 2. User Registration

| ID    | Test Case                                      | Priority | Status       |
| ----- | ---------------------------------------------- | -------- | ------------ |
| TC001 | Verify successful user registration            | High     | Not Executed |
| TC002 | Verify registration with required fields only  | High     | Not Executed |
| TC003 | Verify registration with empty required fields | High     | Not Executed |
| TC004 | Verify registration with an existing username  | High     | Not Executed |
| TC005 | Verify password confirmation validation        | High     | Not Executed |
| TC006 | Verify registration with maximum field lengths | Medium   | Not Executed |
| TC007 | Verify registration with special characters    | Medium   | Not Executed |
| TC008 | Verify registration with invalid ZIP code      | Medium   | Not Executed |

[⬆ Back to Top](#in-page-navigation)

---

# 3. Login

| ID    | Test Case                                  | Priority | Status       |
| ----- | ------------------------------------------ | -------- | ------------ |
| TC009 | Verify login with valid credentials        | High     | Not Executed |
| TC010 | Verify login with invalid password         | High     | Not Executed |
| TC011 | Verify login with invalid username         | High     | Not Executed |
| TC012 | Verify login with empty username           | High     | Not Executed |
| TC013 | Verify login with empty password           | High     | Not Executed |
| TC014 | Verify login with both fields empty        | High     | Not Executed |
| TC015 | Verify session persists after page refresh | Medium   | Not Executed |
| TC016 | Verify user can log in after logout        | Medium   | Not Executed |

[⬆ Back to Top](#in-page-navigation)

---

# 4. Account Overview

| ID    | Test Case                                       | Priority | Status       |
| ----- | ----------------------------------------------- | -------- | ------------ |
| TC017 | Verify Account Overview page displays correctly | High     | Not Executed |
| TC018 | Verify account balances are displayed           | High     | Not Executed |
| TC019 | Verify account details page                     | High     | Not Executed |
| TC020 | Verify transaction history                      | High     | Not Executed |
| TC021 | Verify multiple accounts are displayed          | Medium   | Not Executed |
| TC022 | Verify account overview after refresh           | Medium   | Not Executed |
| TC023 | Verify transaction history for a new account    | Medium   | Not Executed |

[⬆ Back to Top](#in-page-navigation)

---

# 5. Open New Account

| ID    | Test Case                                                | Priority | Status       |
| ----- | -------------------------------------------------------- | -------- | ------------ |
| TC024 | Verify opening a new checking account                    | High     | Not Executed |
| TC025 | Verify opening a new savings account                     | High     | Not Executed |
| TC026 | Verify newly created account appears in Account Overview | High     | Not Executed |
| TC027 | Verify unique account number is generated                | Medium   | Not Executed |
| TC028 | Verify initial account balance                           | Medium   | Not Executed |
| TC029 | Verify opening multiple accounts                         | Medium   | Not Executed |
| TC030 | Verify account creation using different funding accounts | Medium   | Not Executed |

[⬆ Back to Top](#in-page-navigation)

---

# 6. Transfer Funds

| ID    | Test Case                                     | Priority | Status       |
| ----- | --------------------------------------------- | -------- | ------------ |
| TC031 | Verify successful transfer between accounts   | Critical | Not Executed |
| TC032 | Verify transfer of entire account balance     | High     | Not Executed |
| TC033 | Verify transfer with zero amount              | High     | Not Executed |
| TC034 | Verify transfer with negative amount          | High     | Not Executed |
| TC035 | Verify transfer with decimal amount           | Medium   | Not Executed |
| TC036 | Verify transfer with a large amount           | Medium   | Not Executed |
| TC037 | Verify transfer between the same account      | Medium   | Not Executed |
| TC038 | Verify transfer with empty amount             | High     | Not Executed |
| TC039 | Verify account balances update after transfer | Critical | Not Executed |
| TC040 | Verify transfer confirmation message          | High     | Not Executed |

[⬆ Back to Top](#in-page-navigation)

---

# 7. Bill Payment

| ID    | Test Case                                       | Priority | Status       |
| ----- | ----------------------------------------------- | -------- | ------------ |
| TC041 | Verify successful bill payment                  | Critical | Not Executed |
| TC042 | Verify bill payment with empty required fields  | High     | Not Executed |
| TC043 | Verify bill payment with invalid account number | High     | Not Executed |
| TC044 | Verify bill payment with empty amount           | High     | Not Executed |
| TC045 | Verify bill payment with negative amount        | High     | Not Executed |
| TC046 | Verify bill payment with decimal amount         | Medium   | Not Executed |
| TC047 | Verify bill payment with invalid ZIP code       | Medium   | Not Executed |
| TC048 | Verify bill payment with invalid phone number   | Medium   | Not Executed |
| TC049 | Verify payment confirmation message             | High     | Not Executed |

[⬆ Back to Top](#in-page-navigation)

---

# 8. Request Loan

| ID    | Test Case                                      | Priority | Status       |
| ----- | ---------------------------------------------- | -------- | ------------ |
| TC050 | Verify successful loan request                 | High     | Not Executed |
| TC051 | Verify loan request with zero amount           | High     | Not Executed |
| TC052 | Verify loan request with negative amount       | High     | Not Executed |
| TC053 | Verify loan request with empty required fields | High     | Not Executed |
| TC054 | Verify loan request with large amount          | Medium   | Not Executed |
| TC055 | Verify loan request using different accounts   | Medium   | Not Executed |
| TC056 | Verify loan approval or rejection message      | High     | Not Executed |

[⬆ Back to Top](#in-page-navigation)

---

# 9. Navigation & Logout

| ID    | Test Case                               | Priority | Status       |
| ----- | --------------------------------------- | -------- | ------------ |
| TC057 | Verify Home navigation link             | Low      | Not Executed |
| TC058 | Verify About Us page                    | Low      | Not Executed |
| TC059 | Verify Services page                    | Low      | Not Executed |
| TC060 | Verify Contact page                     | Low      | Not Executed |
| TC061 | Verify successful logout                | High     | Not Executed |
| TC062 | Verify browser Back button after logout | High     | Not Executed |

[⬆ Back to Top](#in-page-navigation)

---

# 10. Validation & Negative Testing

| ID    | Test Case                                          | Priority | Status       |
| ----- | -------------------------------------------------- | -------- | ------------ |
| TC063 | Verify SQL injection-like input is handled safely  | High     | Not Executed |
| TC064 | Verify HTML/script input is handled safely         | High     | Not Executed |
| TC065 | Verify maximum input length validation             | Medium   | Not Executed |
| TC066 | Verify leading and trailing spaces in input fields | Medium   | Not Executed |
| TC067 | Verify Unicode characters in text fields           | Low      | Not Executed |
| TC068 | Verify browser refresh during form submission      | Medium   | Not Executed |
| TC069 | Verify double-clicking the Submit button           | Medium   | Not Executed |
| TC070 | Verify multiple browser tabs with the same session | Medium   | Not Executed |

[⬆ Back to Top](#in-page-navigation)
