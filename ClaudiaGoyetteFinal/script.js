$(document).ready(function() {
setTimeout('$("#step0").hide()',3600);

  // Make the things you want to drag draggable
  $('#pdf').draggable();

  // Make the element you want to drop onto "droppable"
  // And if you want to have something happen when it is dropped
  // then add an event handler function for 'drop' like this
  $('#droponme').droppable({
    drop: handleDrop
  });


  $('#pdf').on('click',function() {
  responsiveVoice.speak("You Solved a Puzzle!", "UK English Male", {rate: 0.5}, {volume: 1});
});
// handleDrop
//
// Called when the user drops something onto the droppable element
function handleDrop(event,ui) {
  // You can get access to the thing that was dropped via ui.draggable
  // So we'll remove it from the page
  ui.draggable.remove();


}








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

})

})





//window.onload = function(){
  //    if (annyang) {
  //        var commands = {
  //            'Hello': function() {
    //              alert('Hi! I can hear you.');
    //              console.log("Ready");
    //          }
    //      };
    //      annyang.addCommands(commands);
    //      annyang.start();
    //  }
//  }



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
