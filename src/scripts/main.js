require(['config'], function () {
  'use strict';

  require([
    'lib/evt',
    'xmlParse',
    'processForm',
    'character_collection',
    'display'
  ], function (evt, xmlParse, processForm, Character_collection, display) {
      var Characters = new Character_collection();
      xmlParse.loadXML(Characters, "doa2_character_db.xml");

      // bind event handlers
      var select = document.getElementById('draft_type');
      evt.bind(select, 'change', processForm.checkDraft);

      var checkboxes = document.getElementsByClassName('setting-checkbox');
      for (var i = 0; i < checkboxes.length; i ++) {
        evt.bind(checkboxes[i], 'click', processForm.checkClicked);
      }

      var submit = document.getElementById('submit_form');
      evt.bind(submit, 'click', processForm.processForm.bind(this, Characters));

      var reset = document.getElementById('reset_button');
      evt.bind(reset, 'click', display.resetForm.bind(display));
    }
  );
});
