"use strict";

import { Z_DEFAULT_STRATEGY } from "zlib";

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
let glassHistory;
let glass;
let glassStr;
//Get local history
let localHistory = localStorage.getItem(history);
if (localHistory == null) {
  glassHistory = [dayStr, 0];
}
else {
  glassHistory = localHistory.split(",");
}
let glassHistoryLenght = glassHistory.length;

//Set count on zero in new day
if (glassHistory[glassHistoryLenght-2] == dayStr){
  let glassStr = glassHistory[glassHistoryLenght-1];
  glass = JSON.parse(glassStr);
}
else{
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
  if (glassHistory[glassHistoryLenght-2] == dayStr){
    glassHistory.pop();
    glassHistory.push(glassStr);
  }
  else{
    glassHistory.push(dayStr);
    glassHistory.push(glassStr);
    console.log('bubel');
    console.log(glassHistory[glassHistoryLenght-2], dayStr);
  }
  let newHistory = glassHistory.toString();
  localStorage.setItem(history, newHistory);
  counter.textContent = `${glass}`;
  //Refresh sesion variable
  localHistory = localStorage.getItem(history);
  glassHistory = localHistory.split(",");
  glassHistoryLenght = glassHistory.length;
})

buttonRemove.addEventListener('click', (e) =>{
  if(glass>0){
  glass--;
  }
  else {
    glass = 0;
  }
  localHistory = localStorage.getItem(history);
  glassHistory = localHistory.split(","); 
  glassStr = JSON.stringify(glass);
   if (glassHistory[glassHistoryLenght-2] == dayStr){
    glassHistory.pop();
    glassHistory.push(glassStr);
  }
  else{
    glassHistory.push(dayStr);
    glassHistory.push(glassStr);
  }
  let newHistory = glassHistory.toString();
  localStorage.setItem(history, newHistory);
  counter.textContent = `${glass}`;
  //Refresh sesion variable
  localHistory = localStorage.getItem(history);
  glassHistory = localHistory.split(",");
  glassHistoryLenght = glassHistory.length;
})

//Clearing history
while (glassHistoryLenght > 16){
  glassHistory.shift();
  glassHistoryLenght = glassHistory.length;
}

//History preparation
let i = 0;
let j = 0;

  while (i < 16) {
    const daySummary = document.querySelector('.summary__day' + j + '--js');
    daySummary.textContent = glassHistory[i];
    const glassSummary = document.querySelector('.summary__glass' + j + '--js');
    i++;
    glassSummary.textContent = glassHistory[i];
    i++;
    j++;
   }
