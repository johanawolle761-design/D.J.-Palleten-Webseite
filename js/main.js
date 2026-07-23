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
    "contact.h2": ["Kontakt aufnehmen", "Get in touch"],
    "contact.p": ["Rufen Sie uns an oder schreiben Sie uns eine E-Mail – wir melden uns schnellstmöglich mit einem fairen Angebot.",
      "Call us or send us an email – we'll get back to you as soon as possible with a fair offer."],
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

    // ---- Rechtsseiten (geteilt) ----
    "legal.category": ["Rechtliches", "Legal"],
    "legal.backNav": ["Zurück zur Startseite", "Back to homepage"],
    "legal.back": ["← Zurück zur Startseite", "← Back to homepage"],

    // ---- Impressum ----
    "imp.title": ["Impressum", "Imprint"],
    "imp.note": ["Hinweis für den Betreiber: Falls eine Umsatzsteuer-Identifikationsnummer vorliegt, bitte im Abschnitt „Umsatzsteuer\" eintragen – andernfalls diesen Abschnitt entfernen. Die übrigen Angaben sind ausgefüllt.",
      "Note for the operator: If a VAT identification number exists, please enter it in the “VAT” section – otherwise remove that section. The remaining details are complete."],
    "imp.h.angaben": ["Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)", "Information pursuant to § 5 DDG (German Digital Services Act)"],
    "imp.address": ["D.J. Paletten<br />Inhaberin: Jordanka Ristoski<br />Krommerter Weg 59<br />46414 Rhede (Westfalen)<br />Deutschland",
      "D.J. Paletten<br />Owner: Jordanka Ristoski<br />Krommerter Weg 59<br />46414 Rhede (Westphalia)<br />Germany"],
    "imp.h.kontakt": ["Kontakt", "Contact"],
    "imp.contact": ["Telefon: <a href=\"tel:+4915786591425\">01578 6591425</a><br />E-Mail: <a href=\"mailto:info@djpaletten.de\">info@djpaletten.de</a>",
      "Phone: <a href=\"tel:+4915786591425\">01578 6591425</a><br />Email: <a href=\"mailto:info@djpaletten.de\">info@djpaletten.de</a>"],
    "imp.h.ust": ["Umsatzsteuer", "VAT"],
    "imp.ust": ["Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: <strong>[falls vorhanden, hier eintragen – sonst diesen Abschnitt entfernen]</strong>",
      "VAT identification number pursuant to § 27a of the German VAT Act: <strong>[enter here if available – otherwise remove this section]</strong>"],
    "imp.h.verantwortlich": ["Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV", "Responsible for content pursuant to § 18 (2) MStV"],
    "imp.verantwortlich": ["Jordanka Ristoski, Anschrift wie oben.", "Jordanka Ristoski, address as above."],
    "imp.h.streit": ["Verbraucherstreitbeilegung / Universalschlichtungsstelle", "Consumer dispute resolution"],
    "imp.streit": ["Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."],
    "imp.h.haftungInhalte": ["Haftung für Inhalte", "Liability for content"],
    "imp.haftungInhalte": ["Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      "As a service provider, we are responsible for our own content on these pages in accordance with general law. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity."],
    "imp.h.haftungLinks": ["Haftung für Links", "Liability for links"],
    "imp.haftungLinks": ["Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
      "Our website contains links to external third-party websites over whose content we have no influence. The respective provider or operator is always responsible for the content of the linked pages."],
    "imp.h.urheber": ["Urheberrecht", "Copyright"],
    "imp.urheber": ["Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Fotos auf dieser Website stammen von D.J. Paletten.",
      "The content and works created by the site operators on these pages are subject to German copyright law. The photos on this website are provided by D.J. Paletten."],

    // ---- Datenschutz ----
    "ds.title": ["Datenschutzerklärung", "Privacy Policy"],
    "ds.note": ["Hinweis für den Betreiber: Diese Erklärung deckt die aktuell auf der Seite eingesetzten Dienste ab (Hosting, Google-Maps-Karte). Bei rechtlicher Unsicherheit empfiehlt sich eine anwaltliche Prüfung.",
      "Note for the operator: This policy covers the services currently used on the site (hosting, Google Maps). If in doubt legally, a review by a lawyer is recommended."],
    "ds.h1": ["1. Verantwortlicher", "1. Controller"],
    "ds.p1": ["Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />D.J. Paletten, Inhaberin Jordanka Ristoski<br />Krommerter Weg 59, 46414 Rhede<br />Telefon: <a href=\"tel:+4915786591425\">01578 6591425</a> · E-Mail: <a href=\"mailto:info@djpaletten.de\">info@djpaletten.de</a>",
      "Responsible for data processing on this website is:<br />D.J. Paletten, owner Jordanka Ristoski<br />Krommerter Weg 59, 46414 Rhede<br />Phone: <a href=\"tel:+4915786591425\">01578 6591425</a> · Email: <a href=\"mailto:info@djpaletten.de\">info@djpaletten.de</a>"],
    "ds.h2": ["2. Allgemeines zur Datenverarbeitung", "2. General information on data processing"],
    "ds.p2": ["Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist oder Sie eingewilligt haben. Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 DSGVO.",
      "We generally only process our users' personal data to the extent necessary to provide a functioning website and our content and services, or where you have given your consent. The legal bases are in particular Art. 6 (1) GDPR."],
    "ds.h3": ["3. Hosting (GitHub Pages)", "3. Hosting (GitHub Pages)"],
    "ds.p3": ["Diese Website wird bei GitHub Pages gehostet (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Beim Aufruf der Seite werden durch den Hoster technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp) in Server-Logfiles verarbeitet. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und stabilen Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO).",
      "This website is hosted by GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). When the page is accessed, the host processes technically necessary access data (e.g. IP address, date and time, page accessed, browser type) in server log files. The legal basis is our legitimate interest in a secure and stable provision (Art. 6 (1) (f) GDPR)."],
    "ds.h4": ["4. Kontaktaufnahme", "4. Contact"],
    "ds.p4": ["Bei Kontaktaufnahme per Telefon oder E-Mail verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihres Anliegens (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Ein Kontaktformular setzen wir nicht ein.",
      "If you contact us by phone or email, we process your details exclusively to handle your request (Art. 6 (1) (b) or (f) GDPR). We do not use a contact form."],
    "ds.h4a": ["a) Kontaktformular (Formspree)", "a) Contact form (Formspree)"],
    "ds.p4a": ["Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, ggf. Telefonnummer, Land, Anliegen und Nachricht) an uns übermittelt. Für den Versand nutzen wir den Dienst Formspree (Formspree, Inc., USA). Formspree verarbeitet die Formulardaten in unserem Auftrag und leitet sie per E-Mail an uns weiter. Dabei kann eine Übermittlung in die USA erfolgen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. f DSGVO. Die Daten werden zur Bearbeitung Ihrer Anfrage gespeichert und gelöscht, sobald sie nicht mehr benötigt werden.",
      "When you send us an enquiry via the contact form, the data you enter (name, email address, phone number if provided, country, subject and message) is transmitted to us. For sending we use the service Formspree (Formspree, Inc., USA). Formspree processes the form data on our behalf and forwards it to us by email. This may involve a transfer to the USA. The legal basis is Art. 6 (1) (b) and (f) GDPR. The data is stored to process your enquiry and deleted as soon as it is no longer required."],
    "ds.h4b": ["b) Telefon / E-Mail", "b) Phone / Email"],
    "ds.p4b": ["Bei Kontaktaufnahme per Telefon oder E-Mail verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihres Anliegens (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO).",
      "If you contact us by phone or email, we process your details exclusively to handle your request (Art. 6 (1) (b) or (f) GDPR)."],
    "ds.h5": ["5. Google Maps", "5. Google Maps"],
    "ds.p5": ["Zur Darstellung unseres Standorts binden wir eine Karte des Dienstes Google Maps ein (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Beim Laden der Karte wird eine Verbindung zu Servern von Google hergestellt; dabei kann Ihre IP-Adresse an Google übermittelt und ggf. in die USA übertragen werden. Rechtsgrundlage ist unser berechtigtes Interesse an einer ansprechenden Darstellung und leichten Auffindbarkeit (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen finden Sie in der <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">Datenschutzerklärung von Google</a>.",
      "To display our location, we embed a map from the Google Maps service (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland). When the map loads, a connection to Google servers is established; your IP address may be transmitted to Google and possibly transferred to the USA. The legal basis is our legitimate interest in an appealing presentation and easy findability (Art. 6 (1) (f) GDPR). Further information can be found in <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">Google's privacy policy</a>."],
    "ds.h6": ["6. Externe Links (Instagram)", "6. External links (Instagram)"],
    "ds.p6": ["Unsere Website enthält einen Link zu unserem Instagram-Profil. Erst beim Anklicken werden Sie zu Instagram (Meta) weitergeleitet; dann gelten die Datenschutzbestimmungen des jeweiligen Anbieters.",
      "Our website contains a link to our Instagram profile. Only when you click it are you redirected to Instagram (Meta); the privacy policy of the respective provider then applies."],
    "ds.h7": ["7. Cookies & Analyse", "7. Cookies & analytics"],
    "ds.p7": ["Diese Website setzt keine Tracking- oder Analyse-Cookies ein.", "This website does not use any tracking or analytics cookies."],
    "ds.h8": ["8. Ihre Rechte", "8. Your rights"],
    "ds.p8": ["Sie haben im Rahmen der gesetzlichen Bestimmungen das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie ein Widerspruchsrecht (Art. 21). Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Zuständig ist u. a. die/der Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.",
      "Within the framework of the statutory provisions, you have the right to information (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and a right to object (Art. 21). You also have the right to lodge a complaint with a data protection supervisory authority, e.g. the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia."],
    "ds.h9": ["9. Aktualität", "9. Validity"],
    "ds.p9": ["Diese Datenschutzerklärung ist aktuell gültig. Durch Weiterentwicklung der Website oder geänderte gesetzliche Vorgaben kann eine Anpassung erforderlich werden.",
      "This privacy policy is currently valid. As the website evolves or legal requirements change, it may need to be adjusted."],

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
    var showLogoImg = function () { logoImg.style.display = "block"; logoFallback.style.display = "none"; };
    if (logoImg.complete) {
      // Bild bereits geladen (z. B. aus dem Cache) – load-Event feuert dann nicht mehr.
      if (logoImg.naturalWidth > 0) showLogoImg(); else logoImg.remove();
    } else {
      logoImg.addEventListener("load", showLogoImg);
      logoImg.addEventListener("error", function () { logoImg.remove(); });
    }
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

})();
