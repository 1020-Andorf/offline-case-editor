# OST Andorf Offline-Falleditor V3.0.8

Für GitHub Pages den gesamten Ordner veröffentlichen. `index.html`, `style.css`, `manifest.webmanifest` und `service-worker.js` müssen gemeinsam im selben Verzeichnis liegen.

## V3.0.8

Der Wechsel zwischen Fallereignissen wurde neu aufgebaut: Beim Wechsel wird der aktuelle Formularstand nur als Draft übernommen; Validierungsfehler blockieren die Auswahl eines anderen Ereignisses nicht mehr. Die strikte Prüfung erfolgt erst bei „Ereignis speichern“ bzw. beim Export. Der Export bleibt `.vitasimexport`-kompatibel.
