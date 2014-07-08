define(['character'], function (Character) {
  'use strict';

  var Character_array = function (list) {
    if (list === undefined) {
      list = [];
    }

    this.init.call(this, list);
  };

  Character_array.prototype.list = [];

  Character_array.prototype.init = function (list) {
    for (var i = 0; i < list.length; i++) {
      this.add(list);
    }
  };

  Character_array.prototype.add = function (character_data) {
    var character = new Character(character_data);
    this.list.push(character);
  };

  Character_array.prototype.get = function (index) {
    return this.list[index];
  };

  Character_array.prototype.get = function () {
    return this.list;
  };

  return Character_array;

});