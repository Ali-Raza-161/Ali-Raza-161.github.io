// Ali Raza portfolio — local keyword chat, no API, no real user data.
(function () {
  var projects = [
    { title: 'DocuChat', tag: 'AI Chatbot', desc: 'Document Q&A assistant with citations.', link: 'https://github.com/Ali-Raza-161/docuchat-document-assistan' },
    { title: 'Roman Urdu Assistant', tag: 'AI Chatbot', desc: '36 intents, answers in Roman Urdu.', link: 'https://github.com/Ali-Raza-161/roman-urdu-assistant' },
    { title: 'ShopBot', tag: 'AI Chatbot', desc: 'E-commerce assistant with cart and order status.', link: 'https://github.com/Ali-Raza-161/shopbot-ecommerce-assistant' },
    { title: 'Campus Study Assistant', tag: 'AI Chatbot', desc: 'Planner, summariser, quiz and Q&A over 22 topics.', link: 'https://github.com/Ali-Raza-161/campus-study-assistant' },
    { title: 'SupportPilot', tag: 'Web', desc: 'AI customer support SaaS demo: dashboard, chatbot, knowledge base, embed widget.', link: 'https://github.com/Ali-Raza-161/supportpilot-saas-chatbot' },
    { title: 'CodePilot', tag: 'Web', desc: 'Mini Copilot-style code assistant: Tab autocomplete, prompt-to-code, explain and refactor.', link: 'https://github.com/Ali-Raza-161/CodePilot-' },
    { title: 'ChatWave', tag: 'Web', desc: 'WhatsApp-style chat demo: chats, search, new chat/group, emoji, starred messages.', link: 'https://github.com/Ali-Raza-161/WhatsApp-app-' },
    { title: 'pk-validators', tag: 'Library', desc: 'Pakistani validation library: CNIC, mobile operators, NTN and IBAN with real MOD-97 checksum.', link: 'https://github.com/Ali-Raza-161/pk-validators' }
  ];
  var thread = document.getElementById('thread');
  var home = document.getElementById('home');
  var form = document.getElementById('askForm');
  var input = document.getElementById('askInput');
  var currentFilter = 'All';

  function showHome() { thread.classList.remove('open'); thread.innerHTML = ''; home.style.display = ''; }
  function openThread() { home.style.display = 'none'; thread.classList.add('open'); }
  function userBubble(text) { var d = document.createElement('div'); d.className = 'bubble-user'; d.textContent = text; thread.appendChild(d); }
  function card(html) { var d = document.createElement('div'); d.className = 'card'; d.innerHTML = '<button class="back" onclick="window.__backHome()">‹ Back</button>' + html; thread.appendChild(d); thread.scrollIntoView({ behavior: 'smooth', block: 'start' }); return d; }
  window.__backHome = showHome;

  function skillsCard() {
    return '<h2>Skills &amp; Expertise</h2><p>Ye skills mere apne projects se aayi hain, sirf list nahi hai — har skill ke peeche ek bana hua project hai.</p>' +
      '<h3>Programming</h3><div class="pillrow"><span class="skillpill">Python</span><span class="skillpill">JavaScript</span><span class="skillpill">HTML5</span><span class="skillpill">CSS3</span></div>' +
      '<h3>AI &amp; Chatbots</h3><div class="pillrow"><span class="skillpill green">Intent Matching</span><span class="skillpill green">Roman Urdu NLP (patterns)</span><span class="skillpill green">Document Q&amp;A with Citations</span><span class="skillpill green">Prompt-to-Code Templates</span><span class="skillpill green">Support Chatbots</span><span class="skillpill green">Explain / Find Bug / Refactor</span></div>' +
      '<p><strong>Projects se:</strong> DocuChat (document Q&amp;A), Roman Urdu Assistant (36 intents), CodePilot (prompt-to-code, Tab autocomplete), SupportPilot (support chatbot).</p>' +
      '<h3>Web Development</h3><div class="pillrow"><span class="skillpill purple">Responsive Web UI</span><span class="skillpill purple">Single-Page Apps</span><span class="skillpill purple">Dashboards &amp; Canvas Charts</span><span class="skillpill purple">Chat UI &amp; State Management</span><span class="skillpill purple">localStorage</span><span class="skillpill purple">Embed Widgets</span></div>' +
      '<p><strong>Projects se:</strong> SupportPilot dashboard, ChatWave chat UI, CodePilot editor.</p>' +
      '<h3>Data, Logic &amp; Validation</h3><div class="pillrow"><span class="skillpill yellow">Regex &amp; Formatting</span><span class="skillpill yellow">CNIC / NTN / Mobile Validation</span><span class="skillpill yellow">IBAN MOD-97 Checksum</span><span class="skillpill yellow">Cart &amp; Order Logic</span><span class="skillpill yellow">Quiz &amp; Planner Logic</span></div>' +
      '<p><strong>Projects se:</strong> pk-validators (CNIC, Jazz/Zong/Telenor/Ufone prefixes, NTN, IBAN), ShopBot cart, Campus Study Assistant planner/quiz.</p>' +
      '<h3>Tools &amp; Testing</h3><div class="pillrow"><span class="skillpill pink">GitHub &amp; GitHub Pages</span><span class="skillpill pink">VS Code</span><span class="skillpill pink">Node.js Testing</span><span class="skillpill pink">Playwright UI Testing</span></div>' +
      '<p>Honest note: my assistants are pattern and template based, not cloud LLMs. They are built to be clear, testable portfolio demos.</p>';
  }
  function meCard() {
    return '<h2>Who am I?</h2><p><strong>Ali Raza</strong> — AI Web Developer, BSAI from UMT Lahore (2024), based in Lahore, Pakistan.</p>' +
      '<p>I build AI chatbots, web apps and small useful libraries, end to end: idea, design, code, tests and GitHub. I am currently looking for an AI Web Developer role where I can keep building real products.</p>' +
      '<div class="btnrow"><a class="btn" href="#" data-go="contact">Contact me</a><a class="btn green" href="https://github.com/Ali-Raza-161" target="_blank" rel="noreferrer">GitHub</a></div>';
  }
  function projectsCard() {
    var filters = ['All', 'AI Chatbot', 'Web', 'Library'];
    var list = projects.filter(function (p) { return currentFilter === 'All' || p.tag === currentFilter; });
    var html = '<h2>My Projects</h2><div class="filters">' + filters.map(function (f) { return '<button data-filter="' + f + '" class="' + (f === currentFilter ? 'active' : '') + '">' + f + '</button>'; }).join('') + '</div><div style="display:flex;gap:8px;margin:10px 0;"><button data-carousel="prev">‹ Prev</button><button data-carousel="next">Next ›</button></div><div class="proj" id="projCarousel">';
    list.forEach(function (p) { html += '<div class="proj-card"><span class="tag">' + p.tag + '</span><br><strong>' + p.title + '</strong><p>' + p.desc + '</p><a href="' + p.link + '" target="_blank" rel="noreferrer">Code on GitHub ↗</a></div>'; });
    html += '</div><p>' + list.length + ' projects shown. Cards ko aage peeche scroll kar ke dekhen.</p>';
    return html;
  }
  function demoCard() {
    return '<h2>Agent Demo</h2><p><strong>AliCare Demo Clinic, Lahore</strong> — ye ek fictional demo clinic hai, sirf ye dikhane ke liye ke AI receptionist kaise kaam karta hai. Koi asli appointment book nahi hoti, sab kuch aap ke browser me hota hai.</p>' +
      '<div id="demoChat" style="border:1px solid #e5e7eb;border-radius:14px;padding:12px;"><p><strong>Demo assistant:</strong> Hello, welcome to AliCare Demo Clinic. How can I help you today?</p><div id="demoMsgs"></div><div id="demoBtns" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;"><button data-demo="book">Book an appointment</button><button data-demo="hours">Opening hours</button><button data-demo="prices">Prices</button></div><div id="demoName" style="display:none;margin-top:10px;"><input id="demoNameInput" type="text" placeholder="Apna naam likhen" style="padding:10px;border:1px solid #ddd;border-radius:999px;width:70%;"><button id="demoNameBtn">Confirm</button></div></div>' +
      '<p id="demoResult"></p>';
  }
  function initDemo(el) {
    var msgs = el.querySelector('#demoMsgs'); var btns = el.querySelector('#demoBtns'); var nameBox = el.querySelector('#demoName'); var result = el.querySelector('#demoResult'); var state = { step: 'start', service: '', day: '', time: '' };
    function say(t) { var p = document.createElement('p'); p.textContent = t; msgs.appendChild(p); }
    function setBtns(list) { btns.innerHTML = ''; list.forEach(function (b) { var btn = document.createElement('button'); btn.textContent = b.label; btn.addEventListener('click', function () { b.fn(); }); btns.appendChild(btn); }); }
    function askDay() { state.step = 'day'; say('Kaun se din chahiye?'); setBtns([{ label: 'Today', fn: function () { state.day = 'Today'; askTime(); } }, { label: 'Tomorrow', fn: function () { state.day = 'Tomorrow'; askTime(); } }, { label: 'Monday', fn: function () { state.day = 'Monday'; askTime(); } }]); }
    function askTime() { state.step = 'time'; say('Kaun sa time chahiye?'); setBtns([{ label: '10:00 AM', fn: function () { state.time = '10:00 AM'; askName(); } }, { label: '12:00 PM', fn: function () { state.time = '12:00 PM'; askName(); } }, { label: '3:00 PM', fn: function () { state.time = '3:00 PM'; askName(); } }, { label: '5:00 PM', fn: function () { state.time = '5:00 PM'; askName(); } }]); }
    function askName() { state.step = 'name'; say('Apna naam likhen aur Confirm dabayen.'); nameBox.style.display = ''; }
    el.querySelector('#demoNameBtn').addEventListener('click', function () { var n = el.querySelector('#demoNameInput').value.trim(); if (!n) return; nameBox.style.display = 'none'; setBtns([]); result.textContent = '✅ Appointment confirmed (demo): ' + state.service + ', ' + state.day + ', ' + state.time + ', naam: ' + n + '. Ye sirf demo hai, koi asli booking nahi hui.'; say('Shukriya ' + n + '! Aap ki demo appointment confirm ho gayi hai.'); });
    btns.querySelectorAll('[data-demo]').forEach(function (b) { b.addEventListener('click', function () { var k = b.getAttribute('data-demo'); if (k === 'hours') { say('Opening hours: Monday to Saturday, 9:00 AM to 8:00 PM. Sunday closed.'); } else if (k === 'prices') { say('Prices (demo): Checkup Rs 1,000, Cleaning Rs 2,500, Filling Rs 3,500. Book karna chahen to Book an appointment dabayen.'); } else { state.step = 'service'; say('Kaun si service chahiye?'); setBtns([{ label: 'Checkup', fn: function () { state.service = 'Checkup'; askDay(); } }, { label: 'Cleaning', fn: function () { state.service = 'Cleaning'; askDay(); } }, { label: 'Filling', fn: function () { state.service = 'Filling'; askDay(); } }]); } }); });
  }
  function contactCard() {
    return '<h2>Contact</h2><p><strong>Ali Raza</strong> — Available for work.</p>' +
      '<p>I am open to AI Web Developer roles and freelance chatbot or website work.</p>' +
      '<p>📞 <a href="tel:+923082056996">0308 2056996</a><br>✉️ <a href="mailto:mr.aliraza161.9l@gmail.com">mr.aliraza161.9l@gmail.com</a><br>📍 Lahore, Pakistan</p>' +
      '<div class="btnrow"><a class="btn" href="https://github.com/Ali-Raza-161" target="_blank" rel="noreferrer">GitHub: Ali-Raza-161</a></div>';
  }
  function servicesCard() {
    return '<h2>What I Build</h2><div class="pillrow"><span class="skillpill">AI Chatbots</span><span class="skillpill green">Web Apps &amp; Websites</span><span class="skillpill purple">Support &amp; SaaS Demos</span><span class="skillpill yellow">Validation Tools</span></div><p>Ask about projects, skills or contact to see more.</p>';
  }
  function renderTopic(topic, label) {
    openThread(); userBubble(label);
    var html = topic === 'me' ? meCard() : topic === 'projects' ? projectsCard() : topic === 'skills' ? skillsCard() : topic === 'demo' ? demoCard() : topic === 'contact' ? contactCard() : servicesCard();
    var el = card(html);
    el.querySelectorAll('[data-go]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); renderTopic(b.getAttribute('data-go'), 'Contact'); }); });
    el.querySelectorAll('[data-filter]').forEach(function (b) { b.addEventListener('click', function () { currentFilter = b.getAttribute('data-filter'); renderTopic('projects', 'Projects'); }); });
    el.querySelectorAll('[data-carousel]').forEach(function (b) { b.addEventListener('click', function () { var c = el.querySelector('#projCarousel'); if (c) c.scrollBy({ left: b.getAttribute('data-carousel') === 'next' ? 300 : -300, behavior: 'smooth' }); }); });
    if (topic === 'demo') initDemo(el);
  }
  function answer(q) {
    var t = q.toLowerCase();
    if (t.indexOf('who') >= 0 || t.indexOf('tum') >= 0 || t.indexOf('ali') >= 0 || t.indexOf('me') === 0 || t.indexOf('about') >= 0) return renderTopic('me', q);
    if (t.indexOf('project') >= 0 || t.indexOf('kaam') >= 0 || t.indexOf('work') >= 0) return renderTopic('projects', q);
    if (t.indexOf('skill') >= 0) return renderTopic('skills', q);
    if (t.indexOf('service') >= 0 || t.indexOf('build') >= 0 || t.indexOf('banat') >= 0) return renderTopic('services', q);
    if (t.indexOf('contact') >= 0 || t.indexOf('email') >= 0 || t.indexOf('github') >= 0) return renderTopic('contact', q);
    if (t.indexOf('demo') >= 0 || t.indexOf('agent') >= 0 || t.indexOf('pricing') >= 0) return renderTopic('demo', q);
    openThread(); userBubble(q);
    card('<h2>Main is bare me behtar jawab de sakta hun:</h2><p>Try: “Who are you?”, “Show me your projects”, “What are your services?”, or “Contact”.</p>');
  }
  document.querySelectorAll('[data-topic]').forEach(function (b) {
    b.addEventListener('click', function () {
      var labels = { me: 'Who are you?', projects: 'Show me your projects', skills: 'What are your skills?', demo: 'Agent Demo', contact: 'Contact' };
      renderTopic(b.getAttribute('data-topic'), labels[b.getAttribute('data-topic')]);
    });
  });
  form.addEventListener('submit', function (e) { e.preventDefault(); var q = input.value.trim(); if (!q) return; input.value = ''; answer(q); });
  // Cursor colour effect — colourful soft orbs follow the mouse and fade away.
  (function () {
    var canvas = document.getElementById('cursorFx'); if (!canvas) return;
    var ctx = canvas.getContext('2d'); var parts = []; var colors = [[37, 99, 235], [147, 51, 234], [236, 72, 153], [0, 168, 132], [245, 158, 11]]; function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize(); window.addEventListener('resize', resize);
    var lastX = null, lastY = null;
    function add(x, y) { var dx = lastX === null ? 0 : x - lastX, dy = lastY === null ? 0 : y - lastY; lastX = x; lastY = y; var speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40); var big = colors[Math.floor(Math.random() * colors.length)]; parts.push({ x: x, y: y, cx: x, cy: y, angle: Math.random() * Math.PI * 2, spin: (Math.random() - 0.5) * 0.08, dist: 0, r: 60 + Math.random() * 50 + speed, c: big, a: 0.38, vx: dx * 0.3, vy: dy * 0.3, big: true }); for (var i = 0; i < 3; i++) { parts.push({ x: x + (Math.random() - 0.5) * 30, y: y + (Math.random() - 0.5) * 30, cx: x, cy: y, angle: Math.random() * Math.PI * 2, spin: (Math.random() - 0.5) * 0.1, dist: 0, r: 12 + Math.random() * 20, c: colors[Math.floor(Math.random() * colors.length)], a: 0.75, vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8, big: false }); } if (parts.length > 260) parts.splice(0, parts.length - 260); }
    document.addEventListener('mousemove', function (e) { add(e.clientX, e.clientY); });
    document.addEventListener('touchmove', function (e) { if (e.touches[0]) add(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    (function tick() { ctx.clearRect(0, 0, canvas.width, canvas.height); parts = parts.filter(function (p) { return p.a > 0.02; }); parts.forEach(function (p) { p.angle += p.spin; p.dist += 0.6; p.x = p.cx + Math.cos(p.angle) * p.dist + p.vx; p.y = p.cy + Math.sin(p.angle) * p.dist + p.vy; p.vx *= 0.98; p.vy *= 0.98; p.a -= p.big ? 0.003 : 0.008; var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r); if (p.big) { g.addColorStop(0, rgba(p.c, Math.max(p.a, 0))); g.addColorStop(0.6, rgba(p.c, Math.max(p.a * 0.7, 0))); g.addColorStop(1, rgba(p.c, 0)); } else { g.addColorStop(0, rgba(p.c, Math.max(p.a, 0))); g.addColorStop(1, rgba(p.c, 0)); } ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }); requestAnimationFrame(tick); })();
  })();
  // Expose for tests
  window.__portfolio = { projects: projects, answer: answer, renderTopic: renderTopic };
})();
