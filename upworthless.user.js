// ==UserScript==
// @match http://*.upworthy.com/*
// ==/UserScript==

location.href = document.evaluate("//a[text()='ORIGINAL']/@href", document, null, XPathResult.ANY_TYPE, null).iterateNext().textContent
