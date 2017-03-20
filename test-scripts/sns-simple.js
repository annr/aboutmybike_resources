var AWS = require('aws-sdk');
//don't hard code your credential 🙂
 AWS.config.update({accessKeyId: 'AKIAJI4OQ37SPCXY3HHQ', secretAccessKey: 'n+w/QSeANculmVqgn4SvIkNI2Uy09nUe6nWwoILt', region: 'us-west-1'});

var sns = new AWS.SNS();
sns.publish(
{TopicArn:'arn:aws:sns:us-west-1:619254428467:amb-contact-form', Message:"Just testing for now ", Subject: "WFTTTFTTF"}
, function(err,data){
 if (err){
     console.log("Error sending a message "+err);
 }else{
     console.log("Sent message {0}".format(data.MessageID));
 }
 });