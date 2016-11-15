'use strict';

var express = require('express');
var router = express.Router();
var signin = require('../mean-signin/src/models/signin')

/* GET home page. */
router.get('/', function(req, res, next) {
  signin.find({}), function(err, signin) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
    res.json({firstname: '', lastname: '', pin: ''})
  }
  res.render('index', { title: 'Express' });
});

router.post('/signins', function(req, res) {
  var signin = req.body;
  signin.create(signin, function(err, signin) {
    is(err) {
      return res.status(500).json({err: err.message});
    }
  res.json({'signin': signin, message: 'Person Entered'});
});
});

router.put('/signins/:id', function(req, res) {
  var id= req.params.id;
  var signin = req.body;
  if(signin && signin._id !== id) {
    return res.status(500).json({err: "IDs don't match!"})
  }
    signin.findByIdAndUpdate(id, signin, function(err, signin) {
    is(err) {
      return res.status(500).json({err: err.message});
    }
  res.json({'signin': signin, message: 'Person Entered'});
});
});

module.exports = router;
