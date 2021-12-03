
$(document).ready(function(){


    var waypoint = new Waypoint({
        element: document.querySelector('.js--section-features'), 
        handler: function(direction){
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, 
        offset: "65px"
    });

    /*SCROLL ON BUTTONS */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });


    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /* ANIMATE ON SCROLL */
    $('.animate__animated').waypoint(function(direction){
        $(".animate__animated").addClass("animate__animated animate__fadeIn");
    }, {
        offset: '50%;'
    });



    /* STICKY NAVIGATION */
    /*$('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '65px;'
    });
    */



});