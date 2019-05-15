var express = require("express");
var path = require("path");
var app = express();
var exphbs = require("express-handlebars");
var port = process.env.PORT || 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false}));
app.use("/", );
app.use("/static", express.static("public"));

require("/controllers/burger_controller")(app);


app.listen(port, function(){
    console.log("App Listening on PORT " + PORT)
});