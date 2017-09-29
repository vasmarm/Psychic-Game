document.addEventListener("DOMContentLoaded",function(event) {

  //Global variables
  var entry = [];
  var counter;
  var losses;
  var wins;
  var isGameOver;
  var psychicValue;


  // This is to initialize the game by putting all the variables in their default states.
  function initializeGame() {
        counter = 9;
        losses = 0;
        wins = 0;
        isGameOver = false;
        document.getElementById("guesses_left").innerHTML="";
        document.getElementById("wins").innerHTML = wins;   
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses_left").innerHTML = counter;
        randomGenerator();
      }

//This function is to refresh the parameters on the screen except wins and losses
  function refresh() {
          counter = 9;
          isGameOver = false;
          entry = [];
          document.getElementById("guesses_left").innerHTML="";
          document.getElementById("guesses_so_far").innerHTML="";
          document.getElementById("wins").innerHTML = wins;   
          document.getElementById("losses").innerHTML = losses;
          document.getElementById("guesses_left").innerHTML = counter;
          randomGenerator();
  }

//This funtion generates the random charactor 
  function randomGenerator() {
    var randomAlphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    psychicValue = randomAlphabetString.charAt(Math.floor(Math.random()*randomAlphabetString.length)); 
    
    //This consol.log has been purely left here intentially for TA's convenience to test both win and loose scenaios
    console.log(psychicValue);
  }

  //This is the onkeyup event where all the main proceedings of the application will occur
  document.onkeyup = function(event){

      //breaks out of this event of the value of isGameOver is True
      if(isGameOver) return;

      //stores the value of key entered by the user
      var userKey = event.key;

      //pushes the value of userKey in the entry array
      entry.push(userKey);

      //displays the array entry till the userKey does not match the psychicValue
      document.getElementById("guesses_so_far").innerHTML = entry;

      //decreases the counter by one which is Number of Guesses Left 
      counter = counter - 1;

      //displays the Number of Guesses Left on screen
      document.getElementById("guesses_left").innerHTML = counter;

      //comparison oduserKey with psychicValue, if there is a match 
      // win goes up by one 
      // isGameOver is set to true
      // function refresh is called
      if(userKey === psychicValue){
        isGameOver = true;
        wins = wins + 1;
        alert("You Win");
        refresh();
      }
   
  	  //checking the value of counter and isGameOver, if it comes out to be true then, 
      // losses goes up by one 
      // isGameOver is set to true
      // function refresh is called
      if(counter === 0 && isGameOver === false){
        losses = losses + 1;
        alert("You Loose");
        isGameOver = true;
        refresh();
      }
  }


  // Call initializeGame so we can set the state of our app
  initializeGame();
    

});