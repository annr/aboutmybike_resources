var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var connectionString;

var pgp = require('pg-promise')(options);
// LOCALHOST:
//connectionString = 'postgres://localhost:5432/amb';

connectionString = 'postgres://arobson:h34rt4nn71@ambinstance.crufdsximznc.us-west-1.rds.amazonaws.com:5432/amb';

var db = pgp(connectionString || connectionObject);


db.any('select * from bike')
  .then(function (data) {
    console.log(data);
  });

db.any('select * from bike')
  .then(function (data) {
    console.log(data);
  });

