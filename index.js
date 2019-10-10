var express = require('express');
var app = express();
app.use(express.static("public")); // localhost:3000/teo.png

app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
server.listen(3000);

app.get("/", (req, res) => {
    res.render("trangchu");
});