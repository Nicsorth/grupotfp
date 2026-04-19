// Grupo TFP Chile — interacciones mínimas

(function () {
  "use strict";

  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");
  const yearEl = document.getElementById("year");

  // Año dinámico en el footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sombra/borde del nav al hacer scroll
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menú móvil
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Cerrar al seleccionar un enlace
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Resaltar sección activa en la tabla de contenidos (tfp.html)
  const tocLinks = document.querySelectorAll(".article__toc a");
  if (tocLinks.length > 0 && "IntersectionObserver" in window) {
    const sections = Array.from(tocLinks)
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            tocLinks.forEach((link) => {
              link.classList.toggle(
                "is-active",
                link.getAttribute("href") === "#" + id
              );
            });
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }
})();
