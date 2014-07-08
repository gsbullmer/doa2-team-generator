define([], function () {
    'use strict';

    var xmlHTTP = new XMLHttpRequest();
    var xml;

    var xmlParse = {

        loadXML: function (collection, url) {
            xmlHTTP.open("GET", url, false);
            xmlHTTP.send();
            xml = xmlHTTP.responseXML;
            this.parseXML(collection);
        },
        parseXML: function (collection) {
            var characters = xml.getElementsByTagName('characters')[0];
            for(var i = 0; i < characters.children.length; i++) {
                var characterData = characters.getElementsByTagName('character')[i];
                collection.add(characterData);
            }
        }
    };

    return xmlParse;
});
