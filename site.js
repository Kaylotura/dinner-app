'use strict';

/**
 * Takes in the Dish Data object and ingredients to filter by, and passes them
 * into a function to create an array of dishes, then filters the array by
 * the chosen ingredients, and passes that information into the runUpdateList
 * function while saving the dish data as a global variable to be manipulated
 * at another point.
 */
function populateList(dishData, ingredients) {
  var dishArray = createDishArray(dishData);
  var filteredDishes = filterDishes(dishArray, ingredients);
  runUpdateList(filteredDishes);
  recipieJSON = dishData.hits;
}

/**
 * Registers the event of clicking on the Dish List to populate
 * Recipie Card function.
 */
function registerDishListHandler() {
  $('.dishes > ul > li').click( function() {
    var hit = recipieJSON[$(this).attr('value')];
    populateRecipieCard(hit);
  });
}

/**
 * Runs a search request with Edemam using the string submitted in the textbox
 * by the user, and if successful, it runs the json object through the
 * formatDishes function. If it fails, it alerts the user.
 */
var recipieJSON;
function showDishesList() {
  var ingredients = getIngredients($('#main-dish').val());
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
      populateList(response, ingredients);
      registerDishListHandler();
    },
    error: function(error) {
      alert(error);
    }
  });
}

/**
 * This function takes in a single item of dishData, called a hit as an argument
 * and clears the recipie-card fields in the html before re-populating them with
 * Dish Name, ingredient list, an image of the dish, and alink to the
 * instructions.
 */
function populateRecipieCard(hit) {
  $('.recipie-card > h2').empty();
  $('.recipie-card > ul').empty();
  $('.food-image').empty();
  $('.recipie-card > nav').empty();
  var dishName = hit.recipe.label;
  var ingredientList = hit.recipe.ingredientLines;
  var instructionsLink = hit.recipe.url;
  var tastyIcon = hit.recipe.image;
  $('.recipie-card > h2').append(dishName);
  _.map(ingredientList, function(ingredientItem) {
    return $('.recipie-card > ul').append(
      '<li>' + ingredientItem + '</li>');
  });
  $('.recipie-card > .food-image').append('<img src="' + tastyIcon + '"/>');
  $('.recipie-card > nav').append('<a href="' +
  instructionsLink + '">Instructions</a>');
}

/**
 * Event Handler registrator.
 */
function registerEventHandlers() {
  $('#main-dish').on('input', runIngredientEnterer);
  $('#accept-input').on('click', function(event) {
    event.preventDefault();
    showDishesList();
  });
}

$(document).ready(registerEventHandlers);
