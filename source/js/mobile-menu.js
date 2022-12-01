const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
const body = document.querySelector('[data-body="body"]');

nav.classList.remove('navigation--nojs');

const openMobileMenu = () => {
  nav.classList.remove('navigation--closed');
  navToggle.classList.remove('navigation__toggle--open');
  navToggle.classList.add('navigation__toggle--close');
  body.style.overflow = 'hidden';
};

const closeMobileMenu = () => {
  nav.classList.add('navigation--closed');
  navToggle.classList.remove('navigation__toggle--close');
  navToggle.classList.add('navigation__toggle--open');
  body.style.overflow = 'scroll';
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
