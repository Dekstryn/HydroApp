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


//Save variables in local storage
let glassStr = JSON.stringify(glass);
let dayStr = JSON.stringify(day);
localStorage.setItem(dayStr, glassStr);
//localStorage.setItem('daySave', dayStr);

buttonAdd.addEventListener('click', (e) =>{
  glassStr == localStorage.getItem(dayStr);
  glass == JSON.parse(glassStr);
  glass = glass + 1;
  glassStr = JSON.stringify(glass);
  localStorage.setItem(dayStr, glassStr);
  counter.textContent = `${glass}`;
  console.log(glass, day) //just for test 
})