/* VitaSim GitHub-Falleditor 3.20.0: browser-only export test. No external dependencies. */
(()=>{'use strict';
const ids=['wDate','wKeyword','wEO','wDia','wPat','wInfo','wTravel','wFlow','wExpected','wFirst','wAVPU','wBleed','wRekap','wOxygen','wA','wB','wC','wD','wE','wDx','wCondition','wCourse','wActor','wMaterial','wFeedback','wMoreVitals','wNfsAlgorithm','wNfsIndications','wNfsContra','wNfsDosing','wNfsMeasures','wOrderNo','wDispCount','wUnit','wRadio','wNetwork'];
const $=id=>document.getElementById(id),txt=id=>String($(id)?.value||'').trim();
const xml=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
const safe=s=>String(s||'Fall').replace(/[^a-zA-Z0-9äöüÄÖÜß_-]+/g,'_').slice(0,65);
const current=()=>{let p;try{p=collectPreset()}catch(e){
 // Word documents do not require a completed Pi simulation or all mandatory vital values.
 const read=id=>txt(id),sample=Object.fromEntries(['S','A','M','P','L','E','R'].map(k=>[k,read('presetSample'+k)]));
 const values={};[['presetHr','hr'],['presetSpo2','spo2'],['presetRr','rr'],['presetSys','systolic'],['presetDia','diastolic'],['presetTemp','temp'],['presetEtco2','etco2'],['presetGlucose','glucose']].forEach(([id,key])=>{if(read(id)!=='')values[key]=read(id)});
 p={name:read('presetName'),scene:read('presetScene'),safety:read('presetSafety'),caseText:read('presetCaseText'),situation:read('presetCaseText'),trainingGoal:read('presetTrainingGoal'),sample,values,customDevelopments:[]};
 }return {p,w:Object.fromEntries(ids.map(id=>[id,txt(id)]))};};
const val=(v)=>v===null||v===undefined||String(v).trim()===''?'—':String(v);
const name=()=>txt('presetName')||'Fallbeispiel';
function report(){const {p,w}=current();const v=p.values||{},sample=p.sample||{};
const vit=(k,unit='')=>v[k]===undefined||v[k]===''?'—':`${v[k]}${unit?' '+unit:''}`;
const rows=(arr)=>arr.map(([a,b])=>[a,val(b)]);
return {title:p.name||'Fallbeispiel',pages:[
 {heading:p.name||'Fallbeispiel',sections:[['Einsatzmeldung',rows([['Datum / Uhrzeit',w.wDate],['Einsatzstichwort',w.wKeyword],['EO:',w.wEO],['Dia:',w.wDia],['Pat:',w.wPat],['Info:',w.wInfo],['Unterwegs zum EO:',w.wTravel]])],['Detaillierter Ablauf',val(w.wFlow)],['Ausbildungsziele',val(p.trainingGoal)],['Erwartete Maßnahmen',val(w.wExpected)]]},
 {heading:'Szenario und Patientenbefunde',sections:[['3S – Szene, Sicherheit, Situation',rows([['Szene',p.scene],['Sicherheit',p.safety],['Situation',p.situation||p.caseText]])],['Erster Eindruck',rows([['Erster Eindruck',w.wFirst],['AVPU',w.wAVPU],['Äußere Blutung',w.wBleed]])],['ABCDE-Schema',rows([['A – Airway',w.wA],['B – Breathing',w.wB],['C – Circulation',w.wC],['D – Disability',w.wD],['E – Exposure',w.wE]])],['Vitalparameter',rows([['AF (/min)',vit('rr')],['SpO₂ (%)',vit('spo2')],['SpO₂ unter O₂ (%)',w.wOxygen],['HF (/min)',vit('hr')],['RR (mmHg)',`${val(v.systolic)}/${val(v.diastolic)}`],['Rekapzeit (s)',w.wRekap],['BZ (mg/dl)',vit('glucose')],['Temperatur (°C)',vit('temp')],['Weitere Werte',w.wMoreVitals]])]]},
 {heading:'Anamnese und Ausbilderinformationen',sections:[['SAMPLE(R)-Anamnese',rows([['S – Symptome',sample.S],['A – Allergien',sample.A],['M – Medikamente',sample.M],['P – Vorerkrankungen',sample.P],['L – Letztes',sample.L],['E – Ereignis',sample.E],['R – Risikofaktoren',sample.R]])],['NFS – Algorithmus und Maßnahmen',rows([['EKG-Rhythmus',document.getElementById('wNfsRhythm')?.value||p.rhythm||''],['Passender Algorithmus',w.wNfsAlgorithm],['Indikationen',w.wNfsIndications],['Kontraindikationen',w.wNfsContra],['Dosierungen',w.wNfsDosing],['Weitere NFS-Maßnahmen',w.wNfsMeasures]])],['Verdachtsdiagnose und Zustand',rows([['Verdachtsdiagnose',w.wDx],['Patientenzustand',w.wCondition]])],['Szenarioverlauf',val(w.wCourse||[...(p.customDevelopments||[]).map(x=>x.name||'')].filter(Boolean).join('; '))],['Patientendarsteller',val(w.wActor)],['Übungsmaterial',val(w.wMaterial)],['Nachbesprechung / Feedback',val(w.wFeedback)]]}
]};}
function paragraph(t='',style='Normal'){return `<w:p><w:pPr><w:pStyle w:val="${style}"/></w:pPr>${String(t).split(/\n/).map((part,i)=>`${i?'<w:r><w:br/></w:r>':''}<w:r><w:t xml:space="preserve">${xml(part)}</w:t></w:r>`).join('')}</w:p>`;}
function table(rows){return `<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/><w:tblBorders><w:bottom w:val="single" w:sz="4" w:color="DFDFDF"/><w:insideH w:val="single" w:sz="4" w:color="DFDFDF"/></w:tblBorders></w:tblPr><w:tblGrid><w:gridCol w:w="2800"/><w:gridCol w:w="6500"/></w:tblGrid>${rows.map(([k,v])=>`<w:tr><w:tc><w:tcPr><w:tcW w:w="2800" w:type="dxa"/><w:shd w:fill="F3F3F3"/></w:tcPr>${paragraph(k,'RowLabel')}</w:tc><w:tc><w:tcPr><w:tcW w:w="6500" w:type="dxa"/></w:tcPr>${paragraph(v)}</w:tc></w:tr>`).join('')}</w:tbl>`;}
function docXML(r){const body=r.pages.map((page,i)=>`${i?'<w:p><w:r><w:br w:type="page"/></w:r></w:p>':''}${paragraph(i?'FALLBEISPIEL | AUSBILDERUNTERLAGE':'SANITÄTERAUSBILDUNG | FALLBEISPIEL','Eyebrow')}${paragraph(page.heading,'Heading1')}${page.sections.map(([t,x])=>paragraph(t,'Heading2')+(Array.isArray(x)?table(x):paragraph(x))).join('')}`).join('');return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1080" w:right="1000" w:bottom="1080" w:left="1000" w:header="500" w:footer="500"/></w:sectPr></w:body></w:document>`;}
const styles=`<?xml version="1.0" encoding="UTF-8"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:rPr><w:rFonts w:ascii="Aptos" w:hAnsi="Aptos"/><w:sz w:val="21"/></w:rPr><w:pPr><w:spacing w:after="115"/></w:pPr></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="Heading 1"/><w:rPr><w:b/><w:color w:val="902737"/><w:sz w:val="36"/></w:rPr><w:pPr><w:spacing w:before="110" w:after="280"/></w:pPr></w:style><w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="Heading 2"/><w:rPr><w:b/><w:color w:val="902737"/><w:sz w:val="25"/></w:rPr><w:pPr><w:spacing w:before="250" w:after="125"/></w:pPr></w:style><w:style w:type="paragraph" w:styleId="RowLabel"><w:name w:val="Row label"/><w:rPr><w:b/><w:color w:val="78313E"/><w:sz w:val="19"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Eyebrow"><w:name w:val="Eyebrow"/><w:rPr><w:b/><w:color w:val="808080"/><w:sz w:val="16"/></w:rPr></w:style></w:styles>`;
// ZIP STORE records: valid OPC/DOCX, no CDN or browser dependencies.
const encoder=new TextEncoder();let crcTable=null;
function crc32(buf){if(!crcTable){crcTable=Array.from({length:256},(_,i)=>{let c=i;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;return c>>>0})}let c=0xffffffff;for(const b of buf)c=crcTable[(c^b)&255]^(c>>>8);return (c^0xffffffff)>>>0}
const u16=(n)=>[n&255,(n>>>8)&255],u32=(n)=>[n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255];
function zip(files){const local=[],central=[];let offset=0;for(const [name,content] of files){const nm=encoder.encode(name),data=encoder.encode(content),crc=crc32(data),l=new Uint8Array([...u32(0x04034b50),...u16(20),...u16(0x0800),...u16(0),...u16(0),...u16(0),...u32(crc),...u32(data.length),...u32(data.length),...u16(nm.length),...u16(0),...nm,...data]);local.push(l);central.push(new Uint8Array([...u32(0x02014b50),...u16(20),...u16(20),...u16(0x0800),...u16(0),...u16(0),...u16(0),...u32(crc),...u32(data.length),...u32(data.length),...u16(nm.length),...u16(0),...u16(0),...u16(0),...u16(0),...u32(0),...u32(offset),...nm]));offset+=l.length}const size=central.reduce((n,a)=>n+a.length,0),end=new Uint8Array([...u32(0x06054b50),...u16(0),...u16(0),...u16(files.length),...u16(files.length),...u32(size),...u32(offset),...u16(0)]);return new Blob([...local,...central,end],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'})}
function download(filename,blob){const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=filename;document.body.append(a);a.click();setTimeout(()=>{URL.revokeObjectURL(url);a.remove()},2000)}
window.vitaExportWord=()=>{try{const r=report(),files=[['[Content_Types].xml',`<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>`],['_rels/.rels',`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`],['word/_rels/document.xml.rels',`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`],['word/styles.xml',styles],['word/document.xml',docXML(r)]];download(safe(r.title)+'.docx',zip(files))}catch(e){alert('Word-Export: '+e.message)}};
const escapeHtml=s=>xml(s);
function reportHTML(r){return `<!doctype html><html lang="de"><meta charset="utf-8"><title>${escapeHtml(r.title)}</title><style>body{font:12px Arial;color:#303030;margin:0}article{padding:18mm 18mm 14mm;box-sizing:border-box;page-break-after:always}article:last-child{page-break-after:auto}h1{font-size:24px;color:#982b3a}h2{font-size:15px;color:#982b3a;margin:25px 0 10px;border-bottom:1px solid #dcc9cc;padding-bottom:6px}.eyebrow{font-size:10px;color:#888;font-weight:bold}table{border-collapse:collapse;width:100%;font-size:12px}td{padding:7px;border:1px solid #ddd;vertical-align:top;white-space:pre-wrap}td:first-child{width:27%;color:#71313c;font-weight:bold;background:#f5f5f5}.para{white-space:pre-wrap;line-height:1.5}footer{margin-top:35px;text-align:center;font-size:9px;color:#999}@page{size:A4;margin:0}@media screen{body{background:#eee}article{background:#fff;width:210mm;min-height:297mm;margin:15px auto;box-shadow:0 2px 9px #bbb}}</style>${r.pages.map((pg,i)=>`<article><div class="eyebrow">${i?'FALLBEISPIEL | AUSBILDERUNTERLAGE':'SANITÄTERAUSBILDUNG | FALLBEISPIEL'}</div><h1>${escapeHtml(pg.heading)}</h1>${pg.sections.map(([title,body])=>`<h2>${escapeHtml(title)}</h2>${Array.isArray(body)?`<table>${body.map(([a,b])=>`<tr><td>${escapeHtml(a)}</td><td>${escapeHtml(b)}</td></tr>`).join('')}</table>`:`<p class="para">${escapeHtml(body)}</p>`}`).join('')}<footer>AUSBILDERUNTERLAGE · ${escapeHtml(r.title)}</footer></article>`).join('')}</html>`}
window.vitaPrintReport=()=>{try{const w=window.open('','_blank');if(!w)throw Error('Pop-up im Browser erlauben');w.document.write(reportHTML(report()));w.document.close();w.focus();setTimeout(()=>w.print(),400)}catch(e){alert('PDF/Druck: '+e.message)}};
window.vitaExportDispatch=()=>{try{
 const c=document.createElement('canvas');c.width=1600;c.height=900;const x=c.getContext('2d');
 const LEFT_W=1210, RIGHT_X=1210, RIGHT_W=390, FOOTER_Y=755, BORDER='#0a2230';
 x.fillStyle='#ffffff';x.fillRect(0,0,1600,900);
 x.fillStyle='#87cae9';x.fillRect(0,0,LEFT_W,900);
 const right=[['#fff200','Auftrag','akzeptiert'],['#ffc000','Einsatz','beginn'],['#ececec','Sprechwunsch',''],['#ececec','Notruf','']];
 right.forEach(([bg,a,b],i)=>{const y=i*225;x.fillStyle=bg;x.fillRect(RIGHT_X,y,RIGHT_W,225);x.lineWidth=2;x.strokeStyle=BORDER;x.strokeRect(RIGHT_X,y,RIGHT_W,225);x.fillStyle=i===3?'#ff0000':'#000';x.textAlign='center';x.font='bold 38px Arial';x.fillText(a,RIGHT_X+RIGHT_W/2,y+92);if(b)x.fillText(b,RIGHT_X+RIGHT_W/2,y+140)});
 x.strokeStyle=BORDER;x.lineWidth=2;x.strokeRect(0,0,1600,900);
 x.font='bold 26px Arial';x.fillStyle='#000';x.textAlign='left';
 const dt=txt('wDate'); if(dt) x.fillText(dt,10,34);
 const keyword=txt('wKeyword'); if(keyword){x.font='20px Arial'; x.fillText(keyword,10,62);} 
 const entries=[['EO:',txt('wEO')],['Dia:',txt('wDia')],['Pat:',txt('wPat')],['Info:',txt('wInfo')],['Unterwegs zum EO:',txt('wTravel')]];
 entries.forEach(([k,v],i)=>{const y=140+i*69;x.font='32px Arial';x.fillStyle='#000';x.fillText(k,22,y);x.font='28px Arial';const startX=k.startsWith('Unterwegs')?305:150;const maxW=LEFT_W-startX-24;const text=(v||'').slice(0,90);x.fillText(text,startX,y,maxW)});
 x.font='29px Arial';x.fillText('** Ende**',22,640);
 // footer block layout closer to original template
 x.strokeRect(0,FOOTER_Y,LEFT_W,145);
 x.beginPath();
 x.moveTo(186,FOOTER_Y);x.lineTo(186,900);
 x.moveTo(772,FOOTER_Y);x.lineTo(772,900);
 x.moveTo(905,FOOTER_Y);x.lineTo(905,900);
 x.moveTo(990,FOOTER_Y);x.lineTo(990,900);
 x.moveTo(186,826);x.lineTo(990,826);
 x.stroke();
 // vector loudspeaker, closer to template than emoji
 const bx=42, by=809;
 x.fillStyle='#f5b42e';
 x.beginPath();x.moveTo(bx,by);x.lineTo(bx+42,by-22);x.lineTo(bx+42,by+22);x.closePath();x.fill();
 x.fillStyle='#4a4a4a';
 x.beginPath();x.moveTo(bx-8,by-18);x.lineTo(bx+10,by-18);x.lineTo(bx+18,by+18);x.lineTo(bx-8,by+18);x.closePath();x.fill();
 x.strokeStyle='#ff7a36';x.lineWidth=7;
 [[58,0,85,-12,85,12],[72,0,106,-23,106,23],[86,0,128,-34,128,34]].forEach(([sx,sy,ax,ay,bx2,by2])=>{x.beginPath();x.moveTo(bx+sx,by+sy);x.lineTo(bx+ax,by+ay);x.stroke();x.beginPath();x.moveTo(bx+sx,by+sy);x.lineTo(bx+bx2,by+by2);x.stroke();});
 x.textAlign='center';x.fillStyle='#000';x.font='bold 37px Arial';x.fillText((txt('wOrderNo')||'—')+' ('+(txt('wDispCount')||'—')+')',479,807);
 x.font='31px Arial';x.fillText(txt('wUnit')||'—',839,807);x.fillText(txt('wRadio')||'—',947,807);
 x.font='bold 34px Arial';x.fillText('Neuer Auftrag',585,873);
 x.font='bold 41px Arial';x.fillText('G',1100,816);
 x.fillStyle='#13ff13';x.fillRect(1042,838,108,42);x.strokeStyle=BORDER;x.lineWidth=1.5;x.strokeRect(1042,838,108,42);
 x.fillStyle='#000';x.font='31px Arial';x.fillText(txt('wNetwork')||'GPRS',1096,869);
 c.toBlob(blob=>{if(blob)download(safe(name())+'_Einsatzmeldung.png',blob)},'image/png')
 }catch(e){alert('Einsatzmeldung: '+e.message)}};
function data(){return Object.fromEntries(ids.map(id=>[id,txt(id)]))}
function apply(d){ids.forEach(id=>{if($(id))$(id).value=d?.[id]||''})}
window.vitaExportProject=()=>{try{const preset=collectPreset();const pack={format:'vitasim-editor-project',version:1,preset,word:data(),images:typeof images!=="undefined"?images:[],sounds:typeof sounds!=="undefined"?sounds:[]};download(safe(preset.id||preset.name)+'.vitasimprojekt',new Blob([JSON.stringify(pack,null,2)],{type:'application/json'}))}catch(e){alert('Projekt: '+e.message)}};
window.vitaImportProject=async f=>{if(!f)return;try{const obj=JSON.parse(await f.text());if(obj.format!=='vitasim-editor-project'||!obj.preset)throw Error('Keine gültige VitaSim-Projektdatei');fillPreset(obj.preset,obj.images||[],obj.sounds||[]);apply(obj.word);alert('Editor-Projekt geladen')}catch(e){alert('Projekt öffnen: '+e.message)}finally{$('vitaProjectOpen').value=''}};
})();
