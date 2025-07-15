
# 🐞 Defect Log – CleanCity App

This file tracks all identified issues discovered during manual testing and exploratory analysis of the CleanCity project.

---

| Defect ID | Title | Module | Severity | Steps to Reproduce | Actual Result | Expected Result | Status |
|-----------|-------|--------|----------|---------------------|----------------|------------------|--------|
| D001 | Feedback form accepts invalid request ID | Feedback | High | Submit feedback using ID "abc123" | Error message not displayed | Error message should show "Invalid Request ID" | Open |
| D002 | Dashboard filters do not reset fully | Dashboard | Medium | Apply filters, click "Reset" | Only some filters clear | All filters should reset | Open |
| D003 | Status updates on dashboard not persistent | Dashboard | Medium | Click “Completed”, reload page | Status resets | Status should persist | Open |
| D004 | No validation for empty phone number | Pickup Request | High | Submit request with empty phone | Request accepted | Error: "Phone number required" should appear | Open |
| D005 | Long feedback message not truncated in UI | Feedback | Low | Submit long message (500+ chars) | Message overflows UI container | Message should truncate or wrap | Open |
| D006 | No error shown when submitting blank pickup request form | Pickup Request | High | Submit with all fields blank | No clear feedback | Form should show validation messages | Open |
| D007 | Page layout breaks on Safari iOS | Awareness Page | Medium | Open awareness.html on Safari iOS | Cards overlap or shift | Responsive layout should remain intact | Open |
| D008 | Accessibility issue: some elements lack focus indicators | Entire App | Medium | Tab through inputs | Some inputs/buttons lack outlines | All inputs should have visible focus | Open |
| D009 | Duplicate request ID does not raise warning | Pickup Request | Medium | Reuse previously submitted ID | Form accepts without warning | Should warn about duplicate ID | Open |
| D010 | Feedback accepted for already completed requests | Feedback | Low | Enter feedback on completed ID | Feedback accepted | Should notify user feedback is closed | Open |

---

**Legend:**
- Severity: High (critical bug), Medium (partial blocker), Low (minor UI or UX bug)
- Status: Open, In Progress, Resolved, Closed
