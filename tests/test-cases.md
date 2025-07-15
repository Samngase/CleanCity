# Test Cases for CleanCity

## 1. User Registration

| Test Case ID | Test Case Description | Test Steps | Expected Result |
|---|---|---|---|
| TC-001 | Verify that a user can register with valid credentials | 1. Go to the registration page. 2. Fill in the registration form with valid data. 3. Click the "Register" button. | The user should be registered successfully and redirected to the login page. A new user should be created in `localStorage`. |
| TC-002 | Verify that a user cannot register with an existing email | 1. Go to the registration page. 2. Fill in the registration form with an email that already exists. 3. Click the "Register" button. | An error message should be displayed, and the user should not be registered. |
| TC-005 | Verify that the registration form clears the fields after successful registration | 1. Go to the registration page. 2. Fill in the registration form with valid data. 3. Click the "Register" button. | The form fields should be cleared after successful registration. |
| TC-006 | Verify that the registration form displays an error message if the required fields are not filled | 1. Go to the registration page. 2. Leave one or more required fields empty. 3. Click the "Register" button. | An error message should be displayed, and the user should not be registered. |

## 2. User Login

| Test Case ID | Test Case Description | Test Steps | Expected Result |
|---|---|---|---|
| TC-003 | Verify that a user can login with valid credentials | 1. Go to the login page. 2. Enter a valid email and password. 3. Click the "Login" button. | The user should be logged in successfully and redirected to the dashboard. |
| TC-004 | Verify that a user cannot login with invalid credentials | 1. Go to the login page. 2. Enter an invalid email or password. 3. Click the "Login" button. | An error message should be displayed, and the user should not be logged in. |
| TC-007 | Verify that the login form displays an error message if the email and password fields are empty | 1. Go to the login page. 2. Leave the email and password fields empty. 3. Click the "Login" button. | An error message should be displayed, and the user should not be logged in. |
| TC-008 | Verify that an admin user is redirected to the admin dashboard after login | 1. Go to the login page. 2. Enter the credentials of an admin user. 3. Click the "Login" button. | The user should be logged in successfully and redirected to the admin dashboard. |

## 3. Waste Pickup Scheduling

| Test Case ID | Test Case Description | Test Steps | Expected Result |
|---|---|---|---|
| TC-009 | Verify that a user can schedule a waste pickup with valid data | 1. Go to the "Schedule Pickup" page. 2. Fill in the form with valid data. 3. Click the "Submit Request" button. | A success message should be displayed, and the request should be added to `localStorage`. |
| TC-010 | Verify that the waste pickup scheduling form clears the fields after successful submission | 1. Go to the "Schedule Pickup" page. 2. Fill in the form with valid data. 3. Click the "Submit Request" button. | The form fields should be cleared after successful submission. |
| TC-011 | Verify that the waste pickup scheduling form displays an error message if the required fields are not filled | 1. Go to the "Schedule Pickup" page. 2. Leave one or more required fields empty. 3. Click the "Submit Request" button. | An error message should be displayed, and the request should not be submitted. |

## 4. Security

| Test Case ID | Test Case Description | Test Steps | Expected Result |
|---|---|---|---|
| TC-012 | Verify that passwords are not stored in plain text | 1. Register a new user. 2. Inspect the `localStorage` in the browser. | The user's password should be hashed and not visible in plain text. |
| TC-013 | Verify that a user cannot access another user's data (IDOR) | 1. Log in as a regular user. 2. Attempt to access another user's data by manipulating the user ID in the URL or API requests. | The user should be denied access to the other user's data. |
| TC-014 | Verify that the application is not vulnerable to user enumeration | 1. Attempt to enumerate users by sending a series of requests with different email addresses to the `getUserByEmail` function. | The application should not reveal whether an email address is associated with a user account. |
