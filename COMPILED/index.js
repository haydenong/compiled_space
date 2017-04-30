//Load express
var express = require("express");
//Create an instance of express application
var app = express();

app.use(express.static(__dirname+"/"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));

app.set("port", process.argv[2] || process.env.APP_PORT || 8080);

app.listen(app.get("port"), function(){
    console.info("Application started on port %d", app.get("port"));
});
