var http = require("http");
var express = require("express");
var WebSocket = require("ws");
var app = express();

var server = app.listen(3000, () => {console.log('Server is running on port 3000')
});
var wss = new WebSocket.Server({server});

app.use(express.static(__dirname));

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log(message);
        wss.clients.forEach((client) => {
            client.send(message);
        });
    });
    console.log("Connection established");
});
