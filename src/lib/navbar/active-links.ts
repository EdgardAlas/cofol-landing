export function initActiveLinks() {
  const BOTTOM_THRESHOLD = 50;

  const getSectionIdFromHref = (href: string | null) => {
    if (!href) return null;
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return null;

    const id = href.slice(hashIndex + 1).trim();
    return id.length > 0 ? id : null;
  };

  const desktopLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
  const mobileLinks = document.querySelectorAll<HTMLAnchorElement>('.mobile-nav-link');
  const allLinks = [...Array.from(desktopLinks), ...Array.from(mobileLinks)];

  const sectionIds = Array.from(desktopLinks)
    .map((link) => getSectionIdFromHref(link.getAttribute('href')))
    .filter((id): id is string => id !== null);

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);

  let isUpdatePending = false;
  let activeId: string | null = null;

  const updateActive = () => {
    const navbar = document.getElementById('site-header');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const triggerLine = navbarHeight + 10;

    let activeCandidate: string | null = sections.length > 0 ? sections[0].id : null;

    for (const section of sections) {
      const box = section.getBoundingClientRect();
      if (box.top <= triggerLine) {
        activeCandidate = section.id;
      }
    }

    const isNearBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - BOTTOM_THRESHOLD;
    if (isNearBottom && sections.length > 0) {
      activeCandidate = sections[sections.length - 1].id;
    }

    if (activeCandidate !== activeId) {
      activeId = activeCandidate;

      allLinks.forEach((link) => {
        const targetId = getSectionIdFromHref(link.getAttribute('href'));
        if (targetId === activeId) {
          link.dataset.active = '';
        } else {
          delete link.dataset.active;
        }
      });
    }
  };

  const handleViewportChange = () => {
    if (!isUpdatePending) {
      requestAnimationFrame(() => {
        updateActive();
        isUpdatePending = false;
      });
      isUpdatePending = true;
    }
  };

  addEventListener('scroll', handleViewportChange, { passive: true });
  addEventListener('resize', handleViewportChange, { passive: true });

  updateActive();

  const observer = new IntersectionObserver(() => updateActive(), {
    threshold: [0, 0.5, 1],
  });

  sections.forEach((section) => observer.observe(section));
}
