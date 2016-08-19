'use strict';

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
  return _.map(dishes.hits.hit, formatDish);
}

/**
 * Runs a search request with Edemam using the given string 'chicken', and if
 * successful, it runs the json object through the formatDishes function.
 */
$.ajax({
  url: 'https://api.edamam.com/search',
  data: {q: 'chicken' , app_id: edemamID , app_key: edemamKey},
  success: formatDish(),
  error: function(error) {
    alert(error);
  }
});

