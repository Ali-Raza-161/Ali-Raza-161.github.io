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
    return '<h2>Who am I?</h2><p><strong>Ali Raza</strong> — AI Developer, BSAI from UMT Lahore (2024), based in Lahore, Pakistan.</p>' +
      '<p>I build AI chatbots, web apps and small useful libraries, end to end: idea, design, code, tests and GitHub. I am currently looking for my first full-time role where I can keep building real products.</p>' +
      '<div class="btnrow"><a class="btn" href="#" data-go="contact">Contact me</a><a class="btn green" href="https://github.com/Ali-Raza-161" target="_blank" rel="noreferrer">GitHub</a></div>';
  }
  function projectsCard() {
    var filters = ['All', 'AI Chatbot', 'Web', 'Library'];
    var list = projects.filter(function (p) { return currentFilter === 'All' || p.tag === currentFilter; });
    var html = '<h2>My Projects</h2><div class="filters">' + filters.map(function (f) { return '<button data-filter="' + f + '" class="' + (f === currentFilter ? 'active' : '') + '">' + f + '</button>'; }).join('') + '</div><div class="proj">';
    list.forEach(function (p) { html += '<div class="proj-card"><span class="tag">' + p.tag + '</span><br><strong>' + p.title + '</strong><p>' + p.desc + '</p><a href="' + p.link + '" target="_blank" rel="noreferrer">Code on GitHub ↗</a></div>'; });
    html += '</div><p>' + list.length + ' projects shown.</p>';
    return html;
  }
  function demoCard() {
    return '<h2>Agent Demo</h2><p>This is a live demo of the same idea behind SupportPilot: a small support assistant that answers from a fixed set of answers.</p>' +
      '<p><strong>Try in the question box:</strong> “pricing”, “demo kaise kaam karta hai”, or “projects dikhao”.</p>' +
      '<p><strong>SupportPilot demo answers:</strong> Pricing is Free / Pro / Business with a monthly and yearly toggle. The chatbot answers common support questions, and anything it cannot answer becomes a ticket.</p>' +
      '<p>This demo runs fully in your browser. No message is sent anywhere.</p>';
  }
  function contactCard() {
    return '<h2>Contact</h2><p><strong>Ali Raza</strong> — Available for work.</p>' +
      '<p>I am open to junior AI / web developer roles and freelance chatbot or website work.</p>' +
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
    var ctx = canvas.getContext('2d'); var parts = []; var colors = ['#2563eb', '#9333ea', '#ec4899', '#00a884', '#f59e0b'];
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize(); window.addEventListener('resize', resize);
    function add(x, y) { for (var i = 0; i < 4; i++) { parts.push({ x: x + (Math.random() - 0.5) * 30, y: y + (Math.random() - 0.5) * 30, r: 12 + Math.random() * 20, c: colors[Math.floor(Math.random() * colors.length)], a: 0.75, vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8 }); } if (parts.length > 260) parts.splice(0, parts.length - 260); }
    document.addEventListener('mousemove', function (e) { add(e.clientX, e.clientY); });
    document.addEventListener('touchmove', function (e) { if (e.touches[0]) add(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    (function tick() { ctx.clearRect(0, 0, canvas.width, canvas.height); parts = parts.filter(function (p) { return p.a > 0.02; }); parts.forEach(function (p) { p.x += p.vx; p.y += p.vy; p.a -= 0.008; ctx.globalAlpha = Math.max(p.a, 0); ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }); ctx.globalAlpha = 1; requestAnimationFrame(tick); })();
  })();
  // Expose for tests
  window.__portfolio = { projects: projects, answer: answer, renderTopic: renderTopic };
})();
