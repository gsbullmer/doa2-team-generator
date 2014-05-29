function Category(xml) {
  this.name = xml.tagName;
  this.items = [];
  for(i = 0; i < xml.children.length; i++) {
    var item = new Array();
    if(xml.children[i].hasAttribute("age")) {
      item.push(xml.children[i].getAttribute("age"));
      item.push(xml.children[i].textContent);
      this.items.push(item);
    } else {
      this.items.push(xml.children[i].textContent);
    }
  }
  window.console.log("Category created");
}

Category.prototype.name = '';
Category.prototype.items = [];