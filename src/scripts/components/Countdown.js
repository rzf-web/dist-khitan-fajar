/* ------------------------------------------------------------------------------
@name: Countdown
@description: Countdown
--------------------------------------------------------------------------------- */

const Countdown = (() => {
  

// Countdown Function
  const handleCountdown = () => {
    $('.js-countdown-set').countdown('2021/09/22', function(event) {
      $(this).html(event.strftime(''
        + '<li class="countdown__list__item"><p class="countdown-time__number">%D</p> hari </li>'
        + '<li class="countdown__list__item"><p class="countdown-time__number">%H</p> jam </li>'
        + '<li class="countdown__list__item"><p class="countdown-time__number">%M</p> menit </li>'
        + '<li class="countdown__list__item"><p class="countdown-time__number">%S</p> detik </li>'));
    });
      // when countdown is finished
      if (_distance < 0) {
        clearInterval(x);
        $('.countdown__txt').html(`
          <p>Maaf, saat ini sedang tidak ada promo. Nantikan promo berikutnya. Terima kasih Sobat RZF...</p>`);
      // <p class='sale__content__txt__alert-limited'>Maaf, saat ini sedang tidak ada promo. Nantikan promo berikutnya. Terima kasih Sobat RZF...</p>`);
    }
  }

  const handleCountDown = () => {
    // let _dataTimeSale = $('.sale__content__countdown').attr('setSaleTime');
    let countDownDate = new Date("Agu 28, 2021 15:37:25").getTime();

    let countDownDate = new Date(countDownDate).getTime();

    // update the count down every 1 second
    let x = setInterval( () => {

    // get today's date and time
    let _now = new Date().getTime();

    // find the distance between now and the count down date
    let _distance = countDownDate - _now;

    // time calculations for days, hours, minutes and seconds
    let _days = Math.floor(_distance / (1000 * 60 * 60 * 24));
    let _hours = Math.floor((_distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let _minutes = Math.floor((_distance % (1000 * 60 * 60)) / (1000 * 60));
    let _seconds = Math.floor((_distance % (1000 * 60)) / 1000);

  // // set result into html
  // $('.js-countdown-set').html(`
  //   <li class="countdown__list__item">
  //   <p class="countdown__list__number">${_days}</p> hari</li>
  //   <li class="countdown__list__item">
  //   <p class="countdown__list__number">${_hours}</p> jam</li>
  //   <li class="countdown__list__item">
  //   <p class="countdown__list__number">${_minutes}</p> menit</li>
  //   <li class="countdown__list__item">
  //   <p class="countdown__list__number">${_seconds}</p> detik</li>`);

  // // when countdown is finished
  // if (_distance < 0) {
  //   clearInterval(x);
  //   $('.countdown__txt').html(`
  //     <p>Maaf, saat ini sedang tidak ada promo. Nantikan promo berikutnya. Terima kasih Sobat RZF...</p>`);
  //     // <p class='sale__content__txt__alert-limited'>Maaf, saat ini sedang tidak ada promo. Nantikan promo berikutnya. Terima kasih Sobat RZF...</p>`);
  //   }

  }, 1000);
} 

  // - init
  const init = () => {
    handleCountDown();
  }

  return {
    init
  }

})();

export default Countdown