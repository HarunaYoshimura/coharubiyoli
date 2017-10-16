$(document).ready(function() {
    $(".trigger").click(function() {
        $(".menu").toggleClass("active"); 
    });
    
    $(".music.button,.places.button").on( "click", function() {
      window.location.href = './github.html';
    });
    
    $(".home.button").on( "click", function() {
      window.location.href = './megu.html';
    });
    
    $(".menu").click(function(){
        $(this).toggleClass("closed");
        
        if($(this).hasClass("closed")) {
        	$(".main.button").text("Menu");
        } else {
        	$(".main.button").text("Close");
        }
    });
    
});

$(window).load( function(){
    $('#sb-slider').nivoSlider({
        controlNav:false,
        directionNav:false,
        pauseTime:5000,
    });
});