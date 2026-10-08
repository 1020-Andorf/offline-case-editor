# VitaSim Offline-Falleditor – VitaSim V3.18.6 kompatibel

Diese GitHub-Pages-Version basiert auf dem **Offline-Falleditor aus VitaSim V3.18.6** und verwendet dessen Fallstruktur.

## Enthaltene Funktionen

- Szenariofälle und Algorithmus-Training
- Fallbeschreibung sowie SAMPLE(R) / OPQRST
- Ausgangsvitalwerte und EKG-Rhythmus
- Ereignisse / Entwicklungen und freie Ereignisse
- Fallvarianten
- Maßnahmenanzeige und fallbezogene Maßnahmen-Sichtbarkeit
- Maßnahmenreaktionen / Ereignisverknüpfungen
- Fallbilder mit eingebetteter Speicherung
- Sounds mit eingebetteter Speicherung
- Import vorhandener `.vitasimexport`, `.vitasim` und `.json`
- Export als `.vitasimexport` für den Raspberry Pi
- zusätzlicher JSON-Download
- Offline-PWA / GitHub Pages

## Auf GitHub Pages aktualisieren

Den **Inhalt dieses Ordners** in das GitHub-Pages-Repository kopieren bzw. die vorhandenen Dateien damit ersetzen:

- `index.html`
- `style.css`
- `typography-unified.css`
- `manifest.webmanifest`
- `service-worker.js`
- Ordner `icons/`

Danach committen und pushen. GitHub Pages kann weiterhin direkt aus dem Repository-Root ausgeliefert werden.

Der Service Worker verwendet den Cache-Namen:

`vitasim-falleditor-v3-18-6-github-1`

Nach dem Update die Seite einmal hart neu laden. Auf iPhone/iPad kann es bei einer installierten PWA nötig sein, sie vollständig zu schließen und neu zu öffnen.

## Fall auf den Pi übertragen

1. Im GitHub-Falleditor **Fall exportieren (.vitasimexport)** wählen.
2. Die heruntergeladene Datei auf das Gerät übertragen, mit dem der Pi bedient wird, oder direkt dort herunterladen.
3. In VitaSim V3.18.6 die **Fallbibliothek** öffnen.
4. Unten **Import / Massenimport** wählen.
5. `.vitasimexport` auswählen und importieren.

Bilder und Sounds aus dem Editor werden im `.vitasimexport` eingebettet und beim Pi-Import automatisch übernommen.

## JSON-Export

**Nur JSON exportieren** ist für reine Falldaten gedacht. Eingebettete Medien sind darin nicht enthalten. Für den vollständigen Transfer zum Pi sollte daher `.vitasimexport` verwendet werden.

## Zugriff / PIN

Die GitHub-Pages-Version hat bewusst keine PIN-Abfrage. Eine im JavaScript hinterlegte PIN wäre öffentlich einsehbar und daher keine echte Absicherung. Die PIN-Sperre des Pi-Falleditors bleibt davon unberührt.
