var patterns = [
                'rocks.jpg',
                'euca_04.jpg',
                'sketch.jpg',
                'woodblur.jpg',
                'batteries_03.jpg',
                'eraser_02.jpg',
                'texture_01.jpg',
                'ink05.jpg',
                'scratch01.jpg',
                'cursor01.jpg',
                'suits.jpg',
                'sale03.jpg',
                'shapes_05.jpg',
                'grid_04.jpg',
                'grid_07.jpg',
                'cork.jpg',
                'shapes_22.jpg',
                'splatter.jpg',
                'mountains.jpg',
                'lighting3.jpg',
                'brush01.jpg',
                'circle.jpg',
                'bottles.jpg'
                ];

$('#patterns').click(function() {
  var random_number  = Math.floor(Math.random() * patterns.length),
      pattern_to_use = 'url(assets/img/_pattern/' + patterns[random_number] + ')';
  
  $('body').css({ 'background-image': pattern_to_use });
  //$('.about').hide();
});

$(document).ready(function(){
  $('.work-filter').toggleClass('selected');
  $('.business').show();
  $('.pleasure').show();
  });


$('.work-filter').click(function() {
  var category = $(this).data('category');

  $('.about').hide();
  $('.buy').hide();
  $('.store').removeClass('selected');
  $(this).toggleClass('selected');
  $(category).toggle();
});

$('.name').click(function() {
  //$('body').removeAttr('style');
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  $('.business').hide();
  $('.pleasure').hide();
  $('.buy').hide();
  $('.work-filter').removeClass('selected');
  $('.store').removeClass('selected');
  $('.about').show();
});

$('.store').click(function() {
  //$('body').removeAttr('style');
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  $('.business').hide();
  $('.pleasure').hide();
  $('.about').hide();
  $('.work-filter').removeClass('selected');
  $(this).addClass('selected'); 
  $('.buy').show();
});


