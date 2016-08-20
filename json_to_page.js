'use strict';

/**
 * [readTextFile description]
 * @param  {[type]} file [description]
 * @return {[type]}      [description]
 */
function readTextFile() {
  return mock;
}

function getDishList() {
  var jsonData = readTextFile();
  _.map(jsonData.hits, function(hit) {
    return hit.recipe.label;
  // console.log(hit.recipe.label);
});
