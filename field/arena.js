const gates = [
  { at: 0, text: "The field is open. Mumbai." },
  { at: 0.16, text: "April 2020. Zyadashop opens." },
  { at: 0.34, text: "Month one. 4,000 merchants. 70% of signups finished." },
  { at: 0.5, text: "100K+ downloads. 4.2 stars." },
  { at: 0.66, text: "June 2022. Mosambee acquires Appyflux." },
  { at: 0.82, text: "Mod91. Onboarding from about 10 steps to about 5." },
  { at: 1, text: "Apex. 60 minutes to 10. Approvals from days to 12–24 hours." },
];

const brief = `Subhra Pratik Das — associate product manager, Mosambee, Mumbai.\n\nCo-founded Appyflux. Zyadashop went from zero to 100K+ downloads and a 4.2 rating. Mosambee acquired the company in June 2022. He stayed and built Mod91 from nothing to the Play Store.\n\nOnboarding cut from about 10 steps to about 5. On Apex, assisted onboarding went from 60 minutes to 10, and approvals from 2–3 days to 12–24 hours.\n\nNextLeap top fellow. Rank 1 of 350+. Graduation score 274/300.\nAlso shipped CareerFlow AI and pasteguard.\n\nsubhrapratikdas@gmail.com\nhttps://www.linkedin.com/in/subhradas1999/`;

function $(id) { return document.getElementById(id); }

function tone(freq, dur, vol) {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur);
    osc.onended = () => ctx.close();
  } catch (_) {}
}

function drawField2d(canvas, progress, running, seen) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = rect.width;
  const h = rect.height;
  const tw = Math.max(1, Math.floor(w * dpr));
  const th = Math.max(1, Math.floor(h * dpr));
  if (canvas.width !== tw || canvas.height !== th) {
    canvas.width = tw;
    canvas.height = th;
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = "#07050b";
  ctx.fillRect(0, 0, w, h);
  const cx = w / 2;
  const vy = h * 0.32;
  const glow = ctx.createRadialGradient(cx, vy, 8, cx, vy, w * 0.48);
  glow.addColorStop(0, seen ? "rgba(255,59,122,0.34)" : "rgba(62,240,224,0.16)");
  glow.addColorStop(1, "rgba(7,5,11,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);
  ctx.beginPath();
  ctx.moveTo(cx - 16, vy);
  ctx.lineTo(cx + 16, vy);
  ctx.lineTo(w * 0.92, h);
  ctx.lineTo(w * 0.08, h);
  ctx.closePath();
  ctx.fillStyle = "#0b0810";
  ctx.fill();
  const scroll = (progress * 36) % 18;
  for (let i = 0; i < 18; i += 1) {
    const depth = ((i + scroll) % 18) / 18;
    const y = vy + Math.pow(depth, 1.45) * (h - vy);
    const half = 10 + Math.pow(depth, 1.45) * (w * 0.42);
    ctx.strokeStyle = i % 2 === 0 ? "rgba(255,59,122,0.9)" : "rgba(62,240,224,0.3)";
    ctx.lineWidth = depth > 0.65 ? 2 : 1;
    ctx.beginPath();
    ctx.moveTo(cx - half, y);
    ctx.lineTo(cx + half, y);
    ctx.stroke();
  }
  ctx.strokeStyle = "rgba(244,239,230,0.35)";
  ctx.beginPath();
  ctx.moveTo(cx, vy);
  ctx.lineTo(w * 0.08, h);
  ctx.moveTo(cx, vy);
  ctx.lineTo(w * 0.92, h);
  ctx.stroke();
  const fig = 1 - progress * 0.1;
  ctx.fillStyle = "#e7ddd0";
  ctx.beginPath();
  ctx.moveTo(cx - 20 * fig, vy + 8);
  ctx.lineTo(cx + 20 * fig, vy + 8);
  ctx.lineTo(cx + 46 * fig, vy + 148 * fig);
  ctx.lineTo(cx - 46 * fig, vy + 148 * fig);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = seen ? "#ff3b7a" : "#16101f";
  ctx.beginPath();
  ctx.arc(cx, vy - 8 * fig, 17 * fig, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = seen ? "#ff3b7a" : "#3ef0e0";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - 8 * fig, vy - 8 * fig);
  ctx.lineTo(cx + 8 * fig, vy - 8 * fig);
  ctx.stroke();
  const bob = running && !seen ? Math.sin(Date.now() / 70) * 6 : 0;
  ctx.fillStyle = "#3ef0e0";
  ctx.beginPath();
  ctx.moveTo(cx, h - 88 + bob);
  ctx.lineTo(cx + 12, h - 64 + bob);
  ctx.lineTo(cx, h - 70 + bob);
  ctx.lineTo(cx - 12, h - 64 + bob);
  ctx.closePath();
  ctx.fill();
}

function buildSentinel() {
  const group = new THREE.Group();
  const cloakMat = new THREE.MeshStandardMaterial({ color: 0x1a1224, roughness: 0.55, metalness: 0.12 });
  const boneMat = new THREE.MeshStandardMaterial({ color: 0xe7ddd0, roughness: 0.4, metalness: 0.05 });
  const visorMat = new THREE.MeshStandardMaterial({ color: 0x3ef0e0, emissive: 0x3ef0e0, emissiveIntensity: 1.4, roughness: 0.2 });
  const cloak = new THREE.Mesh(new THREE.ConeGeometry(0.95, 2.6, 6, 1, true), cloakMat);
  cloak.position.y = 1.15;
  group.add(cloak);
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 1.1, 8), boneMat);
  torso.position.y = 1.55;
  group.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 24, 16), boneMat);
  head.position.y = 2.28;
  group.add(head);
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.07, 0.12), visorMat);
  visor.position.set(0, 2.3, 0.26);
  group.add(visor);
  group.userData.visor = visorMat;
  return group;
}

function startField() {
  const webgl = $("arena");
  const canvas2d = $("field2d");
  let threeOk = false;
  let renderer, scene, camera, sentinel, runner, fill;
  if (webgl && typeof THREE !== "undefined") {
    try {
      renderer = new THREE.WebGLRenderer({ canvas: webgl, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(42, 1, 0.1, 40);
      camera.position.set(0, 2.2, 7.4);
      scene.add(new THREE.HemisphereLight(0x7a4d88, 0x0b0810, 0.7));
      const key = new THREE.DirectionalLight(0xff8ab0, 1.15);
      key.position.set(-4, 6, 3);
      scene.add(key);
      fill = new THREE.PointLight(0x3ef0e0, 1.4, 12);
      fill.position.set(2.4, 2.2, 3);
      scene.add(fill);
      sentinel = buildSentinel();
      sentinel.position.set(0, 0, -4.6);
      scene.add(sentinel);
      runner = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.42, 4), new THREE.MeshStandardMaterial({ color: 0x3ef0e0, emissive: 0x3ef0e0, emissiveIntensity: 0.8 }));
      runner.rotation.x = Math.PI;
      runner.position.set(0, 0.24, 4.2);
      scene.add(runner);
      threeOk = true;
    } catch (_) { threeOk = false; }
  }
  const call = $("call");
  const hint = $("hint");
  const mark = $("mark");
  const pct = $("pct");
  const bar = $("barFill");
  const barWrap = $("bar");
  const holdBtn = $("hold");
  const flash = $("flash");
  const winRow = $("winRow");
  let watching = false, gaze = 0, progress = 0, holding = false, won = false, lockUntil = 0, nextFlip = performance.now() + 1500, lastUi = 0;
  function resize() {
    if (!threeOk || !webgl) return;
    const w = webgl.clientWidth, h = webgl.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);
  function setHold(next) {
    if (won) return;
    holding = next;
    holdBtn.classList.toggle("down", next);
    holdBtn.textContent = next ? "Running" : "Hold to run";
  }
  holdBtn.addEventListener("pointerdown", (e) => { e.preventDefault(); setHold(true); });
  window.addEventListener("pointerup", () => setHold(false));
  window.addEventListener("keydown", (e) => { if (e.code === "Space") { e.preventDefault(); setHold(true); } });
  window.addEventListener("keyup", (e) => { if (e.code === "Space") setHold(false); });
  $("copyNote")?.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(brief); $("copyNote").textContent = "Copied. Send it."; }
    catch (_) { $("copyNote").textContent = "Copy failed — use email"; }
  });
  function paintUi() {
    const now = performance.now();
    if (now - lastUi < 70) return;
    lastUi = now;
    const seen = gaze > 0.62;
    call.textContent = won ? "Through." : seen ? "Still." : "Move.";
    call.className = "call " + (seen && !won ? "still" : "move");
    holdBtn.classList.toggle("danger", seen && !won);
    barWrap.classList.toggle("danger", seen && !won);
    pct.textContent = String(Math.round(progress * 100));
    bar.style.width = progress * 100 + "%";
    mark.textContent = ([...gates].reverse().find((g) => progress >= g.at) || gates[0]).text;
    if (won) {
      hint.textContent = "You crossed the field without moving while it was looking.";
      winRow.classList.add("show");
      holdBtn.style.display = "none";
    }
  }
  function frame(now) {
    requestAnimationFrame(frame);
    if (!won && now > nextFlip) {
      watching = !watching;
      nextFlip = now + (watching ? 760 + Math.random() * 520 : 1080 + Math.random() * 920);
      if (watching) tone(88, 0.12, 0.03);
    }
    gaze += ((watching ? 1 : 0) - gaze) * 0.08;
    const seen = gaze > 0.62;
    const running = holding && now > lockUntil && !won;
    if (running && !seen) {
      progress = Math.min(1, progress + 0.0032);
      if (progress >= 1) { won = true; tone(240, 0.28, 0.04); }
    } else if (running && seen) {
      const floors = [0, 0.16, 0.34, 0.5, 0.66, 0.82];
      progress = [...floors].reverse().find((g) => g < progress - 0.02) || 0;
      lockUntil = now + 700;
      holding = false;
      holdBtn.classList.remove("down");
      holdBtn.textContent = "Hold to run";
      flash.classList.add("on");
      setTimeout(() => flash.classList.remove("on"), 180);
      tone(48, 0.2, 0.05);
    }
    if (threeOk) {
      sentinel.rotation.y += ((watching ? Math.PI : 0) - sentinel.rotation.y) * 0.08;
      sentinel.userData.visor.color.setHex(seen ? 0xff3b7a : 0x3ef0e0);
      sentinel.userData.visor.emissive.setHex(seen ? 0xff3b7a : 0x3ef0e0);
      fill.color.setHex(seen ? 0xff3b7a : 0x3ef0e0);
      runner.position.z = 4.2 - progress * 7.4;
      camera.position.z = 7.4 - progress * 0.8;
      camera.lookAt(0, 1.4, -2);
      renderer.render(scene, camera);
    }
    if (canvas2d) drawField2d(canvas2d, progress, running, seen);
    paintUi();
  }
  requestAnimationFrame(frame);
}

function startRounds() {
  const tabs = document.querySelectorAll("[data-mod]");
  const body = $("modBody");
  const mods = {
    mod91: { title: "Mod91", when: "June 2022 — present", lede: "Mosambee’s merchant app, taken from nothing to the Play Store. Onboarding was about 10 steps. It is about 5." },
    apex: { title: "Apex", when: "The checker behind the app", lede: "Assisted onboarding went from 60 minutes to 10. Approvals went from 2–3 days to 12–24 hours." },
    soundbox: { title: "Soundbox + QR", when: "Same flow as the plan", lede: "QR, Soundbox, and the plan sit on one flow so a merchant does not start a second form after they have already said yes." },
  };
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.forEach((b) => b.classList.remove("on"));
      btn.classList.add("on");
      const item = mods[btn.dataset.mod];
      body.innerHTML = `<p class="kicker">${item.when}</p><h3>${item.title}</h3><p>${item.lede}</p>`;
    });
  });
  const years = document.querySelectorAll("[data-year]");
  const yearBody = $("yearBody");
  const beats = {
    2020: "April 2020. One shop. Month one: 4,000 merchants, and 70% of people who started signup finished.",
    2021: "The web version reached 10,000 merchants in two months. Daily actives later moved 80% after a Hindustan Unilever and IDEO pilot changed the product.",
    2022: "100K+ downloads. 4.2 stars. Google Play, Best Apps of 2022, India, Hidden Gems. June: Mosambee acquires Appyflux.",
  };
  years.forEach((btn) => {
    btn.addEventListener("click", () => {
      years.forEach((b) => b.classList.remove("on"));
      btn.classList.add("on");
      yearBody.textContent = beats[btn.dataset.year];
    });
  });
  $("cutBtn")?.addEventListener("click", () => {
    const list = $("cutList");
    const tight = list.dataset.tight === "1";
    list.dataset.tight = tight ? "0" : "1";
    $("cutBtn").textContent = tight ? "Cut it to 5" : "Show the long flow";
    $("cutTitle").textContent = tight ? "About 10 steps" : "About 5 steps";
    [...list.children].forEach((row, i) => { row.style.display = !tight && i >= 5 ? "none" : "flex"; });
  });
}

window.addEventListener("DOMContentLoaded", () => { startField(); startRounds(); });
