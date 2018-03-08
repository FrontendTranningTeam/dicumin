$(document).ready(function() {
  var search_btn = $('.js-search-btn');
  var search_box = $('.js-search-box');

  search_btn.on('click', function(e) {
    e.stopPropagation();
    search_box.toggleClass('active');
  });

  search_box.on('click', function(e) {
    e.stopPropagation();
  });

  $('html, body').on('click', function() {
    search_box.removeClass('active');
  });
});
