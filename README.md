# Offline-Falleditor GitHub Pages — Stand VitaSim 3.3.12

Dateien direkt in die Wurzel des GitHub-Pages-Repositories hochladen (nicht die ZIP selbst):
- index.html
- style.css
- typography-unified.css
- manifest.webmanifest
- service-worker.js

Enthalten: Fallkategorie, SAMPLE(R), OPQRST, Vitalwerte/EKG, Fallereignisse (auch deaktivierbare Standardereignisse), Checklisten-Trigger mit individuell hinzugefügten Reaktionsgradienten, Fallvarianten, eingebettete Fallbilder sowie deren Anzeigenamen und getrennte Häkchen für Vorschau/Training.

**Dateiformat:** `Fall exportieren` speichert eine `.vitasimexport`-Datei mit allen Falldaten und eingebetteten Bildern. Die Datei im Pi-Falleditor über `Offline-Fall importieren` laden und anschließend als Fallvorlage speichern. `Fall öffnen` akzeptiert `.vitasimexport`, `.vitasim` und `.json`.

**Offline-Hinweis:** Das Bearbeiten von Fällen und Bildern funktioniert ohne Verbindung zum Pi. Der Offline-Falleditor kann keine Dateien unmittelbar in den Pi-Bildordner hochladen. Der Pi-Import erfolgt daher später mit dem exportierten Paket. Vorhandene Fallpakete ohne eingebettete Bilddateien lassen sich bearbeiten; zugehörige Bilder müssen gegebenenfalls erneut hochgeladen werden.

**PIN:** Der lokale Offline-Editor verwendet die im Pi-Offlineeditor hinterlegte PIN `0000`. Sie ist **kein** serverseitiger Zugriffsschutz für ein öffentliches GitHub-Pages-Repository und kann nicht die echte Pi-Administrator-PIN prüfen. Keine vertraulichen Patientendaten oder Passwörter auf einer öffentlichen GitHub-Page speichern.

**Cache:** Bei Anzeige einer älteren Version die Seite vollständig schließen und neu laden; der Service Worker hat einen neuen Cachenamen.

**Wichtig:** Gleiche Fallstruktur und an die Pi-Version angelehntes Design. Die Online-Funktionen des Pi-Falleditors (Serverzugriff, direkter Pi-Bildupload, Pi-PIN-Prüfung) sind offline nicht verfügbar.
