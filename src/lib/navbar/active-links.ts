export function initActiveLinks() {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
  const mobileNavLinks = document.querySelectorAll<HTMLAnchorElement>('.mobile-nav-link');
  const sectionIds = Array.from(navLinks).map((l) => l.getAttribute('href')!.slice(1));
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];

  const visibleSections = new Set<string>();

  const setActiveLink = () => {
    let closest: string | null = null;
    let closestDist = Infinity;

    visibleSections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const dist = Math.abs(el.getBoundingClientRect().top);
      if (dist < closestDist) {
        closestDist = dist;
        closest = id;
      }
    });

    [...navLinks, ...mobileNavLinks].forEach((link) => {
      const id = link.getAttribute('href')!.slice(1);

      if (id === closest) {
        link.dataset.active = '';
      } else {
        delete link.dataset.active;
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });
      setActiveLink();
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
}
