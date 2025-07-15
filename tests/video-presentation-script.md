# Video Presentation Script for CleanCity

**(0:00 - 0:30) Introduction**

Hello, my name is [Your Name], and I am a QA specialist. I have conducted a comprehensive quality assurance test of the CleanCity web application.

The goal of this testing was to identify and document all functional and non-functional defects in the application.

**(0:30 - 1:15) Testing Approach**

I performed the testing manually in a command-line environment. The testing process was divided into four phases: test planning, test design, test execution, and test closure.

I created a test plan, a defect log, and a set of test cases to guide the testing process.

**(1:15 - 3:15) Key Findings**

I found a total of 7 defects in the application. The most critical issues are related to the application's core functionality.

The registration form does not create a new user, the login form does not perform any authentication, and the waste pickup scheduling form does not submit the request.

I also found several security vulnerabilities, including the fact that passwords are stored in plain text, and the application is vulnerable to IDOR and user enumeration attacks.

**(3:15 - 4:45) Critical Issues Demo**

Now, I will demonstrate some of the critical issues I found.

**(Show a demo of the registration form not working)**

As you can see, when I fill in the registration form and click the "Register" button, I am redirected to the login page, but no new user is created.

**(Show a demo of the login form not working)**

Here, I am entering a random email and password, and as you can see, I am able to log in successfully. This is because the application is not performing any authentication.

**(Show a demo of the waste pickup scheduling form not working)**

Finally, here is the waste pickup scheduling form. When I fill in the form and click the "Submit Request" button, a success message is displayed, but the request is not actually submitted.

**(4:45 - 5:30) Recommendations**

Based on my findings, I recommend that the development team addresses all the identified issues before the application is released.

The most important recommendations are to implement a proper user registration and authentication system, to fix the waste pickup scheduling functionality, and to address the security vulnerabilities.

Thank you for your time.
