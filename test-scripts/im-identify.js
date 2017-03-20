var im = require('imagemagick');
var util = require('util');


im.identify(process.argv[2], function(err, img){
  if (err) throw err;

  let propertiesToStore = {
    width: img.width,
    height: img.height,
    filesize: img.filesize,
    number_pixels: img['number pixels'],
  };
  console.log(JSON.stringify(propertiesToStore));

});
