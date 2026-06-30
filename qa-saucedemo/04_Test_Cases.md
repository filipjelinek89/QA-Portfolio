# Test Cases

**Project:** SauceDemo Manual Testing Project

**Version:** 2.0

**Prepared by:** Filip Jelinek

---

# Purpose

This document provides an overview of all manual test cases created for the SauceDemo application.

The test cases are organized by functional area and linked to their individual Markdown documents. Each test case follows a standardized structure including Preconditions, Test Data, Test Steps, Expected Result, Actual Result, Status, and Notes.

---

# Test Case Summary

| Module               | Number of Test Cases |
| -------------------- | -------------------: |
| Login                |                    7 |
| Inventory            |                    6 |
| Product Details      |                    4 |
| Shopping Cart        |                    8 |
| Checkout             |                   10 |
| Navigation & Session |                    7 |
| **Total**            |               **42** |

---

# In-page Navigation

* [Login](#login)
* [Inventory](#inventory)
* [Product Details](#product-details)
* [Shopping Cart](#shopping-cart)
* [Checkout](#checkout)
* [Navigation & Session](#navigation--session)
* [Test Execution Status](#test-execution-status)

---

# Login

| ID                                             | Test Case                    | Priority | Requirement | Status         |
| ---------------------------------------------- | ---------------------------- | -------- | ----------- | -------------- |
| [TC001](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC001%20%23U2013%20Successful%20Login.md)             | Successful Login             | High     | FR-001      | ✅ Passed     |
| [TC002](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC002%20%23U2013%20Login%20with%20Invalid%20Password.md)  | Login with Invalid Password  | High     | FR-001      | ✅ Passed |
| [TC003](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC003%20%23U2013%20Login%20with%20Invalid%20Username.md)  | Login with Invalid Username  | High     | FR-001      | ✅ Passed |
| [TC004](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC004%20%23U2013%20Login%20with%20Empty%20Username.md)    | Login with Empty Username    | Medium   | FR-001      | ✅ Passed |
| [TC005](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC005%20%23U2013%20Login%20with%20Empty%20Password.md)    | Login with Empty Password    | Medium   | FR-001      | ✅ Passed |
| [TC006](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC006%20%23U2013%20Login%20with%20Empty%20Username%20and%20Password.md) | Login with Empty Credentials | Medium   | FR-001      | ✅ Passed |
| [TC007](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC007%20%23U2013%20Login%20with%20Locked%20User.md)       | Login with Locked User       | High     | FR-001      | ✅ Passed |

---

# Inventory

| ID                                                    | Test Case                                   | Priority | Requirement | Status         |
| ----------------------------------------------------- | ------------------------------------------- | -------- | ----------- | -------------- |
| [TC008](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC008%20%23U2013%20Verify%20Inventory%20Page%20Display.md)       | Verify Inventory Page Display               | High     | FR-002      | ✅ Passed |
| [TC009](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC009%20%23U2013%20Verify%20Product%20Information.md)          | Verify Product Information                  | Medium   | FR-002      | ❌ Failed |
| [TC010](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC010%20%23U2013%20Verify%20Add%20to%20Cart%20Button%20Functionality.md)           | Verify "Add to Cart" Button Functionality   | High     | FR-002      | ✅ Passed |
| [TC011](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC011%20%23U2013%20Verify%20Product%20Details%20Navigation.md)   | Verify Product Details Navigation           | High     | FR-003      | ✅ Passed |
| [TC012](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC012%20%23U2013%20Verify%20Shopping%20Cart%20Badge%20Update.md)   | Verify Shopping Cart Badge Update           | High     | FR-004      | ✅ Passed |
| [TC013](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC013%20%23U2013%20Verify%20Inventory%20Page%20After%20Browser%20Refresh.md) | Verify Inventory Page After Browser Refresh | Medium   | FR-002      | ✅ Passed |

---

# Product Details

| ID                                                                   | Test Case                                           | Priority | Requirement | Status         |
| -------------------------------------------------------------------- | --------------------------------------------------- | -------- | ----------- | -------------- |
| [TC014](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC014%20%23U2013%20Verify%20Product%20Information%20on%20Product%20Details%20Page.md) | Verify Product Information on Product Details Page  | High     | FR-003      | ❌ Failed |
| [TC015](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC015%20%23U2013%20Verify%20Add%20to%20Cart%20Button%20on%20Product%20Details%20Page.md)         | Verify "Add to Cart" Button on Product Details Page | High     | FR-003      | ✅ Passed |
| [TC016](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC016%20%23U2013%20Verify%20Remove%20Button%20on%20Product%20Details%20Page.md)       | Verify "Remove" Button on Product Details Page      | High     | FR-003      | ❌ Failed |
| [TC017](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC017%20%23U2013%20Verify%20Back%20to%20Products%20Navigation.md)                 | Verify "Back to Products" Navigation                | Medium   | FR-003      | ✅ Passed |

---

# Shopping Cart

| ID                                                                       | Test Case                                              | Priority | Requirement | Status         |
| ------------------------------------------------------------------------ | ------------------------------------------------------ | -------- | ----------- | -------------- |
| [TC018](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC018%20%23U2013%20Verify%20Shopping%20Cart%20Page.md)                              | Verify Shopping Cart Page                              | High     | FR-004      | ✅ Passed |
| [TC019](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC019%20%23U2013%20Verify%20Single%20Product%20in%20Shopping%20Cart.md)                 | Verify Single Product in Shopping Cart                 | High     | FR-004      | ✅ Passed |
| [TC020](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC020%20%23U2013%20Verify%20Multiple%20Products%20in%20Shopping%20Cart.md)              | Verify Multiple Products in Shopping Cart              | High     | FR-004      | ❌ Failed |
| [TC021](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC021%20%23U2013%20Verify%20Remove%20Product%20from%20Shopping%20Cart.md)               | Verify Remove Product from Shopping Cart               | High     | FR-004      | ❌ Failed |
| [TC022](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC022%20%23U2013%20Verify%20Continue%20Shopping%20Button.md)                        | Verify "Continue Shopping" Button                      | Medium   | FR-004      | ✅ Passed |
| [TC023](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC023%20%23U2013%20Verify%20Checkout%20Button.md)                                 | Verify Checkout Button                                 | High     | FR-005      | ✅ Passed |
| [TC024](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC024%20%23U2013%20Verify%20Empty%20Shopping%20Cart%20After%20Removing%20All%20Products.md) | Verify Empty Shopping Cart After Removing All Products | Medium   | FR-004      | ✅ Passed |
| [TC025](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC025%20%23U2013%20Verify%20Shopping%20Cart%20Persistence%20After%20Browser%20Refresh.md) | Verify Shopping Cart Persistence After Browser Refresh | Medium   | FR-004      | ✅ Passed |

---

# Checkout

| ID                                                               | Test Case                                        | Priority | Requirement | Status         |
| ---------------------------------------------------------------- | ------------------------------------------------ | -------- | ----------- | -------------- |
| [TC026](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC026%20%23U2013%20Verify%20Checkout%20Your%20Information%20Page.md)          | Verify Checkout: Your Information Page           | High     | FR-005      | ✅ Passed |
| [TC027](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC027%20%23U2013%20Complete%20Checkout%20Information%20with%20Valid%20Data.md)  | Complete Checkout Information with Valid Data    | High     | FR-005      | ❌ Failed |
| [TC028](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC028%20%23U2013%20Verify%20Checkout%20with%20Empty%20First%20Name.md)          | Verify Checkout with Empty First Name            | Medium   | FR-005      | ✅ Passed |
| [TC029](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC029%20%23U2013%20Verify%20Checkout%20with%20Empty%20Last%20Name.md)           | Verify Checkout with Empty Last Name             | Medium   | FR-005      | ❌ Failed |
| [TC030](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC030%20%23U2013%20Verify%20Checkout%20with%20Empty%20Postal%20Code.md)         | Verify Checkout with Empty Postal Code           | Medium   | FR-005      | ✅ Passed |
| [TC031](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC031%20%23U2013%20Verify%20Checkout%20Overview%20Page.md)                  | Verify Checkout: Overview Page                   | High     | FR-005      | ✅ Passed |
| [TC032](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC032%20%23U2013%20Verify%20Successful%20Order%20Completion.md)             | Verify Successful Order Completion               | High     | FR-005      | ❌ Failed |
| [TC033](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC033%20%23U2013%20Verify%20Cancel%20Checkout%20from%20Checkout%20Overview.md)  | Verify Cancel Checkout from Checkout: Overview   | Medium   | FR-005      | ✅ Passed |
| [TC034](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC034%20%23U2013%20Verify%20Order%20Confirmation%20Page.md)                 | Verify Order Confirmation Page                   | High     | FR-005      | ❌ Failed |
| [TC035](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC035%20%23U2013%20Verify%20Back%20Home%20Button%20After%20Order%20Completion.md) | Verify "Back Home" Button After Order Completion | Medium   | FR-005      | ❌ Failed |

---

# Navigation & Session

| ID                                                                         | Test Case                                                | Priority | Requirement | Status         |
| -------------------------------------------------------------------------- | -------------------------------------------------------- | -------- | ----------- | -------------- |
| [TC036](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC036%20%23U2013%20Verify%20Product%20Sorting%20by%20Name%20(A%23U2013Z).md)                       | Verify Product Sorting by Name (A–Z)                     | Medium   | FR-006      | ✅ Passed |
| [TC037](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC037%20%23U2013%20Verify%20Product%20Sorting%20by%20Price%20(Low%20to%20High).md)              | Verify Product Sorting by Price (Low to High)            | Medium   | FR-006      | ❌ Failed |
| [TC038](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC038%20%23U2013%20Verify%20Burger%20Menu%20Opens.md)                                 | Verify Burger Menu Opens                                 | Medium   | FR-007      | ✅ Passed |
| [TC039](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC039%20%23U2013%20Verify%20User%20Logout.md)                                       | Verify User Logout                                       | High     | FR-007      | ✅ Passed |
| [TC040](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC040%20%23U2013%20Verify%20Reset%20App%20State.md)                                   | Verify Reset App State                                   | Medium   | FR-007      | ✅ Passed |
| [TC041](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC041%20%23U2013%20Verify%20About%20Link.md)                                        | Verify About Link                                        | Low      | FR-007      | ❌ Failed |
| [TC042](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/04_Test_Cases/TC042%20%23U2013%20Verify%20Direct%20Access%20to%20Inventory%20Without%20Authentication.md) | Verify Direct Access to Inventory Without Authentication | High     | FR-001      | ✅ Passed |

---

# Test Execution Status

Current Progress

| Status         |  Count |
| -------------- | -----: |
| ✅ Passed       | **31** |
| ❌ Failed       | **11** |
| 🚫 Blocked     |  **0** |
| ⏳ Not Executed |  **0** |
| **Total**      | **42** |

---


⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-saucedemo/qa-saucedemo-README.md)
