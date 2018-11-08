/*
CIS166AA - JavaScript
      Chapter 4
      Chapter case project

      Exception Handling on a form
      
      Author: Andrew Dorre
      Date:   11/06/2018

	  Filename: formstuff.js
*/
var firstName = "";
var lastName = "";
//I wanted to make it register whether or not the input was an invalid character for a name
//I knew I could do it with regular expressions, but I hadn't tried that yet in javascript
//so the link below helped.
//https://stackoverflow.com/questions/18042133/check-if-input-is-number-or-letter-javascript
var regex=/^[a-zA-Z]+$/;

function displayResults(){
    try {
        firstName = document.getElementById("firstname").value;
        lastName = document.getElementById("lastname").value;

        if (firstName === "") {            
            throw "Please enter a first name!";
        }
        else if (lastName === "") {
            throw "Please enter a last name!"
        }
        //The match method was also useful, from the link above regarding a regular expression
        else if ((!firstName.match(regex)) || (!lastName.match(regex))) {
            throw "Enter a name only!";
        }        
    }
    catch (fieldError) {
        window.alert(fieldError);
        return false;
    }
    // used the finally statement to remove any input into the fields. Cleaning it up for the next use
    finally {
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
    }
    

    document.getElementById("firstresult").innerHTML = "" + firstName;
    document.getElementById("secondresult").innerHTML = "" + lastName;
}