/* ==========================================================================
   Encantos Home&Decor — micro-interações
   Vanilla JS, sem dependências. Tudo respeita prefers-reduced-motion.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- Ano dinâmico no rodapé ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header com contorno + barra de progresso ao rolar ---------- */
  const header = document.querySelector(".site-header");
  const progressFill = document.getElementById("progressFill");
  let scrollTicking = false;

  const onScroll = () => {
    if (header) {
      if (window.scrollY > 12) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    if (progressFill) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      progressFill.style.width = pct + "%";
    }
    scrollTicking = false;
  };
  onScroll();
  window.addEventListener(
    "scroll",
    () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(onScroll);
        scrollTicking = true;
      }
    },
    { passive: true }
  );

  /* ---------- Fade-in ao entrar na viewport ---------- */
  const faders = document.querySelectorAll(".fade-in");
  if (prefersReducedMotion) {
    faders.forEach((el) => el.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    faders.forEach((el) => fadeObserver.observe(el));
  } else {
    faders.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Cursor customizado ---------- */
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorRing = document.querySelector(".cursor-ring");
  if (cursorDot && cursorRing && hasFinePointer && !prefersReducedMotion) {
    document.body.classList.add("has-cursor");
    let ringX = 0, ringY = 0, targetX = 0, targetY = 0;

    window.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      cursorDot.style.left = targetX + "px";
      cursorDot.style.top = targetY + "px";
    });

    const animateRing = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      cursorRing.style.left = ringX + "px";
      cursorRing.style.top = ringY + "px";
      window.requestAnimationFrame(animateRing);
    };
    animateRing();

    const hoverTargets = document.querySelectorAll("a, button, summary");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => cursorRing.classList.add("is-active"));
      el.addEventListener("mouseleave", () => cursorRing.classList.remove("is-active"));
    });
  }

  /* ---------- Botões magnéticos (sutil, sem exagero) ---------- */
  if (hasFinePointer && !prefersReducedMotion) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${relX * 0.04}px, ${relY * 0.06}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0, 0)";
      });
    });
  }
});
