$(document).ready(function(){
  $('.product-cards').slick({
    autoplay:false,
    speed: 500,
    loop: true,
    infinite: true,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:"<div class='btn-1'><button type='button' class='pull-left my-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button></div>",
    nextArrow:"<div class='btn-2'><button type='button' class='pull-right my-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button></div>",
    responsive:[
        {
          breakpoint:1025,
          settings:{
            slidesToShow:2,
          }
        },
       {
          breakpoint:992,
          settings:{
           slidesToShow:2,
          }
       },
       {
        breakpoint:768,
        settings:{
         slidesToShow:1,
        }
     }
    ]

  });
  $('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled');
  })
});