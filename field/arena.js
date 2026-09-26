const gates = [
  { at: 0, text: "The field is open. Mumbai." },
  { at: 0.16, text: "April 2020. Zyadashop opens." },
  { at: 0.34, text: "Month one. 4,000 merchants. 70% of signups finished." },
  { at: 0.5, text: "100K+ downloads. 4.2 stars." },
  { at: 0.66, text: "June 2022. Mosambee acquires Appyflux." },
  { at: 0.82, text: "Mod91. Onboarding from about 10 steps to about 5." },
  { at: 1, text: "Apex. 60 minutes to 10. Approvals from days to 12–24 hours." }
];
const brief = `Subhra Pratik Das — associate product manager, Mosambee, Mumbai.\n\nZyadashop 100K+ downloads. Acquired by Mosambee June 2022. Mod91 onboarding about 10→5. Apex 60min→10. NextLeap 1/350+.\n\nsubhrapratikdas@gmail.com`;
function $(id){return document.getElementById(id)}
function tone(freq,dur,vol){try{const c=new AudioContext();const o=c.createOscillator();const g=c.createGain();o.type="sine";o.frequency.value=freq;g.gain.setValueAtTime(vol,c.currentTime);g.gain.exponentialRampToValueAtTime(0.0001,c.currentTime+dur);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+dur);o.onended=()=>c.close()}catch(e){}}
function mat(o){return new THREE.MeshStandardMaterial(o)}
function mesh(geo,material,x,y,z,parent){const m=new THREE.Mesh(geo,material);m.position.set(x||0,y||0,z||0);parent.add(m);return m}
function buildWarden(){
  const root=new THREE.Group(), body=new THREE.Group(), head=new THREE.Group();
  root.add(body); root.add(head);
  const porcelain=mat({color:0xf3e6d4,roughness:.28});
  const hair=mat({color:0x1a1018,roughness:.55});
  const robe=mat({color:0x2a1430,roughness:.48});
  const eyeOff=mat({color:0x3ef0e0,emissive:0x3ef0e0,emissiveIntensity:1.6});
  const pts=[new THREE.Vector2(.08,0),new THREE.Vector2(.7,.2),new THREE.Vector2(1.1,1.4),new THREE.Vector2(.45,2.5)];
  mesh(new THREE.LatheGeometry(pts,24),robe,0,0,0,body);
  mesh(new THREE.CylinderGeometry(.22,.28,.5,12),porcelain,0,2.55,0,body);
  const skull=mesh(new THREE.SphereGeometry(.42,28,20),porcelain,0,0,0,head); skull.scale.set(1,1.12,.95);
  mesh(new THREE.SphereGeometry(.44,20,12,0,Math.PI*2,0,Math.PI*.55),hair,0,.08,0,head);
  mesh(new THREE.SphereGeometry(.2,12,10),hair,0,.46,-.04,head);
  const l=mesh(new THREE.SphereGeometry(.055,12,8),eyeOff,-.14,.06,.36,head); l.scale.set(1.15,.55,1);
  const r=mesh(new THREE.SphereGeometry(.055,12,8),eyeOff,.14,.06,.36,head); r.scale.set(1.15,.55,1);
  head.position.y=3.12;
  root.userData={head,body,eyeMat:eyeOff};
  return root;
}
function drawField2d(canvas,progress,running,seen){
  const ctx=canvas.getContext("2d"); if(!ctx) return;
  const rect=canvas.getBoundingClientRect();
  const dpr=Math.min(window.devicePixelRatio||1,2);
  const w=Math.max(rect.width,1), h=Math.max(rect.height,1);
  const tw=Math.max(1,Math.floor(w*dpr)), th=Math.max(1,Math.floor(h*dpr));
  if(canvas.width!==tw||canvas.height!==th){canvas.width=tw;canvas.height=th}
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.fillStyle="#07050b"; ctx.fillRect(0,0,w,h);
  const cx=w/2, vy=h*0.26;
  const glow=ctx.createRadialGradient(cx,vy,8,cx,vy,w*0.5);
  glow.addColorStop(0,seen?"rgba(255,59,122,.34)":"rgba(62,240,224,.16)");
  glow.addColorStop(1,"rgba(7,5,11,0)");
  ctx.fillStyle=glow; ctx.fillRect(0,0,w,h);
  ctx.beginPath(); ctx.moveTo(cx-20,vy+24); ctx.lineTo(cx+20,vy+24); ctx.lineTo(w*.94,h); ctx.lineTo(w*.06,h); ctx.closePath();
  ctx.fillStyle="#100c16"; ctx.fill();
  const scroll=(progress*36)%18;
  for(let i=0;i<18;i++){
    const depth=((i+scroll)%18)/18;
    const y=vy+24+Math.pow(depth,1.45)*(h-vy-24);
    const half=12+Math.pow(depth,1.45)*(w*.42);
    ctx.strokeStyle=i%2===0?"rgba(255,59,122,.9)":"rgba(62,240,224,.35)";
    ctx.lineWidth=depth>.6?3:1;
    ctx.beginPath(); ctx.moveTo(cx-half,y); ctx.lineTo(cx+half,y); ctx.stroke();
  }
  const s=Math.min(w,h)*0.2, fy=vy+10;
  ctx.fillStyle="#2a1430";
  ctx.beginPath(); ctx.moveTo(cx,fy+s*.2); ctx.lineTo(cx+s*.78,fy+s*2.5); ctx.lineTo(cx-s*.78,fy+s*2.5); ctx.closePath(); ctx.fill();
  ctx.fillStyle="#f3e6d4";
  ctx.beginPath(); ctx.ellipse(cx,fy,s*.32,s*.38,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle="#1a1018";
  ctx.beginPath(); ctx.ellipse(cx,fy-s*.12,s*.32,s*.2,0,Math.PI,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx,fy-s*.32,s*.14,0,Math.PI*2); ctx.fill();
  ctx.fillStyle=seen?"#ff3b7a":"#3ef0e0";
  ctx.beginPath(); ctx.ellipse(cx-s*.1,fy+.02*s,s*.075,s*.03,0,0,Math.PI*2); ctx.ellipse(cx+s*.1,fy+.02*s,s*.075,s*.03,0,0,Math.PI*2); ctx.fill();
  const bob=running&&!seen?Math.sin(Date.now()/70)*6:0;
  ctx.fillStyle="#3ef0e0";
  ctx.beginPath(); ctx.arc(cx,h-74+bob,10,0,Math.PI*2); ctx.fill();
  ctx.fillRect(cx-7,h-66+bob,14,28);
}
function startField(){
  const webgl=$("arena"), canvas2d=$("field2d");
  let threeOk=false, renderer, scene, camera, warden, fill;
  if(webgl && typeof THREE!=="undefined"){
    try{
      renderer=new THREE.WebGLRenderer({canvas:webgl,antialias:true,alpha:true});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
      renderer.setClearColor(0x07050b,0);
      scene=new THREE.Scene();
      camera=new THREE.PerspectiveCamera(36,1,.1,50);
      camera.position.set(0,2.2,6);
      scene.add(new THREE.HemisphereLight(0xff9ec0,0x0b0814,.8));
      const key=new THREE.DirectionalLight(0xffd4c2,1.4); key.position.set(-3,7,4); scene.add(key);
      fill=new THREE.PointLight(0x3ef0e0,2,16); fill.position.set(2,3,3); scene.add(fill);
      warden=buildWarden(); warden.position.set(0,0,-2.6); warden.scale.setScalar(1.2); scene.add(warden);
      threeOk=true;
    }catch(e){ threeOk=false; }
  }
  const call=$("call"), hint=$("hint"), mark=$("mark"), pct=$("pct");
  const bar=$("barFill"), barWrap=$("bar"), holdBtn=$("hold"), flash=$("flash"), winRow=$("winRow");
  let watching=false, gaze=0, progress=0, holding=false, won=false, lockUntil=0, nextFlip=performance.now()+1400, lastUi=0;
  function resize(){ if(!threeOk||!webgl) return; const w=webgl.clientWidth,h=webgl.clientHeight; if(!w||!h) return; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); }
  resize(); window.addEventListener("resize",resize);
  function setHold(n){ if(won) return; holding=n; holdBtn.classList.toggle("down",n); holdBtn.textContent=n?"Running":"Hold to run"; }
  holdBtn.addEventListener("pointerdown",e=>{e.preventDefault();setHold(true)});
  window.addEventListener("pointerup",()=>setHold(false));
  window.addEventListener("keydown",e=>{ if(e.code==="Space"){e.preventDefault();setHold(true)}});
  window.addEventListener("keyup",e=>{ if(e.code==="Space") setHold(false)});
  $("copyNote")?.addEventListener("click", async()=>{ try{ await navigator.clipboard.writeText(brief); $("copyNote").textContent="Copied. Send it."; }catch(e){}}); 
  function paintUi(){
    const now=performance.now(); if(now-lastUi<70) return; lastUi=now;
    const seen=gaze>.62;
    call.textContent=won?"Through.":seen?"Still.":"Move.";
    call.className="call "+(seen&&!won?"still":"move");
    holdBtn.classList.toggle("danger",seen&&!won);
    barWrap.classList.toggle("danger",seen&&!won);
    pct.textContent=String(Math.round(progress*100));
    bar.style.width=progress*100+"%";
    mark.textContent=([...gates].reverse().find(g=>progress>=g.at)||gates[0]).text;
    if(won){ hint.textContent="You crossed the field without moving while it was looking."; winRow.classList.add("show"); holdBtn.style.display="none"; }
  }
  function frame(now){
    requestAnimationFrame(frame);
    if(!won && now>nextFlip){ watching=!watching; nextFlip=now+(watching?800+Math.random()*600:1000+Math.random()*1000); if(watching) tone(88,.12,.03); }
    gaze+=((watching?1:0)-gaze)*.09;
    const seen=gaze>.62;
    const running=holding && now>lockUntil && !won;
    if(running && !seen){ progress=Math.min(1,progress+.0032); if(progress>=1){ won=true; tone(240,.28,.04);} }
    else if(running && seen){
      const floors=[0,.16,.34,.5,.66,.82];
      progress=[...floors].reverse().find(g=>g<progress-.02)||0;
      lockUntil=now+700; holding=false; holdBtn.classList.remove("down"); holdBtn.textContent="Hold to run";
      flash.classList.add("on"); setTimeout(()=>flash.classList.remove("on"),180); tone(48,.2,.05);
    }
    if(canvas2d) drawField2d(canvas2d,progress,running,seen);
    if(threeOk){
      resize();
      warden.userData.head.rotation.y += ((watching?0:Math.PI)-warden.userData.head.rotation.y)*.12;
      const hex=seen?0xff3b7a:0x3ef0e0;
      warden.userData.eyeMat.color.setHex(hex); warden.userData.eyeMat.emissive.setHex(hex);
      fill.color.setHex(hex);
      camera.lookAt(0,2.2,-2.2);
      renderer.render(scene,camera);
    }
    paintUi();
  }
  requestAnimationFrame(frame);
}
function startRounds(){
  const tabs=document.querySelectorAll("[data-mod]"); const body=$("modBody");
  const mods={ mod91:{title:"Mod91",when:"June 2022 — present",lede:"Mosambee merchant app. Onboarding about 10 → about 5."}, apex:{title:"Apex",when:"Checker",lede:"Assisted onboarding 60 min → 10. Approvals 2–3 days → 12–24 hours."}, soundbox:{title:"Soundbox + QR",when:"Same flow",lede:"QR, Soundbox and the plan sit on one flow."} };
  tabs.forEach(btn=>btn.addEventListener("click",()=>{ tabs.forEach(b=>b.classList.remove("on")); btn.classList.add("on"); const i=mods[btn.dataset.mod]; body.innerHTML=`<p class="kicker">${i.when}</p><h3>${i.title}</h3><p>${i.lede}</p>`; }));
}
window.addEventListener("DOMContentLoaded",()=>{ startField(); startRounds(); });
