function $(id){return document.getElementById(id)}
const works=[
{tag:'Shipped',title:'CareerFlow AI',blurb:'A career product he built and published.',html:'<p>Shipped product.</p><p><a href="https://careerflow-ai.vercel.app" target="_blank" rel="noreferrer">Open CareerFlow AI</a></p>'},
{tag:'Shipped',title:'pasteguard',blurb:'Local command firewall. Offline. No API key.',html:'<p>Runs offline.</p><p><a href="https://github.com/SubhraDas1999/pasteguard" target="_blank" rel="noreferrer">Open the repo</a></p>'},
{tag:'Graduation · 274/300',title:'BookMyShow',blurb:'High-demand booking: Coldplay, Cricket World Cup.',html:'<p>Graduation project. Booking high-demand events without bots and drop-off. Auction, then DigiLocker. Score 274/300. Rank 1 of 350+.</p>'},
{tag:'Case',title:'Zomato reviews',blurb:'How to get more reviews written, not just more orders.',html:'<p>Nine-week case. Outcomes, market map, user splits, product note, PRD.</p>'},
{tag:'Case',title:'Defining product outcomes',blurb:'Market analysis and mapping outcomes.',html:'<p>Fellowship module. Pick an outcome that can be measured, then map the market.</p>'},
{tag:'Case',title:'Deriving insights from users',blurb:'Segmentation and research.',html:'<p>Segment the users, talk to them, turn the notes into a decision.</p>'},
{tag:'Case',title:'Product note + PRD',blurb:'Wireframes, metrics, user stories, system design.',html:'<p>Note: wireframes and metrics. PRD: user stories and system design.</p>'},
{tag:'Teardown',title:'Maps, Goibibo, CRED',blurb:'Opportunity briefs from the fellowship.',html:'<p>Three teardowns. What each product sells, where the job leaks, one opportunity.</p>'}
];
const gates=[{at:0,text:'The field is open. Mumbai.'},{at:.16,text:'April 2020. Zyadashop opens.'},{at:.34,text:'Month one. 4,000 merchants.'},{at:.5,text:'100K+ downloads. 4.2 stars.'},{at:.66,text:'June 2022. Mosambee acquires Appyflux.'},{at:.82,text:'Mod91. Onboarding about 10 to 5.'},{at:1,text:'Apex. 60 minutes to 10.'}];
const brief='Subhra Pratik Das, associate PM, Mosambee, Mumbai. Zyadashop 100K+ downloads, acquired June 2022. Mod91 10 to 5. NextLeap 1/350. subhrapratikdas@gmail.com';
function drawGirl(ctx,x,y,s,looking){
 ctx.save();ctx.translate(x,y);
 ctx.fillStyle='#2a1430';ctx.beginPath();ctx.moveTo(0,s*.35);ctx.quadraticCurveTo(s*.95,s*1.1,s*.82,s*2.55);ctx.lineTo(-s*.82,s*2.55);ctx.quadraticCurveTo(-s*.95,s*1.1,0,s*.35);ctx.fill();
 ctx.fillStyle=looking?'#ff4d88':'#3ef0e0';ctx.fillRect(-s*.55,s*1.15,s*1.1,s*.06);
 ctx.fillStyle='#f7e7d6';ctx.beginPath();ctx.ellipse(0,0,s*.38,s*.44,0,0,Math.PI*2);ctx.fill();
 ctx.fillStyle='#1a1018';ctx.beginPath();ctx.ellipse(0,-s*.16,s*.4,s*.28,0,Math.PI,Math.PI*2);ctx.fill();
 ctx.beginPath();ctx.arc(-s*.34,-s*.02,s*.1,0,Math.PI*2);ctx.arc(s*.34,-s*.02,s*.1,0,Math.PI*2);ctx.fill();
 ctx.beginPath();ctx.arc(0,-s*.42,s*.16,0,Math.PI*2);ctx.fill();
 ctx.fillStyle=looking?'#ff3b7a':'#1a1018';var eh=looking?s*.07:s*.028;
 ctx.beginPath();ctx.ellipse(-s*.12,s*.02,s*.07,eh,0,0,Math.PI*2);ctx.ellipse(s*.12,s*.02,s*.07,eh,0,0,Math.PI*2);ctx.fill();
 ctx.fillStyle='#d9899a';ctx.beginPath();ctx.ellipse(0,s*.16,s*.07,s*.03,0,0,Math.PI*2);ctx.fill();
 ctx.restore();
}
function drawField2d(canvas,progress,running,seen){
 var ctx=canvas.getContext('2d');if(!ctx)return;
 var r=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);
 var w=Math.max(r.width,1),h=Math.max(r.height,1);
 canvas.width=Math.floor(w*dpr);canvas.height=Math.floor(h*dpr);
 ctx.setTransform(dpr,0,0,dpr,0,0);
 ctx.fillStyle='#07050b';ctx.fillRect(0,0,w,h);
 var cx=w/2,vy=h*.24;
 var g=ctx.createRadialGradient(cx,vy+30,8,cx,vy+30,w*.55);
 g.addColorStop(0,seen?'rgba(255,59,122,.28)':'rgba(62,240,224,.14)');g.addColorStop(1,'rgba(7,5,11,0)');
 ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
 ctx.beginPath();ctx.moveTo(cx-18,vy+36);ctx.lineTo(cx+18,vy+36);ctx.lineTo(w*.94,h);ctx.lineTo(w*.06,h);ctx.closePath();ctx.fillStyle='#120c18';ctx.fill();
 var scroll=(progress*36)%18;
 for(var i=0;i<18;i++){var d=((i+scroll)%18)/18;var y=vy+36+Math.pow(d,1.45)*(h-vy-36);var half=14+Math.pow(d,1.45)*(w*.42);
 ctx.strokeStyle=i%2===0?'rgba(255,59,122,.8)':'rgba(62,240,224,.28)';ctx.lineWidth=d>.6?3:1;ctx.beginPath();ctx.moveTo(cx-half,y);ctx.lineTo(cx+half,y);ctx.stroke();}
 drawGirl(ctx,cx,vy+8,Math.min(w,h)*.16,seen);
 var bob=running&&!seen?Math.sin(Date.now()/75)*6:0;
 ctx.fillStyle='#3ef0e0';ctx.beginPath();ctx.arc(cx,h-78+bob,11,0,Math.PI*2);ctx.fill();ctx.fillRect(cx-8,h-70+bob,16,30);
}
function startField(){
 var canvas=$('field2d'),call=$('call'),hint=$('hint'),mark=$('mark'),pct=$('pct'),bar=$('barFill'),barWrap=$('bar'),holdBtn=$('hold'),flash=$('flash'),winRow=$('winRow');
 var watching=false,gaze=0,progress=0,holding=false,won=false,lockUntil=0,nextFlip=performance.now()+1400,lastUi=0;
 function setHold(n){if(won)return;holding=n;holdBtn.classList.toggle('down',n);holdBtn.textContent=n?'Running':'Hold to run';}
 holdBtn.addEventListener('pointerdown',function(e){e.preventDefault();setHold(true)});
 window.addEventListener('pointerup',function(){setHold(false)});
 window.addEventListener('keydown',function(e){if(e.code==='Space'){e.preventDefault();setHold(true)}});
 window.addEventListener('keyup',function(e){if(e.code==='Space')setHold(false)});
 if($('copyNote'))$('copyNote').onclick=function(){navigator.clipboard.writeText(brief).then(function(){$('copyNote').textContent='Copied.'})};
 function frame(now){
  requestAnimationFrame(frame);
  if(!won&&now>nextFlip){watching=!watching;nextFlip=now+(watching?800+Math.random()*600:1000+Math.random()*1100)}
  gaze+=((watching?1:0)-gaze)*.1;
  var seen=gaze>.62,running=holding&&now>lockUntil&&!won;
  if(running&&!seen){progress=Math.min(1,progress+.0034);if(progress>=1)won=true;}
  else if(running&&seen){var floors=[0,.16,.34,.5,.66,.82];progress=floors.slice().reverse().find(function(g){return g<progress-.02})||0;lockUntil=now+700;holding=false;holdBtn.textContent='Hold to run';flash.classList.add('on');setTimeout(function(){flash.classList.remove('on')},180)}
  if(canvas)drawField2d(canvas,progress,running,seen);
  if(now-lastUi>70){lastUi=now;call.textContent=won?'Through.':seen?'Still.':'Move.';call.className='call '+(seen&&!won?'still':'move');holdBtn.classList.toggle('danger',seen&&!won);barWrap.classList.toggle('danger',seen&&!won);pct.textContent=String(Math.round(progress*100));bar.style.width=progress*100+'%';mark.textContent=gates.slice().reverse().find(function(g){return progress>=g.at}).text;if(won){hint.textContent='You crossed without moving while she looked.';winRow.classList.add('show');holdBtn.style.display='none'}}
 }
 requestAnimationFrame(frame);
}
function startWork(){
 var grid=$('workGrid'),panel=$('casePanel');if(!grid)return;
 works.forEach(function(item,i){
  var btn=document.createElement('button');btn.className='card';btn.type='button';
  btn.innerHTML='<em>'+item.tag+'</em><h3>'+item.title+'</h3><p>'+item.blurb+'</p>';
  btn.onclick=function(){Array.prototype.forEach.call(grid.children,function(c){c.classList.remove('on')});btn.classList.add('on');panel.hidden=false;$('caseKicker').textContent=item.tag;$('caseTitle').textContent=item.title;$('caseBody').innerHTML=item.html;panel.scrollIntoView({behavior:'smooth',block:'nearest'})};
  if(i===0)btn.onclick();
  grid.appendChild(btn);
 });
}
function startRounds(){
 var mods={mod91:{title:'Mod91',when:'0 to Play Store',lede:'Onboarding was about 10 steps. It is about 5.'},apex:{title:'Apex',when:'Checker',lede:'Assisted onboarding 60 min to 10. Approvals 2-3 days to 12-24 hours.'},soundbox:{title:'Soundbox + QR',when:'Same flow',lede:'QR, Soundbox and the plan sit on one flow.'}};
 document.querySelectorAll('[data-mod]').forEach(function(btn){btn.onclick=function(){document.querySelectorAll('[data-mod]').forEach(function(b){b.classList.remove('on')});btn.classList.add('on');var i=mods[btn.dataset.mod];$('modBody').innerHTML='<p class="kicker">'+i.when+'</p><h3>'+i.title+'</h3><p>'+i.lede+'</p>'}});
 var beats={2020:'April 2020. One shop. Month one: 4,000 merchants. 70% signup finish.',2021:'Web reached 10,000 merchants in two months. DAU moved 80% after a HUL and IDEO pilot.',2022:'100K+ downloads. 4.2 stars. Hidden Gems 2022. June: Mosambee acquires Appyflux.'};
 document.querySelectorAll('[data-year]').forEach(function(btn){btn.onclick=function(){document.querySelectorAll('[data-year]').forEach(function(b){b.classList.remove('on')});btn.classList.add('on');$('yearBody').textContent=beats[btn.dataset.year]}});
 if($('cutBtn'))$('cutBtn').onclick=function(){var list=$('cutList'),tight=list.dataset.tight==='1';list.dataset.tight=tight?'0':'1';$('cutBtn').textContent=tight?'Cut it to 5':'Show the long flow';$('cutTitle').textContent=tight?'About 10 steps':'About 5 steps';Array.prototype.forEach.call(list.children,function(row,i){row.style.display=!tight&&i>=5?'none':'list-item'})};
}
window.addEventListener('DOMContentLoaded',function(){startField();startWork();startRounds()});
