$(document).ready(function(){
	
	var whiteChip = Cookies.get("White Chip Macademia")
	var oreo = Cookies.get("Oreo")
	var chocChip = Cookies.get("Chocolate Chip")

  // whiteChip(function(){
		// var x = location.search;
		// var y = x.split("=");
		// Cookies.set("key", y[1])
		// $("body").prepend(
		// 	Cookies.get("key"))
	// })

	// chocChip(function(){
	// 	var x = location.search;
	// 	var y = x.split("=");
	// 	Cookies.set("key", y[1])
	// 	$("body").prepend(
	// 		Cookies.get("key"))
	// })

	// oreo(function(){
	// 	var x = location.search;
	// 	var y = x.split("=");
	// 	Cookies.set("key", y[1])
	// 	$("body").prepend(
	// 		Cookies.get("key"))

	// })

  if (whiteChip == null)  {
    $("#White Chip").html("You have 0 Cookies")
  }
  else  {
    $("#White Chip").html(whiteChip + "White Chip Macademia")
  }
    function makeWhiteChip()  {
    if (Cookies.get("whiteChip") == null) {
      Cookies.set("whiteChip", 1)
    }
    else  {
    
    }
  var numberOfCookies = Cookies.get("white chip")
  $("#whiteChip").html(numberOfCookies + " White Chip!")
  }


})

