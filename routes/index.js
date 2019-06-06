var express = require('express');
// var router = express.Router();
var dataJSON = require('../data.json');
const router = express.Router();

/* GET home page. */




router.get('/home', function(req, res, next) {
	
  res.render('index', {page:'Home', menuId:'home',frm_data:dataJSON.movies});
});


router.get('/', function(req, res, next) {
	
  res.render('index', {page:'Home', menuId:'home',frm_data:dataJSON.movies});
});


router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', {page:'About Us', menuId:'about',frm_data:dataJSON.movies});
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', {page:'Contact Us', menuId:'contact',frm_data:dataJSON.movies});
});




module.exports = router;
