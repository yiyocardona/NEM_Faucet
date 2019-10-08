// Imports
var nem = require("nem-sdk").default;
var readline = require('readline-sync');
var redis = require('redis');
var client = redis.createClient();

var timestamp = Math.floor(Date.now() / 1000);



// // console.log(timestamp);
// client.get('juan', function(error, result) {
//    if (error) throw error;
//     var ts = result;
//     var tiempo_final = timestamp - ts

//     console.log(timestamp, tiempo_final, ts);

//     if (tiempo_final  < 300  ){

//       console.log('bla')

//     } else{
      



//     }

//  });

client.exists('juan', function(err, reply) {
   if (reply === 1) {
       console.log('exists');
       

   } else {
       console.log('doesn\'t exist');
        client.set(['juan',timestamp]);

   }
});


// Script


// Redis


// var redis = require('redis');
// var redisClient = redis.createClient({host : 'localhost', port : 6379});

// redisClient.on('ready',function() {
//  console.log("Redis is ready");
// });

// redisClient.on('error',function() {
//  console.log("Error in Redis");
// });


// var ts = Math.floor(Date.now() / 1000);
// console.log(ts)



// Express

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })


//  NEM

// var address = readline.question("Which Address you want to send XEMs? ");

// var ts = Math.floor(Date.now() / 1000)


// var common = nem.model.objects.create("common")('12369876','a2fa3262daf40683715968fa742c1525228d1ca1ad0cb526939a32d908818d6b');

// var transferTransaction = nem.model.objects.create("transferTransaction")(address, 1, "Que onda prro");
 

// var endpoint = nem.model.objects.create("endpoint")("http://hugetestalice.nem.ninja", nem.model.nodes.defaultPort);

// var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)

// nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {
//     console.log(res);
// })

// console.log(ts)