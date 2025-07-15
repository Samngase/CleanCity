# ✅ Test Cases – CleanCity App

## 🧾 Module: Waste Pickup Request
## 🏠 Home Page – Waste Pickup Request

| TC ID | Test Description | Steps | Expected Result | Priority |
|-------|------------------|-------|------------------|----------|
| TC01  | Submit valid pickup request | Fill all fields with valid data and submit | Request confirmation displayed | High |
| TC02  | Missing date field | Leave date blank, click submit | Error: "Date is required" | High |
| TC03  | Missing location field | Leave location blank, click submit | Error: "Location is required" | High |
| TC04  | Invalid phone number format | Enter "abc123" as phone number | Error: "Invalid phone number" | Medium |
| TC05  | Description character limit | Enter over 500 characters | Error: "Description too long" | Low |
| TC06  | Cancel form before submission | Fill fields, click "Cancel" | Form resets | Low |
| TC07  | Submit duplicate request ID | Enter same ID twice | Error: "Duplicate request" | Medium |

## 📊 Dashboard Page – Admin View and Filter

| TC ID | Test Description | Steps | Expected Result | Priority |
|-------|------------------|-------|------------------|----------|
| TC08  | Load dashboard data | Open dashboard.html | Requests displayed in grid | High |
| TC09  | Filter by location | Select "Eldoret" and apply filter | Shows only Eldoret entries | Medium |
| TC10  | Filter by request type | Select "Garbage" | Displays only Garbage requests | Medium |
| TC11  | Filter by status | Choose "Completed" | Shows completed requests only | Medium |
| TC12  | Apply combined filters | Choose "Nairobi" + "Pending" | Combined results shown | Medium |
| TC13  | Reset filters | Click "Reset" | All requests appear again | Medium |
| TC14  | Refresh page state | Reload browser | Maintains previous filter via localStorage | Medium |

## 📣 Feedback Page – User Feedback

| TC ID | Test Description | Steps | Expected Result | Priority |
|-------|------------------|-------|------------------|----------|
| TC15  | Submit valid feedback | Enter valid ID and message | Success alert displayed | High |
| TC16  | Invalid feedback ID | Use "abc###" or non-existent ID | Error: "Invalid Request ID" | High |
| TC17  | Empty message field | Leave feedback text empty | Error: "Feedback is required" | Medium |
| TC18  | Feedback on completed request | Use ID of completed request | Message: "Feedback not accepted" | Medium |

## 🧠 Awareness Page – Environment Tips & Cards

| TC ID | Test Description | Steps | Expected Result | Priority |
|-------|------------------|-------|------------------|----------|
| TC19  | Load awareness content | Open awareness.html | Cards load with image, title, text | High |
| TC20  | Responsive layout | View on mobile/tablet | Cards stack/responsive grid | Medium |
| TC21  | Check alt attributes | Inspect images with screen reader | Screen reader reads alt text | High |
| TC22  | Test grid layout | Resize browser window | Elements adapt using CSS grid | Medium |

## 🛠 Admin Panel – Status Updates

| TC ID | Test Description | Steps | Expected Result | Priority |
|-------|------------------|-------|------------------|----------|
| TC23  | Mark as Scheduled | Click “Scheduled” on entry | UI status updates | High |
| TC24  | Mark as Completed | Click “Completed” | UI shows green check or label | High |
| TC25  | Action state persistence | Reload page after marking | Status persists via localStorage | Medium |

## 🧪 Non-Functional Testing

| TC ID | Test Description | Steps | Expected Result | Priority |
|-------|------------------|-------|------------------|----------|
| TC26  | Performance under slow network | Simulate 3G in DevTools | Page loads in < 5s | Medium |
| TC27  | Accessibility – keyboard nav | Navigate app using Tab/Shift+Tab | All elements reachable | High |
| TC28  | Accessibility – contrast check | Inspect color contrast on inputs | Passes WCAG guidelines | Medium |
| TC29  | Compatibility | Open in Chrome, Edge, Firefox | Layout and actions work identically | High |
