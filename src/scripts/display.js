define([], function () {
  'use strict';

  var display = {
    setTeams: function(teams, numTeams) {
      var headerText = '';
      var teamsText = '';

      window.console.log(teams);
      for(var i = 0; i < teams.length; i++) {
        if(i === numTeams) {
          headerText += "<th>Draftable</th>";
        } else {
          headerText += "<th>Team " + (i + 1) + "</th>";
        }

        teamsText += '<td>';
        for(var j = 0; j < teams[i].length; j++) {
          teamsText += teams[i][j].id + ': ' + teams[i][j].name + ': ' + teams[i][j].title + '<br>';
        }
        teamsText += '</td>';
      }

      var hNode = document.getElementById("header");
      var tNode = document.getElementById("teams");

      hNode.innerHTML = headerText;
      tNode.innerHTML = teamsText;
    },
    hideForm: function () {
      var fForm = document.getElementById("fForm");
      fForm.style.display = 'none';
    },

    showForm: function () {
      var fForm = document.getElementById("fForm");
      fForm.style.display = 'block';
    },

    hideTeams: function () {
      var tList = document.getElementById("tOutput");
      tList.style.display = 'none';
    },

    showTeams: function () {
      var tList = document.getElementById("tOutput");
      tList.style.display = 'block';
    },
    resetForm: function () {
      this.showForm();
      this.hideTeams();
    }
  };

  return display;
});
