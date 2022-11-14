$(function () {
   //Menu Fixed
   $(window).on('scroll', function () {
      var scrollSize = $(window).scrollTop()

      if (scrollSize > 65) {
         $('#nav').addClass('active')
      } else {
         $('#nav').removeClass('active')

      }
   })

   //Preloader
   $(window).on('load', function () {
      $('#preloader').fadeOut(500);
   })

   //Banner Slider Activation

   $('.banner-slider').slick({
      speed: 500,
      autoplay:true,
     dots:false,
     arrows:false,
      
   });
})