let barToggle = false;

$(document).ready(() => {
  $('.colWrap').click(() => { // menu bar anim func
    barToggle = !barToggle;
    if (barToggle) {
      $('.header .colWrap .col3').css({ display: 'none' });
      $('.header .colWrap .col1').css({ transform: 'translate(0, 8px) rotate(45deg)' }).css({ width: '30px' }).css({ background: '#1D5DB5' });
      $('.header .colWrap .col2').css({ transform: 'rotate(-45deg)' }).css({ width: '30px' }).css({ background: '#1D5DB5' });
      $('.navigation').slideDown();
    }
    else {
      $('.header .colWrap .col1').css({ transform: 'translate(0, 0) rotate(0deg)' }).css({ width: '35px' }).css({ background: '#000' });
      $('.header .colWrap .col2').css({ transform: 'rotate(0deg)' }).css({ width: '35px' }).css({ background: '#000' });
      $('.header .colWrap .col3').fadeIn(700).css({ display: 'block' }).css({ transform: 'rotate(-180deg)' }).css({ width: '35px' }).css({ background: '#000' });
      $('.navigation').slideUp();
    }
  });

  if ($(window).width() <= 1024) { // brakepont | for <p> text
    $('#map p').text('Двигайте карту пальцем и нажмите на нужный регион');
  }
  else {
    $('#map p').text('Наведите на регион и кликните по нему');
  }

  $('path').hover(function (e) { // interactive map
    activeElem = e.target.id;
    $('.indicator p').css({ lineHeight: '20px' }).css({ textAlign: 'center' }).css({ margin: '-50px 0 0 10px' });
    if ($(this).attr('name')) {
      var name = $(this).attr('name');
      $('#map .indicator p').text(name);
    }
    $(this).css('fill', '#4f90ff');
    $('path').not(this).css('fill', 'rgba(145, 182, 255, 0.5)');

    if (e.pageX > $(window).width() / 2) { // right / left handle
      $('.indicator').css({ borderRight: '1px solid #000' }).css({ borderLeft: '0px solid #000' }).css({ transform: 'skew(45deg)' }).css({ 'top': e.pageY - 30, 'left': e.pageX - 140 }).show();
      $('.indicator p').css({ transform: 'skew(-45deg)' });
    }
    else {
      $('.indicator').css({ borderLeft: '1px solid #000' }).css({ borderRight: '0px solid #000' }).css({ transform: 'skew(-45deg)' }).css({ 'top': e.pageY - 30, 'left': e.pageX + 12 }).show();
      $('.indicator p').css({ transform: 'skew(45deg)' });
    }
  }, function () {
    $('.indicator p').html('');
    $('.indicator').hide();
    $('path').css('fill', 'rgba(0,0,0,0.2)');
  });

  let subMn1Toggle = false; // mob catalog subMenu func
  $('.navigation .container ul li:nth-child(1) div div').click(() => {
    subMn1Toggle = !subMn1Toggle;
    if (subMn1Toggle) {
      $('.navigation .container ul li:nth-child(1) .catalogSubMenu').slideDown();
      $('.navigation .container ul li:nth-child(1) div div').text('▲');
    }
    else {
      $('.navigation .container ul li:nth-child(1) .catalogSubMenu').slideUp();
      $('.navigation .container ul li:nth-child(1) div div').text('▼');
    }
  });

  let subMn2Toggle = false; // mob analitics subMenu func
  $('.navigation .container ul li:nth-child(5) div div').click(() => {
    subMn2Toggle = !subMn2Toggle;
    if (subMn2Toggle) {
      $('.navigation .container ul li:nth-child(5) .analiticsSubMenu').slideDown();
      $('.navigation .container ul li:nth-child(5) div div').text('▲');
    }
    else {
      $('.navigation .container ul li:nth-child(5) .analiticsSubMenu').slideUp();
      $('.navigation .container ul li:nth-child(5) div div').text('▼');
    }
  });

  if (document.querySelector('.header .btnWrapper .authButton') != null) {
    document.querySelector('.header .btnWrapper .authButton').addEventListener('click', () => { // login pop-up show func
      $('#authorization').fadeIn();
      $('body').css({ overflow: 'hidden' });
    });
  }

  if (document.querySelector('#authorization') != null) {
    document.querySelector('#authorization').addEventListener('click', (e) => { // login pop-up hide func
      if (e.target.id == 'authWrap' || e.target.id == 'authorization') {
        $('#authorization').fadeOut();
        $('body').css({ overflow: 'auto' });
      }
    });
  }

  if (document.querySelector('#comment .btnWrap button:nth-child(1)') != null) {
    document.querySelector('#comment .btnWrap button:nth-child(1)').addEventListener('click', () => { // login pop-up show func | articles.html
      $('#authorization').fadeIn();
      $('body').css({ overflow: 'hidden' });
    });
  }

  if (document.querySelector('#emailBtn') != null) {
    document.querySelector('#emailBtn').addEventListener('click', () => { // email pop-up show func
      $('#email').fadeIn();
      $('body').css({ overflow: 'hidden' });
    });
  }

  if (document.querySelector('#email') != null) {
    document.querySelector('#email').addEventListener('click', (e) => { // email pop-up hide func
      if (e.target.id == 'emailWrap' || e.target.id == 'email') {
        $('#email').fadeOut();
        $('body').css({ overflow: 'auto' });
      }
    });
  }

  $('.popup-close').click(function () {
    $(this).parents('.popup-fade').fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut();
    }
  });

  $('.popup-fade').click(function (e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();
    }
  });
});

function change_section(switchButton, targetSectionId, aciveSectionClass, selctedButtonClass) {

  document.getElementsByClassName(aciveSectionClass)[0].classList.remove(aciveSectionClass);
  document.getElementById(targetSectionId).classList.add(aciveSectionClass);

  document.getElementsByClassName(selctedButtonClass)[0].classList.remove(selctedButtonClass);
  switchButton.classList.add(selctedButtonClass);
}