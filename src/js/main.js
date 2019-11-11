"use strict";

// service worker registration 

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Variables definition
let glass = 0;
let d = new Date();
let day = d.getDay(); //set day as number starting from monday = 1

console.log(glass, day)


