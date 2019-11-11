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
const counter = document.querySelector('.application__count--js');
const buttonAdd = document.querySelector('.interaction__add--js');
const buttonRemove = document.querySelector('.interaction__remove--js');

console.log(glass, day) //just for test 

//Save variables in local storage
const glassStr = JSON.stringify(glass);
const dayStr = JSON.stringify(day);
localStorage.setItem('glassSave', glassStr);
localStorage.setItem('daySave', dayStr);

