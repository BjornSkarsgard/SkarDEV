"use strict";

$(document).ready(function() {
    // Отслеживаем клик и показываем другие категории в слайдере
    $('.sidebar__pc > .categories > .categories__navigation > ul > .categories__dropdown-items > a').click(function() {
        $('.categories__dropdown-items ul').slideUp();
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp();
        } else {
            $(this).next().slideToggle();
        }
        return false;
    });

    $('.sidebar__mobile > .categories > .categories__navigation > ul > .categories__dropdown-items > a').click(function() {
        $('.categories__dropdown-items ul').slideUp();
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp();
        } else {
            $(this).next().slideToggle();
        }
        return false;
    });

    $('.sidebar__pc > .categories > .categories__navigation > ul > li > a').click(function() {
            $('.categories__navigation > ul > li > a, .sidebar__pc > .categories > .categories__navigation > ul > .categories__dropdown-items a').removeClass('active');
            $(this).addClass('active');
        }),
        $('.sidebar__pc > .categories > .categories__navigation > ul > .categories__dropdown-items ul li a').click(function() {
            $('.categories__dropdown-items ul li a').removeClass('active');
            $(this).addClass('active');
        });

    $('.sidebar__mobile > .categories > .categories__navigation > ul > li > a').click(function() {
            $('.categories__navigation > ul > li > a, .sidebar__mobile > .categories > .categories__navigation > ul > .categories__dropdown-items a').removeClass('active');
            $(this).addClass('active');
        }),
        $('.sidebar__mobile > .categories > .categories__navigation > ul > .categories__dropdown-items ul li a').click(function() {
            $('.categories__dropdown-items ul li a').removeClass('active');
            $(this).addClass('active');
        });

});