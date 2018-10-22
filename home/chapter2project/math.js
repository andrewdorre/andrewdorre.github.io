/*    CIS166AA - JavaScript
 *    Chapter 2
 *    Chapter case

 *    
 *    Variables and functions
 *    Author: Andrew Dorre
 *    Date:   10/20/2018

 *    Filename: math.js
 */

 // global variables
 var total = 0;
 var subtotal = 0;

 // functions
 function calculate() {    
     // guess this -= is necessary to reset the subtotal 
     total -= subtotal;
     subtotal = (add.value - subtract.value) * multiply.value / divide.value;
     total += subtotal;
     document.getElementById("total").innerHTML = "" + total;
 }

 // actions when form is reset
 // multiply and divide default to "1" so they don't affect the number
function refreshForm(){
    document.getElementById("add").value = 0;
    document.getElementById("subtract").value = 0;
    document.getElementById("multiply").value = 1;
    document.getElementById("divide").value = 1;
    calculate();
    createEventListener();
}

// event listeners
// whenever the values in these fields change, the form will update, after you hit "tab"
// or change fields
function createEventListener(){
    document.getElementById("add").addEventListener("change", calculate, false);
    document.getElementById("subtract").addEventListener("change", calculate, false);
    document.getElementById("multiply").addEventListener("change", calculate, false);
    document.getElementById("divide").addEventListener("change", calculate, false);
}

 // refresh window
 window.addEventListener("load", refreshForm, false);