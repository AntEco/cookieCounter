$(document).ready(function(){
	
	var oreoCount = Cookies.get("oreos")
	var whitechipCount = Cookies.get("whitechips")
	var chocchipCount = Cookies.get("chocchips")
	
	if (oreoCount == null){
        Cookies.set("oreos", 0)
    } else {  
        oreos = parseInt("oreos")
    }

    if (whitechipCount == null){
        Cookies.set("whitechips", 0)
    } else {  
        whitechips = parseInt("whitechips")
    }
  

    if (chocchipCount == null){
        Cookies.set("chocchips", 0)
    } else {  
        chocchips = parseInt("chocchips")
    }


	


	$("#oreobutton").click(function(){
		if (oreoCount === ""){
        Cookies.set("oreos", 0)}
        else{
			oreoCount++
			Cookies.set("oreos", oreoCount)}
			$("#oreonum").text("You have " + oreoCount + " oreo sleeves!")
	})
	
	$("#removeoreo").click(function(){
		oreoCount = 0
		Cookies.set("oreos", 0)
		$("#oreonum").text("You have " + oreoCount + " oreo sleeves!")
	})

	$("#whitechipbutton").click(function(){
		if (whitechipCount === ""){
        Cookies.set("whitechips", 0)}
        else{
			whitechipCount++
			Cookies.set("whitechips", whitechipCount)}
			$("#whitenum").text("You have " + whitechipCount + " White Chip Macademia nut cookies!")
	})
	
	$("#removewc").click(function(){
		whitechipCount = 0
		Cookies.set("whitechips", 0)
		$("#whitenum").text("You have " + whitechipCount + " White Chip Macademia nut cookies!")

	})

	$("#chocchipbutton").click(function(){
		if (chocchipCount === ""){
        Cookies.set("chocchips", 0)}
        else{
			chocchipCount++
			Cookies.set("chocchips", chocchipCount)}
			$("#chocnum").text("You have " + chocchipCount + " chocolate chip cookies!")
	})
	
	$("#removecc").click(function(){
		chocchipCount = 0
		Cookies.set("chocchips", 0)
		$("#chocnum").text("You have " + chocchipCount + " chocolate chip cookies!")
	})

	

	$("#whitenum").text("You have " + whitechipCount + " White Chip Macademia nut cookies!")

	$("#chocnum").text("You have " + chocchipCount + " chocolate chip cookies!")


	$("#oreonum").text("You have " + oreoCount + " oreo sleeves!")

})
