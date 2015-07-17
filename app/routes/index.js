var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.jade', { title: 'Express' });
});

router.about = function(req, res){
	res.render("index.jade", {title:"About"});
};

module.exports = router;
