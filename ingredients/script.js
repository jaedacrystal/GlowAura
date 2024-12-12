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
    
  $(".searchbutton").click(function(){
    $("form").submit(function(){
      var userInput = $("input").val();
      
      if (userInput.toLowerCase() == "ceramides") {
        window.location.href = "ceramides.html";
        return false;
      } else if (userInput.toLowerCase() == "vitamin c") {
        window.location.href = "vitaminc.html";
        return false;
      } else if (userInput.toLowerCase() == "niacinamide") {
        window.location.href = "niacinamide.html";
        return false;
      } else if (userInput.toLowerCase() == "hyaluronic acid") {
        window.location.href = "hyacid.html";
        return false;
      } else if (userInput.toLowerCase() == "retinol") {
        window.location.href = "retinol.html";
        return false;
      } else if (userInput.toLowerCase() == "salicylic acid") {
        window.location.href = "salicylic.html";
        return false;
      } else {
        alert("Ingredient not found in our database. Please make sure it was typed in properly and/or refer to the ingredients found on the product list.");
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