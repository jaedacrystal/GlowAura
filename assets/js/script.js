$(document).ready(function(){
    $(".mobile-menu").hide();

    $(".toggle").click(function(){
      $(".mobile-menu").animate({
        height: 'toggle',
      }, "slow");
    });
  });