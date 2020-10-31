var nav = $('.navbar-default');
var menu = $('.navbar-nav li a');
var logo = $('.navbar-brand img');
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        nav.addClass('navbar-site');
        menu.addClass('tiny');
        logo.addClass('tiny-img');
    } else {
        nav.removeClass('navbar-site');
        menu.removeClass('tiny');
        logo.removeClass('tiny-img');
    }
});
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href="#comment-div"]').not('[href="#comment-div-2"]').not('[href="#comment-div-3"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: target.offset().top }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
});
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) { $('.go-top').show(300); } else { $('.go-top').hide(300); }
});
var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf('safari') != -1) {
    if (userAgent.indexOf('chrome') > -1) {} else if ((userAgent.indexOf('opera') > -1) || (userAgent.indexOf('opr') > -1)) {} else { $(".facts").addClass("safari"); }
}
var a = 0;
$(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({ countNum: $this.text() }).animate({ countNum: countTo }, { duration: 4000, easing: 'swing', step: function() { $this.text(Math.floor(this.countNum)); }, complete: function() { $this.text(this.countNum); } });
        });
        a = 1;
    }
});
$(document).ready(function() {
    $('.clients-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

function openModal() { document.getElementById('gallery-modal').style.display = "block"; }

function closeModal() { document.getElementById('gallery-modal').style.display = "none"; }
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n); }

function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
