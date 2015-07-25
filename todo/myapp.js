var express = require('express');
var http = require('http');
var path = require('path');
var mongoskin = require('mongoskin');
var favicon = require('serve-favicon'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	csrf = require('csurf'),
	errorHandler = require('errorhandler');
var home = require('./routes/home');
var tasks = require('./routes/tasks');

var app = express();

var db = mongoskin.db('mongodb://localhost:27017/todo?auto_reconnect', {safe:true});

app.locals.appname = 'Express.js Todo App';
app.locals.moment = require('moment');
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(function(req, res, next){
	req.db = {};
	req.db.tasks = db.collection('tasks');
	next();
});
app.use(favicon(path.join('public', 'favicon.ico')));
app.use(logger('dev'));//out-of-the-box logger will print requests in the terminal window
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());
app.use(cookieParser('CEAF3FA4-F385-49AA-8FE4-54766A9874F1'));
app.use(session({
  secret: '59B93087-78BC-4EB9-993A-A61FC844F6C9',
  resave: true,
  saveUninitialized: true
}));
app.use(csrf());//在用csrf前要先使用cookieParser和session
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next){
	res.locals._csrf = req.csrfToken();
	return next();
});

app.param('task_id', function(req, res, next, taskId){
	req.db.tasks.findById(taskId, function(error, task){
		if(error) return next(error);
		if(!task) return next(new Error('Task is not found.'));
		req.task = task;
		return next();
	});
});

app.get('/', home.index);
app.get('/tasks', tasks.list);
app.post('/tasks', tasks.markAllCompleted);
app.post('/tasks', tasks.add);
app.post('/tasks/:task_id', tasks.markCompleted);
app.delete('/tasks/:task_id', tasks.del);
app.get('/tasks/completed', tasks.completed);
app.all('*', function(req, res){//可防止错误URL的恶意攻击
	res.status(404).send();
});

if('development' == app.get('env')){
	app.use(errorHandler());
}

http.createServer(app).listen(app.get('port')), function(){
	console.log('Express server listening on port ' + app.get('port'));
};


