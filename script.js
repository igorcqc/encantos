/* ==========================================================================
   Encantos Home&Decor — micro-interações
   Fade-in no scroll + leve parallax na imagem do hero.
   Vanilla JS, sem dependências.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Ano dinâmico no rodapé
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header com sombra ao rolar
  const header = document.querySelector(".site-header");
  const onScrollHeader = () => {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  // Fade-in ao entrar na viewport
  const faders = document.querySelectorAll(".fade-in");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    faders.forEach((el) => el.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    faders.forEach((el) => observer.observe(el));
  } else {
    faders.forEach((el) => el.classList.add("is-visible"));
  }

  // Parallax suave na imagem do hero
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg && !prefersReducedMotion) {
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const offset = window.scrollY * 0.25;
            heroBg.style.transform = `translateY(${offset}px) scale(1.08)`;
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }
});
