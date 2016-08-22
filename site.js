'use strict';

var ingredient = 'chicken';

/**
 * Populates the Dish list.
 */
function populateList(dishData, ingredients) {
  var dishArray = createDishArray(dishData);
  var filteredDishes = filterDishes(dishArray, ingredients);
  runUpdateList(filteredDishes);
  recipieJSON = dishData.hits;
}

/**
 * Registers the click on Dish List to populate Recipie Card function.
 */
function registerDishListHandler() {
  $('.dishes > ul > li').click( function() {
    var hit = recipieJSON[$(this).attr('value')];
    populateRecipieCard(hit);
  });
}

/**
 * Runs a search request with Edemam using the given string 'chicken', and if
 * successful, it runs the json object through the formatDishes function.
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
  $('.recipie-card > .food-image').append('<img src="' + tastyIcon + '">');
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
