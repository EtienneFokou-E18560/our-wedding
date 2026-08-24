(() => {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const countdownEl = document.querySelector("[data-countdown]");

  const weddingDate = new Date("2026-09-05T12:00:00-04:00");

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 40);
  }

  function updateCountdown() {
    if (!countdownEl) return;
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();
    if (diff <= 0) {
      countdownEl.textContent = "Today is the day";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    countdownEl.textContent =
      days === 0
        ? `Ceremony in ${hours} hour${hours === 1 ? "" : "s"}`
        : `${days} day${days === 1 ? "" : "s"} to go`;
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  updateHeader();
  updateCountdown();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.setInterval(updateCountdown, 60_000);
})();
