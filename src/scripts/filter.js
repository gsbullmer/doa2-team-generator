require([], function () {
  'use strict';

  var Filter = {};
  Filter.prototype.filterList = function (charList, set, age, setting, circle, nature) {
    window.console.log("filtering list");
    var filteredCharList = charList;

    filteredCharList = applyFilter(filteredCharList, 'set', set);
    filteredCharList = applyFilter(filteredCharList, 'age', age);
    filteredCharList = applyFilter(filteredCharList, 'setting', setting);
    filteredCharList = applyFilter(filteredCharList, 'circle', circle);
    filteredCharList = applyFilter(filteredCharList, 'nature', nature);

    return filteredCharList;
  };

  Filter.prototype.applyFilter = function (list, category, filter) {
    var newList = [];
    for(i = 0; i < list.length; i++) {
      remove = true;
      for(j = 0; j < filter.length; j++) {
        if(list[i][category] == filter[j]) {
          remove = false;
          break;
        }
      }
      if(!remove) { newList.push(list[i]); }
    }
    return newList;
  };

  return Filter;
});