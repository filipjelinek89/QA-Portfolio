# Video Evidence

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Prepared by:** Filip Jelinek

---

# In-page Navigation

- [1. Purpose](#1-purpose)
- [2. Recording Guidelines](#2-recording-guidelines)
- [3. Video Index](#3-video-index)
- [4. Naming Convention](#4-naming-convention)
- [5. Folder Structure](#5-folder-structure)

---

# 1. Purpose

This document provides an index of screen recordings captured during manual testing of the ParaBank application.

Video recordings supplement screenshots by providing clear evidence of application behavior during test execution and bug reproduction.

Videos are especially useful for:

- Demonstrating defects that require multiple reproduction steps.
- Capturing dynamic UI or browser behavior.
- Supporting bug reports with reproducible evidence.
- Showing complete user workflows when screenshots are insufficient.

---

# 2. Recording Guidelines

Videos should be recorded when:

- A defect cannot be clearly explained using screenshots alone.
- Multiple steps are required to reproduce an issue.
- Browser or session behavior changes over time.
- Dynamic application behavior needs to be demonstrated.

All recordings should:

- Start from a known application state.
- Clearly demonstrate each reproduction step.
- Show the complete defect from start to finish.
- Avoid including any sensitive or personal information.
- Be saved in MP4 format.

---

# 3. Video Index

| Video ID | Description | Related Test Case | Related Bug | Status |
|----------|-------------|-------------------|-------------|--------|
| VID001 | Browser Back Button allows access after logout | TC068 | BUG013 | ✅ Recorded |

> Additional recordings may be added if future testing identifies defects that benefit from video evidence.

---

# 4. Naming Convention

Video files follow the naming convention:

```text
BUGXXX_TCXXX_Short_Description.mp4
```

Example:

```text
BUG013_TC068_Back_Button_Access_After_Logout.mp4
```

Benefits:

- Easy traceability between videos, test cases, and bug reports.
- Consistent naming across the project.
- Simplified navigation within the repository.

---

# 5. Folder Structure

```text
09_Video/
│
├── 09_Video.md
└── BUG013_TC068_Back_Button_Access_After_Logout.mp4
```

---

# Notes

- Videos are recorded only when they provide meaningful evidence beyond screenshots.
- Screenshots remain the primary source of visual documentation throughout the project.
- Video recordings are used to demonstrate complex or dynamic application behavior.
- All recordings are stored in MP4 format for maximum compatibility.

---

# Document Version History

| Version | Date | Author | Changes |
|---------|------------|---------------|-----------------------------|
| 1.0 | 2026-07 | Filip Jelinek | Initial completed version |

---

⬅️ **Back to QA ParaBank README**

[QA-ParaBank-README.md](qa-parabank-README.md)
