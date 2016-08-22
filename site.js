'use strict';

var ingredient = 'chicken';

/**
 * Runs a search request with Edemam using the given string 'chicken', and if
 * successful, it runs the json object through the formatDishes function.
 */

function showDishesList(ingredients) {
  $.ajax({
    url: 'https://api.edamam.com/search',
    type: 'GET',
    dataType: 'jsonp',
    data: {
      q: ingredients[0],
      appId: edemamID,
      appKey: edemamKey
    },
    success: function(response) {
      var dishArray = createDishArray(response);
      var filteredDishes = filterDishes(dishArray, ingredients);
      runUpdateList(filteredDishes);
    },
    error: function(error) {
      alert(error);
    }
  });
}


function populateRecipieCard(hit) {
  $('recipie-card > h2').empty();
  $('recipie-card > ingredients > ul').empty();
  $('recipie-card > food-image').empty();
  $('recipie-card > nav').empty();
  var dishName = hit.recipe.label;
  var ingredientList = hit.recipe.ingredientLines;
  var instructionsLink = hit.recipe.url;
  var tastyIcon = hit.recipe.img;
  $('recipie-card > h2').append(dishName);
  _.map(ingredientList, function(ingredientItem) {
    return $('recipie-card > ingredients > ul').append(
      '<li>' + ingredientItem + '</li>');
  });
  $('recipie-card > food-image').append(tastyIcon);
  $('recipie-card > nav').append(instructionsLink);
}

/**
 * Event Handler registrator.
 */
function registerEventHandlers() {
  $('#main-dish').on('input', runIngredientEnterer);
  $('#accept-input').on('click', function(event) {
    event.preventDefault();
    var ingredients = getIngredients($('#main-dish').val());
    showDishesList(ingredients);
  });
}

$(document).ready(registerEventHandlers);
