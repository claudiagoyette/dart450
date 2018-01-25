$(document).ready(function () {

    $( ".img_container" ).mouseover(function() {

        //stop the current fade event (stop fadeOut)
        $(this).find(".textimg").stop();
        $(this).find(".textimg").fadeIn();
    });

    $( ".img_container" ).mouseout(function() {

        //stop the current fade event (stop fadeIn)
        $(this).find(".textimg").stop();
        $(this).find(".textimg").fadeOut();
    });

});
