# D.J. Paletten – Webseite

Moderne, responsive Single-Page-Webseite für **D.J. Paletten** in Rhede
(Handel, Reparatur und Service rund um Paletten).

Design im Markenlook: Anthrazit, Gold/Beige und Holztöne (nach Logo und Visitenkarte).

Verifizierte Firmendaten (Quelle: Visitenkarte / Google-Eintrag):

- Adresse: Krommerter Weg 59, 46414 Rhede (Westfalen)
- Telefon: 0178 6591425
- E-Mail: info@djpaletten.de
- Web: www.djpaletten.de
- Instagram: [@paletten_liebe_](https://www.instagram.com/paletten_liebe_/)
- Bewertung: 5,0 Sterne bei Google (11 Rezensionen)

## Inhalt

- **`index.html`** – Struktur & Inhalte (Hero, Leistungen, Ablauf, Über uns, Kontakt, Footer)
- **`css/style.css`** – Design, Layout und responsives Verhalten
- **`js/main.js`** – Mobile-Navigation, Jahr im Footer, Kontaktformular

## Ansehen

Einfach `index.html` im Browser öffnen – es werden keine Abhängigkeiten oder ein Build benötigt.

Lokaler Server (optional):

```bash
python3 -m http.server 8000
# danach http://localhost:8000 öffnen
```

## Anpassen

Vor dem Live-Gang bitte die Platzhalter ersetzen:

| Stelle | Was anpassen |
|--------|--------------|
| `impressum.html` | Umsatzsteuer-ID eintragen, falls vorhanden – sonst den Abschnitt entfernen |
| `index.html` – Kontakt | Öffnungszeiten ergänzen, sobald bekannt |

Inhaberin (Jordanka Ristoski), Telefon, E-Mail, Adresse, Instagram, Logo, Fotos, die
Google-Bewertung und der Formspree-Endpoint sind bereits eingetragen.

Farben zentral über die CSS-Variablen in `:root` (`css/style.css`):
Anthrazit (`--charcoal`), Gold (`--gold`) und Holztöne (`--wood`).

## Kontaktformular (Formspree)

Das Formular verschickt Anfragen ohne eigenen Server über [Formspree](https://formspree.io).
Der Endpoint `https://formspree.io/f/mzdnvnoz` ist bereits in `index.html` eingetragen;
`js/main.js` sendet die Anfrage per AJAX (ohne Seitenwechsel) und zeigt eine
Erfolgs- bzw. Fehlermeldung. Beim **ersten Absenden** verlangt Formspree einmalig eine
Bestätigung der Zieladresse `info@djpaletten.de` per E-Mail.

## Rechtsseiten

`impressum.html` und `datenschutz.html` sind angelegt und im Footer verlinkt, mit der
Inhaberin Jordanka Ristoski. Die Datenschutzerklärung deckt Hosting (GitHub Pages),
das Kontaktformular (Formspree) und die Google-Maps-Karte ab. Bei rechtlicher
Unsicherheit anwaltlich prüfen lassen.

## GitHub Pages

Die Seite ist für GitHub Pages vorbereitet:

- `index.html` liegt im Root, alle Pfade sind relativ.
- `.nojekyll` verhindert die Jekyll-Verarbeitung.
- Der Workflow `.github/workflows/deploy.yml` veröffentlicht die Seite automatisch.

**Einmalige Aktivierung im Repository:**

1. In GitHub auf **Settings → Pages** gehen.
2. Unter **Build and deployment → Source** die Option **GitHub Actions** wählen.
3. Beim nächsten Push (oder manuell über **Actions → Deploy to GitHub Pages → Run workflow**)
   wird die Seite gebaut und veröffentlicht.

Die öffentliche URL erscheint danach unter **Settings → Pages** sowie im Actions-Log.

## Hinweise

- Das Kontaktformular nutzt ohne Backend einen `mailto:`-Fallback. Für automatischen
  Versand kann ein Formulardienst (z. B. Formspree) oder ein eigenes Backend angebunden werden.
- Für den Livebetrieb sind **Impressum** und **Datenschutzerklärung** gesetzlich erforderlich.
