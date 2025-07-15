# 🧩 Challenges and Changes Log - Week 2

## Challenges Faced
1. **Missing Date Validation**
   - The form on the home page lacks proper validation for empty date fields.
   - Workaround: Manual testing with different input formats to identify if validation is completely missing or misconfigured.

2. **Invalid Request ID Handling**
   - The feedback form accepts non-numeric, malformed Request IDs.
   - Challenge: Determining the acceptable format due to absence of backend error messaging.

3. **UI State Persistence in Admin Panel**
   - Button clicks (e.g., "Mark as Scheduled") do not visually update the request status.
   - Requires checking localStorage and React state binding.

4. **Accessibility Testing**
   - Screen reader tools revealed missing alt attributes on images.
   - Limited options for verifying complete accessibility due to single-browser testing.

## Changes Made
- Added manual test cases for all major flows based on app walkthrough.
- Noted bugs and included suggested fixes in the test case descriptions.
- Created a structured defect log to capture and report each defect reproducibly.