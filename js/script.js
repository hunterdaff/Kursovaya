$(function () {
  // Якоря
  $('a[href^="#section"]').click(function () {
    const target = $(this).attr("href");
    // Закрываем меню если оно открыто
    $('#toggle_menu').removeClass('active');
    $('#overlay').removeClass('open');
    $('body').removeClass('overflow');

    $("html, body").animate({
      scrollTop: $(target).offset().top,
    }, 1000);
    return false;
  });

  // Мобильное меню
  $('#toggle_menu').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('body').toggleClass('overflow');
  });
});

$('.buy').modaal();