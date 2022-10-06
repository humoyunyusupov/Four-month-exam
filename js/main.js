var elHeader = document.querySelector(".site-header");
var elBurgerBtn = document.querySelector(".burger-btn");

elBurgerBtn.addEventListener("click", function(){
    elHeader.classList.toggle("show");
})


$(function () {
    $('.carousel-item-wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<span><img src='./images/arrow-left.svg' alt='Left arrow'></span>",
        nextArrow: "<span><img src='./images/arrow-right.svg' alt='Right arrow'></span>",
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerMode: true,
                    centerPadding: '0',
                    slidesToShow:1,
                }
            }
        ]
      });
});