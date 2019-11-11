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
let d = new Date();
let day = d.getDay(); //set day as number starting from monday = 1
let dayStr = JSON.stringify(day);
let glassStr = localStorage.getItem(dayStr);
let glass = JSON.parse(glassStr);

if(glass==null){
  glass = 0;
}
console.log(glassStr, glass) //just for test 

const counter = document.querySelector('.application__count--js');
const buttonAdd = document.querySelector('.interaction__add--js');
const buttonRemove = document.querySelector('.interaction__remove--js');

//set starter glass value display
counter.textContent = `${glass}`;

buttonAdd.addEventListener('click', (e) =>{
  glass++;
  glassStr = JSON.stringify(glass);
  let dayStr = JSON.stringify(day);
  localStorage.setItem(dayStr, glassStr);
  counter.textContent = `${glass}`;
})

buttonRemove.addEventListener('click', (e) =>{
  if(glass>0){
  glass--;
  }
  else if(glass==0){
    glass = 0;
  }
  glassStr = JSON.stringify(glass);
  let dayStr = JSON.stringify(day);
  localStorage.setItem(dayStr, glassStr);
  counter.textContent = `${glass}`;
})