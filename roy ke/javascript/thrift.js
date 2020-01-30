

var currentSlide = 1;
var sliding = $(".smooth");
var slideCount = sliding.children().length;


setInterval(() => {
    sliding.animate({
        marginLeft : '-=500px'
    },800 , function(){
        currentSlide++;
        if(currentSlide=== slideCount){
            currentSlide = 1;
            $(this).css("margin-left","0px");

        }
    });
}, 4000);



var container_3 = $('#container_3');
var move = $('.move');
var move1 = $('.move1');
var move2 = $('.move2');
var move3 = $('.move3');

 $(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    var cont_height = container_3.height();

   if (wScroll> cont_height/1.8){
       move.addClass('moving1');
   }
   if (wScroll> cont_height/1.4){
        move1.addClass('moving1');
   }
   if (wScroll> cont_height*1.08){
        move2.addClass('moving1');
   }
   if (wScroll> cont_height*1.3){
        move3.addClass('moving1');
   }
});







