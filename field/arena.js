function $(id){return document.getElementById(id)}
function deck(url,label){return '<p><a class="hold" href="'+url+'" target="_blank" rel="noreferrer">'+label+'</a></p><iframe class="deck" title="deck" src="'+url+'"></iframe>'}
const P={
 creator:'https://assets.nextleap.app/submissions/NextLeapLearninPublicChallenge_MarketAnalysis_TheCreatorEconomy-SubhraDas_compressed-730ca423-5e9e-445b-ad34-93145641fc7d.pdf',
 maps:'https://assets.nextleap.app/submissions/NextLeapLearninPublicChallenge_ProductTeardownGoogleMaps-SubhraDas-ee612ffa-4fe2-4cdb-a04a-c2cc4debbd67.pdf',
 m3:'https://assets.nextleap.app/submissions/Milestone3-e102e309-9b87-4b01-bff6-02b9188ec89e.pdf',
 wires:'https://assets.nextleap.app/submissions/Wireframesformilestone-34-749647ea-f71d-40d6-83ef-b305505916dc.pdf',
 m1:'https://assets.nextleap.app/submissions/Milestone1-SubhraDasZomatoCasdeStudy-34861ea7-4d6c-4a09-b17b-3036a044df1a.pdf',
 resume:'https://assets.nextleap.app/user-resume/Subhra_Das_Resume-005110ac-cb89-424a-a6ff-7ed14c6e2f85.pdf',
 nl:'https://nextleap.app/portfolio/subhra-das'
};
const works=[
{tag:'LIP 5/5',title:'The Creator Economy',blurb:'Independent creators on social. Market analysis.',html:deck(P.creator,'Open Creator Economy PDF')},
{tag:'Zomato · M3–4',title:'Userflow and wireframes',blurb:'Gamified review rewards. His wireframes.',html:deck(P.wires,'Open wireframes PDF')},
{tag:'Zomato · M3',title:'kheer mangooge, kheer denge',blurb:'Strategies to get more text reviews.',html:deck(P.m3,'Open Milestone 3 PDF')},
{tag:'LIP 4/5',title:'Google Maps heuristics',blurb:'Nielsen 10 on Maps.',html:deck(P.maps,'Open Maps teardown PDF')},
{tag:'Zomato · M1',title:'Weekly Milestone 1',blurb:'Increase text reviews. Food delivery vertical.',html:deck(P.m1,'Open Milestone 1 PDF')},
{tag:'Resume',title:'Resume',blurb:'One page.',html:deck(P.resume,'Open resume PDF')},
{tag:'Shipped',title:'CareerFlow AI',blurb:'Live product.',html:'<p><a href="https://careerflow-ai.vercel.app" target="_blank" rel="noreferrer">Open CareerFlow AI</a></p>'},
{tag:'Shipped',title:'pasteguard',blurb:'Local command firewall.',html:'<p><a href="https://github.com/SubhraDas1999/pasteguard" target="_blank" rel="noreferrer">Open the repo</a></p>'},
{tag:'On NextLeap',title:'Milestone 2 and 4, Goibibo, CRED, Discord',blurb:'On his NextLeap project grid. Public file names were not published.',html:'<p>Milestone 2 (rasode mein kaun tha), Milestone 4 (watch + notification reviews), Goibibo travel AI, CRED referral, Discord teardown sit on the NextLeap projects page. Their CDN files are not named with his byline, so they are not framed here.</p><p><a class="hold" href="'+P.nl+'" target="_blank" rel="noreferrer">Open NextLeap projects</a></p><p>Send those five PDFs and they get the same frame as Maps and Zomato M1–M3.</p>'}
];
const gates=[{at:0,text:'Hold to walk the record.'},{at:.5,text:'Zomato decks are open below.'},{at:1,text:'Read the work.'}];
const brief='Subhra Pratik Das, associate PM, Mosambee. Zyadashop 100K+ downloads. NextLeap 1/350. subhrapratikdas@gmail.com';
function openWork(i){var g=$('workGrid');if(g&&g.children[i])g.children[i].click()}
function mat(o){return new THREE.MeshStandardMaterial(o)}
function add(p,g,m,x,y,z){var mesh=new THREE.Mesh(g,m);mesh.position.set(x||0,y||0,z||0);p.add(mesh);return mesh}
function buildChibi(){
 var root=new THREE.Group(),head=new THREE.Group();root.add(head);
 var skin=mat({color:0xffe1c9}),dress=mat({color:0xff4f86}),hair=mat({color:0x2a1420}),white=mat({color:0xfff7ef});
 add(root,new THREE.LatheGeometry([new THREE.Vector2(.05,0),new THREE.Vector2(.55,.12),new THREE.Vector2(.62,.7),new THREE.Vector2(.28,1.05)],24),dress);
 var skull=add(head,new THREE.SphereGeometry(.48,24,16),skin);skull.scale.set(1,1.06,.96);
 add(head,new THREE.SphereGeometry(.52,16,12,0,Math.PI*2,0,Math.PI*.55),hair,0,.08,-.02);
 add(head,new THREE.SphereGeometry(.16,10,8),hair,-.4,.18,0);add(head,new THREE.SphereGeometry(.16,10,8),hair,.4,.18,0);
 var pupil=mat({color:0x1a1018});var lp=add(head,new THREE.SphereGeometry(.055,10,8),pupil,-.15,.04,.48);var rp=add(head,new THREE.SphereGeometry(.055,10,8),pupil,.15,.04,.48);
 add(head,new THREE.SphereGeometry(.11,12,8),white,-.15,.04,.4);add(head,new THREE.SphereGeometry(.11,12,8),white,.15,.04,.4);
 head.position.y=1.48;root.userData={head:head,lPupil:lp,rPupil:rp};return root;
}
function startField(){
 var webgl=$('arena'),canvas2d=$('field2d'),ok=false,renderer,scene,camera,chibi,fill;
 if(webgl&&typeof THREE!=='undefined'){try{
  renderer=new THREE.WebGLRenderer({canvas:webgl,antialias:true,alpha:true});renderer.setClearColor(0x07050b,0);
  scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(34,1,.1,40);camera.position.set(1.4,1.7,4.6);
  scene.add(new THREE.HemisphereLight(0xffc4d8,0x1a1020,.9));fill=new THREE.PointLight(0x3ef0e0,1.3,10);fill.position.set(-1.4,2,2);scene.add(fill);
  var floor=new THREE.Mesh(new THREE.CircleGeometry(9,32),mat({color:0x141018}));floor.rotation.x=-Math.PI/2;scene.add(floor);
  chibi=buildChibi();chibi.position.set(0,0,-1.4);scene.add(chibi);ok=true;
 }catch(e){ok=false}}
 var call=$('call'),hint=$('hint'),mark=$('mark'),pct=$('pct'),bar=$('barFill'),holdBtn=$('hold'),winRow=$('winRow');
 var watching=false,gaze=0,progress=0,holding=false,won=false,nextFlip=performance.now()+1400,last=0,opened=0;
 function resize(){if(!ok)return;var w=webgl.clientWidth,h=webgl.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
 resize();window.addEventListener('resize',resize);
 function setHold(n){if(won)return;holding=n;holdBtn.textContent=n?'Walking':'Hold to walk the record'}
 holdBtn.addEventListener('pointerdown',function(e){e.preventDefault();setHold(true)});
 window.addEventListener('pointerup',function(){setHold(false)});
 window.addEventListener('keydown',function(e){if(e.code==='Space'){e.preventDefault();setHold(true)}});
 window.addEventListener('keyup',function(e){if(e.code==='Space')setHold(false)});
 if($('copyNote'))$('copyNote').onclick=function(){navigator.clipboard.writeText(brief)};
 function frame(now){
  requestAnimationFrame(frame);
  if(!won&&now>nextFlip){watching=!watching;nextFlip=now+1500}
  gaze+=((watching?1:0)-gaze)*.1;var seen=gaze>.62;
  if(holding&&!seen&&!won){progress=Math.min(1,progress+.003);if(progress>=1)won=true}
  if(progress>=.45&&opened<1){opened=1;openWork(4)}
  if(canvas2d){var ctx=canvas2d.getContext('2d'),r=canvas2d.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);
   canvas2d.width=r.width*dpr;canvas2d.height=r.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#07050b';ctx.fillRect(0,0,r.width,r.height)}
  if(ok){resize();chibi.userData.head.rotation.y+=((watching?0:Math.PI)-chibi.userData.head.rotation.y)*.12;fill.color.setHex(seen?0xff3b7a:0x3ef0e0);camera.lookAt(0,1.1,-1.2);renderer.render(scene,camera)}
  if(now-last>80){last=now;call.textContent=won?'Read.':seen?'Review.':'Walk.';call.className='call '+(seen&&!won?'still':'move');pct.textContent=String(Math.round(progress*100));bar.style.width=progress*100+'%';mark.textContent=gates.slice().reverse().find(function(g){return progress>=g.at}).text;if(won){hint.textContent='Decks are on the cards below.';winRow.classList.add('show');holdBtn.style.display='none'}}
 }
 requestAnimationFrame(frame);
}
function startWork(){
 var grid=$('workGrid'),panel=$('casePanel');if(!grid)return;
 works.forEach(function(item,i){var btn=document.createElement('button');btn.className='card';btn.type='button';btn.innerHTML='<em>'+item.tag+'</em><h3>'+item.title+'</h3><p>'+item.blurb+'</p>';
 btn.onclick=function(){Array.prototype.forEach.call(grid.children,function(c){c.classList.remove('on')});btn.classList.add('on');panel.hidden=false;$('caseKicker').textContent=item.tag;$('caseTitle').textContent=item.title;$('caseBody').innerHTML=item.html;if(i)panel.scrollIntoView({behavior:'smooth',block:'nearest'})};grid.appendChild(btn);if(i===0)btn.onclick()});
}
function startRounds(){
 document.querySelectorAll('[data-mod]').forEach(function(btn){btn.onclick=function(){document.querySelectorAll('[data-mod]').forEach(function(b){b.classList.remove('on')});btn.classList.add('on')}});
 document.querySelectorAll('[data-year]').forEach(function(btn){btn.onclick=function(){document.querySelectorAll('[data-year]').forEach(function(b){b.classList.remove('on')});btn.classList.add('on')}});
}
window.addEventListener('DOMContentLoaded',function(){startField();startWork();startRounds()});
