$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/skeleton/cucumberexpressiondemo.feature");
formatter.feature({
  "name": "Cucumber Expression Demo",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Expression Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@nonui"
    }
  ]
});
formatter.step({
  "name": "John has 1 cucumber in his bag",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberExpressionDemoFeature.john_has_cucumber_in_his_bag(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sara has 5 cucumbers in her bag",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberExpressionDemoFeature.john_has_cucumber_in_his_bag(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ram has 3 cucumbers in his bag",
  "keyword": "Given "
});
formatter.match({
  "location": "CucumberExpressionDemoFeature.john_has_cucumber_in_his_bag(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/skeleton/login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Valid Login User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.step({
  "name": "The URl of demo web shop application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \u003cUsername\u003e as username",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "the user login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ]
    },
    {
      "cells": [
        "kannan1@gmail.com",
        "test1234"
      ]
    },
    {
      "cells": [
        "kannan2@gmail.com",
        "test1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid Login User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.step({
  "name": "The URl of demo web shop application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.the_URl_of_demo_web_shop_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters kannan1@gmail.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.user_enters_kannan_gmail_com_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters test1234 as password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.user_enters_password_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.the_user_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid Login User",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ui"
    }
  ]
});
formatter.step({
  "name": "The URl of demo web shop application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.the_URl_of_demo_web_shop_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters kannan2@gmail.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.user_enters_kannan_gmail_com_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters test1234 as password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.user_enters_password_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureDefinitoin.the_user_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});