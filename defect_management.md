
# 🛠️ Defect Management Plan – CleanCity App

## 1. Introduction
This document outlines the strategy and workflow for managing defects identified during the testing of the CleanCity App. It ensures all defects are captured, tracked, and resolved effectively.

---

## 2. Objectives
- Identify and document defects consistently.
- Prioritize defects based on severity and impact.
- Assign responsibilities for defect resolution.
- Track defect status through resolution and verification.
- Ensure communication among QA, development, and stakeholders.

---

## 3. Defect Lifecycle

The defect lifecycle follows these stages:

1. **New** – Defect is discovered and logged.
2. **Assigned** – Assigned to the appropriate developer.
3. **In Progress** – Developer has started investigating/fixing.
4. **Fixed** – Developer resolves the issue.
5. **Ready for Retest** – QA is notified to verify the fix.
6. **Retest Passed/Failed** – QA validates fix; if failed, reopens defect.
7. **Closed** – QA confirms issue is resolved and closes it.
8. **Deferred** – Defect resolution postponed.
9. **Rejected** – Issue is not a defect or not reproducible.

---

## 4. Severity & Priority Matrix

| Severity     | Description                                    | Example                                    |
|--------------|------------------------------------------------|--------------------------------------------|
| Critical     | Causes system crash or major data loss         | Dashboard filter returns incorrect results |
| High         | Key functionality broken or security flaw      | Missing form validation                    |
| Medium       | Affects usability or non-core functionality    | Invalid input accepted                     |
| Low          | Cosmetic or minor issues                       | Missing `alt` text in images               |

| Priority     | Description                                  |
|--------------|----------------------------------------------|
| P1 (Urgent)  | Must be fixed immediately                    |
| P2 (High)    | Fix soon; affects key user journey           |
| P3 (Medium)  | Can be fixed after high-priority issues      |
| P4 (Low)     | Fix if time permits; low impact              |

---

## 5. Tools Used
- **Bug Tracker**: GitHub Issues
- **Test Case Tracker**: Google Sheets / TestRail (optional)
- **Communication**: Email / Slack / Jira comments

---

## 6. Defect Reporting Template

| Field           | Description                              |
|------------------|------------------------------------------|
| Defect ID        | Unique identifier (e.g., BUG01)          |
| Title            | Short summary of the defect              |
| Environment      | Browser, OS, device info                 |
| Steps to Reproduce | Step-by-step instructions              |
| Expected Result  | What should happen                       |
| Actual Result    | What actually happened                   |
| Severity         | Impact level                             |
| Priority         | Urgency to fix                           |
| Status           | New, Assigned, Fixed, etc.               |
| Reporter         | Name of the person who found the defect |

---

## 7. Responsibilities

| Role            | Responsibility                             |
|------------------|---------------------------------------------|
| QA Engineer      | Identify, log, verify, and close defects    |
| Developer        | Investigate, fix, and update status         |
| Project Manager  | Oversee defect resolution timelines         |
| Stakeholders     | Prioritize and accept/reject issues         |

---

## 8. Metrics for Monitoring

- Defect Density
- Mean Time to Resolution (MTTR)
- Reopened Defect Rate
- Defects by Severity & Priority

---

## 9. Conclusion
This Defect Management Plan ensures a systematic approach to identifying and resolving defects in the CleanCity App. It improves the quality of the application and enhances collaboration between QA and development teams.
