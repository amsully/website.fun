var width;

$(window).on('load resize',function() {
  width = $(window).width();

  if( width < 630 )
  {
  	changeText('#first_name','sullivan')
    changeText('#last_name','')
  	changeText('#job','coder')
  	changeText('#divider','@')
  }
  else
  {
    $("#information-button").remove()
  	changeText('#first_name','alex')
    changeText('#last_name','sullivan')
  	changeText('#job','coder')
  	changeText('#divider','|')
    $('#collapseOne, #collapseTwo, #collapseThree, #collapseFour, #collapseFive').collapse("show");

  }

});


$(document).ready(function() {
  var icon = $('.play');
  icon.click(function() {
     icon.toggleClass('active');
     return false;
  });
});

function changeText(tag, changed) {
    $(tag).html(changed);
}

function play_music(id)
{
  if( id === 'pause')
  {
    document.getElementById('pause').firstChild.pause();

    $('#pause').attr('id','play')    
  }else
  {
    document.getElementById('play').firstChild.play();

    $('#play').attr('id','pause')    
  }
  console.log(id);
}

function stop_music()
{
  document.getElementById('play').firstChild.pause();
  document.getElementById('play').onclick = play_music();
}

function blinker() {
    $('.blink_me').fadeOut(400);
    $('.blink_me').fadeIn(400);
}

setInterval(blinker, 1150);

$(document).ready(function() {
  // navigation click actions 
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });
  // scroll to top action
  $('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');     
  });
  // mobile nav toggle
  $('#nav-toggle').on('click', function (event) {
    event.preventDefault();
    $('#main-nav').toggleClass("open");
  });
});
// scroll function
function scrollToID(id, speed){
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}

$('#collapseOne, #collapseTwo, #collapseThree, #collapseFour, #collapseFive').collapse("hide");

// Anchor Scroll
$(function() {
  $('a[href*=#display_projects]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});