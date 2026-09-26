function $(id){return document.getElementById(id)}
function deck(url,label){return '<p><a class="hold" href="'+url+'" target="_blank" rel="noreferrer">'+label+'</a></p><iframe class="deck" title="deck" src="'+url+'"></iframe>'}
const P={
 bms:'https://assets.nextleap.app/submissions/NLBookMyShow-2a6430ba-b662-44b6-b102-5dfe1eaa8511.pdf',
 creator:'https://assets.nextleap.app/submissions/NextLeapLearninPublicChallenge_MarketAnalysis_TheCreatorEconomy-SubhraDas_compressed-730ca423-5e9e-445b-ad34-93145641fc7d.pdf',
 wires:'https://assets.nextleap.app/submissions/Wireframesformilestone-34-749647ea-f71d-40d6-83ef-b305505916dc.pdf',
 m4:'https://assets.nextleap.app/submissions/Milestone4SubhraDasFinal-3ff2165e-624c-48f7-8ddd-999072e4601f.pdf',
 maps:'https://assets.nextleap.app/submissions/NextLeapLearninPublicChallenge_ProductTeardownGoogleMaps-SubhraDas-ee612ffa-4fe2-4cdb-a04a-c2cc4debbd67.pdf',
 m3:'https://assets.nextleap.app/submissions/Milestone3-e102e309-9b87-4b01-bff6-02b9188ec89e.pdf',
 goibibo:'https://assets.nextleap.app/submissions/NextLeapLearninPublicChallenge_ProductTeardownGoibibo-SubhraDas-23cef712-4b28-4b9b-bc3e-2e7b09a9add1.pdf',
 m1:'https://assets.nextleap.app/submissions/Milestone1-SubhraDasZomatoCasdeStudy-34861ea7-4d6c-4a09-b17b-3036a044df1a.pdf',
 resume:'https://assets.nextleap.app/user-resume/Subhra_Das_Resume-005110ac-cb89-424a-a6ff-7ed14c6e2f85.pdf',
 nl:'https://nextleap.app/portfolio/subhra-das'
};
const works=[
{tag:'Graduation · 274/300',title:'BookMyShow',blurb:'High-demand events. Auction, DigiLocker.',html:deck(P.bms,'Open BookMyShow deck')},
{tag:'LIP 5/5',title:'The Creator Economy',blurb:'Independent creators. Market analysis.',html:deck(P.creator,'Open Creator Economy PDF')},
{tag:'Zomato · M3–4',title:'Userflow and wireframes',blurb:'Gamified review rewards.',html:deck(P.wires,'Open wireframes PDF')},
{tag:'Zomato · M4',title:'Milestone 4',blurb:'Smart notification review system.',html:deck(P.m4,'Open Milestone 4 PDF')},
{tag:'LIP 4/5',title:'Google Maps',blurb:'Nielsen heuristics.',html:deck(P.maps,'Open Maps PDF')},
{tag:'Zomato · M3',title:'kheer mangooge, kheer denge',blurb:'More text reviews.',html:deck(P.m3,'Open Milestone 3 PDF')},
{tag:'LIP 3/5',title:'Goibibo travel AI',blurb:'Travel assistant teardown and wireframes.',html:deck(P.goibibo,'Open Goibibo PDF')},
{tag:'Zomato · M1',title:'Weekly Milestone 1',blurb:'Increase text reviews.',html:deck(P.m1,'Open Milestone 1 PDF')},
{tag:'On NextLeap',title:'Milestone 2, CRED, Discord',blurb:'On his project grid. Files not in the public HTML of the portfolio page.',html:'<p>Milestone 2, CRED, and Discord are on his NextLeap grid. Their PDF URLs are not in the public page source.</p><p><a class="hold" href="'+P.nl+'" target="_blank" rel="noreferrer">Open NextLeap projects</a></p>'},
{tag:'Resume',title:'Resume',blurb:'One page.',html:deck(P.resume,'Open resume')},
{tag:'Shipped',title:'CareerFlow AI',blurb:'Live product.',html:'<p><a href="https://careerflow-ai.vercel.app" target="_blank" rel="noreferrer">Open CareerFlow AI</a></p>'},
{tag:'Shipped',title:'pasteguard',blurb:'Local firewall.',html:'<p><a href="https://github.com/SubhraDas1999/pasteguard" target="_blank" rel="noreferrer">Open repo</a></p>'}
];
const gates=[{at:0,text:'Hold to walk the record.'},{at:.5,text:'Decks open below.'},{at:1,text:'Read the work.'}];
const brief='Subhra Pratik Das, associate PM, Mosambee. Zyadashop 100K+ downloads. NextLeap 1/350. subhrapratikdas@gmail.com';

function mat(color, extra){
  var o={color:color, roughness:.45, metalness:.05};
  if(extra) Object.keys(extra).forEach(function(k){o[k]=extra[k]});
  return new THREE.MeshStandardMaterial(o);
}
function add(parent, geo, material, x, y, z, sx, sy, sz){
  var mesh=new THREE.Mesh(geo, material);
  mesh.position.set(x||0, y||0, z||0);
  if(sx) mesh.scale.set(sx, sy||sx, sz||sx);
  mesh.castShadow=false;
  parent.add(mesh);
  return mesh;
}

function buildWarden(){
  var root=new THREE.Group();
  var body=new THREE.Group();
  var head=new THREE.Group();
  root.add(body);
  root.add(head);

  var skin=mat(0xffd7b8);
  var dress=mat(0xff4f86);
  var dressDark=mat(0xc42a5c);
  var hair=mat(0x2b1420);
  var white=mat(0xfff6ee);
  var blush=mat(0xff8aa8);
  var teal=mat(0x3ef0e0);
  var pupil=mat(0x1a1018);

  add(body, new THREE.CylinderGeometry(.22,.38,.22,18), dressDark, 0,.11,0);
  add(body, new THREE.SphereGeometry(.62,24,16), dress, 0,.55,0, 1,.72,1);
  add(body, new THREE.CylinderGeometry(.18,.22,.38,16), dress, 0,1.02,0);
  add(body, new THREE.SphereGeometry(.16,12,10), dress, -.42,.78,.08);
  add(body, new THREE.SphereGeometry(.16,12,10), dress, .42,.78,.08);
  add(body, new THREE.TorusGeometry(.2,.035,8,20), teal, 0,1.18,0);

  add(head, new THREE.SphereGeometry(.46,28,20), skin, 0,0,0);
  add(head, new THREE.SphereGeometry(.49,20,14, 0, Math.PI*2, 0, Math.PI*.58), hair, 0,.08,-.04);
  add(head, new THREE.SphereGeometry(.17,12,10), hair, -.42,.2,-.02);
  add(head, new THREE.SphereGeometry(.17,12,10), hair, .42,.2,-.02);
  add(head, new THREE.SphereGeometry(.08,8,8), teal, -.42,.2,.12);
  add(head, new THREE.SphereGeometry(.08,8,8), teal, .42,.2,.12);

  add(head, new THREE.SphereGeometry(.09,10,8), blush, -.2,-.08,.38, 1,.55,1);
  add(head, new THREE.SphereGeometry(.09,10,8), blush, .2,-.08,.38, 1,.55,1);
  add(head, new THREE.SphereGeometry(.11,12,10), white, -.15,.04,.4);
  add(head, new THREE.SphereGeometry(.11,12,10), white, .15,.04,.4);
  var lp=add(head, new THREE.SphereGeometry(.055,10,8), pupil, -.15,.04,.49);
  var rp=add(head, new THREE.SphereGeometry(.055,10,8), pupil, .15,.04,.49);
  add(head, new THREE.SphereGeometry(.035,8,8), dress, 0,-.16,.43, 1.4,.5,1);

  head.position.set(0,1.62,0);
  root.userData={head:head, body:body, lPupil:lp, rPupil:rp};
  return root;
}

function draw2d(canvas, watching, t){
  var ctx=canvas.getContext('2d');
  if(!ctx) return;
  var w=canvas.clientWidth, h=canvas.clientHeight;
  var dpr=Math.min(2, window.devicePixelRatio||1);
  if(canvas.width!==Math.floor(w*dpr) || canvas.height!==Math.floor(h*dpr)){
    canvas.width=Math.floor(w*dpr); canvas.height=Math.floor(h*dpr);
  }
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,w,h);
  var g=ctx.createLinearGradient(0,0,0,h);
  g.addColorStop(0,'#120818'); g.addColorStop(1,'#07050b');
  ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#1a1420';
  ctx.beginPath(); ctx.ellipse(w*.5, h*.82, w*.42, 28, 0,0,Math.PI*2); ctx.fill();
  var cx=w*.5, cy=h*.58 + Math.sin(t/500)*6;
  ctx.fillStyle='#c42a5c';
  ctx.beginPath(); ctx.ellipse(cx, cy+78, 54, 18, 0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#ff4f86';
  ctx.beginPath(); ctx.ellipse(cx, cy+42, 70, 52, 0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#3ef0e0';
  ctx.fillRect(cx-22, cy+8, 44, 6);
  var face=watching ? 0 : -28;
  ctx.fillStyle='#2b1420';
  ctx.beginPath(); ctx.arc(cx+face, cy-62, 40, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle='#ffd7b8';
  ctx.beginPath(); ctx.arc(cx+face, cy-54, 34, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle='#2b1420';
  ctx.beginPath(); ctx.arc(cx+face-26, cy-70, 10, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(cx+face+26, cy-70, 10, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle='#ff8aa8';
  ctx.beginPath(); ctx.ellipse(cx+face-14, cy-46, 6, 4, 0,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx+face+14, cy-46, 6, 4, 0,0,Math.PI*2); ctx.fill();
  if(watching){
    ctx.fillStyle='#fff6ee';
    ctx.beginPath(); ctx.arc(cx-10, cy-56, 7, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx+10, cy-56, 7, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle='#1a1018';
    ctx.beginPath(); ctx.arc(cx-10, cy-56, 3.5, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx+10, cy-56, 3.5, 0, Math.PI*2); ctx.fill();
  } else {
    ctx.strokeStyle='#1a1018'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(cx+face-16, cy-56); ctx.lineTo(cx+face-4, cy-56); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx+face+4, cy-56); ctx.lineTo(cx+face+16, cy-56); ctx.stroke();
  }
}

function startField(){
  var webgl=$('arena');
  var canvas2d=$('field2d');
  var ok=false, renderer, scene, camera, warden, keyLight, fill;
  if(webgl && typeof THREE!=='undefined'){
    try{
      renderer=new THREE.WebGLRenderer({canvas:webgl, antialias:true, alpha:true});
      renderer.setClearColor(0x07050b, 0);
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio||1));
      scene=new THREE.Scene();
      camera=new THREE.PerspectiveCamera(38, 1, .1, 40);
      camera.position.set(0, 1.55, 4.2);
      scene.add(new THREE.AmbientLight(0xffd0dc, .55));
      scene.add(new THREE.HemisphereLight(0xffc4d8, 0x1a1020, .9));
      keyLight=new THREE.DirectionalLight(0xffffff, 1.15);
      keyLight.position.set(2.2, 3.4, 4);
      scene.add(keyLight);
      fill=new THREE.PointLight(0x3ef0e0, 1.4, 12);
      fill.position.set(-2, 2.2, 3);
      scene.add(fill);
      var floor=new THREE.Mesh(new THREE.CircleGeometry(6, 48), mat(0x16111c));
      floor.rotation.x=-Math.PI/2;
      scene.add(floor);
      var ring=new THREE.Mesh(new THREE.TorusGeometry(1.35,.025,8,48), mat(0x3ef0e0));
      ring.rotation.x=-Math.PI/2; ring.position.y=.02; scene.add(ring);
      warden=buildWarden();
      warden.position.set(0,0,0);
      scene.add(warden);
      ok=true;
      if(canvas2d) canvas2d.style.opacity='0';
    }catch(e){ ok=false; }
  }

  var call=$('call'), hint=$('hint'), mark=$('mark'), pct=$('pct'), bar=$('barFill'), holdBtn=$('hold'), winRow=$('winRow');
  var watching=true, gaze=1, progress=0, holding=false, won=false, nextFlip=performance.now()+1800, last=0;

  function resize(){
    if(!ok) return;
    var w=webgl.clientWidth, h=webgl.clientHeight;
    if(!w||!h) return;
    renderer.setSize(w,h,false);
    camera.aspect=w/h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  function setHold(n){
    if(won) return;
    holding=n;
    if(holdBtn) holdBtn.textContent=n?'Walking':'Hold to walk the record';
  }
  if(holdBtn){
    holdBtn.addEventListener('pointerdown', function(e){ e.preventDefault(); setHold(true); });
  }
  window.addEventListener('pointerup', function(){ setHold(false); });
  window.addEventListener('keydown', function(e){ if(e.code==='Space'){ e.preventDefault(); setHold(true); }});
  window.addEventListener('keyup', function(e){ if(e.code==='Space') setHold(false); });
  if($('copyNote')) $('copyNote').onclick=function(){ navigator.clipboard.writeText(brief); };

  function frame(now){
    requestAnimationFrame(frame);
    if(!won && now>nextFlip){
      watching=!watching;
      nextFlip=now+(watching?1600:900);
    }
    gaze+=((watching?1:0)-gaze)*.12;
    var seen=gaze>.55;
    if(holding && !seen && !won){
      progress=Math.min(1, progress+.0035);
      if(progress>=1) won=true;
    }
    if(ok){
      resize();
      var bounce=Math.sin(now/420)*.04;
      warden.position.y=bounce;
      warden.userData.head.rotation.y += ((watching?0:-1.05)-warden.userData.head.rotation.y)*.16;
      warden.userData.head.rotation.x = Math.sin(now/700)*.05;
      fill.color.setHex(seen?0xff3b7a:0x3ef0e0);
      camera.lookAt(0, 1.15, 0);
      renderer.render(scene, camera);
    } else if(canvas2d){
      draw2d(canvas2d, seen, now);
    }
    if(now-last>80){
      last=now;
      if(call){
        call.textContent=won?'Read.':seen?'Review.':'Walk.';
        call.className='call '+(seen&&!won?'still':'move');
      }
      if(pct) pct.textContent=String(Math.round(progress*100));
      if(bar) bar.style.width=(progress*100)+'%';
      if(mark) mark.textContent=gates.slice().reverse().find(function(g){return progress>=g.at}).text;
      if(won){
        if(hint) hint.textContent='Decks are on the cards.';
        if(winRow) winRow.classList.add('show');
        if(holdBtn) holdBtn.style.display='none';
      }
    }
  }
  requestAnimationFrame(frame);
}

function startWork(){
  var grid=$('workGrid'), panel=$('casePanel');
  if(!grid) return;
  works.forEach(function(item,i){
    var btn=document.createElement('button');
    btn.className='card'; btn.type='button';
    btn.innerHTML='<em>'+item.tag+'</em><h3>'+item.title+'</h3><p>'+item.blurb+'</p>';
    btn.onclick=function(){
      Array.prototype.forEach.call(grid.children, function(c){ c.classList.remove('on'); });
      btn.classList.add('on');
      panel.hidden=false;
      $('caseKicker').textContent=item.tag;
      $('caseTitle').textContent=item.title;
      $('caseBody').innerHTML=item.html;
      if(i) panel.scrollIntoView({behavior:'smooth', block:'nearest'});
    };
    grid.appendChild(btn);
    if(i===0) btn.onclick();
  });
}

function startRounds(){
  document.querySelectorAll('[data-mod]').forEach(function(btn){
    btn.onclick=function(){
      document.querySelectorAll('[data-mod]').forEach(function(b){ b.classList.remove('on'); });
      btn.classList.add('on');
    };
  });
  document.querySelectorAll('[data-year]').forEach(function(btn){
    btn.onclick=function(){
      document.querySelectorAll('[data-year]').forEach(function(b){ b.classList.remove('on'); });
      btn.classList.add('on');
    };
  });
}

window.addEventListener('DOMContentLoaded', function(){
  startField();
  startWork();
  startRounds();
});
