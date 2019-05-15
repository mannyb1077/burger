//create the code that will call the ORM functions using burger specific input for the ORM.
var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res)
        });
    },

    create: function (cb){
        orm.create("burgers", cols, val, function(res){
            cb(res)
        });
    },

    update: function(cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res)
        });
    }
};


// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-sleep").on("click", function(event) {
      var id = $(this).data("id");
      var devour = $(this).data("devour");
  
      var newDevour = {
        devour: devoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devour
      }).then(
        function() {
          console.log("changed to devoured: " + devour;
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  

module.exports = burger;