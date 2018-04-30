$(document).ready(function() {
  // make the first image on the page "step 1" disappear so the second image is shown
  setTimeout('$("#step0").hide()',3600);
  // make the first image on the page "step 2" disappear so the second image is shown
  setTimeout('$("#step2").hide()',7000);
  // make the first image on the page "step 3" disappear so the second image is shown
  setTimeout('$("#step3").hide()',7000);

$('#title5').hide();
$('.buttonStart1').hide();
  window.onload = function(){
    if (annyang) {
      var commands = {
        'Yes': function() {
          responsiveVoice.speak("Thank you, you didn't have too. I need to finish my essay as soon as possible.I think you are the perfect candidate to help me.",
          "US English Male", {
          });
          $('#teen').hide({
          });
          $('#title1').hide({
          });
          $('#title2').hide({
          });
          $('#title3').hide({
          });
          $('#title4').hide({
          });
          $('#title5').show({
          });
          $('.buttonStart1').show({
          });
        }
      };

      annyang.addCommands(commands);

      annyang.start();
    }
  }




  // ***  STEP 3 PAGE ***
  $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );



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



          $('#teen').on('click',function(e) {
           e.preventDefault();
           responsiveVoice.speak("I need help, this semester is killing me", "US English Male", {rate: 1}, {volume: 1});
          });
          $('#step0').on('click',function(e) {
           e.preventDefault();
           responsiveVoice.speak("Thank you, you didn't have too", "US English Male", {rate: 1}, {volume: 1});
          });
          $('#step1').on('click',function(e) {
          e.preventDefault();
          responsiveVoice.speak("Arrange the words as you like and press next when it's done", "US English Male", {rate: 1}, {volume: 1});
          });
          $('#step2').on('click',function(e) {
           e.preventDefault();
           responsiveVoice.speak("Good job! I also need to find a title, can you do that ?", "US English Male", {rate: 1}, {volume: 1});
         });
         $('#step2_2').on('click',function(e) {
          e.preventDefault();
          responsiveVoice.speak("Arrange the words as you like and press next when it's done", "US English Male", {rate: 1}, {volume: 1});
        });
        $('#step3').on('click',function(e) {
         e.preventDefault();
         responsiveVoice.speak("You're good at this. Now can you help me correct my mistakes ?", "US English Male", {rate: 1}, {volume: 1});
       });
       $('#step3_2').on('click',function(e) {
        e.preventDefault();
        responsiveVoice.speak("Click on the words where you can see mistakes", "US English Male", {rate: 1}, {volume: 1});
      });




        });



        //$("div").blast({ search: "subliminal" }).mouseover(reveal);
        //  $("div").blast({ search: "evil" }).mouseover(reveal);
        //  $("div").blast({ search: "ψ(｀∇´)ψ" }).mouseover(reveal);
        //  $("div").blast({ search: "don't" }).mouseover(reveal);
        //  $("div").blast({ search: "never" }).mouseover(reveal);
        //  $("div").blast({ search: "not" }).mouseover(reveal);
        //  $("div").blast({ search: "muahahahahaha!!!!" }).mouseover(reveal);

        //function reveal () {
        //  $(this).animate({
        //      color: 'red',
        //  });
        //}
