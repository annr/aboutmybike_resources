var types = require("./bike-types-objects.js").types;

var inserts = [];

for (var i = 0; i < types.length; i++) {

  var displayLabel = '';
  if(types[i].related_type_ids && types[i].related_type_ids.length > 0) {
    displayLabel = ' - ';
  }
  displayLabel += types[i].label;
  var insertString = '<option value="' + types[i].id +  '">' + displayLabel + '</option>' ;

  inserts.push(insertString);
}


for (var i = 0; i < inserts.length; i++) {
  console.log(inserts[i]);
}