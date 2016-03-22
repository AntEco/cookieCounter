$(document).ready(function(){
	
	if("oreos"===""){
        Cookies.set("oreos", 0)
    } else {  
        oreos = parseInt("oreos")
    }
    Cookies.set("oreos", 0)

    if("whitechips"===""){
        Cookies.set("whitechips", 0)
    } else {
        whitechips = parseInt("whitechips")
    }
    Cookies.set("whitechips", 0)


    if("chocchips"===""){
        Cookies.set("chocchips", 0)
    } else {
        chocchips = parseInt("chocchips")
    }
	Cookies.set("chocchips", 0)


	var oreoCount = Cookies.get("oreos")
	var whitechipCount = Cookies.get("whitechips")
	var chocchipCount = Cookies.get("chocchips")


	$("#oreo").click(function(){
		oreoCount++
		Cookies.set("oreos", oreoCount)
	})
	
	$("#removeoreo").click(function(){
		Cookies.set("oreos", 0)
	})

	$("#whitechip").click(function(){
		whitechipCount++
		Cookies.set("whitechips", whitechipCount)
	})

	$("#removewc").click(function(){
		Cookies.set("whitechips", 0)
	})

	$("#chocchip").click(function(){
		chocchipCount++
		Cookies.set("chocchips", chocchipCount)
	})
	
	$("#removecc").click(function(){
		Cookies.set("chocchips", 0)
	})

	document.getElementById("cookiecountwc").innerHTML = Cookies.get("whitechips")

})
