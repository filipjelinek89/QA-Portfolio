# Test Execution

**Project:** ParaBank Manual Testing Project

**Version:** 1.1

**Prepared by:** Filip Jelinek

---

# 1. Purpose

This document contains the final manual test execution results for the ParaBank QA project.

---

# 2. Test Execution Summary

| Metric | Count |
|---|---:|
| Total Test Cases | 70 |
| Executed Test Cases | 70 |
| Passed | 47 |
| Failed | 16 |
| Blocked | 7 |
| Not Executed | 0 |

---

# 3. Execution Result

| Status | Count | Percentage |
|---|---:|---:|
| ✅ PASS | 47 | 67.1% |
| ❌ FAIL | 16 | 22.9% |
| ⏸️ BLOCKED | 7 | 10.0% |

---

# 4. Defect Summary

| Metric | Count |
|---|---:|
| Total Defects Reported | 16 |
| Failed Test Cases Linked to Defects | 16 |
| Blocked Test Cases | 7 |

---

# 5. Test Execution Log

| Test Case | Title | Status | Bug ID | Comments |
|---|---|---|---|---|
| [TC001](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC001%20%E2%80%93%20Verify%20Successful%20User%20Registration.md)  | Verify successful user registration | ✅ PASS | — | Works as expected |
| [TC002](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC002%20%E2%80%93%20Verify%20Registration%20with%20Required%20Fields%20Only.md) | Verify registration with required fields only | ✅ PASS | — | Works as expected |
| [TC003](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC003%20%E2%80%93%20Verify%20Registration%20with%20Empty%20Required%20Fields.md) | Verify registration with empty required fields | ✅ PASS | — | Works as expected |
| [TC004](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC004%20%E2%80%93%20Verify%20Registration%20with%20an%20Existing%20Username.md) | Verify registration with an existing username | ❌ FAIL | [BUG001](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG001_Registration_Unique_Username_Validation.md) | Defect reported |
| [TC005](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC005%20%E2%80%93%20Verify%20Password%20Confirmation%20Validation.md) | Verify password confirmation validation | ✅ PASS | — | Works as expected |
| [TC006](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC006%20%E2%80%93%20Verify%20Registration%20with%20Maximum%20Field%20Lengths.md) | Verify registration with maximum field lengths | ✅ PASS | — | Works as expected |
| [TC007](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC007%20%E2%80%93%20Verify%20Registration%20with%20Special%20Characters.md) | Verify registration with special characters | ❌ FAIL | [BUG002](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG002_Registration_Special_Characters_Accepted.md) | Defect reported |
| [TC008](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC008%20%E2%80%93%20Verify%20Registration%20with%20Invalid%20ZIP%20Code.md) | Verify registration with invalid ZIP code | ❌ FAIL | [BUG003](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG003_Registration_Numeric_Values_Accepted.md) | Defect reported |
| [TC009](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC009%20%E2%80%93%20Verify%20Login%20with%20Valid%20Credentials.md) | Verify login with valid credentials | ✅ PASS | — | Works as expected |
| [TC010](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC010%20%E2%80%93%20Verify%20Login%20with%20Invalid%20Password.md) | Verify login with invalid password | ✅ PASS | — | Works as expected |
| [TC011](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC011%20%E2%80%93%20Verify%20Login%20with%20Invalid%20Username.md) | Verify login with invalid username | ✅ PASS | — | Works as expected |
| [TC012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC012%20%E2%80%93%20Verify%20Login%20with%20Empty%20Username.md) | Verify login with empty username | ✅ PASS | — | Works as expected |
| [TC013](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC013%20%E2%80%93%20Verify%20Login%20with%20Empty%20Password.md) | Verify login with empty password | ✅ PASS | — | Works as expected |
| [TC014](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC014%20%E2%80%93%20Verify%20Login%20with%20Both%20Fields%20Empty.md) | Verify login with both fields empty | ✅ PASS | — | Works as expected |
| [TC015](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC015%20%E2%80%93%20Verify%20Session%20Persists%20After%20Page%20Refresh.md) | Verify session persists after page refresh | ✅ PASS | — | Works as expected |
| [TC016](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC016%20%E2%80%93%20Verify%20User%20Can%20Log%20In%20After%20Logout.md) | Verify user can log in after logout | ✅ PASS | — | Works as expected |
| [TC017](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC017%20%E2%80%93%20Verify%20Account%20Overview%20Page%20Displays%20Correctly.md) | Verify Account Overview page displays correctly | ✅ PASS | — | Works as expected |
| [TC018](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC018%20%E2%80%93%20Verify%20Account%20Balances%20Are%20Displayed%20Correctly.md) | Verify account balances are displayed | ✅ PASS | — | Works as expected |
| [TC019](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC019%20%E2%80%93%20Verify%20Account%20Details%20Page.md) | Verify account details page | ✅ PASS | — | Works as expected |
| [TC020](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC020%20%E2%80%93%20Verify%20Transaction%20History%20Display.md) | Verify transaction history | ✅ PASS | — | Works as expected |
| [TC021](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC021%20%E2%80%93%20Verify%20Multiple%20Accounts%20Are%20Displayed.md) | Verify multiple accounts are displayed | ✅ PASS | — | Works as expected |
| [TC022](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC022%20%E2%80%93%20Verify%20Account%20Overview%20After%20Page%20Refresh.md) | Verify account overview after refresh | ✅ PASS | — | Works as expected |
| [TC023](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC023%20%E2%80%93%20Verify%20Transaction%20History%20for%20a%20New%20Account.md) | Verify transaction history for a new account | ✅ PASS | — | Works as expected |
| [TC024](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC024%20%E2%80%93%20Verify%20Opening%20a%20New%20Checking%20Account.md) | Verify opening a new checking account | ✅ PASS | — | Works as expected |
| [TC025](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC025%20%E2%80%93%20Verify%20Opening%20a%20New%20Savings%20Account.md) | Verify opening a new savings account | ✅ PASS | — | Works as expected |
| [TC026](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC026%20%E2%80%93%20Verify%20Newly%20Created%20Account%20Appears%20in%20Account%20Overview.md) | Verify newly created account appears in Account Overview | ✅ PASS | — | Works as expected |
| [TC027](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC027%20%E2%80%93%20Verify%20New%20Account%20Receives%20a%20Unique%20Account%20Number.md) | Verify unique account number is generated | ✅ PASS | — | Works as expected |
| [TC028](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC028%20%E2%80%93%20Verify%20Initial%20Account%20Balance.md) | Verify initial account balance | ✅ PASS | — | Works as expected |
| [TC029](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC029%20%E2%80%93%20Verify%20Opening%20Multiple%20Accounts.md) | Verify opening multiple accounts | ✅ PASS | — | Works as expected |
| [TC030](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC030%20%E2%80%93%20Verify%20Account%20Creation%20Using%20Different%20Funding%20Accounts.md) | Verify account creation using different funding accounts | ✅ PASS | — | Works as expected |
| [TC031](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC031%20%E2%80%93%20Verify%20Successful%20Transfer%20Between%20Accounts.md) | Verify successful transfer between accounts | ✅ PASS | — | Works as expected |
| [TC032](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC032%20%E2%80%93%20Verify%20Transfer%20of%20Entire%20Account%20Balance.md) | Verify transfer of entire account balance | ✅ PASS | — | Works as expected |
| [TC033](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC033%20%E2%80%93%20Verify%20Transfer%20with%20Zero%20Amount.md) | Verify transfer with zero amount | ❌ FAIL | [BUG004](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG004_Transfer_Zero_Amount_Accepted.md) | Defect reported |
| [TC034](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC034%20%E2%80%93%20Verify%20Transfer%20with%20Negative%20Amount.md) | Verify transfer with negative amount | ❌ FAIL | [BUG005](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG005_Transfer_Negative_Amount_Accepted.md) | Defect reported |
| [TC035](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC035%20%E2%80%93%20Verify%20Transfer%20with%20Decimal%20Amount.md) | Verify transfer with decimal amount | ✅ PASS | — | Works as expected |
| [TC036](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC036%20%E2%80%93%20Verify%20Transfer%20with%20a%20Large%20Amount.md) | Verify transfer with a large amount | ❌ FAIL | [BUG006](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG006_Transfer_Exceeding_Balance_Accepted.md) | Defect reported |
| [TC037](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC037%20%E2%80%93%20Verify%20Transfer%20Between%20the%20Same%20Account.md) | Verify transfer between the same account | ✅ PASS | — | Works as expected |
| [TC038](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC038%20%E2%80%93%20Verify%20Transfer%20with%20Empty%20Amount.md) | Verify transfer with empty amount | ❌ FAIL | [BUG007](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG007_Transfer_Empty_Amount_Internal_Error.md) | Defect reported |
| [TC039](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC039%20%E2%80%93%20Verify%20Account%20Balances%20Update%20After%20Transfer.md) | Verify account balances update after transfer | ✅ PASS | — | Works as expected |
| [TC040](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC040%20%E2%80%93%20Verify%20Transfer%20Confirmation%20Message.md) | Verify transfer confirmation message | ✅ PASS | — | Works as expected |
| [TC041](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC041%20%E2%80%93%20Verify%20Successful%20Bill%20Payment.md) | Verify successful bill payment | ✅ PASS | — | Works as expected |
| [TC042](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC042%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Empty%20Required%20Fields.md) | Verify bill payment with empty required fields | ✅ PASS | — | Works as expected |
| [TC043](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC043%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Non-Existent%20Account%20Number.md) | Verify bill payment with invalid account number | ❌ FAIL | [BUG008](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG008_Bill_Payment_Non_Existent_Account_Accepted.md) | Defect reported |
| [TC044](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC044%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Empty%20Amount.md) | Verify bill payment with empty amount | ✅ PASS | — | Works as expected |
| [TC045](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC045%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Negative%20Amount.md) | Verify bill payment with negative amount | ❌ FAIL | [BUG009](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG009_Bill_Payment_Negative_Amount_Accepted.md) | Defect reported |
| [TC046](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC046%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Decimal%20Amount.md) | Verify bill payment with decimal amount | ✅ PASS | — | Works as expected |
| [TC047](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC047%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Invalid%20ZIP%20Code.md) | Verify bill payment with invalid ZIP code | ❌ FAIL | [BUG010](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG010_Bill_Payment_Invalid_ZIP_Code_Accepted.md) | Defect reported |
| [TC048](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC048%20%E2%80%93%20Verify%20Bill%20Payment%20with%20Invalid%20Phone%20Number.md) | Verify bill payment with invalid phone number | ❌ FAIL | [BUG011](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG011_Bill_Payment_Invalid_Phone_Number_Accepted.md) | Defect reported |
| [TC049](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC049%20%E2%80%93%20Verify%20Payment%20Confirmation%20Message.md) | Verify payment confirmation message | ✅ PASS | — | Works as expected |
| [TC050](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC050%20%E2%80%93%20Verify%20Successful%20Loan%20Request.md) | Verify successful loan request | ❌ FAIL | [BUG012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG012_Loan_Request_Internal_Error.md) | Defect reported |
| [TC051](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC051%20%E2%80%93%20Verify%20Loan%20Request%20with%20Zero%20Amount.md) | Verify loan request with zero amount | ⏸️ BLOCKED | [BUG012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG012_Loan_Request_Internal_Error.md) | Blocked by loan defect |
| [TC052](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC052%20%E2%80%93%20Verify%20Loan%20Request%20with%20Negative%20Amount.md) | Verify loan request with negative amount | ⏸️ BLOCKED | [BUG012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG012_Loan_Request_Internal_Error.md) | Blocked by loan defect |
| [TC053](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC053%20%E2%80%93%20Verify%20Loan%20Request%20with%20Empty%20Required%20Fields.md) | Verify loan request with empty required fields | ⏸️ BLOCKED | [BUG012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG012_Loan_Request_Internal_Error.md) | Blocked by loan defect |
| [TC054](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC054%20%E2%80%93%20Verify%20Loan%20Request%20with%20a%20Large%20Amount.md) | Verify loan request with large amount | ⏸️ BLOCKED | [BUG012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG012_Loan_Request_Internal_Error.md) | Blocked by loan defect |
| [TC055](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC055%20%E2%80%93%20Verify%20Loan%20Request%20Using%20Different%20Accounts.md) | Verify loan request using different accounts | ⏸️ BLOCKED | [BUG012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG012_Loan_Request_Internal_Error.md) | Blocked by loan defect |
| [TC056](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC056%20%E2%80%93%20Verify%20Loan%20Approval%20or%20Rejection%20Message.md) | Verify loan approval or rejection message | ⏸️ BLOCKED | [BUG012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG012_Loan_Request_Internal_Error.md) | Blocked by loan defect |
| [TC057](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC057%20%E2%80%93%20Verify%20Home%20Page%20Navigation.md) | Verify Home navigation link | ⏸️ BLOCKED | [BUG012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG012_Loan_Request_Internal_Error.md) | Blocked by loan defect |
| [TC058](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC058%20%E2%80%93%20Verify%20About%20Us%20Page.md) | Verify About Us page | ✅ PASS | — | Works as expected |
| [TC059](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC059%20%E2%80%93%20Verify%20Services%20Page%20Navigation.md) | Verify Services page | ✅ PASS | — | Works as expected |
| [TC060](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC060%20%E2%80%93%20Verify%20Contact%20Us%20Page.md) | Verify Contact page | ✅ PASS | — | Works as expected |
| [TC061](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC061%20%E2%80%93%20Verify%20Successful%20Logout.md) | Verify successful logout | ✅ PASS | — | Works as expected |
| [TC062](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC062%20%E2%80%93%20Verify%20Browser%20Back%20Button%20After%20Logout.md) | Verify browser Back button after logout | ❌ FAIL | [BUG013](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG013_Back_Button_Access_After_Logout.md) | Defect reported |
| [TC063](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC063%20%E2%80%93%20Verify%20SQL-Like%20Input%20Handling%20During%20User%20Registration.md) | Verify SQL injection-like input is handled safely | ✅ PASS | — | Works as expected |
| [TC064](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC064%20%E2%80%93%20Verify%20HTML%20JavaScript%20Input%20is%20Handled%20Safely.md) | Verify HTML/script input is handled safely | ❌ FAIL | [BUG014](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG014_HTML_JavaScript_Input_Security_Block.md) | Defect reported |
| [TC065](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC065%20%E2%80%93%20Verify%20Maximum%20Input%20Length%20Validation.md) | Verify maximum input length validation | ✅ PASS | — | Works as expected |
| [TC066](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC066%20%E2%80%93%20Verify%20Leading%20and%20Trailing%20Spaces%20in%20Input%20Fields.md) | Verify leading and trailing spaces in input fields | ✅ PASS | — | Works as expected |
| [TC067](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC067%20%E2%80%93%20Verify%20Unicode%20Characters%20in%20Text%20Fields.md) | Verify Unicode characters in text fields | ❌ FAIL | [BUG015](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG015_Unicode_Characters_Not_Handled_Correctly.md) | Defect reported |
| [TC068](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC068%20%E2%80%93%20Verify%20Browser%20Refresh%20During%20Form%20Submission.md) | Verify browser refresh during form submission | ✅ PASS | — | Works as expected |
| [TC069](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC069%20%E2%80%93%20Verify%20Double-Clicking%20the%20Submit%20Button.md) | Verify double-clicking the Submit button | ✅ PASS | — | Works as expected |
| [TC070](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/03_Test_Cases/TC070%20%E2%80%93%20Verify%20Multiple%20Browser%20Tabs%20with%20the%20Same%20Session.md) | Verify multiple browser tabs with the same session | ❌ FAIL | [BUG016](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports/BUG016_Multiple_Browser_Tabs_Session_Internal_Error.md) | Defect reported |


---

# 6. Notes

- Complete manual regression cycle executed.
- Failed scenarios are documented in 04_Bug_Reports.
- Blocked scenarios are caused by unresolved defects.
- Testing included functional, negative, validation, boundary, security and session testing.

---

# Document Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.1 | 2026-07-05 | Filip Jelinek | Final execution update |

---

⬅️ Back to QA ParaBank README

[QA-ParaBank-README.md](qa-parabank-README.md)
