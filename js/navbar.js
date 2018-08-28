function myFunction(){
	var x = document.getElementById("myTopnav");
	if(x.className == "topnav"){
		x.className += " responsive";
	}
	else{
		x.className = "topnav";
	}
}

function slidenav(){
	var sl_nav = document.getElementById("cssmenu");
	if(sl_nav.className == "topnav"){
		sl_nav.className += " responsive";
	}
	else{
		sl_nav.className = "topnav";
	}
}
