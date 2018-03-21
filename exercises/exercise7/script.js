/*

Claudia Goyette
Exercise 7

*/

$(document).ready(function () {
// animate the books from the top of the page
  $(function(){
  		$("#hunger").animate({top:1000},5000)
  	})

    $(function(){
        $("#bike").animate({top:1000},10000)
      })

      $(function(){
          $("#life").animate({top:1000},10000)
        })

        $(function(){
            $("#lemon").animate({top:1000},10000)
          })

          $(function(){
              $("#king").animate({top:1000},10000)
            })

            $(function(){
                $("#harry").animate({top:1000},10000)
              })

              $(function(){
                  $("#peterpan").animate({top:1000},10000)
                })

/* I tried here to make the image of the cart follow the mouse position
but it didn't completely worked + the books were also follofing the position ...


  $ (document).mousemove (function (e) {
  var x = e.pageX + 20;
  var y = e.pageY + 20;

   $("#cart").css('margin-left', x);
   $("#cart").css('margin-top', y);
  });


*/

});
