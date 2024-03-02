console.log('kyoto430 template js running...');

// Меню бургер
function burger() {
  const burgerBtn = document.querySelector('.menu__burger');
  const menu = document.querySelector('.header-adaptive__menu');
  const menuLinks = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');

  burgerBtn.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('lock');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      document.body.classList.remove('lock');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
}

burger();

//Попапы
function popups() {
  let popupLinks = document.querySelectorAll('.popup-link');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll('.lock-padding');

  let unlock = true;

  const timeout = 500;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
        bodyUnLock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.getElementsByTagName('body').offsetWidth +
      'px';
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('locker');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('locker');
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
}

popups();

function showMoreText() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButtons = document.querySelectorAll('.btn-show');
    const hiddenText = document.querySelectorAll('.seo__text-hidden');

    showMoreButtons.forEach(function (showMoreButton) {
      showMoreButton.addEventListener('click', function () {
        hiddenText.forEach(function (text) {
          if (text.style.transform !== 'scale(1)') {
            text.style.position = 'initial';
            text.style.transform = 'scale(1)';
            showMoreButton.innerText = 'Скрыть';
            showMoreButton.classList.add('arrow-up');
          } else {
            text.style.position = 'absolute';
            text.style.transform = 'scale(0)';
            showMoreButton.innerText = 'Раскрыть текст';
            showMoreButton.classList.remove('arrow-up');
          }
        });
      });
    });
  });
}

showMoreText();

function hideBlocks() {
  const programmCards = document.querySelectorAll('.programm__sublist');
  programmCards.forEach(function (programmCard) {
    programmCard.classList.add('programm-hidden');
  });
}

hideBlocks();

function showMoreProgramm() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButtons = document.querySelectorAll('.btn-show__programm');
    const hideEmptyProgramm = document.querySelectorAll('.programm__list-item');

    hideEmptyProgramm.forEach(function (emptyProgramm) {
      const programmDayContent =
        emptyProgramm.querySelector('.programm__sublist');
      if (programmDayContent.offsetHeight <= 0) {
        emptyProgramm.classList.add('visually-hidden');
      }
    });
    showMoreButtons.forEach(function (showMoreButton) {
      let menu = showMoreButton.previousElementSibling;
      let title = showMoreButton.previousElementSibling.previousElementSibling;
      showMoreButton.addEventListener('click', function () {
        if (menu.style.transform !== 'scale(1)') {
          menu.style.position = 'initial';
          menu.style.transform = 'scale(1)';
          if (window.innerWidth >= 425) {
          }
          title.classList.add('active-title');
          showMoreButton.classList.add('up');
        } else {
          menu.style.position = 'absolute';
          menu.style.transform = 'scale(0)';
          title.classList.remove('active-title');
          showMoreButton.classList.remove('up');
        }
      });
    });
  });
}

showMoreProgramm();

const profilsList = document.querySelectorAll('.profils__list-item');

profilsList.forEach((profilItem) => {
  profilItem.addEventListener('click', () => {
    let profilSublist = profilItem.querySelector('.profils__sublist-inner');
    let profilImg = profilItem.querySelector('.profils__img');
    let profilInner = profilItem.querySelector('.profils__list-inner');
    profilItem.classList.toggle('max-width');
    profilSublist.classList.toggle('sublist-show');
    profilImg.classList.toggle('img-show');
    profilInner.classList.toggle('border');
  });
});
