

// Load the SDK and UUID
var AWS = require('aws-sdk');

// Create an S3 client
//var s3 = new AWS.S3();
AWS.config.region = 'us-west-2'; // Region
var rekognition = new AWS.Rekognition();

var bucketName = 'amb-processing';

fs.readFile('./45.jpg', (err, data) => {
  if (err) throw err;
  console.log('gonna do it');
  var params = {Bucket: bucketName, Key: '45.jpg', Body: data};
  s3.putObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded file.");
  });
});


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
   else {
     // find a label with Name "confidence"
     var bikeLabel = data.Labels.find(function(label) {
       return (label.Name.toLowerCase() === 'bicycle' || label.Name.toLowerCase() === 'bike' )
     });
   }

   if (bikeLabel.Confidence > 75) {
     console.log("It's a bike.");
   }
 });



//s3.createBucket({Bucket: bucketName}, function() {

//});
