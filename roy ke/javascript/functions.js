TweenMax.to(".expo h1",2,{
    opacity:0,
    y: -60,
    ease:Expo.easeInOut
})
TweenMax.to(".expo ",2,{
  delay:1,
  y:"-100vh",
  ease:Expo.easeInOut
})

// 
// TweenMax.to(".",2,{
//   opacity:0,
//   y: -60,
//   ease:expo.easeInOut
// })

// TweenMax.to(".expo h1",2,{
//   opacity:0,
//   y: -60,
//   ease:expo.easeInOut
// })






var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
    });

  }


  // Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
    $('body').css({
      'background-color':'rgb(219, 182, 87)'
    });
    
    $('.logo h1 ').css({
      'opacity':0
    });
    $('.logo h2 ').css({
      'opacity':0
    });
    
  }

  else{
    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).removeClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
    $('body').css({
      'background-color':'whitesmoke'
    });
    $('.logo h1 ').css({
      'opacity':1
    });
    $('.logo h2 ').css({
      'opacity':1
    });
}

  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

    $('body').css({
      'background-color':'lightgrey'
    });

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

    
    $('body').css({
      'background-color':'rgba(211, 130, 171, 0.856)'
    });
  }
});
