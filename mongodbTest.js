var mongodb = require("mongodb");
var dbServer = new mongodb.Server("localhost", 27017, {auto_reconnect:true});
var db = new mongodb.Db("mydb", dbServer, {w:1});
//创建集合
//db.open(function(err, con){
//	db.collection("myCollection", function(err, collection){
//		collection.insert({a:"my items"}, function(err, result){
//			console.log(result);
//			db.close();
//		});
//	});
//});
//插入数据
//db.open(function(err, con){
//	db.collection("myCollection", function(err, collection){
//		var count = 0;
//		for(var i = 0; i < 5; i++){
//			collection.insert({num:i}, function(err, result){
//				console.log(result);
//				count++;
//				if(count > 4) db.close();
//			});
//		}
//	});
//});
//读取所有数据
//db.open(function(err, con){
//	db.collection("myCollection", function(err, collection){
//		collection.find().toArray(function(err, result){
//			console.log(result);
//			db.close();
//		});
//	});
//});
//读取特定数据
//db.open(function(err, con){
//	db.collection("myCollection", function(err, collection){
//		collection.find({num:2}).toArray(function(err, result){
//			console.log(result);
//			db.close();
//		});
//	});
//});
//读取限定条数和排序的数据
db.open(function(err, con){
	db.collection("myCollection", function(err, collection){
		collection.find({}, {limit:4, sort:[["num", "desc"]]}).toArray(function(err, result){
			console.log(result);
			db.close();
		});
	});
});
//更新数据
















