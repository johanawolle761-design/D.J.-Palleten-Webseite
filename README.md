# D.J. Paletten – Webseite

Moderne, responsive Single-Page-Webseite für **D.J. Paletten** in Rhede
(Handel, Reparatur und Service rund um Paletten).

Design im Markenlook: Anthrazit, Gold/Beige und Holztöne (nach Logo und Visitenkarte).

Verifizierte Firmendaten (Quelle: Visitenkarte / Google-Eintrag):

- Adresse: Krommerter Weg 59, 46414 Rhede (Westfalen)
- Telefon: 01578 6591425
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
| `impressum.html` / `datenschutz.html` | Mit `[…]` markierte Angaben ergänzen – v. a. **Name der Inhaberin/​des Inhabers** (Pflicht) |
| `index.html` – Kontaktformular | Formspree-Endpoint aktivieren (siehe unten) |
| `index.html` – Kontakt | Öffnungszeiten ergänzen, sobald bekannt |

Telefon, E-Mail, Adresse, Instagram, Logo, Fotos und die Google-Bewertung sind bereits
mit den echten Daten eingetragen.

Farben zentral über die CSS-Variablen in `:root` (`css/style.css`):
Anthrazit (`--charcoal`), Gold (`--gold`) und Holztöne (`--wood`).

## Kontaktformular aktivieren (Formspree)

Das Formular verschickt Anfragen ohne eigenen Server über den kostenlosen Dienst
[Formspree](https://formspree.io). Aktivierung (einmalig, ~2 Min.):

1. Kostenloses Konto auf formspree.io anlegen und ein neues Formular erstellen
   (Zieladresse: `info@djpaletten.de`).
2. Man erhält einen Endpoint wie `https://formspree.io/f/abcdwxyz`.
3. In `index.html` im `<form … action="https://formspree.io/f/xxxxxxxx">` das
   `xxxxxxxx` durch die echte Form-ID ersetzen.

Solange dort noch `xxxxxxxx` steht, öffnet das Formular als Rückfallebene das
E-Mail-Programm des Besuchers (Mail an `info@djpaletten.de`). Sobald ein echter
Endpoint eingetragen ist, wird direkt und ohne Seitenwechsel versendet.

## Rechtsseiten

`impressum.html` und `datenschutz.html` sind angelegt und im Footer verlinkt. Die
Datenschutzerklärung deckt Hosting (GitHub Pages), das Kontaktformular (Formspree)
und die Google-Maps-Karte ab. **Vor dem Live-Gang** die `[…]`-Platzhalter ausfüllen;
bei rechtlicher Unsicherheit anwaltlich prüfen lassen.

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
