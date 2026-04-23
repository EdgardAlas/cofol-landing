export function initScrollShadow() {
  const header = document.getElementById('site-header')!;

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 50) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    },
    { passive: true }
  );
}
