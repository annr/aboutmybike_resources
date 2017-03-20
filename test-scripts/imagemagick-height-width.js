var im = require('imagemagick');
var util = require('util');

im.identify(process.argv[2], function(err, img){
  if (err) throw err;
  console.log(img);
});
