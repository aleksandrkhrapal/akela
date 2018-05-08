// scroll header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll) {
        $(".homepage-header").addClass("darkHeader");
    } else {
        $(".homepage-header").removeClass("darkHeader");
    }
});

// dashboard sidebar hide/show
$('.sidebar-trigger').on('click', function (e) {
    e.preventDefault();
    $('.dashboard-container').toggleClass('container-lg');
    $('.dashboard-sidebar').toggleClass('sidebar-sm');
});

if ($(window).width() < 1281) {
    $('.sidebar-trigger').click();
}

// mobile menu
$('.mobile-menu-button').on('click', function (e) {
   e.preventDefault();
   $(this).toggleClass('active');
   $('body').toggleClass('overflow-h');
   $('.main-nav').toggleClass('show-nav');
});

// video slider
$('.video-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }
    ]
});

$('.preview-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        }
    ]
});

// for sliders in bootstrap modals
$('.modal').on('shown.bs.modal', function () {
    $('.preview-slider').slick("setPosition", 0);
});

// accordion add class to heading
$('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().addClass('active');
});

$('.collapse').on('hidden.bs.collapse', function () {
    $(this).parent().removeClass('active');
});