var express = require("express");
//var path = require("path");
var app = express();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var routes = require("./controllers/burgersControllers");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
// app.use("/", );
app.use(express.static("public"));

app.use(routes);

// require("/controllers/burger_controller")(app);


app.listen(PORT, function(){
    console.log("App Listening on: http://localhost: " + PORT)
});