var superagent = require('superagent')
var expect = require('expect.js')

describe('express rest api server', function(){
	var id
	
	it('posts an object', function(done){
		superagent.post('http://localhost:3000/collections/test')
			.send({name:'ernest', email:'ernestyj@outlook.com'})
			.end(function(e, res){
				console.log(res.body)
				expect(e).to.eql(null)
				expect(res.body.length).to.eql(1)
				expect(res.body[0]._id.length).to.eql(24)
				id = res.body[0]._id
				done()
			})
	})
})
