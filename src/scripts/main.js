require(['config'], function () {
  'use strict';

  require([
    'lib/evt',
    'xmlParse',
    'processForm'
  ], function (evt, xmlParse, processForm) {
      xmlParse.loadXML("doa2_character_db.xml");

      // bind event handlers
      var select = document.getElementById('draft_type');

      evt.bind(select, 'change', processForm.checkDraft);

    }
  );
});
