
function search() {
  var ingredient = prompt("What is your skin type?\n" + "\nex. Oily Skin, Dry Skin, Combination Skin, Sensitive Skin");

  if (ingredient.toLowerCase() == "oily skin") {
    var input = prompt("You have Oily Skin! These ingredients work best to regulate excess sebum production.\n" + "\nChoose an ingredient to redirect to:" + "\n(1): Niacinamide" + "\n(2): Salicylic Acid" + "\n(3): Hyaluronic Acid" + "\n(4): Retinol");
    
    if (input == 1) {
      window.location.href = "ingredients/niacinamide.html";
    } else if (input == 2) {
      window.location.href = "ingredients/salicylic.html";
    } else if (input == 3) {
      window.location.href = "ingredients/hyacid.html";
    } else if (input == 4) {
      window.location.href = "ingredients/retinol.html";
    } else {
      alert("Please refer to the list given.");
      search();
    }
  } else if (ingredient.toLowerCase() == "dry skin") {
      var input = prompt("You have Dry Skin! These ingredients work best to hydrate your skin.\n" + "\nChoose an ingredient to redirect to:" + "\n(1): Ceramides" + "\n(2): Niacinamide" + "\n(3): Hyaluronic Acid");

      if (input == 1) {
        window.location.href = "ingredients/ceramides.html";
      } else if (input == 2) {
        window.location.href = "ingredients/niacinamide.html";
      } else if (input == 3) {
        window.location.href = "ingredients/hyacid.html";
      } else {
        alert("Please refer to the list given.");
        search();
      }
  } else if (ingredient.toLowerCase() == "combination skin") {
      var input = prompt("You have Combination Skin! These ingredients work best to combat dry patches and avoid producing too much oil.\n" + "\nChoose an ingredient to redirect to:" + "\n(1): Ceramides" + "\n(2): Salicylic Acid" + "\n(3): Hyaluronic Acid");

      if (input == 1) {
        window.location.href = "ingredients/ceramides.html";
      } else if (input == 2) {
        window.location.href = "ingredients/salicylic.html";
      } else if (input == 3) {
        window.location.href = "ingredients/hyacid.html";
      } else {
        alert("Please refer to the list given.");
        search();
      }
  } else if (ingredient.toLowerCase() == "sensitive skin") {
      var input = prompt("You have Sensitive Skin! These ingredients are mild and are unlikely to cause more irritation.\n" + "\nChoose an ingredient to redirect to:" + "\n(1): Niacinamide" + "\n(2): Hyaluronic Acid" + "\n(3): Ceramides");

      if (input == 1) {
        window.location.href = "ingredients/niacinamide.html";
      } else if (input == 2) {
        window.location.href = "ingredients/hyacid.html";
      } else if (input == 3) {
        window.location.href = "ingredients/ceramides.html";
      } else {
        alert("Please refer to the list given.");
        search();
      }
  } else {
    alert("Please make sure it was typed in properly.");
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

  $(".searchbutton").click(function(){
    $("form").submit(function(){
      var userInput = $("input").val();
      
      if (userInput.toLowerCase() == "ceramides") {
        window.location.href = "ingredients/ceramides.html";
        return false;
      } else if (userInput.toLowerCase() == "vitamin c") {
        window.location.href = "ingredients/vitaminc.html";
        return false;
      } else if (userInput.toLowerCase() == "niacinamide") {
        window.location.href = "ingredients/niacinamide.html";
        return false;
      } else if (userInput.toLowerCase() == "hyaluronic acid") {
        window.location.href = "ingredients/hyacid.html";
        return false;
      } else if (userInput.toLowerCase() == "retinol") {
        window.location.href = "ingredients/retinol.html";
        return false;
      } else if (userInput.toLowerCase() == "salicylic acid") {
        window.location.href = "ingredients/salicylic.html";
        return false;
      } else {
        alert("Ingredient not found in our database. Please make sure it was typed in properly and/or refer to the ingredients found on the product list.");
      }
    });
  });
});
