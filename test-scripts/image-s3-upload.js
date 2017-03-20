
var fs = require('fs');

// Load the SDK and UUID
var AWS = require('aws-sdk');

// Create an S3 client
var s3 = new AWS.S3();

var bucketName = 'amb-storage';

var fileName = './45.jpg';

// fs.readFile('./45.jpg', (err, data) => {
//   if (err) throw err;
//   console.log('gonna do it');
  var params = {Bucket: bucketName, Key: '555.jpg', Body: fileName};
  s3.putObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded file.");
  });
// });

//s3.createBucket({Bucket: bucketName}, function() {

//});
