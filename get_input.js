'use strict';

/**
 * updates the unordered list of menu ites
 * @param  {[array of objects]} entryList Items to put on list
 *   in the form of [{val: 1, text: 'Apple Pie'}, {val: 2, text: 'Muffin'}]
 */
function runUpdateList(entryList) {
  $('.dishes > ul').empty();
  // var sel = $('<select>').appendTo('.dishes > ul');
  var sel = $('.dishes > ul');
  _.forEach(entryList, function(item) {
    sel.append($('<li>').attr('value', item).text(item));
  });
}

/**
 * displayInvalid() highlights the input box.
 */
function displayInvalid(entryItem) {
  entryItem.addClass('invalid');
}

/**
 * displayValid() un-highlights the input box.
 */
function displayValid(entryItem) {
  entryItem.removeClass();
}

/**
 * Tests whether the string matches the regular expression
 * @param  {string} testString The string to test
 * @param  {reg exp} regExp    The regular expression.  Not a string.
 * @return {boolean}           True if there is a match, false otherwise.
 */
function stringValidator(testString, regExp) {
  return regExp.test(testString);
}

/**
 * Check whether the input string is a match and changes class to invalid if not
 * @param  {jQuery selector} entryItem The selector on the form for an input
 * @param  {reg exp} regExp            Regular expression to test the match
 *         Return true if there is a match, false otherwise.
 */
function runValidator(entryItem, regExp) {
  var entryString = entryItem.val();
  if(stringValidator(entryString, regExp)) {
    displayValid(entryItem);
    return true;
  } else {
    displayInvalid(entryItem);
    return false;
  }
}

/**
 * Get the ingredient list and return an array.
 * @param  {string} itemString The ingredient list, as a string
 * @return {array}            List, as an array.
 */
function getIngredients(itemString) {
  if (/,/.test(itemString)) {
    return itemString.split(',');
  } else {
    return [itemString];
  }
}

/**
 * Input validator, for the ingredient entry on the form.
 *
 * Matches only for strings that are correctly typed up to the last character.
 */
function runIngredientEnterer() {
  var entryItem = $('#main-dish');
  var entryRegExp = /^[a-z\s]+(\s*,\s*[a-z\s]+)*$/i;
  var valid = runValidator(entryItem, entryRegExp);
  if (valid) {
    var ingredients = getIngredients(entryItem.val());
    console.dir(ingredients);
    runUpdateList(ingredients);
  }
}

/**
 * Event Handler registrator.
 */
function registerEventHandlers() {
  $('#main-dish').on('input', runIngredientEnterer);
  // $('form').on('submit', function(event) {
  //   event.preventDefault();
  //   runFinalFormValidator();
  // });
}

$(document).ready(registerEventHandlers);
