let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

nav.classList.remove('navigation--nojs');

const openMobileMenu = () => {
  nav.classList.remove('navigation--closed');
  navToggle.classList.remove('navigation__toggle--open');
  navToggle.classList.add('navigation__toggle--close');
};

const closeMobileMenu = () => {
  nav.classList.add('navigation--closed');
  navToggle.classList.remove('navigation__toggle--close');
  navToggle.classList.add('navigation__toggle--open');
};

const toggleMobileMenu = () => {
  if (nav.classList.contains('navigation--closed')) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
};

const mobileMenuHandler = () => {
  navToggle.addEventListener('click', toggleMobileMenu);
};

export {mobileMenuHandler};
