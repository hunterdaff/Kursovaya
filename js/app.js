$ = jQuery;
import 'bootstrap/js/dist/tab';

import _Fancybox from "@fancyapps/fancybox";
import noUiSlider from 'nouislider';
import Swiper, {
  Navigation,
  Pagination
} from 'swiper';
import _Modaal from "modaal";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

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

  // Обработчики форм
  document.addEventListener('wpcf7invalid', function (event) {
    // Ошибка валидации
    // console.log('wpcf7invalid');
  }, false);

  document.addEventListener('wpcf7mailsent', function (event) {
    // Письмо отправлено
    // console.log('wpcf7mailsent');
   
    if (event.detail.contactFormId == '91') {
      ym(69148552,'reachGoal','plan');
      gtag('event', 'formSend', {
        'form': 'plan'
      });
    }
    if (event.detail.contactFormId == '5') {
      ym(69148552,'reachGoal','want');
      gtag('event', 'formSend', {
        'form': 'want'
      });
    }
    if (event.detail.contactFormId == '93') {
      ym(69148552,'reachGoal','details');
      gtag('event', 'formSend', {
        'form': 'details'
      });
    }
  }, false);

  document.addEventListener('wpcf7mailfailed', function (event) {
    // Ошибка Отправки. Для тестов. Закоментировать перед продакшеном
    var inputs = event.detail.inputs;
    console.log(inputs);
  }, false);

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  swiper.on('slideChange', function (s) {
    $(".active-page").text(`0${s.realIndex + 1}/`);
  });

  const rPriceSlider = document.getElementById('r-slider');
  noUiSlider.create(rPriceSlider, {
    start: [20, 251],
    tooltips: true,
    connect: [false, true, false],
    step: 1,

    range: {
      'min': 1,
      'max': 300

    },
    format: {
      to: function (value) {
        return parseInt(value);
      },
      from: function (value) {

        return parseInt(value);
      }
    }
  });

  const mPriceSlider = document.getElementById('m-slider');
  noUiSlider.create(mPriceSlider, {
    start: [4, 10],
    tooltips: true,
    connect: [false, true, false],
    step: 1,

    range: {
      'min': 2,
      'max': 15

    },
    format: {
      to: function (value) {
        return parseInt(value);
      },
      from: function (value) {

        return parseInt(value);
      }
    }
  });

  $(".accordion_tab").click(function () {
    $(this).parent().toggleClass("active");
  });

  $('#open-modal-btn').modaal({
    type: 'inline',
    content_source: '#modal-content',
    background: '#000',
    overlay_opacity: 0.8,
    after_open: function () {
      let checked = [];
      let RPS = rPriceSlider.noUiSlider.get();
      let MPS = mPriceSlider.noUiSlider.get();

      const checkboxes = document.querySelectorAll(`input[name="roomSelect"]:checked`);
      checkboxes.forEach((checkbox) => {
        checked.push(checkbox.value);
      });

      $('#input_room').val(checked);
      $('#input_square').val(`${RPS[0]} - ${RPS[1]}`);
      $('#input_cash').val(`${MPS[0]} - ${MPS[1]}`);
    }
  });
});