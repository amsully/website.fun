var width;

$(window).on('load resize',function() {
  width = $(window).width();

  if( width < 630 )
  {
  	changeText('#personal_name','Alex_ Sullivan')
  	changeText('#job','coder')
  	changeText('#divider','@')
  }
  else
  {
  	changeText('#personal_name','Alex_Sullivan')
  	changeText('#job','coder')
  	changeText('#divider','|')
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