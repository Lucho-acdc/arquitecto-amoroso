$(document).ready(function(){

    // link action
    $(".accionado").click(function(e){
        e.preventDefault();

        $(".slider").removeClass("activo");
        var slide = $(this).closest(".slider");
        slide.addClass("activo");
    });

});

// checkWidth
checkWidth = function(){
    var windowsize = $(window).width();
    if (windowsize > 480) {
        var slideWidth = $('.activo').width();
        $('.contenido__interior').css({
            "width" : slideWidth+"px"
        });
    }

}

$(window).resize(function() {
    // onresize
    checkWidth();

    // finish resize
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout( checkWidth , 500);
});
