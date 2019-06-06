var express = require('express');
// var router = express.Router();
var dataJSON = require('../data.json');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
/* GET home page. */




router.get('/*', function(req, res, next) {
	var fileData=dataJSON.movies;
  res.render('products', {page:'Home', menuId:'home',frm_data:fileData});
});




module.exports = router;
