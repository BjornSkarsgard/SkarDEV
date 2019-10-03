'use strict';

var aside = document.querySelector(".sidebar__mobile");
var slideout = document.querySelector(".slideout");
var wrapper = document.querySelector(".wrapper");
var burgerActive = document.querySelector(".slideout__burger")
var body = document.body;
var overlay = document.querySelector(".overlay");

slideout.addEventListener("click", function(evt) {
    evt.preventDefault();
    wrapper.classList.toggle("wrapper-transform"),
        aside.classList.toggle("sidebar-open-mobile"),
        burgerActive.classList.toggle("slideout__burger--active"),
        body.classList.toggle("overflow-hide"),
        overlay.classList.toggle("overlay__open");
});

overlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    wrapper.classList.toggle("wrapper-transform"),
        aside.classList.toggle("sidebar-open-mobile"),
        burgerActive.classList.toggle("slideout__burger--active"),
        body.classList.toggle("overflow-hide"),
        overlay.classList.toggle("overlay__open");
});