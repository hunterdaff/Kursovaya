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
  var swiper = new Swiper(".mySwiper", {});

  var swiper = new Swiper(".Swiper-product", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
  });
  // Мобильное меню
  $('#toggle_menu').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('body').toggleClass('overflow');
  });
});

$('.buy').modaal();