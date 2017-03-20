var im = require('imagemagick');
var util = require('util');
var photoName = './sample_photos/a.png'

var photo = './large_screenshots/' + photoName;
var filename = (new Date()).getTime();
var tmpPath = './sample_photos/' + filename + '-tmp.jpg';
var dstPath = './sample_photos/' + filename + '.jpg';

im.identify(photo, function(err, img){
  if (err) throw err;

  console.log(img);
  var height = img.height;
  var width = img.width;

  // default 4:3 ratio
  // all this will do is change the quality.
  var options = {
    srcPath: photo,
    dstPath: tmpPath,
    width: width,
    format: 'jpg',
    height: height
  };

  if (height/width > 0.75) {
    options.width = width;
    options.height = Math.floor(width*0.75);
  } else {
    options.width = Math.round(height*1.3333333333);
    options.height = height;
  }

  // crop and change graphics format if nec.
  im.crop(options, function(err, stdout, stderr){

    // default optimization:
    var quality = 0.7;

    // only reduce the quality if the file has not already been optimzed.
    if(img.quality && img.quality <= 0.8) {
      //unsetting the quality value:
      quality = 1;
    }

    var newWidth = (width < 1024) ? width : 1024;

    var resizeOptions = {
      srcPath: tmpPath,
      dstPath: dstPath,
      quality: quality,
      progressive: true,
      width: newWidth,
      strip: true,
      //filter: 'Lagrange',
      sharpening: 0.2
    }

    // cropped. now:
    // 1) reduce pixel width if nec.
    // 2) reduce quality
    // 3) make progressive

    im.resize(resizeOptions, function(err, stdout, stderr){
      if (err) throw err;
      console.log('resized , optimized, ');
    });

  });


});
