export function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle')!;
  const menu = document.getElementById('mobile-menu')!;
  const iconMenu = document.getElementById('icon-menu')!;
  const iconClose = document.getElementById('icon-close')!;

  let isOpen = false;

  toggle.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      menu.style.gridTemplateRows = '1fr';
      menu.classList.remove('border-transparent');
      menu.classList.add('border-neutral-200');
    } else {
      menu.style.gridTemplateRows = '0fr';
      menu.classList.remove('border-neutral-200');
      menu.classList.add('border-transparent');
    }

    iconMenu.classList.toggle('hidden', isOpen);
    iconClose.classList.toggle('hidden', !isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
