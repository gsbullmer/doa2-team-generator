function Character(xml) {
  this.id = xml.getAttribute('id');
  this.set = xml.getAttribute('set');
  this.name = xml.getAttribute('name');
  this.title = xml.getAttribute('title');
  this.age = xml.getAttribute('age');
  this.setting = xml.getAttribute('setting');
  this.circle = xml.getAttribute('circle');
  this.nature = xml.getAttribute('nature');
  this.stats = xml.getAttribute('stats').split(',');
  window.console.log("Character created");
}

Character.prototype.id = '';
Character.prototype.set = '';
Character.prototype.name = '';
Character.prototype.title = '';
Character.prototype.age = '';
Character.prototype.setting = '';
Character.prototype.circle = '';
Character.prototype.nature = '';
Character.prototype.stats = [];