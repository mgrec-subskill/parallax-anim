window.onload = function() {
    document.getElementById('sky').classList.add('active-sky');
    document.getElementById('mountain').classList.add('active-mtn');
    document.getElementById('mountain-reverse').classList.add('active-mtn-reverse');
    document.getElementById('title').classList.add('title-active');
};

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / 2 + 'px';
});

$('.cta-discover').click(function () {
    document.getElementById('mountain').classList.add('hidden-moutain');
    document.getElementById('mountain-reverse').classList.add('hidden-moutain-reverse');
    document.getElementById('sky').classList.add('zoom-sky');
})