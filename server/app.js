var express = require("express");
var app = express();
var path = require("path");
var data = require("./public/data/kappa");

app.set("port", (process.env.PORT || 5000));

app.get("/data", function(req,res){
    res.send(data);
});

app.get("/*", function(req,res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Server up and running on Port", 5000);
});
