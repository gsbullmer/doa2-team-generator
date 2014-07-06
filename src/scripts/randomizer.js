require([], function () {
  'use strict';

  var Randomizer = {};

  Randomizer.prototype.randomize = function(charList, numTeams, numChars, draft, xChars) {
    window.console.log("randomizing results");
    var teams;
    switch(draft) {
      case "standard":
        teams = draftStandard(charList, numTeams, numChars, xChars);
        break;

      case "pure":
        teams = draftPure(charList, numTeams, numChars);
        break;

      case "draft":
        teams = draftDraft(charList, numTeams, numChars, xChars);
        break;
    }

    displayTeams(teams, numTeams);
  };

  Randomizer.prototype.draftStandard = function(list, numTeams, numChars, xChars) {
    var teams = [];
    for(k = 0; k < numTeams; k++) {
      teams.push([]);
    }
    for(i = 0; i < Number(numChars) + Number(xChars); i++) {
      for(j = 0; j < numTeams; j++) {
        char = list.splice(Math.round(Math.random() * list.length), 1);
        teams[j].push(char[0]);
      }
    }
    return teams;
  };

  Randomizer.prototype.draftPure = function (list, numTeams, numChars) {
    var teams = [];
    for(k = 0; k < numTeams; k++) {
      teams.push([]);
    }
    for(i = 0; i < numChars; i++) {
      for(j = 0; j < numTeams; j++) {
        char = list.splice(Math.round(Math.random() * list.length), 1);
        teams[j].push(char[0]);
      }
    }
    return teams;
  };

  Randomizer.prototype.draftDraft = function (list, numTeams, numChars, xChars) {
    var teams = [];
    for(k = 0; k <= numTeams; k++) {
      teams.push([]);
    }

    for(i = 0; i < Number(numChars) / 2; i++) {
      for(j = 0; j < numTeams; j++) {
        char = list.splice(Math.round(Math.random() * list.length), 1);
        teams[j].push(char[0]);
      }
    }

    for(i = 0; i < ((Number(numChars) / 2) * Number(numTeams)) + Number(xChars); i++) {
      char = list.splice(Math.round(Math.random() * list.length), 1);
      teams[numTeams].push(char[0]);
    }

    return teams;
  };

  return Randomizer;
});
