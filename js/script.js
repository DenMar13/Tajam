$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });
