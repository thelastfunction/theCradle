var express = require('express');
// var router = express.Router();
var dataJSON = require('../data.json');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
/* GET home page. */






router.get('/' || '/home', function(req, res, next) {
	var fileData=dataJSON.movies;
  res.render('index', {page:'Home', menuId:'home',frm_data:fileData});
});

router.get('/aboutus', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about',frm_data:fileData});
});

router.get('/contactus', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact',frm_data:fileData});
});


// // Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);


module.exports = router;
