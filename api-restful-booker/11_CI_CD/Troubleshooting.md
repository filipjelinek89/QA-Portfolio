# Troubleshooting

## Document Information

| Property | Value |
|----------|-------|
| Project | Restful Booker API Testing Portfolio |
| Document | Troubleshooting |
| Version | 1.0 |
| Status | Approved |
| Author | Filip Jelinek |
| Last Updated | July 2026 |

---

# Purpose

This document describes common issues that may occur while configuring and executing the Continuous Integration (CI) pipeline for this project.

It includes real problems encountered during development, their root causes, solutions, and recommendations for preventing similar issues in the future.

---

# Scope

This troubleshooting guide covers issues related to:

- Git
- GitHub
- GitHub Actions
- Newman
- Node.js
- Postman Collection
- Workflow configuration
- Report generation
- Artifact upload

---

# Troubleshooting Workflow

When an issue occurs, follow this process:

```text
Problem Detected
        │
        ▼
Read Error Message
        │
        ▼
Identify Root Cause
        │
        ▼
Apply Solution
        │
        ▼
Run Workflow Again
        │
        ▼
Verify Successful Execution
```

---

# Issue 1 – Git Push Rejected

## Error

```text
! [rejected] main -> main (fetch first)
error: failed to push some refs
```

## Cause

The remote repository contained commits that were not available in the local repository.

Git prevents overwriting remote changes.

## Solution

Synchronize the local repository before pushing.

```bash
git pull --rebase origin main
git push origin main
```

## Prevention

- Pull changes regularly.
- Avoid long-running local branches.
- Push smaller, more frequent commits.

---

# Issue 2 – Cannot Pull with Rebase

## Error

```text
error: cannot pull with rebase:
You have unstaged changes.
```

## Cause

Git detected modified files that had not been committed.

A rebase cannot start while the working directory contains uncommitted changes.

## Solution

Stage and commit the changes before pulling.

```bash
git add .
git commit -m "Save local changes"
git pull --rebase origin main
git push origin main
```

## Prevention

- Commit work before pulling.
- Keep the working directory clean.

---

# Issue 3 – Newman Command Not Found

## Error

```text
newman : The term 'newman' is not recognized...
```

## Cause

Newman was not installed or was unavailable in the system PATH.

## Solution

Install Newman globally.

```bash
npm install -g newman
```

Verify installation.

```bash
newman -v
```

## Prevention

Confirm Newman is installed before executing collections.

---

# Issue 4 – HTML Report Not Generated

## Symptoms

The collection executes successfully, but no HTML report is created.

## Cause

The HTML Extra Reporter is missing.

## Solution

Install the reporter.

```bash
npm install -g newman-reporter-htmlextra
```

Execute Newman with the HTML reporter enabled.

## Prevention

Install all required reporters before running the collection.

---

# Issue 5 – Workflow Fails During Dependency Installation

## Symptoms

GitHub Actions stops before executing the Postman collection.

## Possible Causes

- Incorrect Node.js version
- Network issue during package installation
- Invalid workflow configuration

## Solution

Verify:

- Node.js setup step
- npm installation commands
- Workflow syntax
- Package names

Review workflow logs for detailed error messages.

---

# Issue 6 – Collection Execution Failure

## Symptoms

The workflow starts but Newman exits with an error.

## Possible Causes

- Incorrect collection path
- Missing collection file
- Invalid JSON format
- Corrupted collection export

## Solution

Verify the collection exists.

Example:

```text
05_Postman/
└── RestfulBooker.postman_collection.json
```

Confirm that the workflow references the correct location.

---

# Issue 7 – Assertion Failure

## Symptoms

The workflow executes requests but ends with a failed status.

## Cause

One or more JavaScript assertions failed.

Examples:

- Incorrect status code
- Missing response field
- Invalid response body
- Unexpected response time

## Solution

Review the failing request in:

- Newman CLI output
- HTML report
- Workflow logs

Correct either:

- API request
- Test script
- Expected result

---

# Issue 8 – Report Directories Missing

## Symptoms

Workflow cannot export reports.

## Cause

The destination directories do not exist.

## Solution

Create directories before running Newman.

Example:

```text
reports/
├── HTML/
├── JSON/
└── JUnit/
```

---

# Issue 9 – Artifact Upload Failure

## Symptoms

Workflow finishes, but no reports are available for download.

## Cause

Possible reasons include:

- Incorrect file path
- Reports not generated
- Artifact upload step configured incorrectly

## Solution

Verify:

- Report filenames
- Directory paths
- Upload-artifact configuration

Ensure reports exist before the upload step.

---

# Issue 10 – Workflow Not Triggered

## Symptoms

No workflow execution appears in the GitHub Actions tab.

## Possible Causes

- Workflow file not committed
- Incorrect workflow location
- Invalid YAML syntax
- Trigger configuration does not match the branch

## Solution

Verify the workflow file is stored in:

```text
.github/
└── workflows/
    └── newman.yml
```

Confirm that the trigger includes the target branch.

---

# Debugging Tips

When diagnosing CI/CD issues:

1. Read the complete error message.
2. Review GitHub Actions logs.
3. Check the failing workflow step.
4. Verify file paths.
5. Confirm package installation.
6. Execute the collection locally.
7. Compare local and CI results.
8. Validate the Postman collection.
9. Review generated reports.
10. Re-run the workflow after applying fixes.

---

# Best Practices

The following practices reduce the likelihood of CI/CD issues:

- Commit changes frequently.
- Keep the repository synchronized.
- Test the collection locally before pushing.
- Use descriptive commit messages.
- Validate workflow syntax before committing.
- Keep dependencies up to date.
- Store reports in dedicated directories.
- Review workflow logs after each execution.

---

# Useful Commands

## Git

```bash
git status
git add .
git commit -m "Commit message"
git pull --rebase origin main
git push origin main
```

---

## Newman

```bash
newman -v
```

```bash
newman run RestfulBooker.postman_collection.json
```

---

## npm

```bash
npm install -g newman
```

```bash
npm install -g newman-reporter-htmlextra
```

---

# Lessons Learned

During implementation of this project, several practical lessons were learned:

- CI pipelines should be tested locally before publishing.
- Reading the full error message is often the fastest path to a solution.
- Small configuration mistakes can prevent an entire workflow from running.
- Organizing reports into dedicated directories improves maintainability.
- Regular commits and repository synchronization reduce Git conflicts.
- Automated reporting simplifies debugging and provides clear execution evidence.

These experiences improved understanding of Git, GitHub Actions, Newman, and automated API testing.

---

# References

- Git Documentation
- GitHub Actions Documentation
- Newman Documentation
- Postman Documentation
- Node.js Documentation

---

# Conclusion

Troubleshooting is an essential part of implementing and maintaining a Continuous Integration pipeline.

The issues documented in this guide reflect practical experience gained while building this project. By identifying root causes, applying structured solutions, and following recommended best practices, the CI/CD workflow became more stable, reliable, and maintainable.

This document also serves as a reference for future maintenance and demonstrates practical problem-solving skills in a real-world API automation project.