var width;
$(window).resize(function() {
  width = $(window).width();

  if( width < 630 )
  {
  	changePersonalName('Alex_ Sullivan')
  }
  else
  {
  	changePersonalName('Alex_Sullivan')
  }

});


function changePersonalName(changed) {
    $("#personal_name").html(changed);
}
