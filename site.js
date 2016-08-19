'use strict';

var SPOOFED_FIND_INGREDIANTS = [{"id":221475,"title":"Thai beef stir-fry","image":"https://spoonacular.com/recipeImages/Thai-beef-stir-fry-221475.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":2,"likes":436},{"id":216571,"title":"Seared beef with orange & chilli","image":"https://spoonacular.com/recipeImages/Seared-beef-with-orange---chilli-216571.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":3,"likes":71},{"id":135215,"title":"Pie a La Tamale","image":"https://spoonacular.com/recipeImages/pie-a-la-tamale-2-135215.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":3,"likes":0},{"id":521325,"title":"Tapsilog and the accidental tapa","image":"https://spoonacular.com/recipeImages/Tapsilog-and-the-accidental-tapa-521325.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":3,"likes":1},{"id":214476,"title":"Soy-glazed beef","image":"https://spoonacular.com/recipeImages/Soy-glazed-beef-214476.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":4,"likes":1},{"id":478210,"title":"Vegetarian beef, lima beans and Chinese broccoli stir fry. Meatless and vegan","image":"https://spoonacular.com/recipeImages/Vegetarian-beef--lima-beans-and-Chinese-broccoli-stir-fry--Meatless-and-vegan-478210.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":4,"likes":0},{"id":200274,"title":"Stewed Beef Neck Tacos","image":"https://spoonacular.com/recipeImages/Stewed-Beef-Neck-Tacos-200274.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":4,"likes":15},{"id":146071,"title":"Crumbled Thai Beef","image":"https://spoonacular.com/recipeImages/crumbled-thai-beef-2-146071.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":4,"likes":0},{"id":97457,"title":"Breedie Zimbabwe","image":"https://spoonacular.com/recipeImages/breedie-zimbabwe-2-97457.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":4,"likes":1},{"id":478192,"title":"Chili beef with coconut cream","image":"https://spoonacular.com/recipeImages/Chili-beef-with-coconut-cream-478192.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":5,"likes":0},{"id":365597,"title":"Curried Mince and Peas","image":"https://spoonacular.com/recipeImages/Curried-Mince-and-Peas-365597.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":5,"likes":4},{"id":362508,"title":"Beef Tripe and Hominy Stew: Posole","image":"https://spoonacular.com/recipeImages/beef-tripe-and-hominy-stew-posole-362508.jpeg","imageType":"jpeg","usedIngredientCount":2,"missedIngredientCount":6,"likes":0},{"id":626295,"title":"Stir Fried Beef with Pineapple & Pickled Ginger","image":"https://spoonacular.com/recipeImages/Stir-Fried-Beef-with-Pineapple---Pickled-Ginger-626295.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":6,"likes":18},{"id":203719,"title":"Naomi Duguid's Kachin Pounded Beef with Herbs","image":"https://spoonacular.com/recipeImages/Naomi-Duguids-Kachin-Pounded-Beef-with-Herbs-203719.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":6,"likes":43},{"id":565064,"title":"Thai Basil Beef","image":"https://spoonacular.com/recipeImages/Thai-Basil-Beef-565064.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":6,"likes":3},{"id":108014,"title":"Huer Huero Road Green Chili","image":"https://spoonacular.com/recipeImages/huer-huero-road-green-chili-2-108014.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":6,"likes":0},{"id":634421,"title":"Basil & Black Pepper Beef With Egg Noodles","image":"https://spoonacular.com/recipeImages/Basil---Black-Pepper-Beef-With-Egg-Noodles-634421.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":6,"likes":1},{"id":521304,"title":"Beef and mushroom enchiladas with white sauce","image":"https://spoonacular.com/recipeImages/Beef-and-mushroom-enchiladas-with-white-sauce-521304.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":6,"likes":37},{"id":200463,"title":"Tongue Cured in Red Chile (Lengua Adovada)","image":"https://spoonacular.com/recipeImages/Tongue-Cured-in-Red-Chile-(Lengua-Adovada)-200463.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":7,"likes":12},{"id":599828,"title":"Chili Dip – canned tamales, chili beans, Rotel and more make for a flavorful dip","image":"https://spoonacular.com/recipeImages/Chili-Dip--canned-tamales--chili-beans--Rotel-and-more-make-for-a-flavorful-dip-599828.jpg","imageType":"jpg","usedIngredientCount":2,"missedIngredientCount":7,"likes":45}];

/**
function spoofGetRecipieInfo(dishID) {
  if (dishID === 221475) {
    return SPOOF_RECIPE
  }
}

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


/**
 *
 *
 */
function getJSONDataDish() {
  return SPOOFED_FIND_INGREDIANTS;
}