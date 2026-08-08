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

  /* ---------- Header com sombra + barra de progresso ao rolar ---------- */
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    faders.forEach((el) => fadeObserver.observe(el));
  } else {
    faders.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Parallax suave na imagem do hero ---------- */
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg && !prefersReducedMotion) {
    let bgTicking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!bgTicking) {
          window.requestAnimationFrame(() => {
            const offset = window.scrollY * 0.25;
            heroBg.style.transform = `translateY(${offset}px) scale(1.08)`;
            bgTicking = false;
          });
          bgTicking = true;
        }
      },
      { passive: true }
    );
  }

  /* ---------- Parallax das formas flutuantes no hero (mousemove) ---------- */
  const hero = document.querySelector(".hero");
  const floatShapes = document.querySelectorAll(".float-shape");
  if (hero && floatShapes.length && hasFinePointer && !prefersReducedMotion) {
    let moveTicking = false;
    let lastX = 0.5, lastY = 0.5;
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      lastX = (e.clientX - rect.left) / rect.width - 0.5;
      lastY = (e.clientY - rect.top) / rect.height - 0.5;
      if (!moveTicking) {
        window.requestAnimationFrame(() => {
          floatShapes.forEach((shape) => {
            const depth = parseFloat(shape.dataset.depth) || 20;
            shape.style.transform = `translate(${lastX * depth}px, ${lastY * depth}px)`;
          });
          moveTicking = false;
        });
        moveTicking = true;
      }
    });
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

    const hoverTargets = document.querySelectorAll("a, button, .product-card");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => cursorRing.classList.add("is-active"));
      el.addEventListener("mouseleave", () => cursorRing.classList.remove("is-active"));
    });
  }

  /* ---------- Cartões de produto: flip + spotlight ---------- */
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    const spotlight = card.querySelector(".spotlight");

    const toggleFlip = () => card.classList.toggle("is-flipped");
    card.addEventListener("click", toggleFlip);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
    });

    if (spotlight && hasFinePointer && !prefersReducedMotion) {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const sx = ((e.clientX - rect.left) / rect.width) * 100;
        const sy = ((e.clientY - rect.top) / rect.height) * 100;
        spotlight.style.setProperty("--sx", sx + "%");
        spotlight.style.setProperty("--sy", sy + "%");
      });
    }
  });

  /* ---------- Nav de categorias: scroll-to + scroll-spy ---------- */
  const pills = document.querySelectorAll(".cat-pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const target = document.getElementById(pill.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center", inline: "center" });
      }
    });
  });

  if ("IntersectionObserver" in window && productCards.length) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const pill = document.querySelector(`.cat-pill[data-target="${entry.target.id}"]`);
          if (!pill) return;
          if (entry.isIntersecting) {
            pills.forEach((p) => p.classList.remove("is-active"));
            pill.classList.add("is-active");
          }
        });
      },
      { threshold: 0.55 }
    );
    productCards.forEach((card) => spyObserver.observe(card));
  }

  /* ---------- Toggle Loja Física / Online ---------- */
  const storeSwitch = document.querySelector(".store-switch");
  if (storeSwitch) {
    const switchBtns = storeSwitch.querySelectorAll(".switch-btn");
    const panes = storeSwitch.querySelectorAll(".switch-pane");
    switchBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const pane = btn.dataset.pane;
        storeSwitch.dataset.active = pane;
        switchBtns.forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        panes.forEach((p) => {
          const match = p.id === `pane-${pane}`;
          p.classList.toggle("is-active", match);
          p.hidden = !match;
        });
      });
    });
  }

  /* ---------- Botões magnéticos ---------- */
  if (hasFinePointer && !prefersReducedMotion) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${relX * 0.12}px, ${relY * 0.18}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0, 0)";
      });
    });
  }

  /* ---------- Sparkles no CTA do Grupo VIP ---------- */
  const sparkleSource = document.querySelector(".sparkle-source");
  if (sparkleSource && hasFinePointer && !prefersReducedMotion) {
    const spawnSparkles = (x, y) => {
      const rect = sparkleSource.getBoundingClientRect();
      const localX = x - rect.left;
      const localY = y - rect.top;
      const count = 8;
      for (let i = 0; i < count; i++) {
        const s = document.createElement("span");
        s.className = "sparkle";
        s.textContent = "✦";
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const distance = 40 + Math.random() * 30;
        s.style.left = localX + "px";
        s.style.top = localY + "px";
        s.style.setProperty("--sx2", Math.cos(angle) * distance + "px");
        s.style.setProperty("--sy2", Math.sin(angle) * distance + "px");
        sparkleSource.appendChild(s);
        s.addEventListener("animationend", () => s.remove());
      }
    };
    sparkleSource.addEventListener("mouseenter", (e) => spawnSparkles(e.clientX, e.clientY));
  }
});
