$(function () {

    $('input[name=phone]').mask('+7 (999) 999-99-99');


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
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
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

