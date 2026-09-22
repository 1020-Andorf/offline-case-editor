# OST Andorf Offline-Falleditor – V3.2.1 PI-SYNC

Diese GitHub-Pages-Version verwendet **denselben Falleditor-Code wie der aktuelle VitaSim-Pi-Stand V3.2.1**.

## Synchronität

`index.html` ist eine direkte Kopie von:

`app/public/offline-falleditor.html`

aus `vital-sim-advanced-v3.2.1-remote-case-presentation`.

Damit sind Oberfläche, PIN-Logik, SAMPLE(R)/OPQRST, Fallbilder, Ausgangssituation, Ereignisse, Varianten sowie Import/Export identisch zum Pi-Falleditor.

## GitHub Pages

Alle drei Dateien in das GitHub-Pages-Repository kopieren und vorhandene Dateien ersetzen:

- `index.html`
- `manifest.webmanifest`
- `service-worker.js`

Danach die Seite einmal neu laden. Der Service Worker löscht ältere Cache-Versionen automatisch.

## PIN

Die gleiche Offline-PIN-Logik wie im Pi-Falleditor bleibt enthalten.


## V3.2.2 – Mobile/Pi-Design

- `style.css` aus der aktuellen Pi-Oberfläche wird jetzt tatsächlich mit ausgeliefert.
- Responsive Darstellung speziell für iPhone/Android überarbeitet.
- Keine horizontalen Überbreiten bei SAMPLE(R), OPQRST, Ereignissen oder Varianten.
- Eingabefelder auf Mobilgeräten mit 16 px Schrift, damit Safari beim Fokus nicht hineinzoomt.
- Toolbar auf kleinen Displays als kompakte 2-spaltige bzw. 1-spaltige Bedienfläche.
- Fallbereiche optisch näher an VitaSim am Pi: kompaktere Karten, Farbbänder und Abstände.
- Vitalwerte und Ereigniswerte bleiben auf Mobilgeräten in einer übersichtlichen 2er-Matrix.
