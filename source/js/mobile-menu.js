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
  navToggle.removeEventListener('click', openMobileMenu);
  navToggle.addEventListener('click', closeMobileMenu);
  document.addEventListener('mouseup', clickOutsideMobileMenu);
};

const closeMobileMenu = () => {
  nav.classList.add('navigation--closed');
  navToggle.classList.remove('navigation__toggle--close');
  navToggle.classList.add('navigation__toggle--open');
  body.style.overflow = 'scroll';
  navToggle.removeEventListener('click', closeMobileMenu);
  navToggle.addEventListener('click', openMobileMenu);
  document.removeEventListener('mouseup', clickOutsideMobileMenu);
};

const mobileMenuHandler = () => {
  navToggle.addEventListener('click', openMobileMenu);
};

const clickOutsideMobileMenu = (evt) => {
  if (evt.target.classList.contains('navigation__list') || evt.target.classList.contains('navigation__item') || evt.target.classList.contains('navigation__toggle')) {
    return evt;
  }

  return closeMobileMenu();
};

export {mobileMenuHandler};
