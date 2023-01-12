var currentYear = new Date().getFullYear();

// Set element with id year to current year
document.getElementById("currentyear").innerHTML = currentYear;


// Get Last Modified Date
var lastModifiedDate = document.lastModified;
document.getElementById("lastmodified").innerHTML = lastModifiedDate;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function myFunction() {
    const modeButton = document.querySelector("#darkmode");
    const mainArea = document.querySelector("main");
      modeButton.classList.toggle("dark");
      mainArea.classList.toggle("dark");
    }