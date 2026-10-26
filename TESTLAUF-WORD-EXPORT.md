# VitaSim GitHub-Falleditor V3.20.0 – Word-Testlauf 1

Nur GitHub Pages: Am Raspberry Pi wird nichts geändert.

## Neue Bereiche und Exporte
- Ausbilderunterlage & Einsatzmeldung: zusätzliche, optionale Felder für die Dokumenterstellung.
- Word (.docx): drei thematische Abschnitte / Start auf je neuer Seite nach der gelieferten Vorlage, ohne Makros und ohne externe Bibliothek.
- PDF/Drucken: öffnet einen eigenen Druckansicht-Tab; in der Druckfunktion »Als PDF speichern« wählen.
- Einsatzmeldung (.png): erster Entwurf des hellblauen Bilds; Layout ist noch nicht pixelgenau und lange Texte können im PNG abgeschnitten werden.
- Editor-Projekt (.vitasimprojekt): speichert VitaSim-Falldaten, Bilder, Sounds und Word-Zusatzfelder gemeinsam. Dieses Format ist NUR für den GitHub-Editor, nicht für den Pi.
- Pi-Export (.vitasimexport): wie zuvor. Zusatzfelder gehen absichtlich nicht in die Pi-Datei ein.

## Verwendung
1. Entpackten Inhalt von `offline-case-editor-main` im GitHub-Pages-Repository veröffentlichen.
2. Fall wie üblich eingeben, dann Zusatzfelder im neuen unteren Bereich ergänzen.
3. »Editor-Projekt speichern« nutzen, damit Zusatzfelder bei späterem Öffnen erhalten bleiben.
4. Word, PDF und PNG einzeln exportieren; für den Pi weiter die bekannte `.vitasimexport`-Schaltfläche verwenden.

## Teststand / Einschränkungen
- Ein struktur- und syntaxgeprüftes Test-DOCX ließ sich erstellen und in python-docx öffnen; die Word-Datei wurde auch erfolgreich in drei Seiten gerendert.
- Ein vollständiger Browser-End-to-End-Test war in dieser Umgebung nicht möglich (Browserzugriff administrativ blockiert). GitHub Pages, Pi-Import und alle Exportbuttons deshalb bitte real prüfen.
- Word-Layout ähnelt in Inhalt, Tabellen und Farbe deiner Vorlage; nicht pixelgenau. Lange Inhalte können zusätzliche Seiten erzeugen.
- PDF wird über die Druckansicht des Browsers erzeugt, nicht automatisch als Datei heruntergeladen.
- `Editor-Projekt öffnen` ist getrennt von `Fall öffnen` und erwartet `.vitasimprojekt`.
