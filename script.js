$(document).ready(function(){
    $(".mobile-menu").hide();

    $(".toggle").click(function(){
      $(".mobile-menu").animate({
        height: 'toggle',
      });
    });

    $(".vitc-p").hide();
    $(".vitc").click(function(){
      $(".vitc-p").fadeToggle();
    });

    $(".ret-p").hide();
    $(".ret").click(function(){
      $(".ret-p").fadeToggle();
    });

    $(".nia-p").hide();
    $(".nia").click(function(){
      $(".nia-p").fadeToggle();
    });
  });
