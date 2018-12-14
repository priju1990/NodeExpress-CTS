var mangoose= require('mongoose') //ORM tool
var mongooseSchema = mangoose.Schema
var userschema =new mongooseSchema({
    "name":String,
    "location":String,
	"year":Number
})
module.exports = mangoose.model('friemds',userschema)