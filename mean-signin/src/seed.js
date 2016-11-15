'use strict';

var signin = require('./models/signin.js');

var signins = [
  'John',
  'Smith',
  '1234'
];

signins.forEach(function(signin, index) {
  signin.find({'firstname': signin}, function(err, signins) {
    if(!err && !signins.length) {
      signin.create({});
    };
  });
});
