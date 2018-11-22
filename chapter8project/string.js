/*       CIS166AA - JavaScript
      Chapter 8
      Chapter case project

      Form Validation
      
      Author: Andrew Dorre
      Date:   11/22/2018

      Filename: string.js */
"use strict";

var pizzaToppings = [];

function addToppings(event) {
    if (event === undefined) {
        event = window.event;
     }
     var callerElement = event.target || event.srcElement;
     var toppings = callerElement.value;
     if (callerElement.checked) {
         pizzaToppings.push(toppings);
         var newTopping = document.createElement("li");
         newTopping.innerHTML = toppings;
         document.getElementById("toppingslist").appendChild(newTopping);
         //document.getElementById("toppingsdiv").style.display.block;
     }
     else {
         var toppingsItems = document.querySelectorAll("#toppingslist li")
        for (var i = 0; i < pizzaToppings.length; i++) {
           if (toppingsItems[i].innerHTML === toppings) {
              pizzaToppings.splice(i, 1);
              toppingsItems[i].parentNode.removeChild(toppingsItems[i]);
              break;
           }
        }
     }
}

function createEventListeners() {
    var pizToppings = document.getElementsByName("toppings");
    if (pizToppings[0].addEventListener) {
        for (var i = 0; i < pizToppings.length; i++) {
            pizToppings[i].addEventListener("change", addToppings, false);
        }
    } else if (pizToppings[0].attachEvent) {
        for (var i = 0; i < pizToppings.length; i++) {
            pizToppings[i].attachEvent("onchange", addToppings);
        }
    }
    
}
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}