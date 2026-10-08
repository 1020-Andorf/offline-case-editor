# VitaSim Offline-Falleditor – GitHub Pages

GitHub-Pages-Ausgabe des Offline-Falleditors, synchron zum **VitaSim V3.18.6**-Stand.

Der Editor läuft vollständig im Browser. Fälle können als `.vitasimexport` geöffnet, bearbeitet und wieder heruntergeladen werden. Diese Pakete sind für den Import in VitaSim V3.18.6 am Raspberry Pi vorgesehen.

## Wichtig

- GitHub Pages benötigt keinen Servercode.
- Die GitHub-Version ist bewusst **ohne PIN-Abfrage**, da ein im Browser ausgelieferter PIN keine echte Zugriffssperre wäre.
- Bilder und Sounds werden beim `.vitasimexport` direkt in das Fallpaket eingebettet.
- Der Export **Nur JSON** enthält keine eingebetteten Bild-/Sounddateien.
- Die Seite ist als PWA/offline nutzbar, nachdem sie mindestens einmal online geladen wurde.

Siehe `README-GITHUB-PAGES.md` für Deployment und Pi-Import.
