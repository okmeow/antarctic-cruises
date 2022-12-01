const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
const body = document.querySelector('[data-body="body"]');
const navLinks = document.querySelectorAll('[ data-link="nav-link"]');

nav.classList.remove('navigation--nojs');

navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    body.style.overflow = 'scroll';
  });
});

const openMobileMenu = () => {
  nav.classList.remove('navigation--closed');
  navToggle.classList.remove('navigation__toggle--open');
  navToggle.classList.add('navigation__toggle--close');
  body.style.overflow = 'hidden';
  document.addEventListener('mouseup', clickOutsideModalMenu);
};

const closeMobileMenu = () => {
  nav.classList.add('navigation--closed');
  navToggle.classList.remove('navigation__toggle--close');
  navToggle.classList.add('navigation__toggle--open');
  body.style.overflow = 'scroll';
  document.removeEventListener('mouseup', clickOutsideModalMenu);
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

const clickOutsideModalMenu = (evt) => {
  if (evt.target.classList.contains('navigation__list')) {
    return evt;
  }
  return closeMobileMenu();
};

export {mobileMenuHandler};
