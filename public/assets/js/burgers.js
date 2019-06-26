$(function() {
  $(".change-devoure").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoure = $(this).data("newdevoure");
    var newDevouredState = {
      devoured: newDevoure
    };
  
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured stated to ", newDevoure);
        location.reload();
      }
    );
  })

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0,
    };
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        location.reload();
        console.log(newBurger);
      }
    );  
  });

  $(".delete-burger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log("this is id");
    console.log(id);

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        //location.reload();
      }
    );
  });
});

