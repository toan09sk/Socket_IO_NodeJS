var express = require('express');
var app = express();
app.use(express.static("public")); // localhost:3000/teo.png

app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", (socket) => {
    console.log("co nguoi ket noi:" + socket.id);

    // Server lang nghe
    socket.on("Client-send-data", (data) => {
        console.log(data);
        // Bay gio server phat data
        //io.sockets.emit("Server-send-data", data + "8888");
        // Chi A moi nhan
        socket.emit("Server-send-data", data + "8888");
    })

    socket.on("disconnect", () => {
        console.log(socket.id + " ngat ket noi!!!");
    });
});

app.get("/", (req, res) => {
    res.render("trangchu");
});