Feature: Login feature
@ui
Scenario Outline: Valid Login User
Given The URl of demo web shop application
When User enters <Username> as username
And  User enters <password> as password
And user clicks on login button
Then the user login successfully 

Examples:
|Username|password|
|kannan1@gmail.com|test1234|
|kannan2@gmail.com|test1234|