
function search() {
  var ingredient = prompt("What is your skin type?\n" + "\nex. Oily Skin, Dry Skin, Combination Skin, Sensitive Skin");

  if (ingredient.toLowerCase() == "oily skin") {
    var input = prompt("You have Oily Skin! These ingredients work best to regulate excess sebum production.\n" + "\nChoose an ingredient to redirect to:" + "\n(1): Niacinamide" + "\n(2): Salicylic Acid" + "\n(3): Hyaluronic Acid" + "\n(4): Retinol");

    if (input == 1) {
      location.href("#products");
    } else if (input == 2) {
      location.replace("#products");
    } else if (input == 3) {
      location.replace("#products");
    } else if (input == 4) {
      location.replace("#products");
    }
  } else if (ingredient.toLowerCase() == "dry skin") {
      var input = prompt("You have Dry Skin! These ingredients work best to hydrate your skin.\n" + "\nChoose an ingredient to redirect to:" + "\n(1): Ceramides" + "\n(2): Niacinamide" + "\n(3): Hyaluronic Acid");

      if (input == 1) {
        window.location.href = "ingredients/ceramides.html";
      } else if (input == 2) {
        location.replace("#products");
      } else if (input == 3) {
        location.replace("#products");
      }
  } else if (ingredient.toLowerCase() == "combination skin") {
      var input = prompt("You have Combination Skin! These ingredients work best to combat dry patches and avoid producing too much oil.\n" + "\nChoose an ingredient to redirect to:" + "\n(1): Ceramides" + "\n(2): Salicylic Acid" + "\n(3): Hyaluronic Acid");

      if (input == 1) {
        location.replace("#products");
      } else if (input == 2) {
        location.replace("#products");
      } else if (input == 3) {
        location.replace("#products");
      }
  } else if (ingredient.toLowerCase() == "sensitive skin") {
      var input = prompt("You have Sensitive Skin! These ingredients are mild and are unlikely to cause more irritation.\n" + "\nChoose an ingredient to redirect to:" + "\n(1): Niacinamide" + "\n(2): Hyaluronic Acid" + "\n(3): Ceramides");

      if (input == 1) {
        location.replace("#products");
      } else if (input == 2) {
        location.replace("#products");
      } else if (input == 3) {
        location.replace("#products");
      }
  }
}

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

  $("#searchbutton").click(function(){
    $("form").submit(function(){
      var userInput = $("input").val();
      
      if (userInput.toLowerCase() == "ceramides") {
        window.location.href = "ingredients/ceramides.html";
        return false;
      }
      
    });
  });
});
