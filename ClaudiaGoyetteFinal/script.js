$(document).ready(function() {
  // make the first image on the page "step 1" disappear so the second image is shown
setTimeout('$("#step0").hide()',3600);


window.onload = function(){
    if (annyang) {
         var commands = {
            'Yes': function() {
     responsiveVoice.speak("Thank you, you didn't have too. I need to finish my essay as soon as possible",
     "US English Male", {
     });
      $('#teen').hide({
      });
      $('#title1').hide({
      });
      $('#title2').hide({
      });
      $('.buttonStart1').hide({
      });
      $('.buttonStart2').hide({
      });
    }
  };

  annyang.addCommands(commands);

  annyang.start();
}
}




  // ***  LAST STEP PAGE ***

    // Make the things you want to drag draggable
    $('#pdf').draggable();
    // Make the element you want to drop onto "droppable"
    // And if you want to have something happen when it is dropped
    // then add an event handler function for 'drop' like this
    $('#droponFolder').droppable({
      drop: handleDrop
    });

  // Called when the user drops something onto the droppable element
  function handleDrop(event,ui) {
    // You can get access to the thing that was dropped via ui.draggable
    // So we'll remove it from the page
    ui.draggable.remove();
    // when the player wins, remove everything from the screen
    // and show the congradulation page
    $("#mac").hide();
    $("#folder").hide();
    $("#droponFolder").hide();
    $("#laststep").hide();
    $(".buttonNext").hide();

  }



  window.setInterval(function(){
    var img = $('<body>');
    // all the attributes for the images
    img.attr('src', 'images/pdf.png');
    img.css("position", "absolute");
    img.css("width", "80px");
    img.css("z-index", "1000");
    // set the borders for the image to the window width and height
    img.css("top", randomIntFromInterval(0, 600));
    img.css("left", randomIntFromInterval(0, 1200));
    // only make the animation on this selected page
    img.appendTo('#showRandomFile');

    // set the interval of time before each image appear
  }, 500);

  // random position of the images
  function randomIntFromInterval(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }



// ***  FIRST STEP PAGE ***

$(document).keydown(function(e)
{
 var div = $("square");
switch (e.which)
{

case 37 :
$('div').animate (
{
  left:'+=30'
});
  break;

  case 38 :
  $('div').animate (
    {
    top:'+=30'
  });
    break;

    case 39 :
    $('div').animate (
      {
      left:'-=30'
    });
      break;

      case 40 :
      $('div').animate (
        {
        top:'-=30'
      });
        break;
}

});








var counter = 0;
var timeleft = 420;

function convertSeconds (s) {
  var min = floor(s / 60);
  var sec = s% 60;
  return nf (min,1) + ':' + nf (sec,2);
}
function setupTimer() {
  var timer = select ('#timer');
timer.html (convertSeconds(timeleft - counter));

function time () {
  counter ++;
timer.html (convertSeconds(timeleft - counter));
}
  setInterval (time,1000);
}




$(document).on('keypress',function () {

    var $pdfFile = $('#pdf');
    var x = Math.floor(Math.random() * $(window).width());
    var y = Math.floor(Math.random() * $(window).height());

    $pdfFile.addClass('pdfFile');

    $('body').append($pdfFile);

  });

  setInterval(function () {
    $('.pdfFile').first().remove();
  },500);

});
