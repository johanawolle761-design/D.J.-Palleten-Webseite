# D.J. Paletten – Webseite

Moderne, responsive Single-Page-Webseite für **D.J. Paletten** in Rhede
(Handel, An- & Verkauf, Recycling, Sonderpalettenbau, Service und Entsorgung).

Verifizierte Firmendaten (Stand: Google-Eintrag):

- Adresse: Krommerter Weg 59, 46414 Rhede (Westfalen)
- Telefon: 0178 6591425
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
| `index.html` – Footer | Impressum- und Datenschutz-Links (rechtlich Pflicht) |
| `js/main.js` | `RECIPIENT` mit der Firmen-E-Mail füllen. Solange leer, verweist das Formular auf die Telefonnummer. |
| `index.html` – Kontakt | Öffnungszeiten ergänzen, sobald bekannt |

Telefon, Adresse, Instagram und die Google-Bewertung sind bereits mit den echten Daten eingetragen.

Farben lassen sich zentral über die CSS-Variablen in `:root` (in `css/style.css`) ändern.

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
