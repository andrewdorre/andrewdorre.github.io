"use strict";

function removeSelectDefaults() {
    var emptySelect = document.getElementsByTagName("select");
    for (var i = 0; i < emptySelect.length; i++) {
        emptySelect[i].selectedIndex = -1;
    }
}
function submit() {
    document.getElementById("submitText").innerHTML = "You clicked a button!";
}
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults);
}