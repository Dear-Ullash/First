var express = require('express');
var app = express();
var mongojs = require ('mongojs');
var db = mongojs ('mongodb://sensordata:1234@ds155325.mlab.com:55325/sample',['sensordata'])

//read data for light
app.get('/light', function (req, res) {
   res.send('For light data');
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


   app.listen(3000, function () {
   console.log("listening on 3000")

})