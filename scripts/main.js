$(document).ready(function(){
  $('#logo').on('click', function(e){
    e.preventDefault();
    
    $('.slide-content').hide().fadeOut('slow');
    $('#home').show();
  });
  
  $('li a').on('click', function(e){
    e.preventDefault();
    
    $('li a.visible').removeClass('visible');
    $('li.active').removeClass('active');
    $(this).addClass('visible');
    
    var slideContent = $(this).attr('slide-content-id');
    
    $('.slide-content').hide().fadeOut('slow');
    $('#' + slideContent).show().fadeIn('slow');
  });
});