/*

Claudia Goyette
Exercise 7

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

  /* There is something wrong with my code, there is a gap between the mouse position and the
  cart position, I will need help to fix it
  */

  // function so the cart follows the mouse position
  $ (document).mousemove (function (e) {
    // variables to get the mouse x and y
    var x = e.pageX;
    //var y = e.pageY;
    // get the cart position and make it the same as the mouse X and Y
    $("#cart").css('left', x);
    //$("#cart").css('top', y);
  });



});
