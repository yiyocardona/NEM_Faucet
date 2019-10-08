const express = require('express');
const app = express();
const path  = require('path');
const VIEWS = path.join(__dirname, 'views');
const engine = require('consolidate');
var nem = require("nem-sdk").default;
var RandomOrg = require('random-org');
var redis = require('redis');
var client = redis.createClient();
var bodyParser = require("body-parser");
var redis = require('redis');
var client = redis.createClient();
app.use(bodyParser.urlencoded({ extended: false }));
app.use( express.static( __dirname + '/Views' ));


app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');


app.get('/', function(req, res)  {
    res.sendFile( path.join( __dirname, 'client', 'index.html' ));
});




app.post('/', function (req, res, err) {

    var addr = req.body.Address;

    // Redis

    var timestamp = Math.floor(Date.now() / 1000);

    

    client.exists(addr, function(err, reply) {
        if (reply === 1) {

            var addr = req.body.Address;
            console.log('exists');
            client.get(addr, function(error, result){
                if (error) throw error;
                    var ts = result;
                    var tiempo_final = timestamp - ts;
                    if (tiempo_final  > 300  ){
                        console.log('el timetamp es Mayor de 5 minutos')
                        
                        var random = new RandomOrg({ apiKey: 'api_key' });

                       
                            random.generateIntegers({ min: 1, max: 9, n: 1 })
                            .then((re) => {

                                console.log("inside func rand: ", re.random.data[0])
                            

                                var addr = req.body.Address;
                                var mess = req.body.Message;

                                // res.json({ message: error.message });

                                
                                
                                var common = nem.model.objects.create("common")('password','private key');
                                var transferTransaction = nem.model.objects.create("transferTransaction")(addr, re.random.data[0] ,mess);
                                var endpoint = nem.model.objects.create("endpoint")("http://hugetestalice.nem.ninja", nem.model.nodes.defaultPort);
                                var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)
                                
                                nem.model.transactions.send(common, transactionEntity, endpoint).then(function(resp) {
                                    console.log(resp);
                                    console.log(resp.message);

                                client.set([addr, timestamp]);  
                                  
                                },function(err){
                                    console.log(err);
                                    res.sendFile( path.join( __dirname, 'Views/', 'index_invalid.html' )); 
                                })
                            
                            })    

                        
                            
                        
                        
                            res.sendFile( path.join( __dirname, 'Views/', 'index_succes.html' ));    

                    } else{
                        console.log('el timestamp es menor a 5 minutos')
                        // 
                        // 
                        // poner el res del express
                        // 
                        res.sendFile( path.join( __dirname, 'Views/', 'index_fail.html' ));    

                    }
            }) 
        }    else{
                console.log('doesn\'t exist, then I will insert it ');
                
                var random = new RandomOrg({ apiKey: '6546914d-bc8c-4e6b-a2ed-b5048e79c26d' });
               
                    random.generateIntegers({ min: 1, max: 9, n: 1 })
                    .then((res) => {
            
                        console.log("inside func rand: ", res.random.data[0])
            
                        // NEM
            
                        var addr = req.body.Address;
                        var mess = req.body.Message;
                        
                        
                        var common = nem.model.objects.create("common")('12369876','a2fa3262daf40683715968fa742c1525228d1ca1ad0cb526939a32d908818d6b');
                        var transferTransaction = nem.model.objects.create("transferTransaction")(addr, res.random.data[0] ,mess);
                        var endpoint = nem.model.objects.create("endpoint")("http://hugetestalice.nem.ninja", nem.model.nodes.defaultPort);
                        var transactionEntity = nem.model.transactions.prepare("transferTransaction")(common, transferTransaction, nem.model.network.data.testnet.id)
                       
                    
                        nem.model.transactions.send(common, transactionEntity, endpoint).then(function(res) {
                            console.log(res);
                            console.log(res.message);
                    
                            client.set(addr,timestamp);
                            res.sendFile( path.join( __dirname, 'Views/', 'index_succes.html' ));    
                            
                        }, function(err){
                            var error = err['data']['error'];
                           if(error =='Not Found'){
                           
                            res.sendFile( path.join( __dirname, 'Views/', 'index_invalid.html' ));    
                            
                            

                           }
                    



                        })
                            // res.sendFile( path.join( __dirname, 'Views/', 'index_invalid.html' ));
                           
                        
                    });
                
                    
        }
     });

    // console.log("Finished")

    });
    
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });

