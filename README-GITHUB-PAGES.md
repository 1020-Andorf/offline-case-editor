# VitaSim Offline-Falleditor – Raspberry Pi V3.19.29

Für statisches Hosting auf GitHub Pages. Kein Build-System und kein Backend nötig.

## Veröffentlichung
1. ZIP entpacken.
2. Den Inhalt von `offline-case-editor-main` in das GitHub-Pages-Repository kopieren, vorhandene Dateien ersetzen.
3. Commit und Push, Seite neu laden. Bei einer alten Ansicht den Service-Worker-/Website-Cache aktualisieren.

## Fall auf Pi übertragen
1. GitHub-Pages-Editor öffnen, Fall erstellen oder `.vitasimexport` importieren.
2. Kategorie, Schlagwörter, Lernziel, Vitalwerte, Varianten, Fallereignisse und Bildphasen bearbeiten.
3. `Fall exportieren (.vitasimexport)` wählen.
4. Am Pi in VitaSim den Falleditor öffnen, `Offline-Fall importieren` und die Datei auswählen.
5. Die Daten kontrollieren und `Vorlage speichern` bestätigen. Standard und Varianten in der Fallvorschau testen.

## Kompatibilität
Exportformat `vitasim-case-package` mit `formatVersion: 2`, passend zum Pi-Import von VitaSim V3.19.29. Fallbilder sind eingebettet und können beim Import hochgeladen werden. Bildphasen und Bildtitel werden übergeben.

**Bekannte Einschränkung:** Der Pi-Import in VitaSim V3.19.29 lädt eingebettete Sounddateien **nicht automatisch hoch**. Sounds müssen zusätzlich über die Soundverwaltung des Pi bereitgestellt werden. Ein Fallpaket allein genügt für Sounds nicht.

Ein vollständiger End-to-End-Test am realen Raspberry Pi und unter GitHub Pages war hier nicht möglich. Der Pi normalisiert und prüft Fallfelder beim Speichern.
