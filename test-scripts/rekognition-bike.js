

// Load the SDK and UUID
var AWS = require('aws-sdk');

// Create an S3 client
//var s3 = new AWS.S3();
AWS.config.region = 'us-west-2'; // Region
var rekognition = new AWS.Rekognition();

var bucketName = 'amb-processing';
 var params = {
  Image: {
   S3Object: {
    Bucket: bucketName, 
    Name: "rocket.png"
   }
  }, 
  MaxLabels: 123, 
  MinConfidence: 70
 };
 rekognition.detectLabels(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 });



//s3.createBucket({Bucket: bucketName}, function() {

//});
