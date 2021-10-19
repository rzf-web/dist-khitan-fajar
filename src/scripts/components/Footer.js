/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

// --- Footer
const Footer = (() => {

  const _width = 767.98;

  // --- handleSet
  const handleSet = () => {
    const _footerHeight = $('.footer').innerHeight();
    if ($(window).width() >= _width) {
      $('.main-site').css('paddingBottom', _footerHeight);
    } else {
      $('.main-site').removeAttr('style');
    }
  }

  const handleClickModal = () => {
    $('.js-show-modal').on('click', (e) => {
      const _this = $(e.currentTarget),
      _target = _this.attr('data-target'),
      _parents = _this.parents('body').find('.modal');

      if (_parents.hasClass('show-modal')) {
        $('[data-modal="'+ _target +'"]').removeClass('show-modal');
        Scrolllable.enable();
      } else {
        Scrolllable.disable();
        $('[data-modal="'+ _target +'"]').addClass('show-modal');
      }
    });

    // --- handle hide modal
    $('.js-hide-modal').on('click', (e) => {
      if ($('.modal').hasClass('show-modal')) {
        $('.modal').removeClass('show-modal');
        Scrolllable.enable();
      }
    });

    // --- handle click body
    $('body').on('click', (e) => {
      if ($('.modal').hasClass('show-modal')) {
        $('.modal').removeClass('show-modal');
        $('body').removeClass('show-modal-side');
        Scrolllable.enable();
      }
    });

    // stop progation
    $('body').on('click', '.js-show-modal, .modal__box, .modal-side__box', (e) => {
      e.stopPropagation();
    });
  }

  // --- init
  const init = () => {
    handleSet();
    handleClickModal();
  }

  // --- return
  return {
    init,
    setFooter: handleSet
  }

})();

export default Footer;
