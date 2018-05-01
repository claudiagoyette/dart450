// ************************************************************************


//  Final by Claudia Goyette
// Jquery page with all of the functions


// ************************************************************************

// create a variable for sound
var clicSound;

$(document).ready(function() {
// set the clic sound to be the mp3
clicSound = new Audio ( 'music/clic.mp3');

// make the first image on the page "step 1" disappear so the second image is shown
setTimeout('$("#step0").hide()',3600);
// make the first image on the page "step 2" disappear so the second image is shown
setTimeout('$("#step2").hide()',7000);
// make the first image on the page "step 3" disappear so the second image is shown
setTimeout('$("#step3").hide()',7000);
// make the first image on the page "laststep" disappear so the second image is shown
setTimeout('$("#laststep").hide()',7000);


// Using Annyang!
$('#title5').hide(); // hide the title before the voice is activated
$('.buttonStart1').hide(); // do the same for the button that starts the game
// Use this function so annyang is call when the page gets load
window.onload = function(){
  if (annyang) {
    var commands = {
      'Yes': function() { // say yes to activate the voice
        // use responsiveVoice
        responsiveVoice.speak("Thank you, you didn't have too. I need to finish my essay as soon as possible.I think you are the perfect candidate to help me.",
        "US English Male", {
        });
        // when the user say yes, the page changes with a new menu
        $('#teen').hide({   // hide the caracter
        });
        $('#title1').hide({  // hide title1
        });
        $('#title2').hide({  // hide title2
        });
        $('#title3').hide({  // hide title3
        });
        $('#title4').hide({  // hide title4
        });
        $('#title5').show({  // show title5
        });
        $('.buttonStart1').show({  // show th button that starts the game
        });
      }
    };
    // receive commands
    annyang.addCommands(commands);
    // start annyang
    annyang.start();
  }
}




// ***  STEP 2 PAGE ***
$(function() {
  // make elements sortable so the user can organize them into a sentence
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
} );



// ***  LAST STEP PAGE ***
// Make the pdf file image draggable
$('#pdf').draggable();
// Make the class shares folder "droppable"
$('#droponFolder').droppable({
  drop: handleDrop
});
// Called when the user drops something onto the droppable element
$("#ending").hide();  //hide caracter's image
function handleDrop(event,ui) {
  // remove the thing that was drop (pdf file) from the page
  ui.draggable.remove();
  // play the sound effect of a file dragged into a folder
  clicSound.play();
  // when the user wins, remove everything from the screen and show the congratulation page
  $("#mac").hide();  // hide mac image
  $("#folder").hide();  // hide folder image
  $("#droponFolder").hide();  // hide the drop on folder zone image
  $("#laststep").hide();  // hide caracter's image
  $("#laststep_2").hide();  // hide caracter's image
  $("#ending").show();  //show caracter's image
  $(".buttonNext").hide();  // hide button
}


// ***  FIRST STEP PAGE ***
// use the key to control an object, in this case a rectangle
$(document).keydown(function(e)
{
  // the object that is controlled by the arrow
  var div = $("rectangle");
  switch (e.which)
  {
    // the left arrow
    case 37 :
    $('div').animate (
      {
        // move to the left by 30px at the time
        left:'-=30'
      });
      break;
      // the up arrow
      case 38 :
      $('div').animate (
        {
          // move up by 30px at the time
          top:'-=30'
        });
        break;
        // the right arrow
        case 39 :
        $('div').animate (
          {
            // move to the right by 30px at the time
            left:'+=30'
          });
          break;
          // the down arrow
          case 40 :
          $('div').animate (
            {
              // move down by 30px at the time
              top:'+=30'
            });
            break;
          }

        });



        // ***  RESPONSIVE VOICES ***
        // caracter on the first page
        $('#teen').on('click',function(e) {
          e.preventDefault();
          // the text the responsive voice is saying is :
          responsiveVoice.speak("I need help, this semester is killing me", "US English Male", {rate: 1}, {volume: 1});
        });
        // caracter on the first step page
        $('#step1').on('click',function(e) {
          e.preventDefault();
          // the text the responsive voice is saying is :
          responsiveVoice.speak("I’ll go easy on you, can use the arrow keys and discover the subject of my paper", "US English Male", {rate: 1}, {volume: 1});
        });
        // caracter on second step the first page
        $('#step2').on('click',function(e) {
          e.preventDefault();
          // the text the responsive voice is saying is :
          responsiveVoice.speak("Good job! I also need to find a title, can you do that ?", "US English Male", {rate: 1}, {volume: 1});
        });
        // caracter on the first page but the second image
        $('#step2_2').on('click',function(e) {
          e.preventDefault();
          // the text the responsive voice is saying is :
          responsiveVoice.speak("Arrange the words as you like and press next when it's done", "US English Male", {rate: 1}, {volume: 1});
        });
        // caracter on the first page
        $('#step3').on('click',function(e) {
          e.preventDefault();
          // the text the responsive voice is saying is :
          responsiveVoice.speak("You're good at this. Now can you help me correct my mistakes ?", "US English Male", {rate: 1}, {volume: 1});
        });
        // caracter on the first page but the second image
        $('#step3_2').on('click',function(e) {
          e.preventDefault();
          // the text the responsive voice is saying is :
          responsiveVoice.speak("Click on the words where you can see mistakes", "US English Male", {rate: 1}, {volume: 1});
        });
        // caracter on the last page
        $('#laststep').on('click',function(e) {
          e.preventDefault();
          // the text the responsive voice is saying is :
          responsiveVoice.speak("I think we are done! That was very nice of you.", "US English Male", {rate: 1}, {volume: 1});
        });
        // caracter on the last page but the second image
        $('#laststep_2').on('click',function(e) {
          e.preventDefault();
          // the text the responsive voice is saying is :
          responsiveVoice.speak("One last thing, can you put it in the class shares for me", "US English Male", {rate: 1}, {volume: 1});
        });
        // caracter on the last page but the ending page
        $('#ending').on('click',function(e) {
          e.preventDefault();
          // the text the responsive voice is saying is :
          responsiveVoice.speak("I don’t know how to thank you. You are the smartest and nicest human I know. I couldn’t have done it without you!! You saved my life.", "US English Male", {rate: 1}, {volume: 1});
        });


        // ***  STEP 3 PAGE ***
        // use blast so when the user hover on a word that he thinks that has a mistake in it
        $("div").blast({ search: "speach" }).mouseover(mistakes);  // select the word in the first line
        $("div").blast({ search: "have" }).mouseover(mistakes);  // select the word in the line 2
        $("div").blast({ search: "historicaly" }).mouseover(mistakes);  // select the word in the line 3
        $("div").blast({ search: "question's" }).mouseover(mistakes);  // select the word in the line 4
        $("div").blast({ search: "live" }).mouseover(mistakes);  // select the word in the line 5
        $("div").blast({ search: "sujet" }).mouseover(mistakes);  // select the word in the line 6
        // create a function for the hover : when the mouse is over a certain word, the word changes to blue
        function mistakes () {
          $(this).animate({
            color: '#6bccf9', // color blue
          });
        }



        // ending brakets
      });
