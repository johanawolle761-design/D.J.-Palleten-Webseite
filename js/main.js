/* D.J. Paletten – Interaktionen + DE/EN-Übersetzung */
(function () {
  "use strict";

  var PHONE = "01578 6591425";
  var RECIPIENT = "info@djpaletten.de";

  /* ---------------- Übersetzungen ---------------- */
  var I18N = {
    "skip": ["Zum Inhalt springen", "Skip to content"],
    "nav.services": ["Leistungen", "Services"],
    "nav.gallery": ["Galerie", "Gallery"],
    "nav.about": ["Über uns", "About us"],
    "nav.location": ["Standort", "Location"],
    "nav.cta": ["Angebot anfragen", "Request a quote"],

    "hero.badge": ["★ 5,0 bei Google · 11 Rezensionen", "★ 5.0 on Google · 11 reviews"],
    "hero.h1a": ["Paletten in besten ", "Pallets in the best "],
    "hero.h1b": ["Händen", "hands"],
    "hero.lead": [
      "Ihr Partner in Rhede für An- & Verkauf, Sonderpalettenbau, Recycling und Entsorgung – zu fairen Preisen, mit zuverlässigem Service und persönlicher Beratung.",
      "Your partner in Rhede for buying & selling, custom pallet construction, recycling and disposal – at fair prices, with reliable service and personal advice."],
    "hero.btnQuote": ["Kostenloses Angebot anfragen", "Request a free quote"],
    "hero.usp1": ["An- & Verkauf", "Buying & selling"],
    "hero.usp2": ["Sonderpalettenbau", "Custom pallet construction"],
    "hero.usp3": ["Recycling & Entsorgung", "Recycling & disposal"],
    "hero.usp4": ["Deutschlandweit", "Nationwide"],

    "services.eyebrow": ["Leistungen", "Services"],
    "services.h2": ["Alles rund um Ihre Paletten", "Everything around your pallets"],
    "services.sub": [
      "Ob Sie Paletten loswerden, beschaffen oder eine Sonderanfertigung benötigen – bei D.J. Paletten bekommen Sie die passende Lösung aus einer Hand.",
      "Whether you want to sell, source or need a custom build – at D.J. Paletten you get the right solution from a single source."],
    "card1.t": ["An- & Verkauf", "Buying & selling"],
    "card1.d": ["Wir kaufen und verkaufen Europaletten, Einwegpaletten und Sonderformate – auch in großen Mengen.",
      "We buy and sell Euro pallets, one-way pallets and special formats – also in large quantities."],
    "card2.t": ["Palettenhandel", "Pallet trading"],
    "card2.d": ["Neue und aufgearbeitete Paletten in geprüfter Qualität, kurzfristig verfügbar zu fairen Konditionen.",
      "New and reconditioned pallets in checked quality, available at short notice at fair terms."],
    "card3.t": ["Sonderpalettenbau", "Custom pallet construction"],
    "card3.d": ["Individuelle Palettenmaße und Sonderanfertigungen nach Ihren Vorgaben – passgenau gefertigt.",
      "Individual pallet dimensions and custom builds to your specifications – made to fit."],
    "card4.t": ["Reparatur & Recycling", "Repair & recycling"],
    "card4.d": ["Beschädigte Paletten werden fachgerecht instand gesetzt und zurück in den Kreislauf geführt.",
      "Damaged pallets are professionally repaired and returned to circulation."],
    "card5.t": ["Entsorgung", "Disposal"],
    "card5.d": ["Nicht mehr verwendbare Paletten entsorgen wir umweltgerecht und nachhaltig für Sie.",
      "We dispose of unusable pallets in an environmentally friendly and sustainable way."],
    "card6.t": ["Service & Abholung", "Service & pickup"],
    "card6.d": ["Zuverlässiger Service und Abholung Ihrer Paletten – schnell und unkompliziert.",
      "Reliable service and pickup of your pallets – fast and easy."],

    "stats1": ["Google-Bewertung", "Google rating"],
    "stats2": ["Rezensionen", "Reviews"],
    "stats3": ["Standort Westfalen", "Location Westphalia"],
    "stats4": ["Sonderpalettenbau", "Custom construction"],
    "stats4v": ["nach Maß", "made to fit"],

    "gallery.eyebrow": ["Galerie", "Gallery"],
    "gallery.h2": ["Einblicke in unseren Betrieb", "Insights into our operation"],
    "gallery.sub": ["Vom sortierten Palettenlager bis zum Sonderpalettenbau in Rhede.",
      "From the sorted pallet warehouse to custom pallet construction in Rhede."],
    "g1": ["Lager & Logistik", "Warehouse & logistics"],
    "g2": ["Aufsatzkisten", "Collar boxes"],
    "g3": ["Aufsetzrahmen", "Pallet collars"],
    "g4": ["Neue Paletten", "New pallets"],
    "g5": ["Sonderpaletten", "Custom pallets"],
    "g6": ["D.J. Paletten", "D.J. Paletten"],

    "about.eyebrow": ["Über uns", "About us"],
    "about.h2": ["Ihr Palettenanbieter in Rhede", "Your pallet provider in Rhede"],
    "about.p": [
      "D.J. Paletten ist ein inhabergeführtes Unternehmen aus Rhede in Westfalen. Wir stehen für Handel, Reparatur und Service rund um Paletten – vom An- und Verkauf über den Sonderpalettenbau bis zu Recycling und Entsorgung.",
      "D.J. Paletten is an owner-managed company from Rhede in Westphalia. We stand for trade, repair and service around pallets – from buying and selling to custom pallet construction, recycling and disposal."],
    "about.li1": ["Persönliche Beratung und feste Ansprechpartner", "Personal advice and dedicated contacts"],
    "about.li2": ["Sonderpalettenbau nach individuellem Maß", "Custom pallet construction to individual dimensions"],
    "about.li3": ["Faire, transparente Preise ohne versteckte Kosten", "Fair, transparent prices with no hidden costs"],
    "about.li4": ["Nachhaltig durch Reparatur, Recycling & Entsorgung", "Sustainable through repair, recycling & disposal"],
    "about.badge": ["Top bewertet<br />bei Google", "Top rated<br />on Google"],
    "about.btnContact": ["Kontakt aufnehmen", "Get in touch"],
    "about.btnReviews": ["Google-Bewertungen ansehen", "View Google reviews"],

    "location.eyebrow": ["Standort", "Location"],
    "location.h2": ["So finden Sie uns", "How to find us"],
    "location.maplink": ["Route in Google Maps öffnen →", "Open route in Google Maps →"],

    "contact.eyebrow": ["Kontakt", "Contact"],
    "contact.h2": ["Angebot anfordern", "Request a quote"],
    "contact.p": ["Rufen Sie uns an oder schreiben Sie uns – wir melden uns schnellstmöglich mit einem fairen Angebot zurück.",
      "Call us or send us a message – we'll get back to you as soon as possible with a fair offer."],
    "contact.tel": ["Telefon", "Phone"],
    "contact.email": ["E-Mail", "Email"],
    "contact.addr": ["Adresse", "Address"],

    "form.name": ["Name *", "Name *"],
    "form.email": ["E-Mail *", "Email *"],
    "form.phone": ["Telefon", "Phone"],
    "form.country": ["Land", "Country"],
    "form.subject": ["Ich möchte …", "I would like to …"],
    "form.opt1": ["Paletten verkaufen", "Sell pallets"],
    "form.opt2": ["Paletten kaufen", "Buy pallets"],
    "form.opt3": ["Sonderpalette anfragen", "Request a custom pallet"],
    "form.opt4": ["Entsorgung / Recycling", "Disposal / recycling"],
    "form.opt5": ["Sonstiges", "Other"],
    "form.message": ["Ihre Nachricht *", "Your message *"],
    "form.ph": ["Palettenart, Menge, Zustand, Ort …", "Pallet type, quantity, condition, location …"],
    "form.submit": ["Anfrage absenden", "Send request"],
    "form.note": ["* Pflichtfelder. Ihre Daten werden vertraulich behandelt (siehe <a href=\"datenschutz.html\">Datenschutz</a>).",
      "* Required fields. Your data is treated confidentially (see <a href=\"datenschutz.html\">Privacy</a>)."],

    "c.de": ["Deutschland", "Germany"],
    "c.at": ["Österreich", "Austria"],
    "c.ch": ["Schweiz", "Switzerland"],
    "c.nl": ["Niederlande", "Netherlands"],
    "c.be": ["Belgien", "Belgium"],
    "c.lu": ["Luxemburg", "Luxembourg"],
    "c.fr": ["Frankreich", "France"],
    "c.pl": ["Polen", "Poland"],
    "c.dk": ["Dänemark", "Denmark"],
    "c.cz": ["Tschechien", "Czechia"],
    "c.it": ["Italien", "Italy"],
    "c.other": ["Anderes Land", "Other country"],

    "cta.h2": ["Paletten abzugeben oder gesucht?", "Pallets to sell or looking to buy?"],
    "cta.p": ["Ein Anruf genügt – wir machen Ihnen ein faires Angebot.", "One call is enough – we'll make you a fair offer."],
    "cta.btn": ["📞 Jetzt anrufen: 01578 6591425", "📞 Call now: 01578 6591425"],

    "footer.desc": ["Handel · Reparatur · Service rund um Paletten in Rhede. An- & Verkauf, Sonderpalettenbau, Recycling und Entsorgung.",
      "Trade · Repair · Service around pallets in Rhede. Buying & selling, custom pallet construction, recycling and disposal."],
    "footer.site": ["Seite", "Site"],
    "footer.rights": ["Alle Rechte vorbehalten.", "All rights reserved."],
    "footer.imprint": ["Impressum", "Imprint"],
    "footer.privacy": ["Datenschutz", "Privacy"],

    // Formular-Meldungen (nicht im DOM, per JS genutzt)
    "msg.required": ["Bitte füllen Sie alle Pflichtfelder korrekt aus.", "Please fill in all required fields correctly."],
    "msg.sending": ["Wird gesendet …", "Sending …"],
    "msg.ok": ["Vielen Dank! Ihre Anfrage wurde gesendet – wir melden uns zeitnah.", "Thank you! Your request has been sent – we'll get back to you soon."],
    "msg.fail": ["Das hat leider nicht geklappt. Bitte rufen Sie uns unter " + PHONE + " an.", "Sorry, that didn't work. Please call us at " + PHONE + "."],
    "msg.mailto": ["Ihr E-Mail-Programm wird geöffnet, um die Anfrage an " + RECIPIENT + " zu senden.", "Your email program will open to send the request to " + RECIPIENT + "."]
  };

  var LANGS = ["de", "en"];
  var lang = "de";
  function t(key) { var e = I18N[key]; return e ? e[lang === "en" ? 1 : 0] : key; }

  function applyLang(l) {
    lang = (l === "en") ? "en" : "de";
    document.documentElement.setAttribute("lang", lang);
    var idx = lang === "en" ? 1 : 0;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = I18N[el.getAttribute("data-i18n")];
      if (v) el.textContent = v[idx];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = I18N[el.getAttribute("data-i18n-html")];
      if (v) el.innerHTML = v[idx];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var v = I18N[el.getAttribute("data-i18n-ph")];
      if (v) el.setAttribute("placeholder", v[idx]);
    });
    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      var v = I18N[el.getAttribute("data-i18n-label")];
      if (v) el.setAttribute("data-label", v[idx]);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("djp-lang", lang); } catch (e) {}
  }

  // Startsprache: gespeichert > Browser (en) > Standard de
  var saved = null;
  try { saved = localStorage.getItem("djp-lang"); } catch (e) {}
  var start = saved || ((navigator.language || "").slice(0, 2) === "en" ? "en" : "de");
  applyLang(LANGS.indexOf(start) !== -1 ? start : "de");

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  /* ---------------- Jahr im Footer ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Logo (echt vs. Fallback) ---------------- */
  var logoImg = document.querySelector(".logo-img");
  var logoFallback = document.querySelector(".logo-fallback");
  if (logoImg && logoFallback) {
    logoImg.addEventListener("load", function () {
      logoImg.style.display = "block"; logoFallback.style.display = "none";
    });
    logoImg.addEventListener("error", function () { logoImg.remove(); });
  }

  /* ---------------- Mobile-Navigation ---------------- */
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");
  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    navList.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------- Header-Schatten + Back-to-Top ---------------- */
  var header = document.querySelector(".site-header");
  var toTop = document.getElementById("to-top");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 12);
    if (toTop) toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------------- Scroll-Reveal ---------------- */
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
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------- Galerie-Fallback ---------------- */
  document.querySelectorAll(".gallery-item img").forEach(function (img) {
    img.addEventListener("error", function () {
      var fig = img.closest(".gallery-item");
      if (fig) fig.classList.add("img-missing");
      img.style.display = "none";
    });
  });

  /* ---------------- Kontaktformular ---------------- */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  function setStatus(key, type) {
    if (!status) return;
    status.textContent = t(key);
    status.className = "form-status show " + type;
  }

  if (form) {
    var action = form.getAttribute("action") || "";
    var formspreeReady = action.indexOf("formspree.io") !== -1 && action.indexOf("xxxxxxxx") === -1;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !message) { setStatus("msg.required", "err"); return; }

      if (formspreeReady) {
        var btn = form.querySelector('button[type="submit"]');
        var btnLabel = btn ? btn.textContent : "";
        if (btn) { btn.disabled = true; btn.textContent = t("msg.sending"); }
        fetch(action, { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" } })
          .then(function (res) {
            if (res.ok) { form.reset(); setStatus("msg.ok", "ok"); }
            else {
              res.json().then(function (data) {
                if (data && data.errors && data.errors.length) {
                  status.textContent = data.errors.map(function (x) { return x.message; }).join(" ");
                  status.className = "form-status show err";
                } else { setStatus("msg.fail", "err"); }
              }).catch(function () { setStatus("msg.fail", "err"); });
            }
          })
          .catch(function () { setStatus("msg.fail", "err"); })
          .finally(function () { if (btn) { btn.disabled = false; btn.textContent = btnLabel || t("form.submit"); } });
      } else {
        var subject = encodeURIComponent("Anfrage über die Webseite: " + form.subject.value);
        var body = encodeURIComponent(
          "Name: " + name + "\nE-Mail: " + email + "\nTelefon: " + form.phone.value.trim() +
          "\nLand: " + form.country.value + "\nAnliegen: " + form.subject.value + "\n\n" + message);
        setStatus("msg.mailto", "ok");
        window.location.href = "mailto:" + RECIPIENT + "?subject=" + subject + "&body=" + body;
      }
    });
  }
})();
