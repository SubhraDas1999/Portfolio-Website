function $(id){return document.getElementById(id)}
const ZOMATO='https://assets.nextleap.app/submissions/Milestone1-SubhraDasZomatoCasdeStudy-34861ea7-4d6c-4a09-b17b-3036a044df1a.pdf';
const RESUME='https://assets.nextleap.app/user-resume/Subhra_Das_Resume-005110ac-cb89-424a-a6ff-7ed14c6e2f85.pdf';
const PORT='https://nextleap.app/portfolio/subhra-das';
function deck(url,label){return '<p><a class="hold" href="'+url+'" target="_blank" rel="noreferrer">'+label+'</a></p><iframe class="deck" title="deck" src="'+url+'#toolbar=0"></iframe>'}
const gates=[{at:0,text:'Walk the record. Hold to move the years.'},{at:.16,text:'2020. Zyadashop opens.'},{at:.34,text:'Month one. 4,000 merchants.'},{at:.5,text:'Zomato case is open below.'},{at:.66,text:'2022. Mosambee acquires Appyflux.'},{at:.82,text:'Mod91. Ten steps to five.'},{at:1,text:'The record is on the page. Read it.'}];
const brief='Subhra Pratik Das, associate PM, Mosambee, Mumbai. Zyadashop 100K+ downloads, acquired June 2022. NextLeap 1/350. subhrapratikdas@gmail.com';
const works=[
{tag:'Shipped',title:'CareerFlow AI',blurb:'Live product.',html:'<p>Shipped. Open the product.</p><p><a href="https://careerflow-ai.vercel.app" target="_blank" rel="noreferrer">CareerFlow AI</a></p>'},
{tag:'Shipped',title:'pasteguard',blurb:'Local command firewall.',html:'<p><a href="https://github.com/SubhraDas1999/pasteguard" target="_blank" rel="noreferrer">GitHub repo</a></p>'},
{tag:'Graduation · 274/300',title:'BookMyShow',blurb:'High-demand booking. Auction, then DigiLocker.',html:'<p><b>Problem.</b> Coldplay and World Cup drops: bots, queues, drop-off.</p><p><b>Approach.</b> Auction ticketing, then DigiLocker e-verification.</p><p><b>Result.</b> 274/300. Rank 1 of 350+.</p><p>NextLeap hosts the graduation deck; their embed on the portfolio page is broken. Open the source page, or send the PDF and it goes in this frame.</p><p><a href="'+PORT+'" target="_blank" rel="noreferrer">NextLeap portfolio source</a></p>'},
{tag:'Case · deck on page',title:'Zomato reviews',blurb:'Increase text reviews. Milestone 1 deck is below.',html:'<p><b>Problem.</b> More text reviews without punishing kitchens and riders.</p><p><b>Approach.</b> Smart notification on phone and watch so a review can be written from the prompt.</p>'+deck(ZOMATO,'Open Zomato deck PDF')},
{tag:'Resume',title:'Resume',blurb:'One page.',html:deck(RESUME,'Open resume PDF')},
{tag:'Case',title:'Defining product outcomes',blurb:'Market analysis and mapping outcomes.',html:'<p>Fellowship module. Pick a measurable outcome. Map the market.</p><p>Send the PDF to pin it here like Zomato.</p>'},
{tag:'Case',title:'Deriving insights from users',blurb:'Segmentation and research.',html:'<p>Segment. Talk. Decide.</p><p>Send the PDF to pin it here.</p>'},
{tag:'Case',title:'Product note + PRD',blurb:'Wireframes, metrics, stories.',html:'<p>Note and PRD from the fellowship.</p><p>Send the PDFs to pin them here.</p>'},
{tag:'Teardown',title:'Maps, Goibibo, CRED',blurb:'Opportunity briefs.',html:'<p>Three teardowns.</p><p>Send the PDFs to pin them here.</p>'}
];
function openWork(i){var grid=$('workGrid');if(!grid||!grid.children[i])return;grid.children[i].click();}
function mat(o){return new THREE.MeshStandardMaterial(o)}
function add(p,g,m,x,y,z,sx,sy,sz){var mesh=new THREE.Mesh(g,m);mesh.position.set(x||0,y||0,z||0);if(sx)mesh.scale.set(sx,sy||sx,sz||sx);p.add(mesh);return mesh}
function buildChibi(){
 var root=new THREE.Group(),body=new THREE.Group(),head=new THREE.Group();root.add(body);root.add(head);
 var skin=mat({color:0xffe1c9,roughness:.45}),dress=mat({color:0xff4f86,roughness:.4}),trim=mat({color:0x3ef0e0,emissive:0x3ef0e0,emissiveIntensity:.35}),hair=mat({color:0x2a1420,roughness:.55}),white=mat({color:0xfff7ef});
 var pts=[new THREE.Vector2(.05,0),new THREE.Vector2(.55,.12),new THREE.Vector2(.62,.7),new THREE.Vector2(.28,1.05)];
 add(body,new THREE.LatheGeometry(pts,24),dress,0,0,0);
 add(body,new THREE.TorusGeometry(.34,.035,8,24),trim,0,.72,0).rotation.x=Math.PI/2;
 var skull=add(head,new THREE.SphereGeometry(.48,32,24),skin,0,0,0);skull.scale.set(1,1.06,.96);
 add(head,new THREE.SphereGeometry(.52,24,16,0,Math.PI*2,0,Math.PI*.55),hair,0,.08,-.02);
 add(head,new THREE.SphereGeometry(.16,12,10),hair,-.4,.18,0);add(head,new THREE.SphereGeometry(.16,12,10),hair,.4,.18,0);
 var lw=add(head,new THREE.SphereGeometry(.11,16,12),white,-.15,.04,.4);lw.scale.set(1,1.1,.6);
 var rw=add(head,new THREE.SphereGeometry(.11,16,12),white,.15,.04,.4);rw.scale.set(1,1.1,.6);
 var pupil=mat({color:0x1a1018});var lp=add(head,new THREE.SphereGeometry(.055,12,10),pupil,-.15,.04,.48);var rp=add(head,new THREE.SphereGeometry(.055,12,10),pupil,.15,.04,.48);
 head.position.y=1.48;root.userData={head:head,lPupil:lp,rPupil:rp};return root;
}
function buildToySet(scene){
 var floor=new THREE.Mesh(new THREE.CircleGeometry(10,40),mat({color:0x141018,roughness:.9}));floor.rotation.x=-Math.PI/2;scene.add(floor);
 var ring=new THREE.Mesh(new THREE.TorusGeometry(3.2,.05,8,48),mat({color:0xff3b7a,emissive:0xff3b7a,emissiveIntensity:.4}));ring.rotation.x=Math.PI/2;ring.position.y=.04;scene.add(ring);
}
function drawField2d(canvas,progress,seen){
 var ctx=canvas.getContext('2d');if(!ctx)return;var r=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);
 var w=Math.max(r.width,1),h=Math.max(r.height,1);canvas.width=Math.floor(w*dpr);canvas.height=Math.floor(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
 ctx.fillStyle='#07050b';ctx.fillRect(0,0,w,h);
 var cx=w/2,vy=h*.26,g=ctx.createRadialGradient(cx,vy,10,cx,vy,w*.5);
 g.addColorStop(0,seen?'rgba(255,59,122,.3)':'rgba(62,240,224,.14)');g.addColorStop(1,'rgba(7,5,11,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
 ctx.beginPath();ctx.moveTo(cx-16,vy+28);ctx.lineTo(cx+16,vy+28);ctx.lineTo(w*.94,h);ctx.lineTo(w*.06,h);ctx.closePath();ctx.fillStyle='#120c18';ctx.fill();
}
function startField(){
 var webgl=$('arena'),canvas2d=$('field2d'),threeOk=false,renderer,scene,camera,chibi,fill;
 if(webgl&&typeof THREE!=='undefined'){try{
  renderer=new THREE.WebGLRenderer({canvas:webgl,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.setClearColor(0x07050b,0);
  scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(34,1,.1,40);camera.position.set(1.4,1.7,4.6);
  scene.add(new THREE.HemisphereLight(0xffc4d8,0x1a1020,.85));
  var key=new THREE.DirectionalLight(0xfff0dd,1.15);key.position.set(2.2,5,3);scene.add(key);
  fill=new THREE.PointLight(0x3ef0e0,1.4,10);fill.position.set(-1.6,2.2,2.4);scene.add(fill);
  buildToySet(scene);chibi=buildChibi();chibi.position.set(0,0,-1.4);scene.add(chibi);threeOk=true;
 }catch(e){threeOk=false}}
 var call=$('call'),hint=$('hint'),mark=$('mark'),pct=$('pct'),bar=$('barFill'),barWrap=$('bar'),holdBtn=$('hold'),winRow=$('winRow');
 var watching=false,gaze=0,progress=0,holding=false,won=false,nextFlip=performance.now()+1400,lastUi=0,opened=0;
 function resize(){if(!threeOk||!webgl)return;var w=webgl.clientWidth,h=webgl.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
 resize();window.addEventListener('resize',resize);
 function setHold(n){if(won)return;holding=n;holdBtn.classList.toggle('down',n);holdBtn.textContent=n?'Walking the record':'Hold to walk the record'}
 holdBtn.addEventListener('pointerdown',function(e){e.preventDefault();setHold(true)});
 window.addEventListener('pointerup',function(){setHold(false)});
 window.addEventListener('keydown',function(e){if(e.code==='Space'){e.preventDefault();setHold(true)}});
 window.addEventListener('keyup',function(e){if(e.code==='Space')setHold(false)});
 if($('copyNote'))$('copyNote').onclick=function(){navigator.clipboard.writeText(brief)};
 function frame(now){
  requestAnimationFrame(frame);
  if(!won&&now>nextFlip){watching=!watching;nextFlip=now+(watching?1400:1600)}
  gaze+=((watching?1:0)-gaze)*.1;var seen=gaze>.62;
  if(holding&&!seen&&!won){progress=Math.min(1,progress+.0032);if(progress>=1)won=true}
  if(progress>=.5&&opened<1){opened=1;openWork(3)}
  if(progress>=1&&opened<2){opened=2;openWork(2)}
  if(canvas2d)drawField2d(canvas2d,progress,seen);
  if(threeOk){resize();chibi.userData.head.rotation.y+=((watching?0:Math.PI)-chibi.userData.head.rotation.y)*.12;chibi.userData.lPupil.scale.setScalar(seen?1.25:1);chibi.userData.rPupil.scale.setScalar(seen?1.25:1);fill.color.setHex(seen?0xff3b7a:0x3ef0e0);camera.lookAt(0,1.15,-1.2);renderer.render(scene,camera)}
  if(now-lastUi>70){lastUi=now;call.textContent=won?'Read.':seen?'Review.':'Walk.';call.className='call '+(seen&&!won?'still':'move');holdBtn.classList.toggle('danger',seen&&!won);barWrap.classList.toggle('danger',seen&&!won);pct.textContent=String(Math.round(progress*100));bar.style.width=progress*100+'%';mark.textContent=gates.slice().reverse().find(function(g){return progress>=g.at}).text;if(won){hint.textContent='The walk is the brief. Cases and the Zomato deck are open below.';winRow.classList.add('show');holdBtn.style.display='none'}}
 }
 requestAnimationFrame(frame);
}
function startWork(){
 var grid=$('workGrid'),panel=$('casePanel');if(!grid)return;
 works.forEach(function(item,i){var btn=document.createElement('button');btn.className='card';btn.type='button';btn.innerHTML='<em>'+item.tag+'</em><h3>'+item.title+'</h3><p>'+item.blurb+'</p>';
 btn.onclick=function(){Array.prototype.forEach.call(grid.children,function(c){c.classList.remove('on')});btn.classList.add('on');panel.hidden=false;$('caseKicker').textContent=item.tag;$('caseTitle').textContent=item.title;$('caseBody').innerHTML=item.html;if(i>0)panel.scrollIntoView({behavior:'smooth',block:'nearest'})};grid.appendChild(btn);if(i===3)btn.onclick()});
}
function startRounds(){
 var mods={mod91:{title:'Mod91',when:'0 to Play Store',lede:'Onboarding was about 10 steps. It is about 5.'},apex:{title:'Apex',when:'Checker',lede:'Assisted onboarding 60 min to 10. Approvals 2-3 days to 12-24 hours.'},soundbox:{title:'Soundbox + QR',when:'Same flow',lede:'QR, Soundbox and the plan sit on one flow.'}};
 document.querySelectorAll('[data-mod]').forEach(function(btn){btn.onclick=function(){document.querySelectorAll('[data-mod]').forEach(function(b){b.classList.remove('on')});btn.classList.add('on');var i=mods[btn.dataset.mod];$('modBody').innerHTML='<p class="kicker">'+i.when+'</p><h3>'+i.title+'</h3><p>'+i.lede+'</p>'}});
 var beats={2020:'April 2020. One shop. Month one: 4,000 merchants. 70% signup finish.',2021:'Web reached 10,000 merchants in two months. DAU moved 80% after a HUL and IDEO pilot.',2022:'100K+ downloads. 4.2 stars. Hidden Gems 2022. June: Mosambee acquires Appyflux.'};
 document.querySelectorAll('[data-year]').forEach(function(btn){btn.onclick=function(){document.querySelectorAll('[data-year]').forEach(function(b){b.classList.remove('on')});btn.classList.add('on');$('yearBody').textContent=beats[btn.dataset.year]}});
}
window.addEventListener('DOMContentLoaded',function(){startField();startWork();startRounds()});
