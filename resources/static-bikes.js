let express = require('express');

var bikes = [
	{"id":1,"style":"cruiser","brand":"Fuji","model":"Cambridge III","color":"red","brakes":"rim","speeds":1,"handlebars":"mustache","created_at":"2016-09-16T18:13:22.682023-07:00","updated_at":null},
	{"id":3,"style":"road","brand":"Raleigh","model":"Technium","color":"yellow+gray+pink","brakes":"rim","speeds":12,"handlebars":"drop","created_at":"2016-09-16T18:24:52.781274-07:00","updated_at":null},
	{"id":4,"style":"hybrid","brand":"Surly","model":"Straggler","color":"purple+mint","brakes":"disc","speeds":10,"handlebars":"drop","created_at":"2016-09-16T18:27:28.759123-07:00","updated_at":null},
	{"id":5,"style":"fat bike","brand":"State Bicycle Company","model":"Megalith","color":"yellow+mint+red","brakes":"disc","speeds":7,"handlebars":"riser","created_at":"2016-09-16T21:31:49.890723-07:00","updated_at":null},
	{"id":6,"style":"bmx","brand":"Mongoose","model":"Custon Trials Bike","color":"silver+gold","brakes":"disc","speeds":1,"handlebars":"riser","created_at":"2016-09-16T21:33:55.323714-07:00","updated_at":null},
	{"id":2,"style":"cruiser","brand":"Laguna BMX","model":"Super Cruiser","color":"chrome","brakes":"none","speeds":1,"handlebars":"other","created_at":"2016-09-16T18:18:21.902632-07:00","updated_at":null}
];

function getAllBikes() {
  return bikes;
}

function getSingleBike(id) {
  return {"id":1,"style":"cruiser","brand":"Fuji","model":"Cambridge III","color":"red","brakes":"rim","speeds":1,"handlebars":"mustache","created_at":"2016-09-16T18:13:22.682023-07:00","updated_at":null}
}

module.exports = {
  getAllBikes: getAllBikes,
  getSingleBike: getSingleBike//,
  //createBike: createBike,
  //updateBike: updateBike,
  //removeBike: removeBike
};