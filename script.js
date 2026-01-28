(() => {
  // ========= CONFIG =========
  // Troque para o WhatsApp real do cliente:
  const WHATSAPP_NUMBER = "5571999999999"; // <-- coloque aqui ex: 5571981988973
  const DEFAULT_MSG = "Oi! Quero agendar uma avaliação na Clínica Aura.";

  // ========= HELPERS =========
  const $ = (q, el = document) => el.querySelector(q);
  const $$ = (q, el = document) => Array.from(el.querySelectorAll(q));

  function waLink(message) {
    const text = encodeURIComponent(message || DEFAULT_MSG);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }

  // ========= YEAR =========
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ========= REVEAL ON SCROLL =========
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  $$(".reveal").forEach((el) => io.observe(el));

  // ========= NAV (MOBILE) =========
  const navBtn = $("#navbtn");
  const nav = $("#nav");
  if (navBtn && nav) {
    navBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", String(open));
    });

    // close nav when click a link
    $$("#nav a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navBtn.setAttribute("aria-expanded", "false");
      })
    );
  }

  // ========= WHATSAPP LINKS =========
  // Any element with data-wa becomes a WhatsApp deep link
  $$("[data-wa]").forEach((el) => {
    const msg = el.getAttribute("data-wa") || DEFAULT_MSG;

    if (el.tagName.toLowerCase() === "a") {
      el.setAttribute("href", waLink(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    } else {
      el.addEventListener("click", () =>
        window.open(waLink(msg), "_blank", "noopener")
      );
    }
  });

  // ========= SCROLL PROGRESS =========
  const progress = $(".scroll-progress");
  function updateProgress() {
    if (!progress) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const p = docH > 0 ? scrollTop / docH : 0;
    progress.style.transform = `scaleX(${Math.max(0, Math.min(1, p))})`;
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // ========= TESTIMONIALS CAROUSEL =========
  const track = $("#ttrack");
  const viewport = $("#tviewport");
  const prev = $("#prev");
  const next = $("#next");

  let idx = 0;

  function cardWidth() {
    if (!track || !viewport) return 0;
    const first = track.children[0];
    if (!first) return 0;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap || "0") || 0;
    return first.getBoundingClientRect().width + gap;
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function maxIdx() {
    if (!track || !viewport) return 0;
    const cw = cardWidth();
    if (!cw) return 0;
    const visible = Math.max(
      1,
      Math.floor(viewport.getBoundingClientRect().width / cw)
    );
    const total = track.children.length;
    return Math.max(0, total - visible);
  }

  function go(to) {
    if (!track) return;
    idx = clamp(to, 0, maxIdx());
    const x = -(idx * cardWidth());
    track.style.transform = `translateX(${x}px)`;
  }

  if (prev && next) {
    prev.addEventListener("click", () => go(idx - 1));
    next.addEventListener("click", () => go(idx + 1));
    window.addEventListener("resize", () => go(idx));
  }

  // Touch swipe for mobile
  if (viewport && track) {
    let startX = 0;
    let lastX = 0;
    let dragging = false;

    viewport.addEventListener(
      "touchstart",
      (e) => {
        dragging = true;
        startX = e.touches[0].clientX;
        lastX = startX;
      },
      { passive: true }
    );

    viewport.addEventListener(
      "touchmove",
      (e) => {
        if (!dragging) return;
        lastX = e.touches[0].clientX;
      },
      { passive: true }
    );

    viewport.addEventListener("touchend", () => {
      if (!dragging) return;
      const dx = lastX - startX;
      if (Math.abs(dx) > 40) {
        go(dx < 0 ? idx + 1 : idx - 1);
      }
      dragging = false;
    });
  }

  // ========= MODAL (Treatment details) =========
  const modal = $("#modal");
  const modalTitle = $("#modalTitle");
  const modalText = $("#modalText");
  const modalWA = $("#modalWA");

  function openModal(title, text) {
    if (!modal) return;
    if (modalTitle) modalTitle.textContent = title || "Detalhes";
    if (modalText) modalText.textContent = text || "";
    if (modalWA) {
      const msg = `Oi! Quero agendar. Tenho interesse em: ${title}.`;
      modalWA.setAttribute("data-wa", msg);
      modalWA.setAttribute("href", waLink(msg));
      modalWA.setAttribute("target", "_blank");
      modalWA.setAttribute("rel", "noopener");
    }
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
  }

  $$("[data-open='modal']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-modal-title");
      const text = btn.getAttribute("data-modal-text");
      openModal(title, text);
    });
  });

  $$("[data-close='modal']").forEach((el) =>
    el.addEventListener("click", closeModal)
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.getAttribute("aria-hidden") === "false")
      closeModal();
  });
})();
