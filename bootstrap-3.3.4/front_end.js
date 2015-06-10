var width;
$(window).resize(function() {
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


function changeText(tag, changed) {
    $(tag).html(changed);
}
