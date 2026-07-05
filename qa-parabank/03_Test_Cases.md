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
| [TC007](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC007%20%E2%80%93%20Verify%20Registration%20with%20Special%20Characters.md) | Verify registration with special characters | Validation | Medium |
| [TC008](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC008%20%E2%80%93%20Verify%20Registration%20with%20Invalid%20ZIP%20Code.md) | Verify registration with invalid ZIP code | Negative | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 3. Login

| ID | Test Case | Type | Priority |
|---|---|---|---|
| [TC009](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC009%20%E2%80%93%20Verify%20Login%20with%20Valid%20Credentials.md) | Verify login with valid credentials | Functional | High |
| [TC010](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC010%20%E2%80%93%20Verify%20Login%20with%20Invalid%20Password.md) | Verify login with invalid password | Negative | High |
| [TC011](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC011%20%E2%80%93%20Verify%20Login%20with%20Invalid%20Username.md) | Verify login with invalid username | Negative | High |
| [TC012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC012%20%E2%80%93%20Verify%20Login%20with%20Empty%20Username.md) | Verify login with empty username | Validation | High |
| [TC013](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC013%20%E2%80%93%20Verify%20Login%20with%20Empty%20Password.md)| Verify login with empty password | Validation | High |
| [TC014](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC014%20%E2%80%93%20Verify%20Login%20with%20Both%20Fields%20Empty.md) | Verify login with both fields empty | Validation | High |
| [TC015](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC015%20%E2%80%93%20Verify%20Session%20Persists%20After%20Page%20Refresh.md) | Verify session persists after page refresh | Session | Medium |
| [TC016](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC016%20%E2%80%93%20Verify%20User%20Can%20Log%20In%20After%20Logout.md) | Verify user can log in after logout | Functional | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 4. Account Overview

| ID | Test Case | Type | Priority |
|---|---|---|---|
| [TC017](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC017%20%E2%80%93%20Verify%20Account%20Overview%20Page%20Displays%20Correctly.md) | Verify Account Overview page displays correctly | UI / Functional | High |
| [TC018](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC018%20%E2%80%93%20Verify%20Account%20Balances%20Are%20Displayed%20Correctly.md) | Verify account balances are displayed | Functional | High |
| [TC019](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC019%20%E2%80%93%20Verify%20Account%20Details%20Page.md) | Verify account details page | Functional | High |
| [TC020](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC020%20%E2%80%93%20Verify%20Transaction%20History%20Display.md) | Verify transaction history | Functional | High |
| [TC021](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC021%20%E2%80%93%20Verify%20Multiple%20Accounts%20Are%20Displayed.md) | Verify multiple accounts are displayed | Functional | Medium |
| [TC022](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC022%20%E2%80%93%20Verify%20Account%20Overview%20After%20Page%20Refresh.md) | Verify account overview after refresh | Session | Medium |
| [TC023](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC023%20%E2%80%93%20Verify%20Transaction%20History%20for%20a%20New%20Account.md) | Verify transaction history for a new account | Functional | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 5. Open New Account

| ID | Test Case | Type | Priority |
|---|---|---|---|
| [TC024](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC024%20%E2%80%93%20Verify%20Opening%20a%20New%20Checking%20Account.md) | Verify opening a new checking account | Functional | High |
| [TC025](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC025%20%E2%80%93%20Verify%20Opening%20a%20New%20Savings%20Account.md) | Verify opening a new savings account | Functional | High |
| [TC026](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC026%20%E2%80%93%20Verify%20Newly%20Created%20Account%20Appears%20in%20Account%20Overview.md) | Verify newly created account appears in Account Overview | Functional | High |
| [TC027](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC027%20%E2%80%93%20Verify%20New%20Account%20Receives%20a%20Unique%20Account%20Number.md) | Verify unique account number is generated | Functional | Medium |
| [TC028](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC028%20%E2%80%93%20Verify%20Initial%20Account%20Balance.md) | Verify initial account balance | Functional | Medium |
| [TC029](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC029%20%E2%80%93%20Verify%20Opening%20Multiple%20Accounts.md) | Verify opening multiple accounts | Functional | Medium |
| [TC030](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC030%20%E2%80%93%20Verify%20Account%20Creation%20Using%20Different%20Funding%20Accounts.md) | Verify account creation using different funding accounts | Functional | Medium |

[⬆ Back to Top](#in-page-navigation)

---

# 6. Transfer Funds

| ID | Test Case | Type | Priority |
|---|---|---|---|
| [TC031](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC031%20%E2%80%93%20Verify%20Successful%20Transfer%20Between%20Accounts.md) | Verify successful transfer between accounts | Functional | Critical |
| [TC032](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC032%20%E2%80%93%20Verify%20Transfer%20of%20Entire%20Account%20Balance.md) | Verify transfer of entire account balance | Functional | High |
| [TC033](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC033%20%E2%80%93%20Verify%20Transfer%20with%20Zero%20Amount.md) | Verify transfer with zero amount | Negative | High |
| [TC034](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC034%20%E2%80%93%20Verify%20Transfer%20with%20Negative%20Amount.md) | Verify transfer with negative amount | Negative | High |
| [TC035](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC035%20%E2%80%93%20Verify%20Transfer%20with%20Decimal%20Amount.md) | Verify transfer with decimal amount | Functional | Medium |
| [TC036](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC036%20%E2%80%93%20Verify%20Transfer%20with%20a%20Large%20Amount.md) | Verify transfer with a large amount | Boundary | Medium |
| [TC037](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC037%20%E2%80%93%20Verify%20Transfer%20Between%20the%20Same%20Account.md) | Verify transfer between the same account | Negative | Medium |
| [TC038](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC038%20%E2%80%93%20Verify%20Transfer%20with%20Empty%20Amount.md) | Verify transfer with empty amount | Validation | High |
| [TC039](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC039%20%E2%80%93%20Verify%20Account%20Balances%20Update%20After%20Transfer.md) | Verify account balances update after transfer | Functional | Critical |
| [TC040](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC040%20%E2%80%93%20Verify%20Transfer%20Confirmation%20Message.md) | Verify transfer confirmation message | Functional | High |

[⬆ Back to Top](#in-page-navigation)

---

# 7. Bill Payment

| ID | Test Case | Type | Priority |
|---|---|---|---|
| [TC041](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC041%20%E2%80%93%20Verify%20Successful%20Bill%20Payment.md) | Verify successful bill payment | Functional | Critical |
| [TC042](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC042%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Empty%20Required%20Fields.md) | Verify bill payment with empty required fields | Validation | High |
| [TC043](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC043%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Non-Existent%20Account%20Number.md) | Verify bill payment with invalid account number | Negative | High |
| [TC044](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC044%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Empty%20Amount.md) | Verify bill payment with empty amount | Validation | High |
| [TC045](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC045%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Negative%20Amount.md)| Verify bill payment with negative amount | Negative | High |
| [TC046](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC046%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Decimal%20Amount.md) | Verify bill payment with decimal amount | Functional | Medium |
| [TC047](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC047%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Invalid%20ZIP%20Code.md) | Verify bill payment with invalid ZIP code | Negative | Medium |
| [TC048](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC048%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Invalid%20Phone%20Number.md) | Verify bill payment with invalid phone number | Validation | Medium |
| [TC049](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC049%20%E2%80%93%20Verify%20Payment%20Confirmation%20Message.md) | Verify payment confirmation message | Functional | High |

[⬆ Back to Top](#in-page-navigation)

---

# 8. Request Loan

| ID | Test Case | Type | Priority |
|---|---|---|---|
| [TC050](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC050%20%E2%80%93%20Verify%20Successful%20Loan%20Request.md) | Verify successful loan request | Functional | High |
| [TC051](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC051%20%E2%80%93%20Verify%20Loan%20Request%20with%20Zero%20Amount.md) | Verify loan request with zero amount | Negative | High |
| [TC052](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC052%20%E2%80%93%20Verify%20Loan%20Request%20with%20Negative%20Amount.md) | Verify loan request with negative amount | Negative | High |
| [TC053](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC053%20%E2%80%93%20Verify%20Loan%20Request%20with%20Empty%20Required%20Fields.md) | Verify loan request with empty required fields | Validation | High |
| [TC054](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC054%20%E2%80%93%20Verify%20Loan%20Request%20with%20a%20Large%20Amount.md) | Verify loan request with large amount | Boundary | Medium |
| [TC055](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC055%20%E2%80%93%20Verify%20Loan%20Request%20Using%20Different%20Accounts.md) | Verify loan request using different accounts | Functional | Medium |
| [TC056](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC056%20%E2%80%93%20Verify%20Loan%20Approval%20or%20Rejection%20Message.md) | Verify loan approval or rejection message | Functional | High |

[⬆ Back to Top](#in-page-navigation)

---

# 9. Navigation & Logout

| ID | Test Case | Type | Priority |
|---|---|---|---|
| [TC057](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC057%20%E2%80%93%20Verify%20Home%20Page%20Navigation.md) | Verify Home navigation link | UI / Navigation | Low |
| [TC058](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC058%20%E2%80%93%20Verify%20About%20Us%20Page.md) | Verify About Us page | UI / Navigation | Low |
| [TC059](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC059%20%E2%80%93%20Verify%20Services%20Page%20Navigation.md) | Verify Services page | UI / Navigation | Low |
| [TC060](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC060%20%E2%80%93%20Verify%20Contact%20Us%20Page.md) | Verify Contact page | UI / Navigation | Low |
| [TC061](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC061%20%E2%80%93%20Verify%20Successful%20Logout.md) | Verify successful logout | Functional | High |
| [TC062](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC062%20%E2%80%93%20Verify%20Browser%20Back%20Button%20After%20Logout.md) | Verify browser Back button after logout | Security / Session | High |

[⬆ Back to Top](#in-page-navigation)

---

# 10. Validation & Negative Testing

| ID | Test Case | Type | Priority |
|---|---|---|---|
| [TC063](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC063%20%E2%80%93%20Verify%20SQL-Like%20Input%20Handling%20During%20User%20Registration.md) | Verify SQL injection-like input is handled safely | Security | High |
| [TC064](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC064%20%E2%80%93%20Verify%20HTML%20JavaScript%20Input%20is%20Handled%20Safely.md) | Verify HTML/script input is handled safely | Security | High |
| [TC065](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC065%20%E2%80%93%20Verify%20Maximum%20Input%20Length%20Validation.md) | Verify maximum input length validation | Boundary | Medium |
| [TC066](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC066%20%E2%80%93%20Verify%20Leading%20and%20Trailing%20Spaces%20in%20Input%20Fields.md) | Verify leading and trailing spaces in input fields | Validation | Medium |
| [TC067](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC067%20%E2%80%93%20Verify%20Unicode%20Characters%20in%20Text%20Fields.md) | Verify Unicode characters in text fields | Validation | Low |
| [TC068](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC068%20%E2%80%93%20Verify%20Browser%20Refresh%20During%20Form%20Submission.md) | Verify browser refresh during form submission | Session / Functional | Medium |
| [TC069](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC069%20%E2%80%93%20Verify%20Double-Clicking%20the%20Submit%20Button.md) | Verify double-clicking the Submit button | Negative / Usability | Medium |
| [TC070](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC070%20%E2%80%93%20Verify%20Multiple%20Browser%20Tabs%20with%20the%20Same%20Session.md) | Verify multiple browser tabs with the same session | Security / Session | Medium |

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
