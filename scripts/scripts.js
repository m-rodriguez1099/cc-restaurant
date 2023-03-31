/*
Student Name: Marissa Rodriguez
File Name: script.js
Date: 02/01/2023
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var  jpg = document.getElementById("logo");
    if (menu.style.display === "block" && jpg.style.display === "none") {
        menu.style.display = "none";
        jpg.style.display = "block";
    } else {
        menu.style.display = "block";
        jpg.style.display = "none";
    }
}