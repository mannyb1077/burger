//Setup mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "B00tcamp",
    database: "burger_db"
});

//Make Connection
connection.connect(function(err){
    if (err){
        console.log ("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;