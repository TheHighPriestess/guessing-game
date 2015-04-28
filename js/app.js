
$(document).ready(function(){

/*--- Random number between 1 & 100 ---*/

var ranNum = Math.floor(Math.random() * 101);
console.log(ranNum);


/*--- Starts a new game by getting the user's guess and storing it in ---*/
/*--- the variable "guess" and then converting that number from a string to an integer */
/*--- Provides feedback on user guesses ---*/

var guess;
var counter = 0;

$('#guessButton').click(function(){
  $('h2').empty();
	guess=$('#userGuess').val();
  guess=parseInt(guess);
  counter++;
  $('span').text(counter);

 if (guess <= 100) {

        $('#guessList').append("<li>" + guess + "</li>");
        console.log(guess);

        var compareNum = Math.abs(guess-ranNum);
        console.log(compareNum);
        if (compareNum >= 50) {
          $('#feedback').append("<h2>" + "Ice cold!" + "</h2>");

        }
          else if (compareNum >= 30 && compareNum < 50) {
            $('#feedback').append("<h2>" + "Cold!" + "</h2>");
          }

          else if ( compareNum >= 20 && compareNum < 30) {
            $('#feedback').append("<h2>" + "Warm" + "</h2>");
          }

          else if (compareNum >= 10 && compareNum < 20) {
            $('#feedback').append("<h2>" + "Hot" + "</h2>");
          }

          else if (compareNum >= 1 && compareNum < 10){
            $('#feedback').append("<h2>" + "Very Hot!" + "</h2>");
          }
    }
  
  else {
        $('#feedback').append("<h2>" + "Your # was more than 100." + "</h2>");
    }
   

});


/*-- Starts a new game --*/

$('.new').click(function(){
$('#feedback').append("<h2>" + "Make your Guess!" + "</h2>");
$('#userGuess').attr("placeholder", "Enter your Guess");
var ranNum = Math.floor(Math.random() * 101);
guess == 0;
console.log(ranNum);
console.log(guess);



  location.reload();
});


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


