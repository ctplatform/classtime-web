console.log("Server JS");

const { Socket } = require("dgram");
var express = require("express");
var app = express();

var http = require("http").createServer(app);

var io = require("socket.io")(http);
io.on("Connection", function(socket){
  console.log("User connected", socket.id);

  socket.on("new message", function(data){
    console.log("Client says", data);

    io.emit("new_message", data);
  })
});



app.get("/", function(request, result){
  result.send("Message ");

})
var port = 3000;
http.listen(port, function(){
  console.log("Listening to port " + port);
})

