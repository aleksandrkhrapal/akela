// scroll header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll) {
        $(".homepage-header").addClass("darkHeader");
    } else {
        $(".homepage-header").removeClass("darkHeader");
    }
});

$('.verify-checkbox').on('click', function() {
    if($(this).is(':checked')) {
        $(".verify-container").show();
    } else {
        $(".verify-container").hide();
    }
});

$('.politically-exposed-checkbox').on('click', function() {
    if($(this).is(':checked') && $('.verify-checkbox').is(':checked')) {
        $(".verify-container").hide();
        $(".politically-exposed-container").show();
    } else {
        $(".verify-container").show();
        $(".politically-exposed-container").hide();
    }
});

$(".progress-btn").on("click", function(e) {
    e.preventDefault();
    var progressBtn = $(this);

    if (!progressBtn.hasClass("active")) {
        progressBtn.addClass("active");
        setTimeout(function() {
            progressBtn.removeClass("active");
        }, 1000);
    }
});

$('.login-form-row input, .profile-detail-input input').on('change', function() {
    if( $(this).val() ) {
        $(this).addClass('active');
    } else {
        $(this).removeClass('active');
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

// faq accordion mobile scroll top (delete if not needed)
if ($(window).width() < 767) {
    $('.panel-collapse').on('shown.bs.collapse', function () {
        var $panel = $(this).closest('.faq-card');
        $('html,body').animate({
            scrollTop: $panel.offset().top - 70
        }, 500);
    });
}