var http = require('http')
var util = require('util')
var querystring = require('querystring')

var messages = []
messages.push({'name':'John', 'message':'hi'})

exports.server = http.createServer(function(req, res){
	if(req.method == 'POST' && req.url == '/messages/create.json'){
		var message = ''
		req.on('data', function(data, message){
			console.log(data.toString('utf-8'))
			message = exports.addMessage(data.toString('utf-8'))
		})
		console.log(util.inspect(message, true, null))
		console.log(util.inspect(messages, true, null))
		res.writeHead(200, {'Content-Type':'text/plain'})
		res.end(message)
	}
	if(req.method == 'GET' && req.url == '/messages/list.json'){
		var body = exports.getMessages()
		res.writeHead(200, {'Content-Length':body.length, 'Content-Type':'text/plain'})
		res.end(body)
	}else{
		res.writeHead(200, {'Content-Type':'text/plain'})
		res.end('hello world\n')
	}
	console.log(req.method)
}).listen(3000, 'localhost')

exports.getMessages = function(){
	return JSON.stringify(messages)
}

exports.addMessage = function(data){
	messages.push(querystring.parse(data))
	return JSON.stringify(querystring.parse(data))
}


