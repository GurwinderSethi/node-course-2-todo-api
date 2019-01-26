const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
/*
var id = '5c4be48347c2ee1970d6987811';

if(!ObjectID.isValid(id)){
	
	console.log('Id is not valid');
}
*/
/*
Todo.find({
	_id:id
}).then((todos)=>{
	console.log('Todos',todos);
});

Todo.findOne({
	_id:id
}).then((todo)=>{
	console.log('Todo',todo);
});
*/
/*
Todo.findById(id).then((todo)=>{
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo by Id',todo);
}).catch((e) => console.log(e));
*/
/*

Todo.findById(id).then((todo)=>{
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo by Id',todo);
}).catch((e) => console.log(e));

*/

User.findById('5c4bf8c81c4b203ea23d0b59').then((user) => {
	if(!user){
		return console.log('Unable to find user ');
	}
	console.log(JSON.stringify(user,undefined,2));
},(e) => {
	console.log(e);
});