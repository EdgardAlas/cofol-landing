export function initActiveLinks() {
  const TOP_THRESHOLD = 100;
  const BOTTOM_THRESHOLD = 50;
  const CURRENT_SECTION_BONUS = 10;

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
    let activeCandidate: string | null = null;
    let maxVisibleHeight = 0;

    const navbar = document.getElementById('site-header');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const viewportTop = navbarHeight;
    const viewportBottom = window.innerHeight;

    sections.forEach((section) => {
      const box = section.getBoundingClientRect();

      const visibleTop = Math.max(box.top, viewportTop);
      const visibleBottom = Math.min(box.bottom, viewportBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      const isActive = section.id === activeId;
      const bonus = isActive ? CURRENT_SECTION_BONUS : 0;

      if (visibleHeight + bonus > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        activeCandidate = section.id;
      }
    });

    const isNearTop = window.scrollY < TOP_THRESHOLD;
    if (isNearTop && sections.length > 0) {
      activeCandidate = sections[0].id;
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
