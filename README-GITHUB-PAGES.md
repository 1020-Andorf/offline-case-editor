# VitaSim Offline-Falleditor für GitHub Pages – V3.20.0

Den Inhalt dieses Ordners in das Root des GitHub-Pages-Repositories übernehmen. Die Anwendung bleibt statisch und offlinefähig. Neue Cache-Kennung: V3.20.0.

## Pi-Import

Im Editor Fälle erstellen oder .vitasimexport öffnen, dann als .vitasimexport exportieren. In VitaSim V3.20.0 am Raspberry Pi über **Offline-Fall importieren** laden und danach speichern.

**3S:** Szene, Sicherheit und Situation haben getrennte Eingabefelder. `scene`, `safety`, `situation` werden separat gespeichert, und `caseText` bleibt für Kompatibilität mit älteren Fällen erhalten.

**Noch nicht enthalten:** Word-Export. Die bereitgestellten Word-Makros wurden im ersten Schritt nicht eingebaut. Embedded Sounddateien müssen eventuell auf dem Pi separat bereitgestellt werden. Echte Integrationstests am Pi und auf GitHub Pages sind noch offen.
