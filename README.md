# D.J. Palleten – Webseite

Moderne, responsive Single-Page-Webseite für das Paletten-Unternehmen **D.J. Palleten**
(An- & Verkauf, Reparatur und Recycling von Paletten).

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
| `index.html` – Abschnitt Kontakt | Telefonnummer, E-Mail, Adresse, Öffnungszeiten |
| `index.html` – Footer | Impressum- und Datenschutz-Links |
| `js/main.js` | E-Mail-Empfänger im Kontaktformular (`info@dj-palleten.de`) |
| Kennzahlen (Hero / Über uns) | An reale Werte des Unternehmens anpassen |

Farben lassen sich zentral über die CSS-Variablen in `:root` (in `css/style.css`) ändern.

## Hinweise

- Das Kontaktformular nutzt ohne Backend einen `mailto:`-Fallback. Für automatischen
  Versand kann ein Formulardienst (z. B. Formspree) oder ein eigenes Backend angebunden werden.
- Für den Livebetrieb sind **Impressum** und **Datenschutzerklärung** gesetzlich erforderlich.
