var types = require("./bike-types-array.js").types;

var typesObjects = [];

for (var i = 0; i < types.length; i++) {
  var type = {};
  type.id = i + 1;
  if(types[i].indexOf(' - ') !== 0) {
    type.label = types[i];
    lastMainId = i + 1;
  } else {
    type.label = types[i].substring(' - '.length);
    type.related_type_ids = [lastMainId];
  }
  typesObjects.push(type);
}

console.log(JSON.stringify(typesObjects));