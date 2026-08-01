# 06_Naming_Convention

> **Playwright-ParaBank-Automation – Naming Convention**

---

## Document Information

**Project:** Playwright-ParaBank-Automation  
**Document:** Naming Convention  
**Version:** 1.0  
**Prepared by:** Filip Jelinek  
**Framework:** Playwright + TypeScript  
**Status:** 🚧 In Progress

---

# Purpose

This document defines the naming conventions used throughout the Playwright automation framework.

A consistent naming strategy improves readability, maintainability, traceability, and collaboration while making it easier to navigate the project.

---

# Naming Principles

- Be descriptive
- Be consistent
- Prefer business terminology
- Avoid abbreviations unless widely accepted
- Preserve Manual QA Test Case IDs
- Use English for all code and documentation

---

# Project Structure

```text
docs/
pages/
tests/
fixtures/
utils/
test-data/
```

Folder names use **lowercase** and **kebab-case** where appropriate.

---

# Test File Naming

Every automated test begins with the Manual QA Test Case ID.

Pattern:

```text
TC###_Business_Scenario.spec.ts
```

Examples:

```text
TC001_Successful_User_Registration.spec.ts

TC009_Login_With_Valid_Credentials.spec.ts

TC031_Successful_Transfer_Between_Accounts.spec.ts
```

Benefits:

- Complete traceability
- Easy searching
- Matches Manual QA documentation

---

# Page Object Naming

Pattern:

```text
<PageName>Page.ts
```

Examples:

```text
LoginPage.ts

RegistrationPage.ts

AccountOverviewPage.ts

TransferFundsPage.ts

BillPaymentPage.ts
```

---

# Method Naming

Use **camelCase** and describe the user action.

Examples:

```typescript
login()

logout()

registerUser()

transferFunds()

requestLoan()

openNewAccount()
```

Avoid vague names such as:

```text
run()

execute()

clickButton()
```

---

# Variable Naming

Use **camelCase**.

Examples:

```typescript
username

password

transferAmount

accountNumber

expectedMessage
```

Boolean variables should clearly express a true/false state:

```typescript
isLoggedIn

isTransferSuccessful

hasValidationError
```

---

# Constant Naming

Use **UPPER_SNAKE_CASE**.

Examples:

```typescript
BASE_URL

DEFAULT_TIMEOUT

MAX_RETRY_COUNT
```

---

# Fixture Naming

Fixtures should describe their purpose.

Examples:

```text
authenticatedUser.ts

testData.ts

baseFixture.ts
```

---

# Test Data Naming

Use meaningful filenames.

Examples:

```text
users.json

accounts.json

loanData.json

billPaymentData.json
```

---

# Documentation Naming

Documentation follows a numbered structure.

Examples:

```text
01_Project_Overview.md

02_Framework_Architecture.md

03_Automation_Strategy.md

04_Test_Case_Mapping.md

05_Coding_Standards.md

06_Naming_Convention.md
```

---

# Git Branch Naming

Recommended pattern:

```text
feature/login

feature/registration

feature/transfer-funds

bugfix/login-validation

docs/update-readme
```

---

# Commit Message Convention

Recommended format:

```text
type(scope): short description
```

Examples:

```text
feat(login): automate valid login

fix(registration): improve username validation

docs: update naming convention

refactor(pageobjects): simplify login methods
```

---

# Summary

Following these naming conventions ensures:

- Consistency
- Better readability
- Easier maintenance
- Strong traceability
- Professional project organization

---

# Future Improvements

Future versions may include:

- ESLint naming rules
- Automated linting
- Pre-commit validation
- Repository naming guidelines

---

_End of Naming Convention_
