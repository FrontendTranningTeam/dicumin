$(document).ready(function() {
  var $search_btn = $('.js-search-btn');
  var $search_box = $('.js-search-box');
  var $question = $('.js-question');
  var $answer = $('.js-answer');

  $search_btn.on('click', function(e) {
    e.stopPropagation();
    $search_box.toggleClass('active');
  });

  $search_box.on('click', function(e) {
    e.stopPropagation();
  });

  $('html, body').on('click', function() {
    $search_box.removeClass('active');
  });

  $question.on('click', function(){
    if ($(this).hasClass('active')) {
      return;
    }
    $question.removeClass('active');
    $(this).addClass('active');
    $answer.slideUp(200);
    $(this).siblings('.js-answer').slideDown(200);

  });
});
