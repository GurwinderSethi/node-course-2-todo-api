// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	// if(err){
		// return console.log('Unable to connect to mongodb server');
	// }
	// console.log('Connected to mongodb server');
	
	 // db.collection('Todos').insertOne({
		// text:'Something to do',
		// completed: false
	// },(err,result)=>{
		// if(err){
			// return console.log('Unable to insert Todo',err);
		// }
		// console.log(JSON.stringify(result.ops,undefined,2));

		// db.close();
// });


//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

// var user ={name:'Gurwinder', age:20};
// var {name} = user;
// console.log(name);

const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  
  // db.collection('Todos').insertOne({
		// text:'Something to do',
		// completed: false
	// },(err,result)=>{
		// if(err){
			// return console.log('Unable to insert Todo',err);
		// }
		// console.log(JSON.stringify(result.ops,undefined,2));
	// });
	
	// db.collection('Users').insertOne({
		// name:'Gurwinder',
		// age:34,
		// location:'Delhi'
	// },(err,result)=>{
		// if(err){
			// return console.log('Unable to insert Todo',err);
		// }
		// console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
	// });

  client.close();
});