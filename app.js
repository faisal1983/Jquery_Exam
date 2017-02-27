$(document).ready(function(){


	$("#rst").click(function(){
		$("#username").val("");
		$("#pass").val("");
	});
	
	$("#login").click(function(){
		var usr=$("#username").val();
		var pass=$("#pass").val();
		if(usr.length==0){
			alert("give username");
		}
		if((usr=='admin')&&(pass=='admin')){
			$(location).attr('href',"profile.html");
		}
		else if(pass.length<6){
			alert("weak password");
		}
		else{
			$(location).attr('href',"#");
		}

	});
	
	$("#msg").keyup(function(){
		var msg=$("#msg").val();
		if(msg.length<160){
			$("#ch").text(160-msg.length);
		}
		else{
			$("#ch").text("you have exceeded maximum limit")
		}
	});

	$( "#datepicker" ).datepicker();
	$( "#tabs" ).tabs();
	
	$("#btn").click(function(){
		$("body").css("background-color","grey");
	});

	$('.parallax-window').parallax({imageSrc:'6.jpg'});
	

});