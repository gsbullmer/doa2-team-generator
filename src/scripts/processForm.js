define([], function () {
  'use strict';

  var teams;
  var chars;
  var draft;
  var xChars;
  var set;
  var age;
  var setting;
  var circle;
  var nature;

  var processForm = {
    processForm: function(form) {
      window.console.log("processed form");
      teams = form.numTeams.value;
      chars = form.numChars.value;
      draft = form.draft.value;
      xChars = form.numXChars.value;

      set = [];
      for(i = 0; i < form.set.length; i++) {
        if(form.set[i].checked) { set.push(form.set[i].value); }
      }

      age = [];
      for(i = 0; i < form.age.length; i++) {
        if(form.age[i].checked) { age.push(form.age[i].value); }
      }

      setting = [];
      for(i = 0; i < form.setting.length; i++) {
        if(form.setting[i].checked) { setting.push(form.setting[i].value); }
      }

      circle = [];
      for(i = 0; i < form.circle.length; i++) {
        if(form.circle[i].checked) { circle.push(form.circle[i].value); }
      }

      nature = [];
      for(i = 0; i < form.nature.length; i++) {
        if(form.nature[i].checked) { nature.push(form.nature[i].value); }
      }

      randomize(filterList(characterArray, set, age, setting, circle, nature), teams, chars, draft, xChars);
    },

    checkClicked: function (clicked, form) {
      if(clicked.name == "setting") {
        for(i = 0; i < form.age.length; i++) {
          if(form.age[i].id.substr(1,1) == clicked.id.substr(1,1)) {
            form.age[i].checked = true;
          }
        }
      } else if(clicked.name == "age") {
        for(i = 0; i < form.setting.length; i++) {
          if(form.setting[i].id.substr(1,1) == clicked.id.substr(1,1)) {
            form.setting[i].checked = false;
          }
        }
      }
    },

    checkDraft: function (evt) {
      field = evt.target;
      field.form.numXChars.disabled = (field.value == "pure") ? true : false;
    }
  };

  return processForm;
});