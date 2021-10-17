// Constants
const WHITESPACE = /^ *$/;

// Animated on Scrolled Config
var customAnimateOnScroll = {
  AnimateOnScroll: function() {
    AOS.init({
      duration: 1000,
      easing: 'slide',
      once: true
    });
  },

  init: function() {
    customAnimateOnScroll.AnimateOnScroll();
  }
}

customAnimateOnScroll.init();

// Header Link when Active Function
var headerLinkActive = {
  handleClick: function() {
    $('.header__nav-link').on('click', function(e) {
      e.stopPropagation();
      $('.header__nav-link').each(function() {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    });
  },

  init: function() {
    headerLinkActive.handleClick();
  }
}

headerLinkActive.init();

// Countdown Function
var countDown = {
  handleCountdown: function() {
    $('.jsCountdownSet').countdown('2021/07/22', function(event) {
      $(this).html(event.strftime(''
        + '<div class="countdown-time__item"><span class="countdown-time__number">%D</span> hari </div>'
        + '<div class="countdown-time__item"><span class="countdown-time__number">%H</span> jam </div>'
        + '<div class="countdown-time__item"><span class="countdown-time__number">%M</span> menit </div>'
        + '<div class="countdown-time__item"><span class="countdown-time__number">%S</span> detik </div>'));
    });
  },
  init: function() {
    countDown.handleCountdown();
  }
}

countDown.init();