const im = require('imagemagick');

var photo = './sample_photos/a.png'
var filename = (new Date()).getTime();
var tmpPath = './sample_photos/' + filename + '-tmp.jpg';

/*
  xValue: '0',
  yValue: '263',
  actualWidth: '630',
  actualHeight: '999',
  cropWidth: '630',
  cropHeight: '472' }
  */

  // if(!req.body.cropWidth || req.body.cropHeight || req.body.yValue || req.body.xValue) {
  //   console.log('missing required values for crop.');
  // }
  let options = {
    progressive: true,
    srcPath: photo,
    dstPath: tmpPath,
    format: 'jpg',
  };  

  // crop and change graphics format if nec.

  im.resize(options, function(err, stdout, stderr){
    if(err) throw new Error(err);

    console.log(stdout);
    console.log(stderr)

  });

  // return photo as data.


