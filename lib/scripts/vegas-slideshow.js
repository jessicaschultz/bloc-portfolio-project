$(function(){
  $(".vegas-slider").vegas({
    delay: 7000,
    preloadImage: false,
    autoplay: true,
    cover: true,
    transition: 'fade',
    firstTransition: 'blur',
    transitionDuration: 2000,
    slides: [
        { src: "../../img/slideshow-a-min.png" },
        { src: "../../img/slideshow-d-min.png" },
        { src: "../../img/slideshow-e-min.png" },
        { src: "../../img/slideshow-f-min.png" },
        { src: "../../img/slideshow-g-min.png" },
        { src: "../../img/slideshow-h-min.png" },
        { src: "../../img/slideshow-i-min.png" },
        { src: "../../img/slideshow-k-min.png" },
        { src: "../../img/slideshow-o-min.png" },
        { src: "../../img/slideshow-one-min.png" },
        { src: "../../img/slideshow-six-min.png" },
        { src: "../../img/slideshow-two-min.png" }
    ]
  });
})(jQuery);