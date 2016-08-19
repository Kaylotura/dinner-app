'use strict';

/**
 * Takes in a comma-seperated string of ingredients and returns a promise
 * to return a json object of dish options information.
 *
 * Having some technical difficulties with Edamam Api, specifically that we are
 * limited to 50 free requests before they begin charging us .7 cents per
 * request, and that I do not have an API key yet? In the interum I will be working
 * on formating the results for two example requests.
 */
function getRecipies(ingredients) {
  PARAMS = {
    ingredients: getIngredients()
  }
  var url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients';
  return Promise.resolve($.ajax({
    parameters: PARAMS,
    dataType: 'json',
    url: url,
  }));
}

/**
 * Takes in a single hit and returns the title of the recipe as a string.
 */
function formatDish(dishObject) {
  return dishObject.recipe.lable;
}


/**
 * Takes in the hits returned by the Edamam and returns a list of strings.
 */
function formatDishes(dishes) {
  return _.map(dishes.hits.hit, formatDish);
}

/**
 *
 *
 */


$.ajax({
  url: 'https://api.edamam.com/search',
  data: {q: 'chicken' , app_id: 565656 , app_key: 909090},
  success: formatDish(),
  error: function(error) {
    alert(error)
  }

})
