

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
  	
 /*
 db.collection('Todos').findOneAndUpdate({
	 _id:new ObjectID("5c46ef048fc3a7df12235afb")
 },{
	$set:{
		completed:true
	}
 },{
		returnOriginal:false
	}).then((result)=>{
	
console.log(result);
});
*/
 db.collection('Users').findOneAndUpdate({
	 _id:new ObjectID("5c25d829cb3bdb21bc36fab7")
 },{
	$set:{
		name:'Gurwinder Singh'
	},
		$inc:{age:1}
 },{
		returnOriginal:false
	}).then((result)=>{
	
console.log(result);
});
});


