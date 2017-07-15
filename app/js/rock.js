//Start of javascript function

$(".slow").hide();
$(".load").hide();
// using simple version instead of $(document).on("load",fn())
$(function(){



	var userPoints = 0;
	var compPoints = 0;
	$("#userInput").keyup(function(event){
    if(event.keyCode == 13){
        $("#submit").click();
    }
	});
	$("#submit").on("click",function start(){
		$(".slow").show();

	 var userData = $("#userInput").val();
	 var compData = Math.random();
	 if (compData < 0.33){
	 	compData = "rock";
	 }
	 else if(compData > 0.33 && compData <= 0.66){
	 	compData = "paper";
	 }
	 else if(compData >0.66){
	 	compData = "scissor";
	 }
	 
	 if (userData == "" ){
	 	alert("Enter a valid input! Make sure letters are in lowerCase.");
	 }	

	 else{
	 	var lastPlay = play(userData,compData);
	 }
	
	 	//console.log(userData);
	 	//console.log(compData);
	 	



	 	

	}); //end of submit button handler



	var play = function (userData,compData){

		$(".load").show(500);
		$(".slow").hide(400);
		this.userData = userData;
		this.compData = compData;
		if(userData === compData){
			$("#userChoice").html("User choses "+userData);
			$("#compChoice").html("Computer choses "+compData);
			$("#result").html("It is a TIE !");
			$("#userPoints").html("User points : "+userPoints);
			$("#compPoints").html("Computer points : "+compPoints);
			league(userPoints,compPoints);
		}
		else if (userData === "rock"){
			if(compData === "scissor" ){
				$("#userChoice").html("User choses "+userData);
			$("#compChoice").html("Computer choses "+compData);
			$("#result").html("User WON !");
			userPoints = userPoints + 1;
			$("#userPoints").html("User points : "+userPoints);
			$("#compPoints").html("Computer points : "+compPoints);
			league(userPoints,compPoints);
			}
			else if(compData === "paper"){
				$("#userChoice").html("User choses "+userData);
			$("#compChoice").html("Computer choses "+compData);
			$("#result").html("Computer WON !");
			compPoints++;
			$("#userPoints").html("User points : "+userPoints);
			$("#compPoints").html("Computer points : "+compPoints);
			league(userPoints,compPoints);
			}
		}
		else if(userData === "paper"){
			if(compData === "scissor" ){
				$("#userChoice").html("User choses "+userData);
			$("#compChoice").html("Computer choses "+compData);
			$("#result").html("Computer WON !");
			compPoints++;
			$("#userPoints").html("User points : "+userPoints);
			$("#compPoints").html("Computer points : "+compPoints);
			league(userPoints,compPoints);
			}
			else if(compData === "rock"){
				$("#userChoice").html("User choses "+userData);
			$("#compChoice").html("Computer choses "+compData);
			$("#result").html("User WON !");
			userPoints++;
			$("#userPoints").html("User points : "+userPoints);
			$("#compPoints").html("Computer points : "+compPoints);
			league(userPoints,compPoints);
			}
		}
		else if (userData === "scissor"){
			if(compData === "paper" ){
				$("#userChoice").html("User choses "+userData);
			$("#compChoice").html("Computer choses "+compData);
			$("#result").html("User WON !");
			userPoints++;
			$("#userPoints").html("User points : "+userPoints);
			$("#compPoints").html("Computer points : "+compPoints);
			league(userPoints,compPoints);
			}
			else if(compData === "rock"){
				$("#userChoice").html("User choses "+userData);
			$("#compChoice").html("Computer choses "+compData);
			$("#result").html("Computer WON !");
			compPoints++;
			$("#userPoints").html("User points : "+userPoints);
			$("#compPoints").html("Computer points : "+compPoints);
			league(userPoints,compPoints);
			}

		}

		else {
			alert("Check if you have entered the correct input.Make sure all leters are small!");
		}


	}
function league(userPoints,compPoints){
	if(userPoints == 5){
		$("#league").html("User Won The Series by 5-"+compPoints);
		bootbox.alert("Well Done Champ ! You won the series by 5-"+compPoints, function(){ window.location.reload();} );
		
	}
	if(compPoints == 5){
		$("#league").html("Computer Won The Series by 5-"+userPoints);
		
		bootbox.alert("Uh Oh ! The machine won the series by 5-"+userPoints+ ". Don't give up. Try again !", function(){ window.location.reload();} );
	}
}

}); //end of program