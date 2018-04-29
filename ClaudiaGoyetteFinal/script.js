$(document).ready(function() {

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


setTimeout('$("#step0").hide()',3600);
console.log("image");

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
