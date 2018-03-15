$(document).ready(function() {
  var $searchBtn = $('.js-search-btn');
  var $searchBox = $('.js-search-box');
  var $question = $('.js-question');
  var $answer = $('.js-answer');

  $searchBtn.on('click', function(e) {
    e.stopPropagation();
    $searchBox.toggleClass('active');
  });

  $searchBox.on('click', function(e) {
    e.stopPropagation();
  });

  $('html, body').on('click', function() {
    $searchBox.removeClass('active');
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
