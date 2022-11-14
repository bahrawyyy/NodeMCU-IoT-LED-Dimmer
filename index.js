const express = require('express')  //require is as include in c
const app = express()   // make an application of express

const PORT = 3000


app.get('/',function(req,res){   //When it gets requests from the clients, . .. req-->request  ... res -->response
    //console.log("Welcome");
    //res.send("<b>Hello world!</b>");
    res.sendFile(__dirname+"/views/RangeTask2.html");
});   

//Why ?? const server ?? to benefit from this info later
const server = app.listen(PORT,function(){    // If listen has done correctly, it will execute this callback function
    console.log("Server is running at port "+PORT);
});

// Creating websocket server at server

//Here websocket will run as a server
//But in index.html or nodeMcu it will run as a client
const SocketServer = require('ws').Server;
const wss = new SocketServer({ server }); //Passing the server and its info
//The server wss includes all clients
//ws is the particluar server

let range_value = 0;

wss.on('connection', function(ws){
    console.log('Client connected');
    ws.send("Hello Client");
    //Waiting for msg from client

    ws.send(range_value);

    ws.on('message', function(msg){
		range_value = msg.toString('utf-8');
        broadcast(range_value);
	});

    ws.on('close',function(){
        console.log('Client disconnected');
    });

});

function broadcast(msg){
    wss.clients.forEach(function (client){
        if(client.readyState == client.OPEN){  //if client still connected
            client.send(msg);
        }
    });
}



