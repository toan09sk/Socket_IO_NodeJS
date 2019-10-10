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
        // Bay gio server phat data tat ca deu nhan
        //io.sockets.emit("Server-send-data", data + "8888");
        // thang nao gui thi thang do moi nhan data
        //socket.emit("Server-send-data", data + "8888");
        // thang nao gui thi thang do khong nhan nhung nhung thang con lai nhan
        socket.broadcast.emit("Server-send-data", data + "8888");
    })

    socket.on("disconnect", () => {
        console.log(socket.id + " ngat ket noi!!!");
    });
});

app.get("/", (req, res) => {
    res.render("trangchu");
});