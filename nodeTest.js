//Hello NodeJS
//var http = require("http");
//http.createServer(function(request, response){
//	response.writeHead(200, {"content-type":"text/plain"});
//	response.end("Hello world!");
//}).listen(81);
//console.log("server running at port 81.");

//异步方式读
//var fs = require("fs");
//fs.readFile("test.txt", "utf8", function(err, data){
//	if(err) throw err;
//	console.log("Async read result: " + data);
//});

//同步方式读
//var fs = require("fs");
//var data = fs.readFileSync("test.txt", "utf8");
//console.log("Sync read result: " + data);

//嵌套回调
//var fs = require("fs");
//fs.readdir("./node_modules/express", function(err, files){
//	var count = files.length, results = {};
//	files.forEach(function(filename){
//		fs.readFile("./node_modules/express/" + filename, "utf8", function(err, data){
//			results[filename] = data;
//			count--;
//			if(count <= 0) console.log(results);
//		});
//	});
//});

//流处理
//var http = require("http"), fs = require("fs");
//var server = http.createServer(function(request, response){
//	var stream = fs.createReadStream("test.txt");
//	stream.on("error", function(err){
//		response.statusCode = 500;
//		response.end(String(err));
//	});
//	//建立到Client的响应管道
//	stream.pipe(response);
//});
//server.listen(81);
//console.log("server running at port 81.");

//定义事件
//var events = require("events");
//var em = new events.EventEmitter();
//var counter = 0;
//var timer = setInterval(function(){
//	em.emit("tick");
//}, 2000);
//em.on("tick", function(){
//	counter++;
//	console.log(counter % 2 ? "Tick":"Tock");
//});

//使用子进程（在Windows下不适用）
var spawn = require("child_process").spawn;
var ls = spawn("ls", ["-a"]);//可以传入参数
ls.stdout.on("data", function(data){
	console.log(data.toString());
});
ls.stderr.on("data", function(data){
	console.log("Error: " + data);
});
ls.on("exit", function(code){
	console.log("Child process exited with code: " + code);
});






