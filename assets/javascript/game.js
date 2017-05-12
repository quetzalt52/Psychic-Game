var wins = 0;
var losses = 0;
var matchIt ="";
//stores key strokes from user places them into an array
var storedValues = [];
// will contain all userput
var userInput ="";
var guessesLeft = 9;


// method returns a random letter picked by computer
 function getRandomLetter() {
	var compChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p', 'q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    //console.log(compChoice);
	return compChoice[Math.floor(Math.random() * compChoice.length)].toLowerCase();
}
// matit has the computer Random choice
matchIt = getRandomLetter();

// returns a letter
function showKey(keyCode) {
	var key_press = String.fromCharCode(keyCode).toLowerCase();
	document.getElementById('kp').innerHTML = key_press;
	return key_press;
}

document.onkeydown = function(event) {
   guessesLeft--;
    var letter =showKey(event.keyCode);
    var userInput = storedValues.push(letter);
    console.log(userInput);
    console.log("this is the computer guess: " , matchIt, "this is the user Input: " ,letter);
 	
 	//while(guessesLeft!= 9  )
 	if(matchIt === letter)  {
    	console.log('you won');
    	 	updateScore++;
    }
    
    // will increase the wins counter
    if (guessesLeft > 0) {
    	if(matchIt === letter){
    	  wins++;
    	  document.getElementById('wins').innerHTML = wins;
    	  // then we need to reset all values
    	  reset();	
    	}
    	// update the score
    	else if(guessesLeft == 0) {
    	losses++; 
    	document.getElementById('losses').innerHTML = losses;
    	// then we need to reset all values
    	reset();
    	}
    }// if ending (1) 

	updateGuessesLeft;
//	updateGuessesSoFar; 
 


} // end of onkeydown function


var x =0;
function score(x){
 	var wins = wins + 1 ;
 	return wins;
 }


 var updateScore = score(x); 
 console.log("this is the stuff inside array : ", updateScore);

var guess =0;
function attemptsLeft() {
	document.getElementById('guessesLeft').innerHTML =guessesLeft;
}
var updateGuessesLeft = attemptsLeft();

//updateGuessesLeft= guessesLeft-updateScore;

/*function uptoNowguesses() {
  //taking all letters user has tried -- then display it as letters separated by commas. 
  document.querySelector('guessesLeft').innerHTML = "Your Guesses so far: " + updateScore;
}

var updateGuessesSoFar = uptoNowguesses();
*/


// resets all the variables

var reset = function() {
	win = 0;
	losses = 0;
	matchIt ="";
	//stores key strokes from user places them into an array
	storedValues = [];
	// will contain all userput
	userInput ="";
	guessesLeft = 9;
	
}


