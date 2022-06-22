$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Devis.feature");
formatter.feature({
  "name": "Devis",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Demander un devis apres le vidage du devis",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Devis3"
    }
  ]
});
formatter.step({
  "name": "Je suis connecte a mon compte avec mon \u003cmail\u003e et mon \u003cpassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Selectionner un article en utilisant un \u003cparametre\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "ajouter cet article au devis",
  "keyword": "And "
});
formatter.step({
  "name": "Je vide le devis",
  "keyword": "And "
});
formatter.step({
  "name": "Selectionner un article en utilisant un \u003cparametre1\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "ajouter cet article au devis",
  "keyword": "And "
});
formatter.step({
  "name": "Selectionner un article en utilisant un \u003cparametre2\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "ajouter cet article au devis",
  "keyword": "And "
});
formatter.step({
  "name": "je demande le devis",
  "keyword": "And "
});
formatter.step({
  "name": "Le devis doit etre genere",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mail",
        "password",
        "parametre",
        "parametre1",
        "parametre2"
      ]
    },
    {
      "cells": [
        "Ben.dhaya.ahmed.baha.eddine@hotmail.com",
        "22080023A",
        "Asus",
        "PC PORTABLE LENOVO IDEAPAD 1 11IGL05 N4020 4GO 128GO SSD - GRIS (81VT0058FG)",
        "SMARTPHONE XIAOMI REDMI 9A 32G - BLEU"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Demander un devis apres le vidage du devis",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Devis3"
    }
  ]
});
formatter.step({
  "name": "Je suis connecte a mon compte avec mon Ben.dhaya.ahmed.baha.eddine@hotmail.com et mon 22080023A",
  "keyword": "Given "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.je_suis_connecte_a_mon_compte(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selectionner un article en utilisant un Asus",
  "keyword": "When "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.rechercher_un_article_en_tapant_un_param_tre(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ajouter cet article au devis",
  "keyword": "And "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.ajouter_cet_article_au_devis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Je vide le devis",
  "keyword": "And "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.je_vide_le_devis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selectionner un article en utilisant un PC PORTABLE LENOVO IDEAPAD 1 11IGL05 N4020 4GO 128GO SSD - GRIS (81VT0058FG)",
  "keyword": "And "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.rechercher_un_article_en_tapant_un_param_tre(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ajouter cet article au devis",
  "keyword": "And "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.ajouter_cet_article_au_devis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selectionner un article en utilisant un SMARTPHONE XIAOMI REDMI 9A 32G - BLEU",
  "keyword": "And "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.rechercher_un_article_en_tapant_un_param_tre(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ajouter cet article au devis",
  "keyword": "And "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.ajouter_cet_article_au_devis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je demande le devis",
  "keyword": "And "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.je_demande_le_devis()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-MUF71SN\u0027, ip: \u0027192.168.1.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c091eb7004584ef6a8d1c45edbfcbc64, findElement {using\u003dxpath, value\u003d//button[contains(text(),\u0027Demander un devis\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.115, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\Fares\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54670}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54670/devtoo..., se:cdpVersion: 102.0.5005.115, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c091eb7004584ef6a8d1c45edbfcbc64\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat DevisPage.DevisPage.GenerateQuote(DevisPage.java:57)\r\n\tat DevisStepDef.DevisStepDef.je_demande_le_devis(DevisStepDef.java:70)\r\n\tat ✽.je demande le devis(file:///C:/Users/Fares/Desktop/Project1-main/Mytek_PFF/src/test/resources/Features/Devis.feature:40)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Le devis doit etre genere",
  "keyword": "Then "
});
formatter.match({
  "location": "DevisStepDef.DevisStepDef.le_devis_doit_etre_genere()"
});
formatter.result({
  "status": "skipped"
});
});