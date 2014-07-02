function setTeams(teams, numTeams) {
  var headerText = '';
  var teamsText = '';
    
  window.console.log(teams);
  for(i = 0; i < teams.length; i++) {
    if(i == numTeams) {
      headerText += "<th>Draftable</th>";
    } else {
      headerText += "<th>Team " + (i + 1) + "</th>";
    }
    
    teamsText += '<td>';
    for(j = 0; j < teams[i].length; j++) {
      teamsText += teams[i][j].id + ': ' + teams[i][j].name + ': ' + teams[i][j].title + '<br>'; 
    }
    teamsText += '</td>';
  }
  
  var hNode = document.getElementById("header");
  var tNode = document.getElementById("teams");
  
  hNode.innerHTML = headerText;
  tNode.innerHTML = teamsText;
}

function hideForm() {
  var fForm = document.getElementById("fForm");
  fForm.style.display = 'none';
}

function showForm() {
  var fForm = document.getElementById("fForm");
  fForm.style.display = 'block';
}

function hideTeams() {
  var tList = document.getElementById("tOutput");
  tList.style.display = 'none';
}

function showTeams() {
  var tList = document.getElementById("tOutput");
  tList.style.display = 'block';
}