//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var port = Number(process.env.PORT||8080); 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('Hello World ');
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(port, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", port);
});
