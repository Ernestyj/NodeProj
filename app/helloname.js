var express = require("express");
var port = 81;
var app = express();

app.get("/name/:user_name", function(req, res){
	res.status(200);
	res.set("Content-Type", "text/html");
	res.send("<html><body>" + "<h1>Hello" + req.params.user_name + "</h1></body></html>");
});
app.get("*", function(req, res){
	res.end("Hello world!");
});
app.listen(port, function(){
	console.log("The server is running, " + "please open your browser at http://localhost:%s", port);
});
