var express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  favicon = require('serve-favicon'),
  errorhandler = require('errorhandler');

var app = express();
var router = express.Router();

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(logger('combined'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('public'));

var users = {
	'azat':{
		email:'hi@azat.co',
		website:'http://azat.co',
		blog:'http://webapplog.com'
	}
};

//v1
var findUserByUsername = function(username, callback){
	if(!users[username]) return callback(new Error('No user matching ' + username));
	return callback(null, users[username]);
};
app.get('/1/users/:username', function(request, response, next){
	var username = request.params.username;
	findUserByUsername(username, function(error, user){
		if(error) return next(error);
		return response.render('user', user);
	});
});
app.get('/1/admin/:username', function(request, response, next){
	var username = request.params.username;
	findUserByUsername(username, function(error, user){
		if(error) return next(error);
		return response.render('admin', user);
	});
});

//v3
app.param('v3Username', function(request, response, next, username){
	console.log('Username param was detected: ', username);
	findUserByUsername(username, function(error, user){
		if(error) return next(error);
		return next();
	});
});
app.get('/v3/users/:v3Username', function(request, response, next){
	return response.render('user', request.user);
});
app.get('/v3/admin/:v3Username', function(request, response, next){
	return response.render('admin', request.user);
});


app.use(errorhandler());
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
