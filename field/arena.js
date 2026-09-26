function $(id){return document.getElementById(id)}
const gates=[{at:0,text:'The field is open. Mumbai.'},{at:.16,text:'April 2020. Zyadashop opens.'},{at:.34,text:'Month one. 4,000 merchants.'},{at:.5,text:'100K+ downloads. 4.2 stars.'},{at:.66,text:'June 2022. Mosambee acquires Appyflux.'},{at:.82,text:'Mod91. Onboarding about 10 to 5.'},{at:1,text:'Apex. 60 minutes to 10.'}];
const brief='Subhra Pratik Das, associate PM, Mosambee, Mumbai. Zyadashop 100K+ downloads, acquired June 2022. NextLeap 1/350. subhrapratikdas@gmail.com';
const works=[
{tag:'Shipped',title:'CareerFlow AI',blurb:'A career product he built and published.',html:'<p><b>What they see.</b> A live product, not a PDF.</p><p><a href="https://careerflow-ai.vercel.app" target="_blank" rel="noreferrer">Open CareerFlow AI</a></p>'},
{tag:'Shipped',title:'pasteguard',blurb:'Local command firewall. Offline. No API key.',html:'<p><b>What they see.</b> The repo.</p><p><a href="https://github.com/SubhraDas1999/pasteguard" target="_blank" rel="noreferrer">Open the repo</a></p>'},
{tag:'Graduation · 274/300',title:'BookMyShow',blurb:'High-demand booking: Coldplay, Cricket World Cup.',html:'<p><b>What they see.</b> This brief. No PDF attached.</p><p><b>Problem.</b> High-demand drops without bots and drop-off.</p><p><b>Approach.</b> Auction, then DigiLocker.</p><p><b>Result.</b> 274/300. Rank 1 of 350+.</p>'},
{tag:'Case',title:'Zomato reviews',blurb:'How to get more reviews written, not just more orders.',html:'<p><b>What they see.</b> This brief.</p><p><b>Problem.</b> More reviews without punishing kitchens and riders.</p><p><b>Approach.</b> Outcomes, market map, user splits, note, PRD.</p>'},
{tag:'Case',title:'Defining product outcomes',blurb:'Market analysis and mapping outcomes.',html:'<p><b>What they see.</b> This module.</p><p>Pick a measurable outcome. Map the market.</p>'},
{tag:'Case',title:'Deriving insights from users',blurb:'Segmentation and research.',html:'<p><b>What they see.</b> This module.</p><p>Segment, talk, decide.</p>'},
{tag:'Case',title:'Product note + PRD',blurb:'Wireframes, metrics, user stories, system design.',html:'<p><b>What they see.</b> The two artifacts described here.</p>'},
{tag:'Teardown',title:'Maps, Goibibo, CRED',blurb:'Opportunity briefs from the fellowship.',html:'<p><b>What they see.</b> Three short teardowns on this page.</p>'}
];
function mat(o){return new THREE.MeshStandardMaterial(o)}
function add(p,g,m,x,y,z,sx,sy,sz){var mesh=new THREE.Mesh(g,m);mesh.position.set(x||0,y||0,z||0);if(sx)mesh.scale.set(sx,sy||sx,sz||sx);mesh.castShadow=true;p.add(mesh);return mesh}
function buildChibi(){
 var root=new THREE.Group(),body=new THREE.Group(),head=new THREE.Group();root.add(body);root.add(head);
 var skin=mat({color:0xffe1c9,roughness:.45}),dress=mat({color:0xff4f86,roughness:.4}),trim=mat({color:0x3ef0e0,emissive:0x3ef0e0,emissiveIntensity:.35}),hair=mat({color:0x2a1420,roughness:.55}),white=mat({color:0xfff7ef,roughness:.3}),blush=mat({color:0xff9aa8,roughness:.5});
 var pts=[new THREE.Vector2(.05,0),new THREE.Vector2(.55,.12),new THREE.Vector2(.62,.7),new THREE.Vector2(.28,1.05)];
 add(body,new THREE.LatheGeometry(pts,24),dress,0,0,0);
 add(body,new THREE.TorusGeometry(.34,.035,8,24),trim,0,.72,0).rotation.x=Math.PI/2;
 add(body,new THREE.SphereGeometry(.09,10,8),skin,-.22,.95,.08);
 add(body,new THREE.SphereGeometry(.09,10,8),skin,.22,.95,.08);
 var skull=add(head,new THREE.SphereGeometry(.48,32,24),skin,0,0,0);skull.scale.set(1,1.06,.96);
 add(head,new THREE.SphereGeometry(.14,12,10),blush,-.22,-.06,.34,1,.7,.5);
 add(head,new THREE.SphereGeometry(.14,12,10),blush,.22,-.06,.34,1,.7,.5);
 add(head,new THREE.SphereGeometry(.52,24,16,0,Math.PI*2,0,Math.PI*.55),hair,0,.08,-.02);
 add(head,new THREE.SphereGeometry(.16,12,10),hair,-.4,.18,0);
 add(head,new THREE.SphereGeometry(.16,12,10),hair,.4,.18,0);
 add(head,new THREE.SphereGeometry(.18,12,10),hair,0,.48,-.02);
 var lw=add(head,new THREE.SphereGeometry(.11,16,12),white,-.15,.04,.4);lw.scale.set(1,1.1,.6);
 var rw=add(head,new THREE.SphereGeometry(.11,16,12),white,.15,.04,.4);rw.scale.set(1,1.1,.6);
 var pupil=mat({color:0x1a1018,roughness:.3});
 var lp=add(head,new THREE.SphereGeometry(.055,12,10),pupil,-.15,.04,.48);
 var rp=add(head,new THREE.SphereGeometry(.055,12,10),pupil,.15,.04,.48);
 var shine=mat({color:0xffffff,emissive:0xffffff,emissiveIntensity:.8});
 add(head,new THREE.SphereGeometry(.02,8,8),shine,-.12,.08,.52);
 add(head,new THREE.SphereGeometry(.02,8,8),shine,.18,.08,.52);
 add(head,new THREE.SphereGeometry(.045,10,8),mat({color:0xff6b8a}),0,-.16,.42,1.4,.55,.8);
 head.position.y=1.48; root.userData={head:head,body:body,lPupil:lp,rPupil:rp}; return root;
}
function buildToySet(scene){
 var floor=new THREE.Mesh(new THREE.CircleGeometry(10,40),mat({color:0x141018,roughness:.9}));floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;scene.add(floor);
 var ring=new THREE.Mesh(new THREE.TorusGeometry(3.2,.05,8,48),mat({color:0xff3b7a,emissive:0xff3b7a,emissiveIntensity:.4}));ring.rotation.x=Math.PI/2;ring.position.y=.04;scene.add(ring);
 for(var i=0;i<5;i++){var step=new THREE.Mesh(new THREE.BoxGeometry(.9+i*.15,.16,.55),mat({color:i%2?0x3ef0e0:0xff3b7a,roughness:.4}));step.position.set(-1.8,.08+i*.16,-1.1-i*.35);scene.add(step)}
}
function drawField2d(canvas,progress,running,seen){
 var ctx=canvas.getContext('2d');if(!ctx)return;
 var r=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);
 var w=Math.max(r.width,1),h=Math.max(r.height,1);canvas.width=Math.floor(w*dpr);canvas.height=Math.floor(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
 ctx.fillStyle='#07050b';ctx.fillRect(0,0,w,h);
 var cx=w/2,vy=h*.26,g=ctx.createRadialGradient(cx,vy,10,cx,vy,w*.5);
 g.addColorStop(0,seen?'rgba(255,59,122,.3)':'rgba(62,240,224,.14)');g.addColorStop(1,'rgba(7,5,11,0)');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
 ctx.beginPath();ctx.moveTo(cx-16,vy+28);ctx.lineTo(cx+16,vy+28);ctx.lineTo(w*.94,h);ctx.lineTo(w*.06,h);ctx.closePath();ctx.fillStyle='#120c18';ctx.fill();
 var scroll=(progress*32)%16;
 for(var i=0;i<16;i++){var d=((i+scroll)%16)/16,y=vy+28+Math.pow(d,1.4)*(h-vy-28),half=12+Math.pow(d,1.4)*(w*.42);
 ctx.strokeStyle=i%2===0?'rgba(255,59,122,.75)':'rgba(62,240,224,.28)';ctx.lineWidth=d>.6?3:1;ctx.beginPath();ctx.moveTo(cx-half,y);ctx.lineTo(cx+half,y);ctx.stroke();}
}
function startField(){
 var webgl=$('arena'),canvas2d=$('field2d'),threeOk=false,renderer,scene,camera,chibi,fill;
 if(webgl&&typeof THREE!=='undefined'){
  try{
   renderer=new THREE.WebGLRenderer({canvas:webgl,antialias:true,alpha:true});
   renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.setClearColor(0x07050b,0);
   scene=new THREE.Scene();scene.fog=new THREE.Fog(0x07050b,8,18);
   camera=new THREE.PerspectiveCamera(34,1,.1,40);camera.position.set(1.4,1.7,4.6);
   scene.add(new THREE.HemisphereLight(0xffc4d8,0x1a1020,.85));
   var key=new THREE.DirectionalLight(0xfff0dd,1.15);key.position.set(2.2,5,3);scene.add(key);
   fill=new THREE.PointLight(0x3ef0e0,1.4,10);fill.position.set(-1.6,2.2,2.4);scene.add(fill);
   buildToySet(scene);chibi=buildChibi();chibi.position.set(0,0,-1.4);chibi.scale.setScalar(1.05);scene.add(chibi);threeOk=true;
  }catch(e){threeOk=false}
 }
 var call=$('call'),hint=$('hint'),mark=$('mark'),pct=$('pct'),bar=$('barFill'),barWrap=$('bar'),holdBtn=$('hold'),flash=$('flash'),winRow=$('winRow');
 var watching=false,gaze=0,progress=0,holding=false,won=false,lockUntil=0,nextFlip=performance.now()+1300,lastUi=0;
 function resize(){if(!threeOk||!webgl)return;var w=webgl.clientWidth,h=webgl.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
 resize();window.addEventListener('resize',resize);
 function setHold(n){if(won)return;holding=n;holdBtn.classList.toggle('down',n);holdBtn.textContent=n?'Running':'Hold to run'}
 holdBtn.addEventListener('pointerdown',function(e){e.preventDefault();setHold(true)});
 window.addEventListener('pointerup',function(){setHold(false)});
 window.addEventListener('keydown',function(e){if(e.code==='Space'){e.preventDefault();setHold(true)}});
 window.addEventListener('keyup',function(e){if(e.code==='Space')setHold(false)});
 if($('copyNote'))$('copyNote').onclick=function(){navigator.clipboard.writeText(brief).then(function(){$('copyNote').textContent='Copied.'})};
 function frame(now){
  requestAnimationFrame(frame);
  if(!won&&now>nextFlip){watching=!watching;nextFlip=now+(watching?800+Math.random()*600:1000+Math.random()*1100)}
  gaze+=((watching?1:0)-gaze)*.1;var seen=gaze>.62,running=holding&&now>lockUntil&&!won;
  if(running&&!seen){progress=Math.min(1,progress+.0034);if(progress>=1)won=true}
  else if(running&&seen){var floors=[0,.16,.34,.5,.66,.82];progress=floors.slice().reverse().find(function(g){return g<progress-.02})||0;lockUntil=now+700;holding=false;holdBtn.textContent='Hold to run';flash.classList.add('on');setTimeout(function(){flash.classList.remove('on')},180)}
  if(canvas2d)drawField2d(canvas2d,progress,running,seen);
  if(threeOk){resize();chibi.userData.head.rotation.y+=((watching?0:Math.PI)-chibi.userData.head.rotation.y)*.12;chibi.position.y=Math.sin(now/550)*.03;chibi.userData.lPupil.scale.setScalar(seen?1.25:1);chibi.userData.rPupil.scale.setScalar(seen?1.25:1);fill.color.setHex(seen?0xff3b7a:0x3ef0e0);camera.position.x=1.4+Math.sin(now/4000)*.2;camera.lookAt(0,1.15,-1.2);renderer.render(scene,camera)}
  if(now-lastUi>70){lastUi=now;call.textContent=won?'Through.':seen?'Still.':'Move.';call.className='call '+(seen&&!won?'still':'move');holdBtn.classList.toggle('danger',seen&&!won);barWrap.classList.toggle('danger',seen&&!won);pct.textContent=String(Math.round(progress*100));bar.style.width=progress*100+'%';mark.textContent=gates.slice().reverse().find(function(g){return progress>=g.at}).text;if(won){hint.textContent='You crossed without moving while she looked.';winRow.classList.add('show');holdBtn.style.display='none'}}
 }
 requestAnimationFrame(frame);
}
function startWork(){
 var grid=$('workGrid'),panel=$('casePanel');if(!grid)return;
 works.forEach(function(item,i){var btn=document.createElement('button');btn.className='card';btn.type='button';btn.innerHTML='<em>'+item.tag+'</em><h3>'+item.title+'</h3><p>'+item.blurb+'</p>';
 btn.onclick=function(){Array.prototype.forEach.call(grid.children,function(c){c.classList.remove('on')});btn.classList.add('on');panel.hidden=false;$('caseKicker').textContent=item.tag;$('caseTitle').textContent=item.title;$('caseBody').innerHTML=item.html;panel.scrollIntoView({behavior:'smooth',block:'nearest'})};grid.appendChild(btn);if(i===0)btn.onclick()});
}
function startRounds(){
 var mods={mod91:{title:'Mod91',when:'0 to Play Store',lede:'Onboarding was about 10 steps. It is about 5.'},apex:{title:'Apex',when:'Checker',lede:'Assisted onboarding 60 min to 10. Approvals 2-3 days to 12-24 hours.'},soundbox:{title:'Soundbox + QR',when:'Same flow',lede:'QR, Soundbox and the plan sit on one flow.'}};
 document.querySelectorAll('[data-mod]').forEach(function(btn){btn.onclick=function(){document.querySelectorAll('[data-mod]').forEach(function(b){b.classList.remove('on')});btn.classList.add('on');var i=mods[btn.dataset.mod];$('modBody').innerHTML='<p class="kicker">'+i.when+'</p><h3>'+i.title+'</h3><p>'+i.lede+'</p>'}});
 var beats={2020:'April 2020. One shop. Month one: 4,000 merchants. 70% signup finish.',2021:'Web reached 10,000 merchants in two months. DAU moved 80% after a HUL and IDEO pilot.',2022:'100K+ downloads. 4.2 stars. Hidden Gems 2022. June: Mosambee acquires Appyflux.'};
 document.querySelectorAll('[data-year]').forEach(function(btn){btn.onclick=function(){document.querySelectorAll('[data-year]').forEach(function(b){b.classList.remove('on')});btn.classList.add('on');$('yearBody').textContent=beats[btn.dataset.year]}});
 if($('cutBtn'))$('cutBtn').onclick=function(){var list=$('cutList'),tight=list.dataset.tight==='1';list.dataset.tight=tight?'0':'1';$('cutBtn').textContent=tight?'Cut it to 5':'Show the long flow';$('cutTitle').textContent=tight?'About 10 steps':'About 5 steps';Array.prototype.forEach.call(list.children,function(row,i){row.style.display=!tight&&i>=5?'none':'list-item'})};
}
window.addEventListener('DOMContentLoaded',function(){startField();startWork();startRounds()});
