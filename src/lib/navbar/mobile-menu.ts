export function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !menu || !iconMenu || !iconClose) return;

  let isOpen = false;

  const updateMenuState = (open: boolean) => {
    isOpen = open;
    menu.style.gridTemplateRows = isOpen ? '1fr' : '0fr';
    iconMenu.classList.toggle('hidden', isOpen);
    iconClose.classList.toggle('hidden', !isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  };

  toggle.addEventListener('click', () => {
    updateMenuState(!isOpen);
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      updateMenuState(false);
    });
  });
}
