# OST Andorf Offline-Falleditor – VitaSim V3.4.11 kompatibel

Diese GitHub-Pages-Version verwendet **denselben Offline-Falleditor wie VitaSim V3.4.11 am Pi**. `index.html` ist direkt aus `app/public/offline-falleditor.html` übernommen; auch `style.css` und `typography-unified.css` stammen aus demselben Stand.

## Enthaltene Funktionen

- Falltyp **Szenario mit Vitalparametern & Maßnahmen** oder **Algorithmus-Training**
- Text für Fallbibliothek und 5-zeilige Situationsbeschreibung
- SAMPLE(R) und OPQRST
- Ausgangsvitalwerte, Rhythmus, Ereignisse und Fallvarianten
- kombinierte Maßnahmenanzeige / Maßnahmenreaktionen
- fallbezogene Auswahl sichtbarer Maßnahmen
- Fallbilder mit eingebetteter Speicherung
- **Sounds** (MP3, WAV, OGG, M4A, AAC) mit eingebetteter Speicherung
- Algorithmusauswahl bei Algorithmusfällen
- Import/Export als `.vitasimexport`
- kompatible Paketfelder für VitaSim V3.4.11
- Offline-PWA mit Service Worker

## Deployment auf GitHub Pages

Den kompletten Inhalt dieses Ordners in das GitHub-Pages-Repository übernehmen. Mindestens diese Dateien müssen ersetzt werden:

- `index.html`
- `style.css`
- `typography-unified.css`
- `manifest.webmanifest`
- `service-worker.js`

Den Ordner `icons/` ebenfalls beibehalten.

Nach dem Upload die Seite einmal vollständig neu laden. Der Service Worker verwendet den Cache-Namen `ost-falleditor-v3-4-11-github-1` und entfernt beim Aktivieren ältere Cache-Versionen.

## Kompatibilität

Exportierte `.vitasimexport`-Dateien können am Pi importiert werden. Bilder und Sounds werden direkt im Fallpaket gespeichert, sodass GitHub Pages keinen Server-Upload benötigt.
