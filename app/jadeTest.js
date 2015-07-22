var jade = require('jade'), fs = require('fs');

var data = {
	title:'Practical Node.js',
	author:{name:'Azat'},
	tags:['express', 'node', 'javascript']
};
data.body = process.argv[2];

//fs.readFile('views/jadeTest.jade', 'utf-8', function(error, source){
//	var template = jade.compile(source);
//	var html = template(data);
//	console.log(html);
//});

jade.renderFile('views/jadeTest.jade', data, 
	function(error, html){
		console.log(html);
});
