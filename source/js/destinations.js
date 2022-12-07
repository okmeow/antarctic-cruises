import {isHighResolutionScreen, isTabKey} from './utils.js';

const Destinations = {
  ASTORIA: 0,
  ELAIN: 1,
  ATLANTIS: 2,
  ODISSEY: 3,
  OLIMPIA: 4,
  AURORA: 5,
  LEONOR: 6,
  MINION: 7,
};

const WidthHeightCardsConstants = {
  DESKTOP: 1.4846,
  TABLET: 1.2492,
  MOBILE: 1.4296,
};

const destinationElements = document.querySelectorAll('.destinations__item');
const destinationExtraElements = document.querySelectorAll('.destinations__extra');
const destinationDescriptionElements = document.querySelectorAll('.destinations__item-description');
const destinationButtonElements = document.querySelectorAll('.destinations__extra-button');

const showExtraDescription = (i) => {
  destinationExtraElements[i].style.display = 'block';
  destinationDescriptionElements[i].style.display = 'none';
  destinationElements[i].style.backgroundImage = 'none';
  destinationElements[i].style.backgroundColor = '#011c40';
};

const showExtraDescriptionOnFocus = () => {
  for (let i = 0; i < destinationElements.length; i++) {
    if (document.activeElement === destinationElements[i]) {
      showExtraDescription(i);
    }
  }
};

const showExtraDescriptionByMouse = () => {
  for (let i = 0; i < destinationElements.length; i++) {
    destinationElements[i].addEventListener('mouseenter', () => {
      showExtraDescription(i);
    });
  }
};

const hideExtraDescription = () => {
  for (let i = 0; i < destinationElements.length; i++) {
    destinationElements[i].style.backgroundColor = '#011c40';
    destinationExtraElements[i].style.display = 'none';
    destinationDescriptionElements[i].style.display = 'block';

    switch (i) {
      case Destinations.ASTORIA:
        if (isHighResolutionScreen) {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-astoria@2x.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-astoria@2x.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-astoria@2x.jpg")';
          }
        } else {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-astoria.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-astoria.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-astoria.jpg")';
          }
        }
        break;
      case Destinations.ELAIN:
        if (isHighResolutionScreen) {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-elain@2x.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-elain@2x.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-elain@2x.jpg")';
          }
        } else {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-elain.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-elain.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-elain.jpg")';
          }
        }
        break;
      case Destinations.ATLANTIS:
        if (isHighResolutionScreen) {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-atlantis@2x.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-atlantis@2x.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-atlantis@2x.jpg")';
          }
        } else {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-atlantis.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-atlantis.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-atlantis.jpg")';
          }
        }
        break;
      case Destinations.ODISSEY:
        if (isHighResolutionScreen) {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-odissey@2x.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-odissey@2x.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-odissey@2x.jpg")';
          }
        } else {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-odissey.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-odissey.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-odissey.jpg")';
          }
        }
        break;
      case Destinations.OLIMPIA:
        if (isHighResolutionScreen) {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-olimpia@2x.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-olimpia@2x.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-olimpia@2x.jpg")';
          }
        } else {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-olimpia.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-olimpia.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-olimpia.jpg")';
          }
        }
        break;
      case Destinations.AURORA:
        if (isHighResolutionScreen) {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-aurora@2x.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-aurora@2x.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-aurora@2x.jpg")';
          }
        } else {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-aurora.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-aurora.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-aurora.jpg")';
          }
        }
        break;
      case Destinations.LEONOR:
        if (isHighResolutionScreen) {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-leonor@2x.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-leonor@2x.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-leonor@2x.jpg")';
          }
        } else {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-leonor.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-leonor.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-leonor.jpg")';
          }
        }
        break;
      case Destinations.MINION:
        if (isHighResolutionScreen) {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-minion@2x.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-minion@2x.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-minion@2x.jpg")';
          }
        } else {
          if (window.innerWidth >= 1024) {
            destinationElements[i].style.backgroundImage = 'url("./img/destinations-minion.jpg")';
          }
          if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
            destinationElements[i].style.backgroundImage = 'url("./img/tablet/destinations-minion.jpg")';
          }
          if (window.innerWidth <= 767) {
            destinationElements[i].style.backgroundImage = 'url("./img/mobile/destinations-minion.jpg")';
          }
        }
        break;
    }
  }
};

const hideExtraDescriptionByMouse = () => {
  for (let i = 0; i < destinationElements.length; i++) {
    destinationElements[i].addEventListener('mouseleave', () => {
      hideExtraDescription();
      document.activeElement.blur();
    });
  }
};

const destinationElementsGetPreviousFocus = () => {
  for (let i = 0; i < destinationElements.length; i++) {
    destinationElements[i].addEventListener('keydown', (evt) => {
      if (evt.shiftKey && isTabKey(evt)) {
        hideExtraDescription();
      }
    });
  }
};

const destinationElementsGetFocus = () => destinationElements.forEach((item) => item.addEventListener('focus', showExtraDescriptionOnFocus));
const destinationButtonElementsLoseFocus = () => destinationButtonElements.forEach((item) => item.addEventListener('blur', hideExtraDescription));

const destinationCardToggler = () => {
  hideExtraDescriptionByMouse();
  showExtraDescriptionByMouse();
  destinationButtonElementsLoseFocus();
  destinationElementsGetFocus();
  destinationElementsGetPreviousFocus();
};

// Блок кода, меняющий размеры карточек на резине

const setCardsSize = () => {
  for (let i = 0; i < destinationElements.length; i++) {
    destinationExtraElements[i].style.width = destinationElements[i].offsetWidth + 'px';
    if (window.innerWidth >= 1024) {
      destinationElements[i].style.height = destinationElements[i].offsetWidth * WidthHeightCardsConstants.DESKTOP + 'px';
      destinationExtraElements[i].style.height = destinationElements[i].style.height;
    }
    if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
      destinationElements[i].style.height = destinationElements[i].offsetWidth * WidthHeightCardsConstants.TABLET + 'px';
      destinationExtraElements[i].style.height = destinationElements[i].style.height;
    }
    if (window.innerWidth <= 767) {
      destinationElements[i].style.height = destinationElements[i].offsetWidth * WidthHeightCardsConstants.MOBILE + 'px';
      destinationExtraElements[i].style.height = destinationElements[i].style.height;
    }
  }
};

const cardsSizeHandler = () => {
  setCardsSize();
  window.addEventListener('resize', setCardsSize);
};


export {destinationCardToggler, cardsSizeHandler};
