$(document).ready(function () {


//  ------  ANIMATION 4 ------

/*** I tried putting this animation at the bottom of the script.js page but it would only work
when the code is placed like this !

/* function that makes the image at the bottom of the page fade in slowly on the page :
 "I don't want to feel alone" type */

 // make the image opacity to 0 at first
 $("#puppies").css("opacity",0);
 // function : scrolling down the page to trigger the animation
 $(window).scroll(function () {
   // calculate window position and scroll tracking variables
   var windowHeight = $(window).height();
   var windowScrollPosTop = $(window).scrollTop();
   var windowScrollPosBottom = windowHeight + windowScrollPosTop;
   var objectOffset = $("#puppies").offset();
   var objectOffsetTop = objectOffset.top;

   // if the page has been scrolled far enough to reveal the image (start the animation)
   if (windowScrollPosBottom > objectOffsetTop) {
     $("#puppies").animate({"opacity":1},
     6000);
   }

 });



//  ------  ANIMATION 2 ------
  /* function that allows to discover the hastags on the page :
  "I want to show the world who I am " type  */

  // hover animation : opacity from 0 to 1 when mouse hover text1
  $("#text1").css("opacity", 0.0);
  $("#text1").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });
 // hover animation : opacity from 0 to 1 when mouse hover text2
  $("#text2").css("opacity", 0.0);
  $("#text2").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });
// hover animation : opacity from 0 to 1 when mouse hover text3
  $("#text3").css("opacity", 0.0);
  $("#text3").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });
// hover animation : opacity from 0 to 1 when mouse hover text4
  $("#text4").css("opacity", 0.0);
  $("#text4").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });
// hover animation : opacity from 0 to 1 when mouse hover text5
  $("#text5").css("opacity", 0.0);
  $("#text5").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });
// hover animation : opacity from 0 to 1 when mouse hover text6
  $("#text6").css("opacity", 0.0);
  $("#text6").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });
// hover animation : opacity from 0 to 1 when mouse hover text7
  $("#text7").css("opacity", 0.0);
  $("#text7").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });
// hover animation : opacity from 0 to 1 when mouse hover text8
  $("#text8").css("opacity", 0.0);
  $("#text8").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });
// hover animation : opacity from 0 to 1 when mouse hover text9
  $("#text9").css("opacity", 0.0);
  $("#text9").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });
// hover animation : opacity from 0 to 1 when mouse hover text10
  $("#text10").css("opacity", 0.0);
  $("#text10").hover(function() {
    $(this).animate({opacity: 1.0}, 200);
  }, function() {
    $(this).animate({opacity: 0.0}, 500);
  });



//  ------  ANIMATION 3 ------
 /* function that display the date/time appearing on the page:
  "I believe everything I see on social medias" type */
    // create a variable for the date
    var date = new Date();
    document.getElementById("today").innerHTML = date;







  });
