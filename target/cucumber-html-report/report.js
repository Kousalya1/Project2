$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Get weather information",
  "description": "",
  "id": "get-weather-information",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get weather information from UI and API and compare",
  "description": "",
  "id": "get-weather-information;get-weather-information-from-ui-and-api-and-compare",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search location \"\u003cLocation\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Get weather information from UI",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Get weather information from API for the \"\u003cLocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Compare API response data with UI data",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "get-weather-information;get-weather-information-from-ui-and-api-and-compare;",
  "rows": [
    {
      "cells": [
        "Location"
      ],
      "line": 12,
      "id": "get-weather-information;get-weather-information-from-ui-and-api-and-compare;;1"
    },
    {
      "cells": [
        "Chennai, Tamil Nadu, IN"
      ],
      "line": 13,
      "id": "get-weather-information;get-weather-information-from-ui-and-api-and-compare;;2"
    },
    {
      "cells": [
        "Pasir Ris, North East, SG"
      ],
      "line": 14,
      "id": "get-weather-information;get-weather-information-from-ui-and-api-and-compare;;3"
    },
    {
      "cells": [
        "Los Angeles, CA, US"
      ],
      "line": 15,
      "id": "get-weather-information;get-weather-information-from-ui-and-api-and-compare;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Get weather information from UI and API and compare",
  "description": "",
  "id": "get-weather-information;get-weather-information-from-ui-and-api-and-compare;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search location \"Chennai, Tamil Nadu, IN\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Get weather information from UI",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Get weather information from API for the \"Chennai, Tamil Nadu, IN\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Compare API response data with UI data",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launch_application_url()"
});
formatter.result({
  "duration": 42509871800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai, Tamil Nadu, IN",
      "offset": 19
    }
  ],
  "location": "Steps.iSearchLocation(String)"
});
formatter.result({
  "duration": 526721400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.getWeatherInformationFromUI()"
});
formatter.result({
  "duration": 8141651600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai, Tamil Nadu, IN",
      "offset": 42
    }
  ],
  "location": "Steps.getWeatherInformationFromAPI(String)"
});
formatter.result({
  "duration": 12753725800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.compareAPIResponseDataWithUIData()"
});
formatter.result({
  "duration": 6379200,
  "status": "passed"
});
formatter.after({
  "duration": 429296700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get weather information from UI and API and compare",
  "description": "",
  "id": "get-weather-information;get-weather-information-from-ui-and-api-and-compare;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search location \"Pasir Ris, North East, SG\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Get weather information from UI",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Get weather information from API for the \"Pasir Ris, North East, SG\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Compare API response data with UI data",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launch_application_url()"
});
formatter.result({
  "duration": 27487644700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pasir Ris, North East, SG",
      "offset": 19
    }
  ],
  "location": "Steps.iSearchLocation(String)"
});
formatter.result({
  "duration": 314320200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.getWeatherInformationFromUI()"
});
formatter.result({
  "duration": 5473941700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pasir Ris, North East, SG",
      "offset": 42
    }
  ],
  "location": "Steps.getWeatherInformationFromAPI(String)"
});
formatter.result({
  "duration": 1815061600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.compareAPIResponseDataWithUIData()"
});
formatter.result({
  "duration": 1399500,
  "status": "passed"
});
formatter.after({
  "duration": 385126600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get weather information from UI and API and compare",
  "description": "",
  "id": "get-weather-information;get-weather-information-from-ui-and-api-and-compare;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch application url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search location \"Los Angeles, CA, US\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Get weather information from UI",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Get weather information from API for the \"Los Angeles, CA, US\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Compare API response data with UI data",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launch_application_url()"
});
formatter.result({
  "duration": 17603917800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Los Angeles, CA, US",
      "offset": 19
    }
  ],
  "location": "Steps.iSearchLocation(String)"
});
formatter.result({
  "duration": 384778600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.getWeatherInformationFromUI()"
});
formatter.result({
  "duration": 7847879500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Los Angeles, CA, US",
      "offset": 42
    }
  ],
  "location": "Steps.getWeatherInformationFromAPI(String)"
});
formatter.result({
  "duration": 1677465900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.compareAPIResponseDataWithUIData()"
});
formatter.result({
  "duration": 4962400,
  "status": "passed"
});
formatter.after({
  "duration": 438804900,
  "error_message": "java.lang.AssertionError: The following asserts failed:\nFAIL: UI data: 10°C is not matching with the API response data: 11°C\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:37)\r\n\tat StepDefinitions.Steps.after(Steps.java:71)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});