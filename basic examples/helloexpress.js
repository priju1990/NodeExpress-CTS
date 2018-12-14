var express1 = require('express')
var ejs = require('ejs')
//using body parser for POST
var bodyParser= require('body-parser')

var app = express1()
//using body parser for POST
var urlEncodedParser= bodyParser.urlencoded({extended:false})
//for using template..
app.set('view engine','ejs')
app.set('views',__dirname+'/template')

app.get('/',function(req,res){
    //res.sendFile(__dirname+ '/home.html') = this send the home.html file .content of home.html comes up
    //res.send("Im on homepage" +__dirname) => just prints this message.
    res.render('home',{message: "Coming for EJS template"})
    //res.send()
})

app.get('/about',function(req,res){
   // res.sendFile(__dirname+ '/about.html')
  //  res.send("I am on about page")
  res.render('about' ,{message: 'Coming for EJS template',urlData : req.query})
  
})

app.get('/contact',function(req,res){
    //res.sendFile(__dirname+ '/contact.html')
  //  res.send("I am on contact page")
  res.render('contact',{message: 'Coming for EJS template'})
})

app.get('/profile/:name',function(req,res){
    var personData ={age:33,location: 'blr', hobbies: ['driving','swimming','sleeping']}
   // res.send("I am on profile page of "+req.params.name)
   res.render('profile',{personName : req.params.name, data: personData})
})

app.post('/contact',urlEncodedParser, function(req,res){
   
    console.log(req.body)
     //using body parser
    //sends the res to page..not in a template
    //res.send("Received info"+ JSON.stringify(req.body))
    res.render('details',{details:JSON.stringify(req.body)})
})

app.listen(8888)