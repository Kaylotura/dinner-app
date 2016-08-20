'use strict';

var ingredient = 'chicken';

/**
 * Takes in a single hit and returns the title of the recipe as a string.
 */
function formatDish(dishObject) {
  return dishObject.recipe.label;
}


/**
 * Takes in the hits returned by the Edamam and returns a list of strings.
 */
function formatDishes(dishes) {
  console.dir(_.map(dishes, formatDish));
  return _.map(dishes, formatDish);
}

/**
 * Runs a search request with Edemam using the given string 'chicken', and if
 * successful, it runs the json object through the formatDishes function.
 */

function showDishesList(ingredient) {
  $.ajax({
    url: 'https://api.edamam.com/search',
    type: 'GET',
    dataType: 'jsonp',
    data: {
      q: ingredient,
      appId: edemamID,
      appKey: edemamKey
    },
    success: function(response) {
      formatDishes(response.hits);
    },
    error: function(error) {
      alert(error);
    }
  });
}


/**
 * Event Handler registrator.
 */
function registerEventHandlers() {
  $('#main-dish').on('input', runIngredientEnterer);
  $('#accept-input').on('click', function(event) {
    event.preventDefault();
    var ingredients = getIngredients($('#main-dish').val());
    showDishesList(ingredients[0]);
  });
}

$(document).ready(registerEventHandlers);
