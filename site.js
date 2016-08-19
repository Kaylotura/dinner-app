'use strict';

/**
 * Takes in a comma-seperated string of ingredients and returns a promise
 * to return a json object of dish options information.
 *
 * Having some technical difficulties with Food Api, specifically that we are
 * limited to 50 free requests before they begin charging us .7 cents per
 * request, and that I do not have an API key yet? In the interum I will be working
 * on formating the results for two example requests.
 */
// function getDishes(ingredients) {
//   PARAMS = {
//     ingredients: getIngredients()
//   }
//   var url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients';
//   return Promise.resolve($.ajax({
//     parameters: PARAMS,
//     dataType: 'json',
//     url: url,
//   }));
// }

/**
 * Takes in a single dish and returns the title as a string.
 *
 */
function formatDish(dishObject) {
  return dishObject.title;
}


/**
 * Takes in the dishes returned by the Food API and returns a list of strings.
 *
 */
function formatDishes(dishes) {
  return _.map(dishes, formatDish);
}
