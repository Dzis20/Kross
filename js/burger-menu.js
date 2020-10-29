$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu,.slide-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });

