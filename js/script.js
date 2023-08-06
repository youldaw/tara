$(function () {
    

    $('.catalog-btn a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $('.catalog-menu').toggleClass('active');
    });

    $('.menu-opener, .menu-closer').on('click', function (e) {
        e.preventDefault();
        $('.navbar-collapse').toggleClass('active');
    });

    var swiper4 = new Swiper(".works-slide", {
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1.6,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    // product slider
    var swiper2 = new Swiper(".mySwiper", {
        spaceBetween: 20,
        slidesPerView: 3,
        // freeMode: true,
        direction: "vertical",
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 3,
                direction: "horizontal",
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper3 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper2,
        },
    });



    // input + / - count
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

});

$(document).ready(function(){
    var cssAmimationSupport = false;
    if(Modernizr.csstransforms && Modernizr.csstransitions)
    {
        cssAmimationSupport = true;
        var mozCssFadeIn = {'-moz-animation-duration':'1s','-moz-animation-name':'fadeIn','-moz-opacity':'1'},
            mozCssFadeOut = {'-moz-animation-duration':'1s','-moz-animation-name':'fadeOut','-moz-opacity':'0'},
           webkitCssFadeIn = {'-webkit-animation-duration':'1s','-webkit-animation-name':'fadeIn','opacity':'1'},
            webkitCssFadeOut = {'-webkit-animation-duration':'1s','-webkit-animation-name':'fadeOut','opacity':'0'},
           cssFadeIn,
           cssFadeOut;
       if($.browser.mozilla)
       {
           cssFadeIn = mozCssFadeIn;
           cssFadeOut = mozCssFadeOut;
       }
       else if($.browser.webkit)
       {
           cssFadeIn = webkitCssFadeIn;
           cssFadeOut = webkitCssFadeOut;
       }
       else cssAmimationSupport = false;
   }
});