var express = require('express')
var mangoose = require('mongoose')
var bodyParser = require('body-parser') // for parsing the json data
var app = express()
var userModel = require('./model/user')
var cors = require('cors')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) //since we need to work with json
app.use(cors())
 mangoose.connect("mongodb://localhost:27017/random")
 var db= mangoose.connection
db.on('error',function(){

    console.log("error in connection")

})

db.once('open',function(){
    console.log("connected to db!!")
})


app.get('/',function(req,res){
    res.send("hello from REST API")

})

app.get('/get',function(req,res){
    userModel.find({},function(err,data){
        if(err){
            console.log("error")
            err.send("error"+err)
        }
        else{
           
            res.json(data)
        }

    })
})

app.get('/get/:location',function(req,res){
    var pathparams = req.params.location
    console.log(pathparams)
    userModel.find({location:pathparams},function(err,data){
        if(err){
            res.send(err)
        }
        else{
            res.json(data)
        }
    })
})

app.delete('/delete/:location',function(req,res){
    console.log("deleting.."+req.params.name)

	userModel.deleteMany({location:req.params.location},function (err) {

if (err)
throw err;

res.json('Deleted successfully!');

})


})

app.post('/add',function(req,res){
    var user = new userModel()
    user.name= req.body.name
    user.location= req.body.location
    user.year= req.body.year
	console.log(user.name,user.location,user.year)
    user.save(function(err){
        if(err)
        {res.send(err)}
        else{//console.log(res)
            res.json({message:'user created'})
        }
    })
})
app.listen(8888)