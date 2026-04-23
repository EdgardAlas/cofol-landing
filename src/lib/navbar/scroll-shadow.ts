export function initScrollShadow() {
  const header = document.getElementById('site-header')!;

  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  };

  window.addEventListener('scroll', checkScroll, { passive: true });

  checkScroll();
}
