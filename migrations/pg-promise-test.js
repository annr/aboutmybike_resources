var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var connectionString;

var pgp = require('pg-promise')(options);
// LOCALHOST:
//connectionString = 'postgres://localhost:5432/amb';

// AWS:
var connectionObject = {
    host: 'ambinstance.crufdsximznc.us-west-1.rds.amazonaws.com',
    port: 5432,
    database: 'amb',
    user: 'arobson',
    password: 'h34rt4nn71'
};

var db = pgp(connectionString || connectionObject);


db.any('select * from bike')
  .then(function (data) {
    console.log(data);
  });

db.any('select * from bike')
  .then(function (data) {
    console.log(data);
  });

