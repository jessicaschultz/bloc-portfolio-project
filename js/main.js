$(document).ready(function(){
  var targetDiv;
  
  $('li a').on('click', function(e){
    e.preventDefault();
    var $divLink = $(this).attr('href');
    targetDiv = $('div' + $divLink);
    
    $('li a.visible').removeClass('visible');
    $('li.active').removeClass('active');
    $('div.slide-content.active').toggleClass('active');
    
    $(this).addClass('visible');
    $(this).parent().addClass('active');  
    $(targetDiv).addClass('active');
    
  });
  
  $('#logo').on('click', function(e){
    e.preventDefault();
    $('div.slide-content.active').toggleClass('active');
    $('#home').addClass('active');
  });
  
});
