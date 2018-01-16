$(document).ready(function() {

var iceCreamFlavors = ["chocolate", "vanilla", "pear", "apple", "strawberry", "grape", "cardboard", "pickle", "mandarin", "cherry"];

iceCreamFlavors.forEach(function(flavor) {
  $(".list-flavors").append("<li>" + flavor + "</li>");

  });

});
