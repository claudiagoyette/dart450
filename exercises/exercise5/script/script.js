$(document).ready(function () {


$(document).on('keypress',function () {
    var $square = $('<div></div>');
    var x = Math.floor(Math.random() * $(window).width());
    var y = Math.floor(Math.random() * $(window).height());

    $square.css({
      position: 'absolute',
      top: y + 'px',
      left: x + 'px',
      width: '60px',
      height: '60px',
      backgroundColor: 'white',
      zIndex: -100
    });
    $square.addClass('square');

    $('body').append($square);

  });

  setInterval(function () {
    $('.square').first().remove();
  },500);

});
