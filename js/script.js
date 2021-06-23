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

  const mainswiper = new Swiper(".mainSwiper", {
    loop: true,
  });

  const swiper = new Swiper(".Swiper-product", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      860: {
        slidesPerView: 2,
      },
      1370: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

  // Мобильное меню
  $('#toggle_menu').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('body').toggleClass('overflow');
  });
});