// hamburger button
const btnOpen = document.querySelector('#btnOpen');
// create MediaQueryList object
const media = window.matchMedia('(width < 700px)');
const topNavMenu = document.querySelector('.topnav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');
// =============================
function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenu.removeAttribute('style');
  main.setAttribute('inert', '');
  // bodyScrollLockUpgrade.disableBodyScroll(body);
  btnOpen.addEventListener('click', closeMobileMenu);
  btnOpen.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  topNavMenu.setAttribute('inert', '');
  main.removeAttribute('inert');
  // bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  btnOpen.removeEventListener('click', closeMobileMenu);
  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 300);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log('is mobile');
    topNavMenu.setAttribute('inert', '');
		topNavMenu.style.transition = 'none';
		btnOpen.setAttribute('aria-expanded', 'false');
    // Close the menu when a link is clicked
    topNavMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    topNavMenu.style.transition = 'none';
  } else {
    // is tablet/desktop
    console.log('is desktop');
    // closeMobileMenu();
		topNavMenu.style.transition = 'none';
		btnOpen.setAttribute('aria-expanded', 'true');
		// topNavMenu.toggleAttribute('hidden');
    topNavMenu.removeAttribute('inert');
    topNavMenu.querySelectorAll('a').forEach((link) => {
      link.removeEventListener('click', closeMobileMenu);
    });
  }
}
// =============================

// initial nav setup
setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);

// MediaQueryList will handle changes
media.addEventListener('change', function (e) {
  setupTopNav(e);
});
