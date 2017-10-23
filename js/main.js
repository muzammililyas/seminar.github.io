function clicked(){
	
	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	var coruser = "saniamirza";
	var corpass= "mirza";
	if (user.value == coruser){
	
		if(pass.value == corpass){
		
			window.alert("you are passed the login test");
			window.open("www.google.com");
		
		} else {
		
			window  .alert("you failed to pass the test soorry");
		
		}
}		else {
	
	window.alert("incorrect username or password");
}
	
	
}