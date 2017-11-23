var express = require('express');
var app = express();
var mongojs = require ('mongojs');
var bodyParser = require('body-parser');
var db = mongojs ('mongodb://sensordata:1234@ds155325.mlab.com:55325/sample',['sensor'])

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())


//read data for light
app.get('/light', function (req, res) {
   res.send(' this is for light data');
})


//read data for sound
app.get('/sound', function (req, res) {
    db.sensordata.find(function(err,docs){
        res.send(docs);
    })  
 })

//read data for temp
 
app.get('/temp', function (req, res) {
    res.send('for temp data');
 })

 //get data from database

 app.get ('/showdata', function(req,res){
    db.sensordata.find(function(err, docs){
    res.send("docs")
    
    })
 })
   

 //post data to database
//  app.post ('/postdata', function(req,res){
//  db.sensordata.save(function(req,body){

//  res.json(req.body)
//  res.send("post done")
 

//  })
// }) 

app.post('/asd', function(req, res){
    db.sensor.save(req.body);
    console.log("post data"); 
    res.json(req.body);
    })

 app.listen(3000, function () {
 console.log("listening on 3000")
 
 })



 // var mqtt = require('mqtt')
 //var client  = mqtt.connect('mqtt://iot.eclipse.org')
  
 //client.on('connect', function () {
   //client.subscribe('checkmqtt')
   //client.publish('checkmqtt', 'Hello mqtt')
 //})
  
 //client.on('message', function (topic, message) {
   // message is Buffer
   //console.log(message.toString())
  // client.end()
 //})