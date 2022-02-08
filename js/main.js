$(function(){
    // header__burger
    $('.header__burger').click(function(){
        $('.header__left-menu').toggleClass('active');
        $('.header__right-menu').toggleClass('active');
    });
    // footer__menu
    $('.footer__burger').click(function(){
        $('.footer__menu').toggleClass('active');
    });
})