define(['character'], function (Character) {
    'use strict';

    //var categories;
    //var categoriesArray = new Array();
    var characters;
    var characterArray = [];
    var xmlHTTP = new XMLHttpRequest();
    var xml;

    var xmlParse = {

        loadXML: function (url) {
            xmlHTTP.open("GET", url, false);
            xmlHTTP.send();
            xml = xmlHTTP.responseXML;
            this.parseXML();
        },
        parseXML: function () {
            //  categories = xml.getElementsByTagName('categories')[0];
            //  for(j = 0; j < categories.children.length; j++) {
            //    var categoryData = categories.children[j];
            //    categoriesArray.push(new Category(categoryData));
            //  }

            characters = xml.getElementsByTagName('characters')[0];
            for(i = 0; i < characters.children.length; i++) {
                var characterData = characters.getElementsByTagName('character')[i];
                var character = new Character(characterData);
                characterArray.push(character);
            }
        }
    };

    return xmlParse;
});
