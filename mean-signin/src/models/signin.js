'use strict';

var mongoose - require('mongoose');

new mongoose.schema({
  firstname: string,
  lastname: string,
  pin: string
})

 var model = mongoose.model('signin', schema);

 module.exports = model;
