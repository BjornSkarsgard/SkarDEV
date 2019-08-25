$(document).ready(function () {
    $('.categories__dropdown-items > a').click(function () {
        $('.categories__dropdown-items ul').slideUp();
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp();
        } else {
            $(this).next().slideToggle();
        }
        return false;
    });
    $('.categories__navigation > ul > li > a').click(function () {
        $('.categories__navigation > ul > li > a, .categories__dropdown-items a').removeClass('active');
        $(this).addClass('active');
    }),
        $('.categories__dropdown-items ul li a').click(function () {
            $('.categories__dropdown-items ul li a').removeClass('active');
            $(this).addClass('active');
        });
});
