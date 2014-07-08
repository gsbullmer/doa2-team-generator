define([], function () {
  'use strict';

  var Filter = {
    filterList: function (charList, set, age, setting, circle, nature) {
      window.console.log("filtering list");
      var filteredCharList = charList;

      filteredCharList = this.applyFilter(filteredCharList, 'set', set);
      filteredCharList = this.applyFilter(filteredCharList, 'age', age);
      filteredCharList = this.applyFilter(filteredCharList, 'setting', setting);
      filteredCharList = this.applyFilter(filteredCharList, 'circle', circle);
      filteredCharList = this.applyFilter(filteredCharList, 'nature', nature);

      return filteredCharList;
    },

    applyFilter: function (list, category, filter) {
      var newList = [];
      var remove;
      for(var i = 0; i < list.length; i++) {
        remove = true;
        for(var j = 0; j < filter.length; j++) {
          if(list[i][category] === filter[j]) {
            remove = false;
            break;
          }
        }
        if(!remove) { newList.push(list[i]); }
      }
      return newList;
    }
  };

  return Filter;
});