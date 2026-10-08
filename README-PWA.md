# PWA / Offline-Nutzung

Der GitHub-Pages-Falleditor ist als PWA nutzbar. Beim ersten Online-Aufruf werden Editor, Styles, Manifest und Icons im Browsercache abgelegt.

Stand: **VitaSim V3.4.11 kompatibel**.

Bei einem Update sollte der Cache-Name in `service-worker.js` erhöht werden. Die aktuelle Version nutzt:

`ost-falleditor-v3-4-11-github-1`
