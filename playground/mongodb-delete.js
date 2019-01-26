

const {MongoClient,ObjectID} = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Create a new MongoClient
const client = new MongoClient(url,{useNewUrlParser:true});

// Use connect method to connect to the Server

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  	
 // deleteMany
//db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
//	console.log(result);
//});
  //deleteOne
//db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
	//console.log(result);
//});

 //findOneAndDelete
 /*
db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	console.log(result);
});
 */ 
 db.collection('Users').findOneAndDelete({_id:new ObjectID("5c2510319f96570d645fc092")}).then((result)=>{
	console.log(JSON.stringify(result,undefined,2));
});
});


//DeleteOne
//FindOneAndDelete
//db.close();
//});