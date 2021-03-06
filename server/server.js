//var mongoose = require('mongoose');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true});
const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

var app = express();

const port = process.env.PORT || 3000 ;

app.use(bodyParser.json());	

app.post('/todos',(req,res)=>{

var todo = new Todo({
	text:req.body.text
})
//console.log(req.body);
todo.save().then((doc)=>{
res.send(doc);	
},(e)=>{
	res.status(400).send(e);
});
	
});

app.get('/todos',(req,res)=>{
	Todo.find().then((todos) => {
		res.send({todos});	
},(e)=>{
	res.status(400).send(e);
});
});

app.get('/todos/:id',(req,res) => {
	var id = req.params.id;
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();	
		}
		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
	//res.send(req.params);
});

//POST/users
app.post('/users',(req,res)=>{
	var body = _.pick(req.body,['email','password']);
	var user = new User(body);
	
	user.save().then(()=>{
		return user.generateAuthToken();
		//res.send(user);
	}).then((token)=>{
		res.header('x-auth',token).send(user);
	}).catch((e)=>{
		res.status(400).send(e);
	})
});


app.get('/users/me',authenticate,(req,res)=>{
	res.send(req.user);
});

app.listen(port,()=>{
	console.log('Started up at port:'+port);
});

/*
var Todo = mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	},
	completed:{
		type:Boolean,
		default:false
	},
	completedAt:{
		type:Number,
		default:null
	}
});
*/
/*
var newTodo = new Todo({
	text:"Cook dinner"
});

newTodo.save().then((doc)=>{
	console.log('Saved todo',doc);
},(e)=>{
	console.log('Unable to save todo');
});
*/

/*
var otherTodo = new Todo({
	text:' I love You '
});
*/

/*
otherTodo.save().then((doc)=>{
	//console.log('Saved otherTodo',doc);
	console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
	console.log('Unable to save otherTodo',e);
});
*/
module.exports ={app};