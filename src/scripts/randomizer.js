require(['display'], function (display) {
  'use strict';

  var Randomizer = {};

  Randomizer.prototype.randomize = function(charList, numTeams, numChars, draft, xChars) {
    window.console.log("randomizing results");
    var teams;
    switch(draft) {
      case "standard":
        teams = this.draftStandard(charList, numTeams, numChars, xChars);
        break;

      case "pure":
        teams = this.draftPure(charList, numTeams, numChars);
        break;

      case "draft":
        teams = this.draftDraft(charList, numTeams, numChars, xChars);
        break;
    }

    display.displayTeams(teams, numTeams);
  };

  Randomizer.prototype.draftStandard = function(list, numTeams, numChars, xChars) {
    var teams = [];
    var character;
    for(var k = 0; k < numTeams; k++) {
      teams.push([]);
    }
    for(var i = 0; i < Number(numChars) + Number(xChars); i++) {
      for(var j = 0; j < numTeams; j++) {
        character = list.splice(Math.round(Math.random() * list.length), 1);
        teams[j].push(character[0]);
      }
    }
    return teams;
  };

  Randomizer.prototype.draftPure = function (list, numTeams, numChars) {
    var teams = [];
    var character;
    for(var k = 0; k < numTeams; k++) {
      teams.push([]);
    }
    for(var i = 0; i < numChars; i++) {
      for(var j = 0; j < numTeams; j++) {
        character = list.splice(Math.round(Math.random() * list.length), 1);
        teams[j].push(character[0]);
      }
    }
    return teams;
  };

  Randomizer.prototype.draftDraft = function (list, numTeams, numChars, xChars) {
    var teams = [];
    var character;
    for(var k = 0; k <= numTeams; k++) {
      teams.push([]);
    }

    for(var i = 0; i < Number(numChars) / 2; i++) {
      for(var j = 0; j < numTeams; j++) {
        character = list.splice(Math.round(Math.random() * list.length), 1);
        teams[j].push(character[0]);
      }
    }

    for(i = 0; i < ((Number(numChars) / 2) * Number(numTeams)) + Number(xChars); i++) {
      character = list.splice(Math.round(Math.random() * list.length), 1);
      teams[numTeams].push(character[0]);
    }

    return teams;
  };

  return Randomizer;
});
