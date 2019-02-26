$(function() {

//-----------------------------calculator---------------------------
jQuery( '.quantity-block' ).on( 'click', '.quantity-arrow-minus, .quantity-arrow-plus', function ( event ) {
    event.preventDefault();
    var input = jQuery( this ).siblings( '.quantity-num' );
    if ( input.val() > -1 ) {
        if ( jQuery( this ).hasClass( 'quantity-arrow-minus' )  ) {
            input.val( +input.val() - 100 );
        } else if ( jQuery( this ).hasClass( 'quantity-arrow-plus' ) ) {
            input.val( +input.val() + 100 );
        }
    }
}  );

//------------------------------acardeon---------------------------
  $(".block__content").slideUp("slow");
  $(".block").first().addClass('active');
  $(".active .block__content").slideDown("slow");

  $(".block__header").on("click", function(){
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".block__content").slideUp("slow");
    }
    else {
      $(".active .block__content").slideUp("slow");
      $(".active").removeClass('active');
      $(this).parent().addClass('active');
      $(".active .block__content").slideDown("slow");
    }
  });

  

//------------------------------orders-slider-----------------------------
  $('.orders__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


//------------------------------reviews-slider-----------------------------
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });


//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

  //-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');
  });
});
