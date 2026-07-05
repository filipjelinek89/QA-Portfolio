# BUG011 – Bill Payment Accepts Invalid Phone Number Format Without Validation

**Project:** ParaBank Manual Testing Project

**Version:** 1.0

**Reported by:** Filip Jelinek

---

## Bug Information

| Field                 | Value                                      |
| --------------------- | ------------------------------------------ |
| **Bug ID**            | BUG011                                     |
| **Title**             | Bill Payment accepts invalid phone number format without validation |
| **Related Test Case** | TC048                                      |
| **Module**            | Bill Payment                               |
| **Severity**          | Medium                                     |
| **Priority**          | Medium                                     |
| **Status**            | New                                        |
| **Reported On**       | 2026-07-04                                 |

---

## Environment

| Item             | Value                              |
| ---------------- | ---------------------------------- |
| Application      | ParaBank                           |
| URL              | https://parabank.parasoft.com/     |
| Browser          | Google Chrome                      |
| Browser Version  | 149.0.7827.197                     |
| Operating System | Windows 11                         |
| Testing Type     | Manual Testing                     |

---

## Preconditions

* User is registered in ParaBank.
* User is logged into the application.
* User has an active account with available balance.
* Bill Payment functionality is accessible.
* Invalid phone number test data is prepared.

---

## Steps to Reproduce

| Step | Action |
| ---- | ------ |
| 1 | Log in to ParaBank using valid credentials. |
| 2 | Navigate to the Bill Pay page. |
| 3 | Enter valid payee information in all required fields. |
| 4 | Enter an invalid phone number format into the Phone Number field. |
| 5 | Enter valid account information and payment amount. |
| 6 | Select the funding account. |
| 7 | Click the Send Payment button. |

---

## Expected Result

The application should validate the Phone Number field before processing the payment.

If an invalid phone number format is entered:

* The payment should not be processed.
* A validation message should be displayed.
* The user should be informed that the phone number format is invalid.

Example validation message:

"Please enter a valid phone number."

---

## Actual Result

The application accepted an invalid phone number format in the payee information form.

The bill payment was processed successfully, and the application displayed a successful payment confirmation message.

No validation message was displayed to inform the user that the entered phone number format was invalid.

---

## Impact

This defect affects payee contact information validation and data accuracy.

Impact:

* Invalid phone numbers can be stored in the application.
* Payee contact details may contain incorrect information.
* Customer and payment records lose data reliability.
* External systems depending on contact information may be affected.
* Input validation rules are not properly enforced.

---

## Attachments

### Screenshots

[BUG-011 Screenshot](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/08_Screenshots/BUG011_TC048_Bill_Payment_Invalid_Phone_Number_Accepted.png)

---

### Video

Not attached.

---

## QA Assessment

The defect is consistently reproducible and affects data validation in the Bill Payment workflow.

A banking application should validate contact information before accepting payment requests. Allowing invalid phone number formats can result in inaccurate payee records.

Additional validation rules should be implemented for the Phone Number field.

---

## Test Evidence

| Item            | Value                                      |
| --------------- | ------------------------------------------ |
| Test Case       | TC048                                      |
| Test Data       | Invalid phone number format                |
| Reproducibility | Always                                     |
| Frequency       | 100%                                       |

---

## Notes

The issue was discovered during negative input validation testing.

The application successfully processes bill payments even when the payee contact information contains an invalid phone number.

Phone number format validation should be added before submitting bill payment requests.

---

⬅️ Back to Bug Reports

[04_Bug_Reports.md](https://github.com/filipjelinek89/QA-Portfolio/blob/main/qa-parabank/04_Bug_Reports.md)
