'use strict';


/**
 * Creates and returns an array of the form:
 *   [[dish1, [inged1, inged2, ...]], [dish2, [inged1, inged2, ..]]]
 * @param  {json} dishes JSON file containing the dishes and ingredients.
 */
function createDishArray(dishes) {
  var dishArray = _.map(dishes.hits, function(dish, index) {
    return [dish.recipe.label, dish.recipe.ingredientLines, index];
  });
  return dishArray;
}

/**
 * Checks to see if any ingredients in the dish-list match a given ingredient.
 */
function doesAnyIngredientMatch(dish, ingredient) {
  var matchRegExp = new RegExp(ingredient);
  // var matchRegExp = '/' + ingredient + '/';
  return _.some(_.map(dish[1], function(ing) {
    return matchRegExp.test(ing);
  }));
}

/**
 * Takes in the hits returned by the Edamam and returns a filtered list of dishes.
 *
 * Will start with second ingredient, and if no matches will skip that one
 *   and move on to the next one, until there are no ingredients left or the
 *   list of dishes is down to one.
 */
function filterDishes(dishArray, ingredients) {
  var filteredDishes = dishArray;
  _.forEach(ingredients.slice(1), function(ingredient) {
    var atLeastOneDish = filteredDishes;
    filteredDishes = _.filter(atLeastOneDish, function(dish) {
      return doesAnyIngredientMatch(dish, ingredient);
    });
    if (filteredDishes.length === 0) {
      filteredDishes = atLeastOneDish;
    }
  });
  return filteredDishes;
}
