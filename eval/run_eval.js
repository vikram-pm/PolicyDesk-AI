const fs=require('fs');
const SET=process.argv[2]||'testset.json';
const html=fs.readFileSync('../prototype/index.html','utf8');
const js=html.match(/<script>([\s\S]*?)<\/script>/g).pop().replace(/<\/?script>/g,'');
// pull pure functions + seed
const pick=(name)=>{const i=js.indexOf(name); return js.slice(i, js.indexOf('\n}',i)+2);};
let src='const PHONE="1-800-555-0142";const uid=()=>Math.random().toString(36).slice(2);const now=()=>Date.now();const HOUR=3600e3;\n';
src+=js.slice(js.indexOf('function seed()'), js.indexOf('/* ---------- State'))+'\n';
src+=js.slice(js.indexOf('const STOP'), js.indexOf('async function answer'))+'\n';
src+='var S=seed(); module.exports={S,localAnswer};';
fs.writeFileSync('engine.js',src);
const {localAnswer}=require('./engine.js');
const T=JSON.parse(fs.readFileSync(SET,'utf8'));
let rows=[], ans=0, ansOk=0, escTrue=0, escCaught=0, escFlag=0, escFlagOk=0;
for(const t of T){
  const r=localAnswer(t.q,'chat');
  const correctSrc = t.expect==='answer' ? (r.source===t.kb && !r.escalate) : null;
  if(t.expect==='answer'){ans++; if(correctSrc) ansOk++;}
  if(t.expect!=='answer'){escTrue++; if(r.escalate) escCaught++;}
  if(r.escalate){escFlag++; if(t.expect!=='answer') escFlagOk++;}
  rows.push({id:t.id,type:t.expect,q:t.q,got:r.escalate?'ESCALATE: '+r.reason:(r.source||'(no source)'),pass:t.expect==='answer'?correctSrc:r.escalate});
}
console.table(rows.map(r=>({id:r.id,type:r.type,pass:r.pass,got:r.got.slice(0,45)})));
const out={answerable:ans,answer_accuracy:ansOk/ans,should_escalate:escTrue,escalation_recall:escCaught/escTrue,escalation_precision:escFlagOk/escFlag,overall:(ansOk+escCaught)/T.length,counts:{ansOk,escCaught,escFlag,escFlagOk}};
console.log(out); fs.writeFileSync(SET.replace('.json','_results.json'),JSON.stringify({summary:out,rows},null,1));
