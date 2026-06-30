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

* [Login](#-login)
* [Inventory](#-inventory)
* [Product Details](#-product-details)
* [Shopping Cart](#-shopping-cart)
* [Checkout](#-checkout)
* [Navigation & Session](#-navigation--session)

---

# Login

| ID                                             | Test Case                    | Priority | Requirement | Status         |
| ---------------------------------------------- | ---------------------------- | -------- | ----------- | -------------- |
| [TC001](TC001_Successful_Login.md)             | Successful Login             | High     | FR-001      | ⏳ Not Executed |
| [TC002](TC002_Login_with_Invalid_Password.md)  | Login with Invalid Password  | High     | FR-001      | ⏳ Not Executed |
| [TC003](TC003_Login_with_Invalid_Username.md)  | Login with Invalid Username  | High     | FR-001      | ⏳ Not Executed |
| [TC004](TC004_Login_with_Empty_Username.md)    | Login with Empty Username    | Medium   | FR-001      | ⏳ Not Executed |
| [TC005](TC005_Login_with_Empty_Password.md)    | Login with Empty Password    | Medium   | FR-001      | ⏳ Not Executed |
| [TC006](TC006_Login_with_Empty_Credentials.md) | Login with Empty Credentials | Medium   | FR-001      | ⏳ Not Executed |
| [TC007](TC007_Login_with_Locked_User.md)       | Login with Locked User       | High     | FR-001      | ⏳ Not Executed |

---

# Inventory

| ID                                                    | Test Case                                   | Priority | Requirement | Status         |
| ----------------------------------------------------- | ------------------------------------------- | -------- | ----------- | -------------- |
| [TC008](TC008_Verify_Inventory_Page_Display.md)       | Verify Inventory Page Display               | High     | FR-002      | ⏳ Not Executed |
| [TC009](TC009_Verify_Product_Information.md)          | Verify Product Information                  | Medium   | FR-002      | ⏳ Not Executed |
| [TC010](TC010_Verify_Add_to_Cart_Button.md)           | Verify "Add to Cart" Button Functionality   | High     | FR-002      | ⏳ Not Executed |
| [TC011](TC011_Verify_Product_Details_Navigation.md)   | Verify Product Details Navigation           | High     | FR-003      | ⏳ Not Executed |
| [TC012](TC012_Verify_Shopping_Cart_Badge_Update.md)   | Verify Shopping Cart Badge Update           | High     | FR-004      | ⏳ Not Executed |
| [TC013](TC013_Verify_Inventory_Page_After_Refresh.md) | Verify Inventory Page After Browser Refresh | Medium   | FR-002      | ⏳ Not Executed |

---

# Product Details

| ID                                                                   | Test Case                                           | Priority | Requirement | Status         |
| -------------------------------------------------------------------- | --------------------------------------------------- | -------- | ----------- | -------------- |
| [TC014](TC014_Verify_Product_Information_on_Product_Details_Page.md) | Verify Product Information on Product Details Page  | High     | FR-003      | ⏳ Not Executed |
| [TC015](TC015_Verify_Add_to_Cart_on_Product_Details_Page.md)         | Verify "Add to Cart" Button on Product Details Page | High     | FR-003      | ⏳ Not Executed |
| [TC016](TC016_Verify_Remove_Button_on_Product_Details_Page.md)       | Verify "Remove" Button on Product Details Page      | High     | FR-003      | ⏳ Not Executed |
| [TC017](TC017_Verify_Back_to_Products_Navigation.md)                 | Verify "Back to Products" Navigation                | Medium   | FR-003      | ⏳ Not Executed |

---

# Shopping Cart

| ID                                                                       | Test Case                                              | Priority | Requirement | Status         |
| ------------------------------------------------------------------------ | ------------------------------------------------------ | -------- | ----------- | -------------- |
| [TC018](TC018_Verify_Shopping_Cart_Page.md)                              | Verify Shopping Cart Page                              | High     | FR-004      | ⏳ Not Executed |
| [TC019](TC019_Verify_Single_Product_in_Shopping_Cart.md)                 | Verify Single Product in Shopping Cart                 | High     | FR-004      | ⏳ Not Executed |
| [TC020](TC020_Verify_Multiple_Products_in_Shopping_Cart.md)              | Verify Multiple Products in Shopping Cart              | High     | FR-004      | ⏳ Not Executed |
| [TC021](TC021_Verify_Remove_Product_from_Shopping_Cart.md)               | Verify Remove Product from Shopping Cart               | High     | FR-004      | ⏳ Not Executed |
| [TC022](TC022_Verify_Continue_Shopping_Button.md)                        | Verify "Continue Shopping" Button                      | Medium   | FR-004      | ⏳ Not Executed |
| [TC023](TC023_Verify_Checkout_Button.md)                                 | Verify Checkout Button                                 | High     | FR-005      | ⏳ Not Executed |
| [TC024](TC024_Verify_Empty_Shopping_Cart_After_Removing_All_Products.md) | Verify Empty Shopping Cart After Removing All Products | Medium   | FR-004      | ⏳ Not Executed |
| [TC025](TC025_Verify_Shopping_Cart_Persistence_After_Browser_Refresh.md) | Verify Shopping Cart Persistence After Browser Refresh | Medium   | FR-004      | ⏳ Not Executed |

---

# Checkout

| ID                                                               | Test Case                                        | Priority | Requirement | Status         |
| ---------------------------------------------------------------- | ------------------------------------------------ | -------- | ----------- | -------------- |
| [TC026](TC026_Verify_Checkout_Your_Information_Page.md)          | Verify Checkout: Your Information Page           | High     | FR-005      | ⏳ Not Executed |
| [TC027](TC027_Complete_Checkout_Information_with_Valid_Data.md)  | Complete Checkout Information with Valid Data    | High     | FR-005      | ⏳ Not Executed |
| [TC028](TC028_Verify_Checkout_with_Empty_First_Name.md)          | Verify Checkout with Empty First Name            | Medium   | FR-005      | ⏳ Not Executed |
| [TC029](TC029_Verify_Checkout_with_Empty_Last_Name.md)           | Verify Checkout with Empty Last Name             | Medium   | FR-005      | ⏳ Not Executed |
| [TC030](TC030_Verify_Checkout_with_Empty_Postal_Code.md)         | Verify Checkout with Empty Postal Code           | Medium   | FR-005      | ⏳ Not Executed |
| [TC031](TC031_Verify_Checkout_Overview_Page.md)                  | Verify Checkout: Overview Page                   | High     | FR-005      | ⏳ Not Executed |
| [TC032](TC032_Verify_Successful_Order_Completion.md)             | Verify Successful Order Completion               | High     | FR-005      | ⏳ Not Executed |
| [TC033](TC033_Verify_Cancel_Checkout_from_Checkout_Overview.md)  | Verify Cancel Checkout from Checkout: Overview   | Medium   | FR-005      | ⏳ Not Executed |
| [TC034](TC034_Verify_Order_Confirmation_Page.md)                 | Verify Order Confirmation Page                   | High     | FR-005      | ⏳ Not Executed |
| [TC035](TC035_Verify_Back_Home_Button_After_Order_Completion.md) | Verify "Back Home" Button After Order Completion | Medium   | FR-005      | ⏳ Not Executed |

---

# Navigation & Session

| ID                                                                         | Test Case                                                | Priority | Requirement | Status         |
| -------------------------------------------------------------------------- | -------------------------------------------------------- | -------- | ----------- | -------------- |
| [TC036](TC036_Verify_Product_Sorting_by_Name_A-Z.md)                       | Verify Product Sorting by Name (A–Z)                     | Medium   | FR-006      | ⏳ Not Executed |
| [TC037](TC037_Verify_Product_Sorting_by_Price_Low_to_High.md)              | Verify Product Sorting by Price (Low to High)            | Medium   | FR-006      | ⏳ Not Executed |
| [TC038](TC038_Verify_Burger_Menu_Opens.md)                                 | Verify Burger Menu Opens                                 | Medium   | FR-007      | ⏳ Not Executed |
| [TC039](TC039_Verify_User_Logout.md)                                       | Verify User Logout                                       | High     | FR-007      | ⏳ Not Executed |
| [TC040](TC040_Verify_Reset_App_State.md)                                   | Verify Reset App State                                   | Medium   | FR-007      | ⏳ Not Executed |
| [TC041](TC041_Verify_About_Link.md)                                        | Verify About Link                                        | Low      | FR-007      | ⏳ Not Executed |
| [TC042](TC042_Verify_Direct_Access_to_Inventory_Without_Authentication.md) | Verify Direct Access to Inventory Without Authentication | High     | FR-001      | ⏳ Not Executed |

---

# Test Execution Status

Current Progress

| Status         |  Count |
| -------------- | -----: |
| ✅ Passed       |      0 |
| ❌ Failed       |      0 |
| 🚫 Blocked     |      0 |
| ⏳ Not Executed |     42 |
| **Total**      | **42** |

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](../qa-saucedemo-README.md)

