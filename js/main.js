/* D.J. Paletten – Interaktionen */
(function () {
  "use strict";

  // Kontaktdaten
  var RECIPIENT = "info@djpaletten.de";
  var PHONE = "01578 6591425";

  // Aktuelles Jahr im Footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Logo: echtes logo.png verwenden, sobald vorhanden – sonst SVG-Ersatzlogo.
  var logoImg = document.querySelector(".logo-img");
  var logoFallback = document.querySelector(".logo-fallback");
  if (logoImg && logoFallback) {
    logoImg.addEventListener("load", function () {
      logoImg.style.display = "block";
      logoFallback.style.display = "none";
    });
    logoImg.addEventListener("error", function () { logoImg.remove(); });
  }

  // Mobile-Navigation
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");
  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
    navList.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Header-Schatten beim Scrollen + Back-to-Top-Button
  var header = document.querySelector(".site-header");
  var toTop = document.getElementById("to-top");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 12);
    if (toTop) toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll-Reveal-Animation
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          setTimeout(function () { el.classList.add("in"); }, (i % 6) * 70);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add("in"); });
  }

  // Galerie: fehlt ein Foto, zeigen wir einen dezenten Platzhalter statt eines kaputten Bildes.
  Array.prototype.forEach.call(document.querySelectorAll(".gallery-item img"), function (img) {
    img.addEventListener("error", function () {
      var fig = img.closest(".gallery-item");
      if (fig) fig.classList.add("img-missing");
      img.style.display = "none";
    });
  });

  // Kontaktformular
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  function setStatus(msg, type) {
    if (!status) return;
    status.textContent = msg;
    status.className = "form-status show " + type;
  }

  if (form) {
    // Ist ein echtes Formspree-Ziel hinterlegt? (Platzhalter "xxxxxxxx" = noch nicht aktiviert)
    var action = form.getAttribute("action") || "";
    var formspreeReady = action.indexOf("formspree.io") !== -1 && action.indexOf("xxxxxxxx") === -1;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !message) {
        setStatus("Bitte füllen Sie alle Pflichtfelder korrekt aus.", "err");
        return;
      }

      if (formspreeReady) {
        // Echter Versand ohne Seitenwechsel via Formspree.
        var btn = form.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; btn.textContent = "Wird gesendet …"; }
        fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        }).then(function (res) {
          if (res.ok) {
            form.reset();
            setStatus("Vielen Dank! Ihre Anfrage wurde gesendet – wir melden uns zeitnah.", "ok");
          } else {
            setStatus("Das hat leider nicht geklappt. Bitte rufen Sie uns unter " + PHONE + " an.", "err");
          }
        }).catch(function () {
          setStatus("Das hat leider nicht geklappt. Bitte rufen Sie uns unter " + PHONE + " an.", "err");
        }).finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = "Anfrage absenden"; }
        });
      } else {
        // Fallback bis Formspree aktiviert ist: E-Mail-Programm mit vorausgefüllter Mail öffnen.
        var subject = encodeURIComponent("Anfrage über die Webseite: " + form.subject.value);
        var body = encodeURIComponent(
          "Name: " + name + "\n" +
          "E-Mail: " + email + "\n" +
          "Telefon: " + form.phone.value.trim() + "\n" +
          "Anliegen: " + form.subject.value + "\n\n" + message
        );
        setStatus("Ihr E-Mail-Programm wird geöffnet, um die Anfrage an " + RECIPIENT + " zu senden.", "ok");
        window.location.href = "mailto:" + RECIPIENT + "?subject=" + subject + "&body=" + body;
      }
    });
  }
})();
