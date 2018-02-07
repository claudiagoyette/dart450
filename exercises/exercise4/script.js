/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {
  $('img').hide();

  $('#button1').click (function () {
     $('button1').hide();
     $('button2').hide();
     $('#baby').show();
     $('#kanye').hide();


    });

  $('#button2').click (function () {
     $('button1').hide();
     $('button2').hide();
     $('#kanye').show();
      $('#baby').hide();

    });

    $('img').each(function () {
  var randomX = Math.random() * $(window).width();
  var randomY = Math.random() * $(window).height();
  $(this).css({
      position: 'absolute',
      top: randomY,
      left: randomX
  });
});

});
