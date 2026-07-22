/* D.J. Paletten – Interaktionen */
(function () {
  "use strict";

  // Empfaenger-Adresse fuer das Kontaktformular.
  // Sobald eine Firmen-E-Mail vorliegt, hier eintragen (z. B. "info@dj-paletten.de").
  // Bleibt das Feld leer, verweist das Formular auf die Telefonnummer.
  var RECIPIENT = "";
  var PHONE = "0178 6591425";

  // Aktuelles Jahr im Footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile-Navigation
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });

    // Menü nach Klick auf einen Link schließen
    navList.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Kontaktformular – clientseitige Validierung + Feedback
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
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

      // Ohne hinterlegte E-Mail: freundlicher Hinweis auf den Telefonkontakt.
      if (!RECIPIENT) {
        setStatus(
          "Vielen Dank! Bitte rufen Sie uns für Ihre Anfrage unter " + PHONE + " an.",
          "ok"
        );
        return;
      }

      // mailto-Fallback ohne Backend, damit die Anfrage versendet werden kann.
      var subject = encodeURIComponent("Anfrage über die Webseite: " + form.subject.value);
      var body = encodeURIComponent(
        "Name: " + name + "\n" +
        "E-Mail: " + email + "\n" +
        "Telefon: " + form.phone.value.trim() + "\n" +
        "Anliegen: " + form.subject.value + "\n\n" +
        message
      );

      setStatus("Vielen Dank! Ihr E-Mail-Programm wird geöffnet, um die Anfrage zu senden.", "ok");
      window.location.href = "mailto:" + RECIPIENT + "?subject=" + subject + "&body=" + body;
      form.reset();
    });
  }

  function setStatus(msg, type) {
    if (!status) return;
    status.textContent = msg;
    status.className = "form-status " + type;
  }
})();
