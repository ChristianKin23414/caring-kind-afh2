/* =========================================================
   Caring Kind AFH 2 — Shared interactive behaviors
   ========================================================= */

(function () {
  "use strict";

  /* --------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      const isOpen = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked (mobile UX)
    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --------- Fade-in on scroll ---------- */
  const fadeEls = document.querySelectorAll(".fade-in");
  if ("IntersectionObserver" in window && fadeEls.length) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    fadeEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback — just reveal everything
    fadeEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* --------- Contact form validation ---------- */
  const form = document.querySelector("#contact-form");
  if (form) {
    const successBox = form.querySelector(".form__success");

    const fields = [
      { id: "name", validate: (v) => v.trim().length >= 2, message: "Please enter your name." },
      {
        id: "email",
        validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
        message: "Please enter a valid email address."
      },
      {
        id: "phone",
        validate: (v) => v.trim() === "" || /^[\d\s()+\-.]{7,}$/.test(v.trim()),
        message: "Please enter a valid phone number (or leave blank)."
      },
      { id: "message", validate: (v) => v.trim().length >= 10, message: "Please share a bit more (10+ characters)." }
    ];

    function setError(field, message) {
      const input = form.querySelector("#" + field.id);
      const errorEl = form.querySelector('[data-error-for="' + field.id + '"]');
      if (!input || !errorEl) return;
      if (message) {
        input.classList.add("is-invalid");
        input.setAttribute("aria-invalid", "true");
        errorEl.textContent = message;
      } else {
        input.classList.remove("is-invalid");
        input.removeAttribute("aria-invalid");
        errorEl.textContent = "";
      }
    }

    // Live validation as user fixes fields
    fields.forEach(function (field) {
      const input = form.querySelector("#" + field.id);
      if (!input) return;
      input.addEventListener("blur", function () {
        if (!field.validate(input.value)) {
          setError(field, field.message);
        } else {
          setError(field, "");
        }
      });
      input.addEventListener("input", function () {
        if (input.classList.contains("is-invalid") && field.validate(input.value)) {
          setError(field, "");
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let firstInvalid = null;
      fields.forEach(function (field) {
        const input = form.querySelector("#" + field.id);
        if (!input) return;
        const isValid = field.validate(input.value);
        setError(field, isValid ? "" : field.message);
        if (!isValid && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) {
        firstInvalid.focus();
        if (successBox) successBox.classList.remove("is-visible");
        return;
      }

      // All valid — show success message (frontend-only demo)
      if (successBox) {
        successBox.classList.add("is-visible");
        successBox.focus && successBox.focus();
      }
      form.reset();
    });
  }

  /* --------- Footer year ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
