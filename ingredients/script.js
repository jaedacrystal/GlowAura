$(document).ready(function(){
  $(".mobile-menu").hide();

  $(".toggle").click(function(){
    $(".mobile-menu").animate({
        height: 'toggle',
    });
  });

  $(".benefits-text").hide();

  $("#button-benefits").click(function(){
    $(".benefits-text").toggle(function(){
      $(this).animate();
    });
  });
    
  $("#searchbutton").click(function(){
    $("form").submit(function(){
      var userInput = $("input").val();
        
      if (userInput.toLowerCase() == "ceramides") {
        window.location.href = "ceramides.html";
        return false;
      }  
    });
  });

  $(".cart").click(function(){
    alert("You added " + $(this).closest(".product").find(".prodname").text() + " to cart!");

    var c = confirm("Proceed to checkout?");
    var url = $(this).closest(".product").find(".prodname").attr('href');

    if (c == true) {
      window.location.href = url;
    } else {
      alert("Thank you for adding to cart a product!");
    }
  });
});