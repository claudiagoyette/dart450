/*

Blast.js exercise 6
Claudia Goyette


*/

$(document).ready(function() {

// Colors the paragraph
$(function() {

  function rand(min, max) {
  return parseInt(Math.round(min + Math.random() * (max - min)));
  }


 // blasts the paragraph word by word when the user click on the button
  $('#button').on('click', function () {
    // select the tags we want to blast
    var wordsColor = $('p').blast({
    delimiter: 'word'
    });

  // Give a random color to every word each time we click on the button
    wordsColor.each(function() {
    // random color selector
    $(this).css('color', 'rgb(' + rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255) + ')');
    });

   });
});



});
