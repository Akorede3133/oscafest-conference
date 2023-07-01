const hamburgerBtn = document.querySelector('.header--hamburger');
const navContainer = document.querySelector('.header--nav--container');
const headerLogo = document.querySelector('.header--logo');
const headerSocial = document.querySelector('.header--social');
const headerHeroSection = document.querySelector('.about--hero--section');
const closeIcon = document.querySelector('.nav--close--icon');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
hamburgerBtn.addEventListener('click', () => {
  navContainer.classList.add('show--header--nav--container');
  headerLogo.classList.add('blur');
  headerSocial.classList.add('blur');
  hamburgerBtn.classList.add('blur');
  main.classList.add('blur');
  footer.classList.add('blur');
  headerHeroSection.classList.add('blur');
});
closeIcon.addEventListener('click', () => {
  navContainer.classList.remove('show--header--nav--container');
  headerLogo.classList.remove('blur');
  headerSocial.classList.remove('blur');
  hamburgerBtn.classList.remove('blur');
  main.classList.remove('blur');
  footer.classList.remove('blur');
  headerHeroSection.classList.remove('blur');
});