# OST Andorf Offline-Falleditor V3.1.6

Diese Version ist auf den Falleditor-Stand der VitaSim-Pi-Version V3.1.6 abgestimmt.

## Veröffentlichung auf GitHub Pages

Den gesamten Ordner gemeinsam veröffentlichen:

- `index.html`
- `style.css`
- `manifest.webmanifest`
- `service-worker.js`

Wichtig: Bei einem Update immer auch `service-worker.js` ersetzen. Der Cache ist für diese Version neu auf `v3-1-6` gesetzt; die HTML-Navigation wird network-first geladen, damit keine alte Editorversion hängen bleibt.

## Änderungen gegenüber dem alten GitHub-Falleditor

- Lernziele und fallbezogene CRM-Felder entfernt – entsprechend dem aktuellen VitaSim-Falleditor.
- Neue Fälle enthalten **keine automatisch angelegten Standardereignisse** wie Verschlechterung, Besserung, Kritisch oder Stabilisierung.
- Es werden nur Ereignisse exportiert, die der Ausbilder tatsächlich anlegt bzw. die in einer importierten Falldatei bereits vorhanden sind.
- Ereigniswechsel bleibt ohne blockierende Validierung möglich; der aktuelle Formularstand wird beim Wechsel als Entwurf behalten.
- `.vitasimexport` bleibt mit dem Pi-Import kompatibel und kann Bilder eingebettet mitnehmen.
- Vorhandene ältere Fälle mit Standardereignissen können weiterhin geöffnet, bearbeitet und wieder exportiert werden.

## Import am Pi

Die erzeugte `.vitasimexport`-Datei im VitaSim-Falleditor über **„Offline-Fall importieren (.vitasimexport)“** laden und danach als Fallvorlage speichern.
