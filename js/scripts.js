$(document).ready(function() {
  $("form#destinationChoice").submit(function(event) {
    event.preventDefault();
    var travel = $("#travel").val();
    var geography = $("#geography").val();
    var density = $("#density").val();
    var price = $("#price").val();
    var temperature = $("#temperature").val();
    var result
    // begin excessive nested if statements

    if (travel === "domestic") {
    $("#domesticResult").show()
    $("#foreignResult").hide()
      if (geography === "water") {
        if (density === "city") {
          if (price === "cheap") {
            if (temperature === "hot") {result = "Tallahassee" }
            else {result = "Buffalo"}
          }
          else { //classy
            if (temperature === "hot") {result = "Los Angeles" }
            else {result = "New York"}
          }
        }

        else { //rural
          if (price === "cheap") {
            if (temperature === "hot") {result = "the Everglades" }
            else {result = "the Allagash Wilderness"}
          }
          else { //classy
            if (temperature === "hot") {result = "a remote Florida key to go jetskiing" }
            else {result = "the Oregon coast for drysuit diving"}
          }
        }
      }
      else { //mountain
        if (density === "city") {
          if (price === "cheap") {
            if (temperature === "hot") {result = "Phoenix" }
            else {result = "Salt Lake City"}
          }
          else { //classy
            if (temperature === "hot") {result = "Las Vegas" } //Turns out Googling "classy hot mountain city" gives some unexpected results.
            else {result = "Denver"}
          }
        }
        else { //rural
          if (price === "cheap") {
            if (temperature === "hot") {result = "Guadalupe National Park" }
            else {result = "Mount Hood"}
          }
          else { //classy
            if (temperature === "hot") {result = "a guided tour of the Grand Canyon" }
            else {result = "Aspen for a snowmobile adventure"}
          }
        }
      }
    }
    else {  //foreign travel
      $("#domesticResult").hide()
      $("#foreignResult").show()
    }

    $("#output").text(result);
  });
});
