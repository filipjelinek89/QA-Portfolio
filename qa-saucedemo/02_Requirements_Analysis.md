# Requirements Analysis

**Project:** SauceDemo Manual Testing Project

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# In-page Navigation
- [1. Purpose](#1.-Purpose)
- [2. Application Overview](#2.-Application-Overview)
- [3. Functional Requirements](#3.-Functional-Requirements)
- [4. Non-Functional Observations](#4.-Non-Functional-Observations)
- [5. Requirement Coverage](#5.-Requirement-Coverage)
- [6. Conclusion](#6.-Conclusion)

---

# 1. Purpose

The purpose of this document is to identify and analyze the functional requirements of the SauceDemo application that will be verified during manual testing.

As SauceDemo is a public demo application, no formal Software Requirements Specification (SRS) is available. Therefore, the requirements documented below have been derived from the application's observed functionality and intended user behavior.

---

# 2. Application Overview

SauceDemo is a web-based e-commerce application designed to simulate a typical online shopping experience.

The application allows users to:

- Authenticate using predefined user accounts
- Browse available products
- View product details
- Add and remove products from the shopping cart
- Complete the checkout process
- Sort products using different criteria
- Log out of the application

---

# 3. Functional Requirements

## FR-001 User Authentication

The system shall allow registered users to log in using valid credentials.

### Acceptance Criteria

- Username field accepts user input.
- Password field accepts user input.
- Valid credentials authenticate the user.
- Invalid credentials display an appropriate error message.
- Empty fields are validated.
- Locked users cannot access the application.


## FR-002 Product Inventory

The system shall display all available products after a successful login.

### Acceptance Criteria

- Product list loads successfully.
- Product name is displayed.
- Product description is displayed.
- Product price is displayed.
- Product image is displayed.
- Inventory page is accessible only after login.


## FR-003 Product Details

The system shall display detailed information for a selected product.

### Acceptance Criteria

- Product name is displayed.
- Product description is displayed.
- Product price is displayed.
- User can return to the inventory page.


## FR-004 Shopping Cart

The system shall allow users to manage products in the shopping cart.

### Acceptance Criteria

- Add product to cart.
- Remove product from cart.
- Cart badge updates correctly.
- Cart contents remain accurate throughout the session.


## FR-005 Checkout Process

The system shall allow users to purchase selected products.

### Acceptance Criteria

- Checkout can be initiated from the cart.
- Customer information is required.
- Required fields are validated.
- Order overview is displayed.
- Checkout can be completed successfully.
- Confirmation page is displayed.


## FR-006 Product Sorting

The system shall allow users to sort products.

### Acceptance Criteria

Products can be sorted by:

- Name (A → Z)
- Name (Z → A)
- Price (Low → High)
- Price (High → Low)


## FR-007 Navigation

The system shall provide navigation between application pages.

### Acceptance Criteria

- Navigation menu opens correctly.
- Shopping cart is accessible.
- Product pages are accessible.
- Browser Back button behaves correctly where applicable.


## FR-008 Logout

The system shall allow authenticated users to log out.

### Acceptance Criteria

- Logout option is available.
- User session ends.
- User is redirected to the Login page.
- Protected pages are no longer accessible without logging in again.

---

# 4. Non-Functional Observations

Although not included in the formal testing scope, the following characteristics will be observed during testing:

- User Interface consistency
- Page responsiveness
- Loading behavior
- Error message clarity
- Navigation usability

Any significant observations will be documented if identified.

---

# 5. Requirement Coverage

The functional requirements identified in this document will be mapped to Test Scenarios, Test Cases, and the Requirements Traceability Matrix (RTM) to ensure complete test coverage.

| Requirement ID | Feature             |
| -------------- | ------------------- |
| FR-001         | User Authentication |
| FR-002         | Product Inventory   |
| FR-003         | Product Details     |
| FR-004         | Shopping Cart       |
| FR-005         | Checkout Process    |
| FR-006         | Product Sorting     |
| FR-007         | Navigation          |
| FR-008         | Logout              |

---

# 6. Conclusion

This Requirements Analysis establishes the functional baseline for the SauceDemo Manual Testing Project. The identified requirements will guide the design of test scenarios, detailed test cases, and execution activities to ensure comprehensive coverage of the application's primary functionality.

---

⬅️ **Back to Saucedemo**

[qa-saucedemo-README.md](../qa-saucedemo-README.md)

