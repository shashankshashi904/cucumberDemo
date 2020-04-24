Feature: testmeappRegistration feature
Scenario Outline: Valid Registration
Given The URL of Test me app
And user clicks on sign up link
And user enters <uname> as username
And user enters <fname> as firstname
And user enters <lname> as lastname
And user enters <password> as password
And user enters <cpassword> as cpassword
And user select male radio button from gender
And user enters <email> as email
And user enters <mobile> number as mobilenumber
And user enters <dob> as date of birth
And user enters <address> as address
And user select dropdown in security question
And user enters <ans> as answer
And user clicks Register button
Then the user Registered successfuly

Examples:
|uname|fname|lname|password|cpassword|email|mobile|dob|address|ans|
|Ramkhan|Ram|khan|ram123|ram123|ram@gmail.com|1234567890|01/01/2001|Bangalore-India|Blue|
|Khaisarram|khaisar|ram|kram123|kram123|kram@gmail.com|0123456789|01/01/2002|Karnataka-India|Red|