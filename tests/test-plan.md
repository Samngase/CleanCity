# 📋 Test Plan for CleanCity App

## 🧪 Objective

Ensure the CleanCity app functions as intended by verifying user interactions, data handling, and overall system behavior through Unit, Integration, and System testing.

## 📦 Scope

This test plan covers the testing of the CleanCity React app, including form submission, data rendering, and component interaction.

## 🛠️ Tools & Frameworks

* **Testing Framework**: Jest
* **Test Environment**: Node.js environment with jsdom
* **CI/CD Integration**: GitHub Actions (future phases)

## 👥 Team Roles

* **Test Planner**: Responsible for drafting and updating this test plan
* **QA Engineer**: Writes test cases and test scripts
* **Bug Tracker**: Logs and manages issues in GitHub
* **Developer**: Fixes identified bugs based on test outcomes

## 🔍 Test Types

### Unit Tests

* Focus on individual functions and components
* Example: Test `addWasteReport()` function independently

### Integration Tests

* Test combined components and how they work together
* Example: Form input + API submission + confirmation message rendering

### System Tests

* Simulate real-world usage and workflows
* Example: Complete cycle from submitting a waste report to viewing it in the list

## ✅ Entry Criteria

* All components compiled without errors
* Necessary dependencies (Node.js, Jest) installed

## ⛔ Exit Criteria

* All critical test cases pass
* No major open bugs remain

## 📅 Schedule

* Week 1: Setup and test plan creation
* Week 2: Test writing and execution


## 📁 Deliverables

* Jest test files in `tests/`
* Bug reports in GitHub Issues
* Final `test-report.md`
