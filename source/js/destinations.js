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

const destinationElements = document.querySelectorAll('.destinations__item');
const destinationExtraElements = document.querySelectorAll('.destinations__extra');
const destinationDescriptionElements = document.querySelectorAll('.destinations__item-description');
const destinationButtonElements = document.querySelectorAll('.destinations__extra-button');

const isTabKey = (evt) => evt.key === 'Tab';

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
        destinationElements[i].style.backgroundImage = 'url("../img/destinations-astoria.jpg")';
        break;
      case Destinations.ELAIN:
        destinationElements[i].style.backgroundImage = 'url("../img/destinations-elain.jpg")';
        break;
      case Destinations.ATLANTIS:
        destinationElements[i].style.backgroundImage = 'url("../img/destinations-atlantis.jpg")';
        break;
      case Destinations.ODISSEY:
        destinationElements[i].style.backgroundImage = 'url("../img/destinations-odissey.jpg")';
        break;
      case Destinations.OLIMPIA:
        destinationElements[i].style.backgroundImage = 'url("../img/destinations-olimpia.jpg")';
        break;
      case Destinations.AURORA:
        destinationElements[i].style.backgroundImage = 'url("../img/destinations-aurora.jpg")';
        break;
      case Destinations.LEONOR:
        destinationElements[i].style.backgroundImage = 'url("../img/destinations-leonor.jpg")';
        break;
      case Destinations.MINION:
        destinationElements[i].style.backgroundImage = 'url("../img/destinations-minion.jpg")';
        break;
    }
  }
};

const hideExtraDescriptionByMouse = () => {
  for (let i = 0; i < destinationElements.length; i++) {
    destinationElements[i].addEventListener('mouseleave', () => {
      hideExtraDescription();
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
// const destinationElementsLoseFocus = () => destinationElements.forEach((item) => item.addEventListener('focus', hideExtraDescription));
const destinationButtonElementsLoseFocus = () => destinationButtonElements.forEach((item) => item.addEventListener('blur', hideExtraDescription));

const destinationCardToggler = () => {
  // destinationElementsLoseFocus();
  hideExtraDescriptionByMouse();
  showExtraDescriptionByMouse();
  destinationButtonElementsLoseFocus();
  destinationElementsGetFocus();
  destinationElementsGetPreviousFocus();
};

export {destinationCardToggler};
