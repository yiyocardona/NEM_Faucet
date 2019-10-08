
## NEM Faucet 


The NEM Faucet project is developed in NEM SDK in NodeJs

Important components:

* NodeJS 
* NEM-SDK
* HTML 5 
* CSS 3
* Redis 
* Express Server

So basically you need to install all of this dependencies in the main file.

```
npm install

```

### Requiriments


#### NEM-SDK

This is the tools that is used on this project to communicate with the NEM Blockchain, this tools allows us to make almost all the NEM NIS API calls type, like make transaactions and this will be our main objective.

##### Installation

````
npm install nem-sdk
````

In the main script called server.js you have to change you wallet password and private key.


#### Redis

Redis is used to store the transactions to limit the number of transactions per address.


````
npm install redis-server

````

#### NodeJS

NodeJS is the main tool, it manages every other tool and component and merges everything to make visible all the project.

````
npm install redis-server

````



### How it works


The main script is called server.js, in this script are some libraries that are used for some specifically functions.

The idea of this project is to get more knoledge about the blockchain technology in the Nem testnet and to understand how it can be used with the tools and languages we used in the daily basis, in this case the script is developes in NodeJs with a lot of connections with other tools to make more user friendly, so, here the script interact directly with **NEM** to make transaction, it interacts with **Random.org**, this will be explain later on. 

Anyone that enters in the NEM Faucet can enter his address and can ask for some XEMs, in this faucet you can't ask for an specific quantity of XEMs in this faucet is a totally random quantity of 1 to 10 XEMs per address, this is not a random function from NodeJs but is a random function from **Random.org** it takes a random number from the atmospheric noise and in the function it normalize the number it returns to numbers from 1 to 10 and it the user has lucky it gives 10 XEMs.

Redis is used to save the address and the time when the address asks for XEMs, it stores the key and the value in the memory RAM, that is a security mesure to save the XEMs of the faucet, so if the user asks for XEMs with an address, he can no longer asks for XEMs until five minutes.








```python

```
