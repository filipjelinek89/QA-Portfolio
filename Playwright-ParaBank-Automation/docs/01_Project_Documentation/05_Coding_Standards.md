# 05_Coding_Standards

> **Playwright-ParaBank-Automation – Coding Standards**

---

## Document Information

**Project:** Playwright-ParaBank-Automation  
**Document:** Coding Standards  
**Version:** 1.0  
**Prepared by:** Filip Jelinek  
**Framework:** Playwright + TypeScript  
**Status:** 🚧 In Progress

---

# Purpose

This document defines the coding standards used throughout the Playwright automation framework.

Following consistent standards improves readability, maintainability, collaboration, and long-term scalability.

---

# Core Principles

- Write clean, readable code
- Keep tests simple and business-focused
- Eliminate unnecessary duplication
- Reuse existing components
- Follow a consistent project structure
- Prefer clarity over cleverness

---

# Project Structure

```text
pages/
tests/
fixtures/
utils/
test-data/
docs/
```

Each folder has a single responsibility.

---

# Test Design Standards

Every test should:

- Verify one business scenario
- Have a descriptive title
- Be independent
- Be repeatable
- Avoid unnecessary dependencies
- Produce predictable results

Example:

```typescript
test('TC009 - Login with valid credentials', async ({ page }) => {
    // Test implementation
});
```

---

# Page Object Standards

Page Objects should:

- Store locators
- Expose reusable methods
- Never contain assertions
- Represent one application page
- Hide UI implementation details

Example:

```typescript
class LoginPage {
    async login(username: string, password: string) {
        // Login steps
    }
}
```

---

# Locator Standards

Preferred locator priority:

1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getByText()
5. getByTestId()
6. CSS selectors (only when necessary)
7. XPath (avoid whenever possible)

Always prefer stable, user-facing locators.

---

# Assertions

Assertions should:

- Verify expected behaviour
- Be explicit
- Focus on business outcomes
- Avoid redundant checks

Example:

```typescript
await expect(page).toHaveURL(/overview/);
```

---

# Naming Standards

- Classes: PascalCase
- Methods: camelCase
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Files: descriptive names
- Test IDs: preserve manual test case IDs

---

# Code Formatting

- Use consistent indentation
- Keep methods concise
- Remove unused imports
- Remove commented-out code
- Avoid magic values where practical

---

# Error Handling

- Let Playwright handle automatic waiting
- Do not suppress unexpected failures
- Use meaningful assertion messages when appropriate

---

# Comments

Comments should explain **why**, not **what**.

Good:

```typescript
// Login first because transfers require an authenticated session.
```

Avoid:

```typescript
// Click login button.
```

---

# Reusability

Prefer reusable:

- Page Object methods
- Helper functions
- Fixtures
- Test data
- Constants

Avoid copying the same implementation across multiple tests.

---

# Git Standards

- Small, focused commits
- Clear commit messages
- Keep the main branch stable
- Review changes before pushing

Example:

```text
feat(login): automate valid login

fix(transfer): update account locator

docs: add coding standards
```

---

# Future Improvements

Future versions will include:

- ESLint configuration
- Prettier formatting
- Husky pre-commit hooks
- Static code analysis
- Code coverage metrics

---

# Summary

These standards ensure that the automation framework remains:

- Readable
- Consistent
- Maintainable
- Scalable
- Professional

---

_End of Coding Standards_
