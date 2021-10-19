// --- utilities
import {
  Scrolllable,
  BrowserCheck,
  // Validation,
} from 'utilities';

// --- components
import {
  Footer,
  GuestBook,
  FormGuestBook,
  Countdown
} from 'components';

// --- App
const App = (() => {
  // --- run transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  }

  // --- show site content
  const showSiteContent = () => {
    $('.js-main-site').removeClass('main-site--hide');
    // --- disable scroll
    Scrolllable.enable();
  }

  // --- ready
  const ready = () => {
    (($) => {
      // --- disable scroll
      Scrolllable.disable();

      // --- Global
      runTransition();
      showSiteContent();
      BrowserCheck.init();

      // --- Project
      Footer.init();
      // FormGuestBook:init();
      GuestBook.init();
    })(jQuery);
  }

  // --- call vendors
    const callVendor = () => {
    // popup image
    const $gallery = new SimpleLightbox('.js-popup-image');
    // Scroll Reveal
    ScrollReveal().reveal('.our-children__txt-caption', handleRevealConfig(0, '-24px'));
    ScrollReveal().reveal('.our-children__box', handleRevealConfig(255, '-24px'));
    ScrollReveal().reveal('.event__box h3', handleRevealConfig(260, '-24px'));
    ScrollReveal().reveal('.event__box p', handleRevealConfig(265, '-24px'));
    ScrollReveal().reveal('.event__box p', handleRevealConfig(270, '-24px'));
    ScrollReveal().reveal('.event__box__detail', handleRevealConfig(275, '-24px'));
    ScrollReveal().reveal('.event__box__detail h3', handleRevealConfig(280, '-24px'));
    ScrollReveal().reveal('.event__box__detail p', handleRevealConfig(285, '-24px'));
    ScrollReveal().reveal('.event__box__detail p', handleRevealConfig(290, '-24px'));
    ScrollReveal().reveal('.galleries__title', handleRevealConfig(295, '-24px'));
    ScrollReveal().reveal('.galleries__item__img', handleRevealConfig(300, '-24px'));
    ScrollReveal().reveal('.also-invite__title', handleRevealConfig(305, '-24px'));
    ScrollReveal().reveal('.also-invite__img-el', handleRevealConfig(310, '-24px'));
    ScrollReveal().reveal('.also-invite__list__item', handleRevealConfig(315, '-24px'));
    ScrollReveal().reveal('.habib__img__el', handleRevealConfig(320, '-24px'));
    ScrollReveal().reveal('.habib__txt-title', handleRevealConfig(325, '-24px'));
    ScrollReveal().reveal('.habib__txt-name', handleRevealConfig(330, '-24px'));
    ScrollReveal().reveal('.habib__txt-quotes', handleRevealConfig(335, '-24px'));
    ScrollReveal().reveal('.habib__txt__list h3', handleRevealConfig(340, '-24px'));
    ScrollReveal().reveal('.habib__txt__list h3', handleRevealConfig(345, '-24px'));
    ScrollReveal().reveal('.habib__txt__list p', handleRevealConfig(345, '-24px'));
    ScrollReveal().reveal('.habib__txt__list__item', handleRevealConfig(350, '-24px'));
    ScrollReveal().reveal('.countdown__list', handleRevealConfig());
    ScrollReveal().reveal('.countdown__txt__title', handleRevealConfig());
    ScrollReveal().reveal('.countdown__txt__title', handleRevealConfig());
    ScrollReveal().reveal('.countdown__txt__desc', handleRevealConfig());
    ScrollReveal().reveal('.location__title', handleRevealConfig(355, '-24px'));
    ScrollReveal().reveal('.location__map iframe', handleRevealConfig(360, '-24px'));
    ScrollReveal().reveal('.location__row', handleRevealConfig(365, '-24px'));
    ScrollReveal().reveal('.quran__txt p', handleRevealConfig(370, '-24px'));
    ScrollReveal().reveal('.quran__txt h3', handleRevealConfig(375, '-24px'));
    ScrollReveal().reveal('.guest-book__title', handleRevealConfig(380, '-24px'));
    ScrollReveal().reveal('.guest-book__greeting', handleRevealConfig(385, '-24px'));
    ScrollReveal().reveal('.guest-book__form', handleRevealConfig(390, '-24px'));
    ScrollReveal().reveal('.guest-book__result', handleRevealConfig(400, '-24px'));
    ScrollReveal().reveal('.guest-book__txt', handleRevealConfig(405, '-24px'));
    ScrollReveal().reveal('.footer__copyright__text', handleRevealConfig(410, '-24px'));
    window.sr = ScrollReveal({ duration: 6000 }); 
    sr.reveal('.location__txt-desc', 700);
  }

  // --- handleRevealConfig
  const handleRevealConfig = (delay = 250, distance = '24px', origin = 'origin') => {
    const _config = {
      duration: 850,
      distance: distance,
      delay: delay,
      origin: 'top',
      once: true,
    };
    return _config;
  }


  // --- load
  const load = () => {
    (($) => {
      $(window).on("load", () => {

      });
    })(jQuery);
  }

  // --- init
  const init = () => {
    load();
    ready();
    callVendor();
  }

  // --- return
  return {
    init
  }

})();

// ---  run main js
App.init();
