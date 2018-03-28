/*

Claudia Goyette
Exercise 8

*/

$(document).ready(function () {


  // animate the bookcover images from the top of the page, in a set amount of time
  //Hunger Games
  $(function(){
    $("#hunger").animate({top:1000},10000)
  })
  // How to be the perfect Dutch
  $(function(){
    $("#bike").animate({top:1000},10000)
  })
  // Life of Pi
  $(function(){
    $("#life").animate({top:1000},10000)
  })
  // The Happy Lemon
  $(function(){
    $("#lemon").animate({top:1000},10000)
  })
// The Long Walk
  $(function(){
    $("#king").animate({top:1000},10000)
  })
// Harry Potter
  $(function(){
    $("#harry").animate({top:1000},10000)
  })
// Peter Pan
  $(function(){
    $("#peterpan").animate({top:1000},10000)
  })





  // function so the cart follows the mouse position
  $ (document).mousemove (function (e) {
    // variables to get the mouse x and y
    var x = e.pageX;
    //var y = e.pageY;
    // get the cart position and make it the same as the mouse X and Y
    $("#cart").css('left', x);
    //$("#cart").css('top', y);
  });





// set a counter for 2 minutes (the final version is not this short)
// hide the times up message
 $('#timesup').hide();
 // create a counter for 2 minutes
var counter = 120;
var updateInterval = 1000;
var timer = setInterval(function () { 
   counter = counter - 1;
   $('#counter').text(counter);
   // if the counter = 0, make the counter stops, hide the cart and title
   // make the times up message appear
   if (counter == 0) {
         $('#Title3').hide();
         $('#cart').hide();
         $('#timesup').show();
         clearInterval(timer);
       }
 } , updateInterval);

});
