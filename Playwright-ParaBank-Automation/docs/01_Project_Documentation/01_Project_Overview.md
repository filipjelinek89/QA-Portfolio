# 01_Project_Overview

> **Playwright-ParaBank-Automation – Project Overview**

---

## Project Information

**Project:** Playwright-ParaBank-Automation  
**Document:** Project Overview  
**Version:** 1.0  
**Prepared by:** Filip Jelinek  
**Framework:** Playwright + TypeScript  
**Project Status:** 🚧 In Progress

---

# Purpose

The purpose of this project is to design and develop a professional end-to-end UI automation testing framework for the ParaBank demo banking application using Playwright and TypeScript.

The project demonstrates automation engineering best practices rather than only Playwright syntax.

---

# Project Objectives

- Build a scalable automation framework
- Apply Page Object Model (POM)
- Automate critical business workflows
- Support Happy Path, Negative, Validation and Boundary testing
- Produce professional reports
- Integrate GitHub Actions CI/CD
- Maintain traceability with the Manual QA project

---

# Project Scope

The framework will automate the following ParaBank modules:

- User Registration
- Login
- Account Overview
- Open New Account
- Transfer Funds
- Bill Payment
- Request Loan
- Navigation & Logout
- Validation & Negative Testing

---

# Technology Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- GitHub Actions
- Visual Studio Code

---

# Supported Browsers

- Chromium
- Firefox

(WebKit may be enabled in the future.)

---

# Framework Principles

- Readable
- Maintainable
- Reusable
- Modular
- Scalable
- Professional documentation
- Real-world project structure

---

# Repository Structure

```text
docs/
pages/
tests/
fixtures/
utils/
test-data/
.github/
```

---

# Manual Project Relationship

This repository is maintained independently from the Manual ParaBank Testing Project.

The manual project remains the source of business test design, while this repository contains the Playwright automation implementation.

Manual test IDs will be mapped directly to automated Playwright tests.

---

# Project Phases

1. Framework & Documentation
2. User Registration
3. Login
4. Account Overview
5. Open New Account
6. Transfer Funds
7. Bill Payment
8. Request Loan
9. Navigation & Logout
10. Validation & Negative Testing
11. Framework Refactoring
12. CI/CD & Finalization

---

# Success Criteria

- Professional framework architecture
- Maintainable Page Objects
- Stable locators
- Clean code
- Automated reporting
- Cross-browser execution
- CI/CD pipeline
- Portfolio-ready documentation

---

# Future Improvements

- Parallel execution
- Docker support
- Allure Reports
- Environment profiles
- Azure DevOps / Jenkins integration

---

_End of Project Overview_
