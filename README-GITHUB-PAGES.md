# OST Andorf Offline-Falleditor V3.1.7

Diese Version ist auf den Falleditor-Stand der VitaSim-Pi-Version V3.1.7 abgestimmt.

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


## V3.1.7 – iPhone/iPad Import-Hotfix

Beim Button **Fall öffnen** wurde der HTML-Dateifilter (`accept`) entfernt.
Safari/iOS blendet unbekannte Dateiendungen wie `.vitasimexport` sonst teilweise aus bzw. macht sie nicht auswählbar.

Der Editor zeigt deshalb im Dateidialog jetzt **alle Dateien** an und prüft die Datei erst nach der Auswahl.
Unterstützt bleiben:
- `.vitasimexport`
- `.vitasim`
- `.json`

Damit lassen sich `.vitasimexport`-Dateien aus der iOS-Dateien-App direkt auswählen.
