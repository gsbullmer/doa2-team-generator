//var categories;
//var categoriesArray = new Array();
var characters;
var characterArray = new Array();
var xmlHTTP = new XMLHttpRequest();
var xml;

function loadXML(url) {
  xmlHTTP.open("GET", url, false);
  xmlHTTP.send();
  xml = xmlHTTP.responseXML;
  parseXML();
}

function parseXML() {
//  categories = xml.getElementsByTagName('categories')[0];
//  for(j = 0; j < categories.children.length; j++) {
//    var categoryData = categories.children[j];
//    categoriesArray.push(new Category(categoryData));
//  }
  
  characters = xml.getElementsByTagName('characters')[0];
  for(i = 0; i < characters.children.length; i++) {
    var characterData = characters.getElementsByTagName('character')[i];
    characterArray.push(new Character(characterData));
  }
}