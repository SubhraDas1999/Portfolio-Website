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

function mat(opts) { return new THREE.MeshStandardMaterial(opts); }
function mesh(geo, material, x, y, z, parent) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x || 0, y || 0, z || 0);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m); return m;
}

function buildWarden() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  const head = new THREE.Group();
  root.add(body); root.add(head);
  const porcelain = mat({ color: 0xf3e6d4, roughness: 0.28, metalness: 0.08 });
  const blush = mat({ color: 0xe8b7a4, roughness: 0.35, metalness: 0.04 });
  const hair = mat({ color: 0x1a1018, roughness: 0.55, metalness: 0.15 });
  const robe = mat({ color: 0x2a1430, roughness: 0.48, metalness: 0.12 });
  const trim = mat({ color: 0xff3b7a, roughness: 0.35, metalness: 0.25, emissive: 0x4a1020, emissiveIntensity: 0.35 });
  const eyeOff = mat({ color: 0x3ef0e0, emissive: 0x3ef0e0, emissiveIntensity: 1.6, roughness: 0.2 });
  const lip = mat({ color: 0xb84a5a, roughness: 0.4, metalness: 0.05 });
  const dressPts = [new THREE.Vector2(0.08,0), new THREE.Vector2(0.55,0.15), new THREE.Vector2(0.92,0.7), new THREE.Vector2(1.08,1.45), new THREE.Vector2(0.62,2.15), new THREE.Vector2(0.38,2.45)];
  mesh(new THREE.LatheGeometry(dressPts, 28), robe, 0, 0, 0, body);
  mesh(new THREE.TorusGeometry(0.72, 0.045, 10, 40), trim, 0, 1.52, 0, body).rotation.x = Math.PI / 2;
  mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.55, 16), porcelain, 0, 2.55, 0, body);
  const armGeo = new THREE.CylinderGeometry(0.07, 0.09, 1.15, 10);
  const lArm = mesh(armGeo, porcelain, -0.52, 2.05, 0.08, body); lArm.rotation.z = 0.38;
  const rArm = mesh(armGeo, porcelain, 0.52, 2.05, 0.08, body); rArm.rotation.z = -0.38;
  mesh(new THREE.SphereGeometry(0.1, 12, 10), porcelain, -0.78, 1.52, 0.16, body);
  mesh(new THREE.SphereGeometry(0.1, 12, 10), porcelain, 0.78, 1.52, 0.16, body);
  const skull = mesh(new THREE.SphereGeometry(0.42, 36, 28), porcelain, 0, 0, 0, head);
  skull.scale.set(1, 1.12, 0.95);
  mesh(new THREE.SphereGeometry(0.16, 16, 12), blush, -0.22, -0.04, 0.28, head).scale.set(1.1, 0.7, 0.5);
  mesh(new THREE.SphereGeometry(0.16, 16, 12), blush, 0.22, -0.04, 0.28, head).scale.set(1.1, 0.7, 0.5);
  mesh(new THREE.SphereGeometry(0.05, 10, 8), porcelain, 0, -0.02, 0.4, head);
  mesh(new THREE.BoxGeometry(0.16, 0.035, 0.04), lip, 0, -0.16, 0.38, head);
  const cap = mesh(new THREE.SphereGeometry(0.44, 28, 18, 0, Math.PI * 2, 0, Math.PI * 0.55), hair, 0, 0.08, 0, head);
  cap.scale.set(1.05, 1, 1.05);
  mesh(new THREE.SphereGeometry(0.2, 16, 12), hair, 0, 0.46, -0.04, head);
  mesh(new THREE.TorusGeometry(0.11, 0.045, 8, 18), hair, 0, 0.5, -0.04, head).rotation.x = Math.PI / 2;
  mesh(new THREE.SphereGeometry(0.09, 10, 8), hair, -0.4, 0.12, -0.06, head);
  mesh(new THREE.SphereGeometry(0.09, 10, 8), hair, 0.4, 0.12, -0.06, head);
  const lEye = mesh(new THREE.SphereGeometry(0.055, 14, 10), eyeOff, -0.14, 0.06, 0.36, head);
  const rEye = mesh(new THREE.SphereGeometry(0.055, 14, 10), eyeOff, 0.14, 0.06, 0.36, head);
  lEye.scale.set(1.15, 0.55, 1); rEye.scale.set(1.15, 0.55, 1);
  const lid = mat({ color: 0x1a1018, roughness: 0.5 });
  mesh(new THREE.BoxGeometry(0.16, 0.025, 0.06), lid, -0.14, 0.12, 0.37, head);
  mesh(new THREE.BoxGeometry(0.16, 0.025, 0.06), lid, 0.14, 0.12, 0.37, head);
  head.position.y = 3.12;
  root.userData = { head, body, lEye, rEye, eyeMat: eyeOff, robe };
  return root;
}

function buildRunner() {
  const g = new THREE.Group();
  const suit = mat({ color: 0x3ef0e0, emissive: 0x123d38, emissiveIntensity: 0.4, roughness: 0.45 });
  const skin = mat({ color: 0xe7ddd0, roughness: 0.5 });
  mesh(new THREE.CapsuleGeometry(0.09, 0.28, 6, 10), suit, 0, 0.32, 0, g);
  mesh(new THREE.SphereGeometry(0.09, 12, 10), skin, 0, 0.58, 0, g);
  mesh(new THREE.CapsuleGeometry(0.035, 0.2, 4, 8), suit, -0.08, 0.12, 0, g);
  mesh(new THREE.CapsuleGeometry(0.035, 0.2, 4, 8), suit, 0.08, 0.12, 0, g);
  return g;
}

function buildArenaScene(scene) {
  const ground = new THREE.Mesh(new THREE.CircleGeometry(18, 48), mat({ color: 0x0b0810, roughness: 0.92, metalness: 0.05 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  const ring = new THREE.Mesh(new THREE.RingGeometry(6.4, 6.55, 64), mat({ color: 0xff3b7a, emissive: 0xff3b7a, emissiveIntensity: 0.45, roughness: 0.3 }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.02; scene.add(ring);
  const marks = new THREE.Group();
  for (let i = 0; i < 9; i += 1) {
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.55 + i * 0.18, 0.03, 0.06), mat({ color: i % 2 === 0 ? 0xff3b7a : 0x3ef0e0, emissive: i % 2 === 0 ? 0xff3b7a : 0x3ef0e0, emissiveIntensity: 0.35 }));
    stripe.position.set(0, 0.03, 4.6 - i * 1.05); marks.add(stripe);
  }
  scene.add(marks); return marks;
}

function drawField2d(canvas, progress, running, seen) {
  const ctx = canvas.getContext("2d"); if (!ctx) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = rect.width, h = rect.height;
  const tw = Math.max(1, Math.floor(w * dpr)), th = Math.max(1, Math.floor(h * dpr));
  if (canvas.width !== tw || canvas.height !== th) { canvas.width = tw; canvas.height = th; }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = "#07050b"; ctx.fillRect(0, 0, w, h);
}

function startField() {
  const webgl = $("arena");
  const canvas2d = $("field2d");
  let threeOk = false;
  let renderer, scene, camera, warden, runner, fill;
  if (webgl && typeof THREE !== "undefined") {
    try {
      renderer = new THREE.WebGLRenderer({ canvas: webgl, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x07050b, 1);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x07050b, 7, 22);
      camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
      camera.position.set(0, 1.85, 8.2);
      scene.add(new THREE.HemisphereLight(0xff9ec0, 0x0b0814, 0.55));
      const key = new THREE.DirectionalLight(0xffd4c2, 1.35);
      key.position.set(-3.2, 7.4, 4.2); key.castShadow = true; scene.add(key);
      fill = new THREE.PointLight(0x3ef0e0, 2.1, 16); fill.position.set(2.2, 3.4, 3.2); scene.add(fill);
      const rim = new THREE.PointLight(0xff3b7a, 1.2, 14); rim.position.set(-2.4, 2.8, -3.4); scene.add(rim);
      buildArenaScene(scene);
      warden = buildWarden(); warden.position.set(0, 0, -5.4); scene.add(warden);
      runner = buildRunner(); runner.position.set(0, 0, 4.6); scene.add(runner);
      threeOk = true;
      if (canvas2d) canvas2d.style.opacity = "0";
    } catch (_) { threeOk = false; }
  }
  const call = $("call"), hint = $("hint"), mark = $("mark"), pct = $("pct");
  const bar = $("barFill"), barWrap = $("bar"), holdBtn = $("hold"), flash = $("flash"), winRow = $("winRow");
  let watching = false, gaze = 0, progress = 0, holding = false, won = false, lockUntil = 0, nextFlip = performance.now() + 1400, lastUi = 0;
  function resize() {
    if (!threeOk || !webgl) return;
    renderer.setSize(webgl.clientWidth, webgl.clientHeight, false);
    camera.aspect = webgl.clientWidth / Math.max(webgl.clientHeight, 1);
    camera.updateProjectionMatrix();
  }
  resize(); window.addEventListener("resize", resize);
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
    const now = performance.now(); if (now - lastUi < 70) return; lastUi = now;
    const seen = gaze > 0.62;
    call.textContent = won ? "Through." : seen ? "Still." : "Move.";
    call.className = "call " + (seen && !won ? "still" : "move");
    holdBtn.classList.toggle("danger", seen && !won);
    barWrap.classList.toggle("danger", seen && !won);
    pct.textContent = String(Math.round(progress * 100));
    bar.style.width = progress * 100 + "%";
    mark.textContent = ([...gates].reverse().find((g) => progress >= g.at) || gates[0]).text;
    if (won) { hint.textContent = "You crossed the field without moving while it was looking."; winRow.classList.add("show"); holdBtn.style.display = "none"; }
  }
  function frame(now) {
    requestAnimationFrame(frame);
    if (!won && now > nextFlip) {
      watching = !watching;
      nextFlip = now + (watching ? 820 + Math.random() * 640 : 980 + Math.random() * 1100);
      if (watching) tone(88, 0.12, 0.03);
    }
    gaze += ((watching ? 1 : 0) - gaze) * 0.09;
    const seen = gaze > 0.62;
    const running = holding && now > lockUntil && !won;
    if (running && !seen) {
      progress = Math.min(1, progress + 0.0032);
      if (progress >= 1) { won = true; tone(240, 0.28, 0.04); }
    } else if (running && seen) {
      const floors = [0, 0.16, 0.34, 0.5, 0.66, 0.82];
      progress = [...floors].reverse().find((g) => g < progress - 0.02) || 0;
      lockUntil = now + 700; holding = false;
      holdBtn.classList.remove("down"); holdBtn.textContent = "Hold to run";
      flash.classList.add("on"); setTimeout(() => flash.classList.remove("on"), 180); tone(48, 0.2, 0.05);
    }
    if (threeOk) {
      warden.userData.head.rotation.y += ((watching ? 0 : Math.PI) - warden.userData.head.rotation.y) * 0.12;
      warden.userData.body.rotation.y += ((watching ? 0.04 : Math.PI) - warden.userData.body.rotation.y) * 0.045;
      const eyeHex = seen ? 0xff3b7a : 0x3ef0e0;
      warden.userData.eyeMat.color.setHex(eyeHex);
      warden.userData.eyeMat.emissive.setHex(eyeHex);
      warden.userData.eyeMat.emissiveIntensity = seen ? 2.4 : 1.3;
      fill.color.setHex(seen ? 0xff3b7a : 0x3ef0e0);
      fill.intensity = seen ? 2.6 : 1.8;
      warden.position.y = Math.sin(now / 700) * 0.012;
      runner.position.z = 4.6 - progress * 8.6;
      runner.position.y = running && !seen ? Math.abs(Math.sin(now / 90)) * 0.08 : 0;
      camera.position.x = Math.sin(now / 4200) * 0.35;
      camera.position.z = 8.2 - progress * 1.15;
      camera.position.y = 1.85 + progress * 0.35;
      camera.lookAt(0, 1.7 + progress * 0.4, -2.2);
      renderer.render(scene, camera);
    } else if (canvas2d) drawField2d(canvas2d, progress, running, seen);
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
    soundbox: { title: "Soundbox + QR", when: "Same flow as the plan", lede: "QR, Soundbox, and the plan sit on one flow so a merchant does not start a second form after they have already said yes." }
  };
  tabs.forEach((btn) => btn.addEventListener("click", () => {
    tabs.forEach((b) => b.classList.remove("on")); btn.classList.add("on");
    const item = mods[btn.dataset.mod];
    body.innerHTML = `<p class="kicker">${item.when}</p><h3>${item.title}</h3><p>${item.lede}</p>`;
  }));
  const years = document.querySelectorAll("[data-year]");
  const yearBody = $("yearBody");
  const beats = {
    2020: "April 2020. One shop. Month one: 4,000 merchants, and 70% of people who started signup finished.",
    2021: "The web version reached 10,000 merchants in two months. Daily actives later moved 80% after a Hindustan Unilever and IDEO pilot changed the product.",
    2022: "100K+ downloads. 4.2 stars. Google Play, Best Apps of 2022, India, Hidden Gems. June: Mosambee acquires Appyflux."
  };
  years.forEach((btn) => btn.addEventListener("click", () => {
    years.forEach((b) => b.classList.remove("on")); btn.classList.add("on");
    yearBody.textContent = beats[btn.dataset.year];
  }));
  $("cutBtn")?.addEventListener("click", () => {
    const list = $("cutList"); const tight = list.dataset.tight === "1";
    list.dataset.tight = tight ? "0" : "1";
    $("cutBtn").textContent = tight ? "Cut it to 5" : "Show the long flow";
    $("cutTitle").textContent = tight ? "About 10 steps" : "About 5 steps";
    [...list.children].forEach((row, i) => { row.style.display = !tight && i >= 5 ? "none" : "flex"; });
  });
}

window.addEventListener("DOMContentLoaded", () => { startField(); startRounds(); });
