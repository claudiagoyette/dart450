$(document).ready(function () {
$('img').hide();


$('button').on('click',function(){
  if ($('input').val() == "fruit"){
   $('body').css({
    backgroundColor: 'white'
     });
   $('button').hide();
   $('input').hide();
   $('img').show();
    }
  });

  $("#text1").css("opacity", 0.0);
     $("#text1").hover(function() {
         $(this).animate({opacity: 1.0}, 500);
     }, function() {
         $(this).animate({opacity: 0.0}, 500);
     });

     $("#text2").css("opacity", 0.0);
        $("#text2").hover(function() {
            $(this).animate({opacity: 1.0}, 500);
        }, function() {
            $(this).animate({opacity: 0.0}, 500);
        });

        $("#text3").css("opacity", 0.0);
           $("#text3").hover(function() {
               $(this).animate({opacity: 1.0}, 500);
           }, function() {
               $(this).animate({opacity: 0.0}, 500);
           });

           $("#text4").css("opacity", 0.0);
              $("#text4").hover(function() {
                  $(this).animate({opacity: 1.0}, 500);
              }, function() {
                  $(this).animate({opacity: 0.0}, 500);
              });

              $("#text5").css("opacity", 0.0);
                 $("#text5").hover(function() {
                     $(this).animate({opacity: 1.0}, 500);
                 }, function() {
                     $(this).animate({opacity: 0.0}, 500);
                 });

});
