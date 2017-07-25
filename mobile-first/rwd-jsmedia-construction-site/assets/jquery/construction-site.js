$(document).ready(function(){
//  $('.carousel').carousel();
  
  $('li a').on('click', function(e){
    e.preventDefault();
    var $slideContentLink = $(this).attr('href');
    targetSlideContent = $('section' + $slideContentLink);
    
    $('li a.visible').removeClass('visible');
    $('li.active').removeClass('active');
    $('section.slide-content.active').toggleClass('active');
    
    $(this).addClass('visible');
    $(this).parent().addClass('active');  
    $(targetSlideContent).addClass('active');
    
  });
  
  $('#logo').on('click', function(e){
    e.preventDefault();
    $('section.slide-content.active').toggleClass('active');
    $('#home').addClass('active');
  });

  $('#home-btn').on('click', function(e){
    e.preventDefault();
    $('section.slide-content.active').toggleClass('active');
    $('#contact').addClass('active');
  });
});