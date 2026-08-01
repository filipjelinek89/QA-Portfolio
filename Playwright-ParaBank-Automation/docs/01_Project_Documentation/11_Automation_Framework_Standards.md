# Automation Framework Standards

## Project

**Playwright ParaBank Automation Framework**

Version: **1.0**

---

# Purpose

This document defines the coding standards, architecture, naming conventions, and development rules used throughout the Playwright automation framework.

Every new page, test case, model, and factory must follow these standards to ensure consistency, maintainability, and readability.

---

# Framework Architecture

```
Playwright-ParaBank-Automation
│
├── pages
├── tests
├── test-data
│   ├── models
│   ├── users
│   └── factories
├── utils
├── fixtures
└── playwright.config.ts
```

---

# Page Object Standard

Every Page Object must follow this exact structure.

```typescript
export class ExamplePage extends BasePage {

    // ==========================================
    // Locators
    // ==========================================

    // ==========================================
    // Constructor
    // ==========================================

    // ==========================================
    // Navigation Methods
    // ==========================================

    // ==========================================
    // Input Methods
    // ==========================================

    // ==========================================
    // Action Methods
    // ==========================================

    // ==========================================
    // Validation Methods
    // ==========================================

}
```

The order of sections must never change.

---

# Locator Rules

All locators must be declared at the beginning of the page.

Example:

```typescript
private readonly usernameInput =
    this.page.locator('#customer\\.username');
```

Do not create locators inside methods.

Incorrect:

```typescript
await this.page.locator(...).click();
```

Correct:

```typescript
private readonly registerButton =
    this.page.getByRole('button', { name: 'Register' });

await this.registerButton.click();
```

---

# Method Visibility

Use **public** only for methods that will be called from test cases.

Example:

```typescript
public async registerUser(...)
```

Use **private** for helper methods used only inside the page.

Example:

```typescript
private async verifyLogoutButton()
```

---

# Navigation Methods

Navigation methods must only navigate.

Example:

```typescript
navigateToRegistrationPage()
```

Do not perform validation or actions inside navigation methods.

---

# Input Methods

One method = one field.

Example:

```typescript
fillFirstName()

fillPassword()

fillUsername()
```

Each method should perform only one action.

---

# Action Methods

Action methods represent business actions.

Examples:

```typescript
registerUser()

login()

transferFunds()

payBill()
```

Action methods may call multiple Input Methods.

---

# Validation Methods

Validation methods verify application behavior.

Examples:

```typescript
verifyRegistrationSuccess()

verifyFirstNameRequired()

verifyLogoutButton()
```

Validation methods should never modify application state.

---

# Test Data

All test data must use models.

Example:

```typescript
RegistrationData
```

Never pass 10 individual strings to page methods.

Incorrect:

```typescript
registerUser(
    firstName,
    lastName,
    ...
);
```

Correct:

```typescript
registerUser(user);
```

---

# Factory Pattern

All test data must be created by Factory classes.

Example:

```typescript
RegistrationDataFactory
```

Examples:

```typescript
createValidUser()

createUserWithoutFirstName()

createUserWithRequiredFieldsOnly()

createUserWithoutPassword()
```

Factories should reuse valid objects whenever possible.

---

# Test Structure

Every automated test must follow Arrange → Act → Assert.

Example:

```typescript
// Arrange

const registrationPage = new RegistrationPage(page);

const user =
    RegistrationDataFactory.createValidUser();


// Act

await registrationPage.navigateToRegistrationPage();

await registrationPage.registerUser(user);


// Assert

await registrationPage.verifyRegistrationSuccess(user);
```

---

# Naming Convention

## Test Files

```
TC001_successful_user_registration.spec.ts
```

## Test Names

```
TC001 - Successful User Registration
```

Test names should match the manual test documentation whenever possible.

---

# Code Style

- Use PascalCase for classes.
- Use camelCase for methods and variables.
- Use readonly for locators.
- Use async/await.
- Use explicit return types.
- Keep methods short and focused.

---

# DRY Principle

Avoid duplicated code.

Prefer:

```typescript
const user = this.createValidUser();

user.firstName = '';

return user;
```

Instead of creating duplicate objects.

---

# Single Responsibility Principle

Each method should have one responsibility.

Example:

Good:

```typescript
fillUsername()

clickRegister()

verifyRegistrationSuccess()
```

Bad:

```typescript
fillUsernameAndRegisterAndVerify()
```

---

# Automation Goals

The framework should be:

- Readable
- Reusable
- Maintainable
- Scalable
- Easy to extend
- Easy to review
- Suitable for CI/CD pipelines

---

# Future Improvements

- Playwright Fixtures
- Authentication Fixtures
- API Helpers
- Random Data Utilities
- Reporting Enhancements
- GitHub Actions CI/CD
- Allure Reporting
- Parallel Execution