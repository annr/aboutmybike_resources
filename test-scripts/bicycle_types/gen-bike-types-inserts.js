var types = require("./bike-types-objects.js").types;

var inserts = [];

for (var i = 0; i < types.length; i++) {
  var ref_ids = null;
  if(types[i].related_type_ids && types[i].related_type_ids.length > 0) {
    ref_ids = 'ARRAY' + JSON.stringify(types[i].related_type_ids);
  }
  var insertString = 'INSERT into type (id, label, related_type_ids) VALUES (';
  inserts.push(insertString + types[i].id + ", '" + types[i].label + "', " + ref_ids + ");");
}


for (var i = 0; i < inserts.length; i++) {
console.log(inserts[i]);
}