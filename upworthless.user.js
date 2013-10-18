// ==UserScript==
// @match http://*.upworthy.com/*
// ==/UserScript==

// (Haphazardly) tested in Chrome.
// To install: save the raw .js file, go to about:extensions, and drag the saved js file to the window.

location.href = document.evaluate("//a[text()='ORIGINAL' or text()='ORIGINAL:']/@href", document, null, XPathResult.ANY_TYPE, null).iterateNext().textContent
