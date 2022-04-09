$(document).ready(function () {
    $(window).scroll(function () {
        // header scroll new property
        if (this.scrollY > 20) {
            $('#header').addClass("header-scroll");
        } else {
            $('#header').removeClass("header-scroll");
        }


        // scroll-up
        if (this.scrollY > 400) {
            $('.scroll-up').addClass("scroll");
        } else {
            $('.scroll-up').removeClass("scroll");
        }

    })
});
