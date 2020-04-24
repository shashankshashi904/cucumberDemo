$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/testMeApp/testmeappRegistration.feature");
formatter.feature({
  "name": "testmeappRegistration feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Valid Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The URL of Test me app",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on sign up link",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cuname\u003e as username",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cfname\u003e as firstname",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003clname\u003e as lastname",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003ccpassword\u003e as cpassword",
  "keyword": "And "
});
formatter.step({
  "name": "user select male radio button from gender",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cemail\u003e as email",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cmobile\u003e number as mobilenumber",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cdob\u003e as date of birth",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003caddress\u003e as address",
  "keyword": "And "
});
formatter.step({
  "name": "user select dropdown in security question",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cans\u003e as answer",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks Register button",
  "keyword": "And "
});
formatter.step({
  "name": "the user Registered successfuly",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "fname",
        "lname",
        "password",
        "cpassword",
        "email",
        "mobile",
        "dob",
        "address",
        "ans"
      ]
    },
    {
      "cells": [
        "Ramkhan",
        "Ram",
        "khan",
        "ram123",
        "ram123",
        "ram@gmail.com",
        "1234567890",
        "01/01/2001",
        "Bangalore-India",
        "Blue"
      ]
    },
    {
      "cells": [
        "Khaisarram",
        "khaisar",
        "ram",
        "kram123",
        "kram123",
        "kram@gmail.com",
        "0123456789",
        "01/01/2002",
        "Karnataka-India",
        "Red"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The URL of Test me app",
  "keyword": "Given "
});
formatter.match({
  "location": "testmeappRegistration.the_URL_of_Test_me_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign up link",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_clicks_on_sign_up_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Ramkhan as username",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_uname_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Ram as firstname",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_fname_as_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters khan as lastname",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_lname_as_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters ram123 as password",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_Password_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters ram123 as cpassword",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_cpassword_as_cpassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select male radio button from gender",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_select_male_radio_button_from_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters ram@gmail.com as email",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_user_gmail_com_as_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters 1234567890 number as mobilenumber",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_number_as_mobilenumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters 01/01/2001 as date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_as_date_of_birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Bangalore-India as address",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_nokjsncns_as_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select dropdown in security question",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_select_dropdown_in_security_question()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Blue as answer",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_answer_as_answer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Register button",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_clicks_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user Registered successfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "testmeappRegistration.the_user_Registered_successfuly()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Login]\u003e but was:\u003c[Sign Up]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat testMeApp.testmeappRegistration.the_user_Registered_successfuly(testmeappRegistration.java:107)\r\n\tat ✽.the user Registered successfuly(file:src/test/resources/testMeApp/testmeappRegistration.feature:18)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Valid Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The URL of Test me app",
  "keyword": "Given "
});
formatter.match({
  "location": "testmeappRegistration.the_URL_of_Test_me_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign up link",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_clicks_on_sign_up_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Khaisarram as username",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_uname_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters khaisar as firstname",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_fname_as_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters ram as lastname",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_lname_as_lastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters kram123 as password",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_Password_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters kram123 as cpassword",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_cpassword_as_cpassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select male radio button from gender",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_select_male_radio_button_from_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters kram@gmail.com as email",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_user_gmail_com_as_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters 0123456789 number as mobilenumber",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_number_as_mobilenumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters 01/01/2002 as date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_as_date_of_birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Karnataka-India as address",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_nokjsncns_as_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select dropdown in security question",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_select_dropdown_in_security_question()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Red as answer",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_enters_answer_as_answer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Register button",
  "keyword": "And "
});
formatter.match({
  "location": "testmeappRegistration.user_clicks_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user Registered successfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "testmeappRegistration.the_user_Registered_successfuly()"
});
formatter.result({
  "status": "passed"
});
});