function randomize(charList, numTeams, numChars, draft, xChars) {
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
}

function draftStandard(list, numTeams, numChars, xChars) {
  var teams = new Array();
  for(k = 0; k < numTeams; k++) {
    teams.push(new Array());
  }
  for(i = 0; i < Number(numChars) + Number(xChars); i++) {
    for(j = 0; j < numTeams; j++) {
      char = list.splice(Math.round(Math.random() * list.length), 1);
      teams[j].push(char[0]);
    }
  }
  return teams;
}

function draftPure(list, numTeams, numChars) {
  var teams = new Array();
  for(k = 0; k < numTeams; k++) {
    teams.push(new Array());
  }
  for(i = 0; i < numChars; i++) {
    for(j = 0; j < numTeams; j++) {
      char = list.splice(Math.round(Math.random() * list.length), 1);
      teams[j].push(char[0]);
    }
  }
  return teams;
}

function draftDraft(list, numTeams, numChars, xChars) {
  var teams = new Array();
  for(k = 0; k <= numTeams; k++) {
    teams.push(new Array());
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
}