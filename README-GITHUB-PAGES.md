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
