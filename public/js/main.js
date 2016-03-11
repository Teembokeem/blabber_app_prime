console.log('JS loaded!');

//Trigger the load
$(document).ready(function() {
  loadBlabs();



})


function loadBlabs() {

  //make an index request
  $.ajax({
    method: "GET",
    url:    "/blabs"
  })

  .then(
      function(data) { console.log("success: ", data)},
      function(err) { console.log("failure: ", err)}
      // or logErrors
  );
}


