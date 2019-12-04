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
let month = d.getMonth() +1; //set month
let date = d.getDate(); //set day
let monthStr = JSON.stringify(month);
let dateStr = JSON.stringify(date);
let dayStr = dateStr + " " + monthStr;
let glassStr = localStorage.getItem(dayStr);
let glass = JSON.parse(glassStr);

if(glass==null){
  glass = 0;
}

const counter = document.querySelector('.application__count--js');
const buttonAdd = document.querySelector('.interaction__add--js');
const buttonRemove = document.querySelector('.interaction__remove--js');

//set starter glass value display
counter.textContent = `${glass}`;

buttonAdd.addEventListener('click', (e) =>{
  if(glass<99){
    glass++;
    }
    else {
      glass = glass;
    }
  glassStr = JSON.stringify(glass);
  localStorage.setItem(dayStr, glassStr);
  counter.textContent = `${glass}`;
})

buttonRemove.addEventListener('click', (e) =>{
  if(glass>0){
  glass--;
  }
  else {
    glass = 0;
  }
  glassStr = JSON.stringify(glass);
  localStorage.setItem(dayStr, glassStr);
  counter.textContent = `${glass}`;
})

//History operation test
localStorage.setItem(history, '12 02, 5, 13 02, 7, 14 02, 8');
var test = localStorage.getItem(history);
var res = test.split(",");
let resLenght = res.length;
let i;
  //for (i = 0; i < res.length; i++) {

  //  }

res.shift();
let newHistory = res.toString();
localStorage.setItem(history, newHistory);