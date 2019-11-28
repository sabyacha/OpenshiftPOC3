var express = require('express');
var router = express.Router();
var request = require('request');
var host = process.env.COMPONENT_BACKEND_HOST || '0.0.0.0';
var port = process.env.COMPONENT_BACKEND_PORT || 8080;

/* GET main page */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST main page */
router.post('/', function (req, res, next) {
  let url = "http://" + host + ":" + port + "/ticketNumber?hotdog=" +
             req.body.hotdog; 

  request.get(url, function( err, response, body) {
    if(err){
      res.render('thankyou', { ticketNumber: -1 });
    } else {
   /*   let ticketInfo = JSON.parse(body);*/
   res.render('thankyou',{ticketNumver : 2 });
/*.................*/
var mysql = require('mysql');

var connection = mysql.createConnection ({
host: "database-1.cz6adwahfuph.us-east-1.rds.amazonaws.com",
user: "admin",
password: "Octoberoctober2019",
database: "sabyadatabase"
});
connection.connect(function(err) {
   if(err){
       console.log(err.code);
       console.log(err.fatal);
   }
});

$query = "insert into test values ('12','Hello')";
connection.query($query, function(err, result) {
   if(err){
     //console.log("Error Occured while querying");
     return;
   }
//console.log ("Inserted");
});
connection.end(function(){
});

/*..................*/
      
    }
  });
});

module.exports = router;
