const im = require('imagemagick');

var photo = './sample_photos/a.png'
var dstPath = './sample_photos/a-test2.jpg';

im.convert([photo, dstPath], function(err, stdout) {
  if (err) throw err;
  console.log('stdout:', stdout);
});