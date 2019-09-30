'use strict';

var aside = document.querySelector(".sidebar__mobile");
var slideout = document.querySelector(".slideout");
var materials = document.querySelector(".wrapper");
var burgerActive = document.querySelector(".slideout__burger")
var body = document.body;

slideout.addEventListener("click", function(evt) {
    evt.preventDefault();
    materials.classList.toggle("wrapper-transform"),
        aside.classList.toggle("sidebar-open-mobile"),
        burgerActive.classList.toggle("slideout__burger--active");
    // body.classList.toggle("overflow-hide"),
    // aside.classList.toggle("overflow-visible");
});