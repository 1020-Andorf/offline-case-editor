/* VitaSim GitHub Pages — Pi and Word templates, shared core data. */
(()=>{'use strict';
const $=id=>document.getElementById(id);
const originalCards=Array.from(document.querySelectorAll('section.editor-card')).filter(e=>e.id!=='wordExtrasCard'&&!e.classList.contains('vita-word-card'));
const wordExtras=$('wordExtrasCard');
const cardFields={
 dispatch:['wDate','wKeyword','wEO','wDia','wPat','wInfo','wTravel'],
 planning:['wFlow','wExpected'],
 abcde:['wFirst','wAVPU','wBleed','wA','wB','wC','wD','wE'],
 vitals:['wOxygen','wRekap','wMoreVitals'],
 instructor:['wDx','wCondition','wCourse','wActor','wMaterial','wFeedback']
};
const sectionDest={dispatch:'vitaWordDispatchFields',planning:'vitaWordPlanningFields',abcde:'vitaWordAbcdeFields',vitals:'vitaWordVitalsFields',anam:'vitaWordAnamFields',instructor:'vitaWordInstructorFields'};
function addHeading(host,text){const h=document.createElement('h3');h.className='word-subsection';h.textContent=text;host.append(h)}
function mirror(sourceId,label,section,kind){const host=$(sectionDest[section]),source=$(sourceId);if(!host||!source)return;
 const field=document.createElement('div');field.className='field'+(kind==='textarea'?' full':'');const lbl=document.createElement('label');lbl.textContent=label;
 const editor=(kind==='textarea')?document.createElement('textarea'):document.createElement('input');
 editor.dataset.mirror=sourceId;editor.setAttribute('aria-label',label);if(editor.tagName==='INPUT')editor.type=source.type==='number'?'number':'text';if(source.step)editor.step=source.step;
 lbl.htmlFor='mirror-'+sourceId;editor.id='mirror-'+sourceId;field.append(lbl,editor);host.append(field);
 const update=()=>{if(document.activeElement!==editor)editor.value=source.value||''};
 source.addEventListener('input',update);source.addEventListener('change',update);
 editor.addEventListener('input',()=>{source.value=editor.value;source.dispatchEvent(new Event('input',{bubbles:true}));});
 editor.addEventListener('change',()=>{source.value=editor.value;source.dispatchEvent(new Event('change',{bubbles:true}));});
 update();return update;
}
const sync=[];
function shared(id,label,group,kind='text'){const f=mirror(id,label,group,kind);if(f)sync.push(f)}
function relocateExtras(){
 for(const [section,ids] of Object.entries(cardFields)){
   const host=$(sectionDest[section]);for(const id of ids){const node=$(id);const field=node?.closest('.field');if(field)host.appendChild(field)}
 }
}
function init(){
 relocateExtras();wordExtras.hidden=true;
 const dispatch=$(sectionDest.dispatch);
 shared('presetName','Falltitel','dispatch');addHeading(dispatch,'3S – Szene, Sicherheit, Situation');
 shared('presetScene','3S – Szene','dispatch','textarea');shared('presetSafety','3S – Sicherheit','dispatch','textarea');shared('presetCaseText','3S – Situation','dispatch','textarea');
 const planning=$(sectionDest.planning);shared('presetTrainingGoal','Ausbildungsziele','planning','textarea');
 const vitals=$(sectionDest.vitals);
 // Initial vital measurements, not variants or time-based scenario changes.
 const vitalFields=[['presetRr','AF (/min)'],['presetSpo2','SpO₂ (%)'],['presetHr','HF (/min)'],['presetSys','RR systolisch (mmHg)'],['presetDia','RR diastolisch (mmHg)'],['presetGlucose','BZ (mg/dl)'],['presetTemp','Temperatur (°C)'],['presetEtco2','EtCO₂ (mmHg)']];
 // Place existing Word-only entries (SpO2 under O2, Rekapzeit) beneath shared initial vitals.
 const extra=[...vitals.querySelectorAll('.field')];extra.forEach(e=>e.remove());vitalFields.forEach(([id,title])=>shared(id,title,'vitals'));extra.forEach(e=>vitals.append(e));
 const anam=$(sectionDest.anam);addHeading(anam,'SAMPLE(R)');[['S','Symptome'],['A','Allergien'],['M','Medikamente'],['P','Vorerkrankungen'],['L','Letztes'],['E','Ereignis'],['R','Risikofaktoren']].forEach(([k,label])=>shared('presetSample'+k,k+' – '+label,'anam','textarea'));
 addHeading(anam,'OPQRST');[['O','Onset'],['P','Provocation'],['Q','Quality'],['R','Radiation'],['S','Severity'],['T','Time']].forEach(([k,label])=>shared('presetOpqrst'+k,k+' – '+label,'anam','textarea'));
 window.vitaSetMode('pi');
}
window.vitaSetMode=function(mode){mode=mode==='word'?'word':'pi';document.body.classList.toggle('vita-word-mode',mode==='word');
 originalCards.forEach(e=>e.hidden=mode==='word');$('vitaWordView').hidden=mode!=='word';if(wordExtras)wordExtras.hidden=true;
 $('vitaModePi').classList.toggle('active',mode==='pi');$('vitaModeWord').classList.toggle('active',mode==='word');$('vitaModePi').setAttribute('aria-pressed',String(mode==='pi'));$('vitaModeWord').setAttribute('aria-pressed',String(mode==='word'));
 if(mode==='word')sync.forEach(fn=>fn());
 window.scrollTo({top:0,behavior:'instant'});
};
// Project imports and reset use fillPreset; input nodes are programmatically changed, refresh mirrored values afterward.
const previousFill=window.fillPreset;
if(typeof previousFill==='function')window.fillPreset=function(...args){const x=previousFill(...args);sync.forEach(fn=>fn());return x};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
